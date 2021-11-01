import React from "react";
import "./ItemProductDetail.scss";

const ItemProductDetail = ({ item }) => {
  return (
    <div className="card-product-detail">
      <div>
        <div>
          <img src={item.item.picture} alt={item.item.title} />
        </div>
        <div className="description">
          <div className="description-title">Descripción del producto</div>
          <div className="description-item">{item.item.description}</div>
        </div>
      </div>
      <div className="item-info">
        <div>
          {item.item.condition === "new" ? "Nuevo" : "Usado"} - {item.item.sold_quantity} vendidos{" "}
        </div>
        <div className="title">{item.item.title} </div>
        <div className="price">$ {item.item.price.amount} </div>
        <button className="button">Comprar</button>
      </div>
    </div>
  );
};

export default ItemProductDetail;
