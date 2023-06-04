import React from "react";
import "./style.css";

function HeaderContent() {
  return (
    <div className="header-content">
      <div className="titles">
        <h2>Літній сезон оголошую відкритим</h2>
        <h2 className="what`sup-title">
        до <b>- 50% знижки</b> на усі літні товари
        </h2>
      </div>
      <div className="title-img">
        <img src={process.env.PUBLIC_URL + "/Assortment.png"} alt="asd" />
      </div>
    </div>
  )
}
export {HeaderContent};