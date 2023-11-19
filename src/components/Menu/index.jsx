import React, { useState } from "react";
import { iconData } from "./data";

import "./style.css";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    </div>
  );
};

export default Menu;