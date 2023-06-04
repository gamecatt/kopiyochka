import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="wrapper">
        <div className="coins">
          <div className="deco1"></div>
          <div className="deco2"></div>
          <div className="main-title">
            <h1>Копійочка</h1>
            <h2>Вірний друг твого бюджету</h2>
          </div>
          <div className="action-btn">
            Перейти до акцій <div className="transition-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Home };
