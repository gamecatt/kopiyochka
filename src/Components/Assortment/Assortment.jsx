import React from "react";
import "./Assortment.css";
import jsonData from './Assortment.json';
import {ProductCard} from "./ProductCard/ProductCard.jsx";

function Assortment() {
  return (
    <div className="assortment">
      <div className="products">
      {jsonData.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
      </div>
      <div className="action-panel">
        <div className="cart-btn action-btn"><p className="label">456 грн</p></div>
        <div className="likes-btn action-btn"><p className="label">7</p></div>
        <div className="profile-btn action-btn"><p className="label">Увійти</p></div>
        <div className="discount-btn action-btn"><p className="label">Мої знижки</p></div>
      </div>
    </div>
  );
}
export { Assortment };
