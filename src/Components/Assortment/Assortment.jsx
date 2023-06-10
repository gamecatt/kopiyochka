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
        <div className="some-btn">icon-cart</div>
        <div className="some-btn">icon-likes</div>
        <div className="some-btn">icon-profile</div>
        <div className="some-btn">icon-discount</div>
      </div>
    </div>
  );
}
export { Assortment };
