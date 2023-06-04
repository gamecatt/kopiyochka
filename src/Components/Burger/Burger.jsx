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
              <li>
                <Link />
                Побутова хімія
              </li>
              <li>
                <Link />
                Сумки та гаманці
              </li>
              <li>
                <Link />
                Гігієнічні засоби
              </li>
              <li>
                <Link />
                Електроприлади
              </li>
              <li>
                <Link />
                Нижня білизна
              </li>
              <li>
                <Link />
                Кухонне приладдя
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
          <Link to="/contacts">Контакти</Link>
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
