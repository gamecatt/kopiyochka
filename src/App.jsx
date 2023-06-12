import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BurgerMenu } from "./Components/Burger/Burger.jsx";
import { HeaderContent } from "./Components/HeaderContent/HeaderContent.jsx";
import { Assortment } from "./Components/Assortment/Assortment.jsx";
import { Home } from "./Components/Home/Home.jsx";
import { Contact } from "./Components/Contacts/Contact.jsx";
import { Shares } from "./Components/Shares/Shares";

const News = () => <h1>News</h1>;
const Change = () => <h1>Change</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <BurgerMenu />
          <HeaderContent />
          <div className="search">
            <input id="Search" type="text" placeholder="Search" />
          </div>
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/assortment" element={<Assortment />} />
          <Route path="/shares" element={<Shares />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/change" element={<Change />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
