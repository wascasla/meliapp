import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemProductDetail from "../../components/itemProductDetail/ItemProductDetail";
import "./Detail.scss";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const Detail = ({ categorias }) => {
  let { id } = useParams();
  const [data, setData] = useState();

  const getDetalleProducto = (id) => {
    axios
      .all([
        axios.get(`https://api.mercadolibre.com/items/${id}`),
        axios.get(`https://api.mercadolibre.com/items/${id}/description`),
      ])
      .then((response) => {
        let info = {
          author: { name: "Walter", lastname: "Schemith" },
          categories: [],
          item: {
            id: response[0].data.id,
            title: response[0].data.title,
            price: {
              currency: response[0].data.currency_id,
              amount: response[0].data.price,
            },
            picture: response[0].data.pictures[0].url,
            condition: response[0].data.condition,
            free_shipping: response[0].data.shipping.free_shipping,
            sold_quantity: response[0].data.sold_quantity,
            description: response[1].data.plain_text,
          },
        };
        if (info) {
          setData(info);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDetalleProducto(id);
  }, [id]);

  return (
    <div className="detail-container">
      <div>
        <Breadcrumb categories={categorias} />
      </div>
      <div className="detail-item">{data ? <ItemProductDetail item={data} /> : null}</div>
    </div>
  );
};

export default Detail;
