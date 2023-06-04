import React from "react";
import "./Assortment.css";
import {ProductCard} from "./ProductCard/ProductCard";

function Assortment() {
  return (
    <div className="assortment">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  );
}
export { Assortment };
