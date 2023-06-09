import React from "react";
import "./Assortment.css";
import jsonData from './Assortment.json';
import {ProductCard} from "./ProductCard/ProductCard.jsx";

function Assortment() {
  return (
    <div className="assortment">
      {jsonData.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
}
export { Assortment };
