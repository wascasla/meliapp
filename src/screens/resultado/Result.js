import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ItemProduct from "../../components/itemProduct/ItemProduct";
import "./Result.scss";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Result = ({ setCategorias }) => {
  let query = useQuery();
  let param = query.get("search");
  const [data, setData] = useState();
  const [cargando, setCargando] = useState(false);

  const buscarProductos = (query) => {
    let productos = [];
    let categorias = [];
    setCargando(false);
    setData();
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=:${query}`)
      .then((response) => {
        setCargando(true);
        let items = response.data.results.slice(0, 4);
        items.forEach((element) => {
          let data = {
            id: element.id,
            title: element.title,
            price: {
              currency: element.prices.prices[0].currency_id,
              amount: element.prices.prices[0].amount,
            },
            picture: element.thumbnail,
            condition: element.condition,
            free_shipping: element.shipping.free_shipping,
          };

          productos.push(data);
        });
        let filters = response.data.filters;
        filters.forEach((element) => {
          categorias.push(element.values[0].name);
        });
        if (productos.length > 0) {
          setCategorias(categorias);
          let info = {
            author: { name: "Walter", lastname: "Schemith" },
            categories: categorias,
            items: productos,
          };
          if (info) {
            setData(info);
            setCargando(false);
          }
        } else {
          setData();
          setCargando(true);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    buscarProductos(param);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return (
    <div className="result-container">
      <div>
        <Breadcrumb categories={data?.categories} />
      </div>
      <div className="result-items">
        {data?.items?.length > 0 ? data?.items?.map((item) => <ItemProduct key={item.id} item={item} />) : null}
        {cargando ? <div>Sin resultado para la busqueda</div> : null}
      </div>
    </div>
  );
};

export default Result;
