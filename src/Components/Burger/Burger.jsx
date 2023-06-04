import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Burger.css";

const BurgerMenuButton = ({ isOpen, handleToggle }) => {
  return <button className="burger-menu" onClick={handleToggle}></button>;
};

const MenuContent = () => {
  return (
    <div className="menu-items">
      <ul>
        <li className="active">
          <Link to="/">Головна</Link>
        </li>
        <li>
          <Link className="dropdown" to="/assortment">
            Асортимент
            <ul className="dropdown-menu">
              <div className="dropdown-header">
                <div className="arrow">▼</div>
              </div>
              <li>
                <Link>Побутова хімія</Link>
              </li>
              <li>
                <Link>Сумки та гаманці</Link>
              </li>
              <li>
                <Link>Гігієнічні засоби</Link>
              </li>
              <li>
                <Link>Електроприлади</Link>
              </li>
              <li>
                <Link>Нижня білизна</Link>
              </li>
              <li>
                <Link>Кухонне приладдя</Link>
              </li>
              <li>
                <Link>Косметика</Link>
              </li>
              <li>
                <Link>Декор</Link>
              </li>
              <li>
                <Link>Іграшки</Link>
              </li>
              <li>
                <Link>Канцелярія</Link>
              </li>
              <li>
                <Link>Гастрономія</Link>
              </li>
              <li>
                <Link>Аксесуари</Link>
              </li>
            </ul>
          </Link>
        </li>
        <li>
          <Link to="/news">Новини</Link>
        </li>
        <li>
          <Link to="/promotions">Акції</Link>
        </li>
        <li>
          <Link to="/contact">Контакти</Link>
        </li>
        <li>
          <Link to="/change">Обмін і повернення</Link>
        </li>
      </ul>
    </div>
  );
};

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <BurgerMenuButton isOpen={isOpen} handleToggle={handleToggle} />

      {isOpen && <MenuContent />}
    </div>
  );
};

export { BurgerMenu, BurgerMenuButton, MenuContent };
