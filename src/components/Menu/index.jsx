import React from "react";
import { iconData } from "./data";

import "./style.css";
const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className="menuContainer"
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <div className="iconsContainer">
        {iconData.map((item) => (
          <div className="menu" key={item.id}>
            <img className="image" src={item.uri} alt={item.alt} />
            {isMenuOpen && <h3>{item.name}</h3>}
          </div>
        ))}
      </div>
F      <div className={!isMenuOpen?'additionalMenuHidden': 'additionalMenuVisible '}>
        <div className="additonalMenuItem">
          <h3>LANGUAGE</h3>
        </div>
        <div className="additonalMenuItem">
          <h3>GET HELP</h3>
        </div>
        <div className="additonalMenuItem">
          <h3>EXIT</h3>
        </div>
      </div>
    </div>
  );
};

export default Menu;