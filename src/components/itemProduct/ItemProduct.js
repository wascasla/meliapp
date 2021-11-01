import React from "react";
import "./ItemProduct.scss";
import { Link } from "react-router-dom";

const ItemProduct = ({ item }) => {
  return (
    <div className="card-product">
      <div className="card-item">
        <Link to={`/item/${item.id}`}>
          <div className="img-container">
            <img height="160" width="160" alt={item.title} src={item.picture} />
          </div>
        </Link>
        <div className="info-container">
          <div className="item-price">
            <span>$ {item.price.amount}</span>
          </div>
          <div className="item-title">{item.title}</div>
        </div>
        <div className="item-place">Mendoza</div>
      </div>
    </div>
  );
};

export default ItemProduct;
