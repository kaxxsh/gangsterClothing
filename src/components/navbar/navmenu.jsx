"use client";
import style from "@/styles/nav.module.css";
import { useState } from "react";

const NavMenu = () => {
  const [select, setSelect] = useState(0);
  const handleItemClick = (itemNumber) => {
    setSelect(itemNumber);
  };

  return (
    <div className={style.navmenu}>
      <ul>
        <li
          className={select === 1 ? style.colorchange : ""}
          onClick={() => handleItemClick(1)}
        >
          T-SHIRTS
        </li>
        <li
          className={select === 2 ? style.colorchange : ""}
          onClick={() => handleItemClick(2)}
        >
          SHIRTS
        </li>
        <li
          className={select === 3 ? style.colorchange : ""}
          onClick={() => handleItemClick(3)}
        >
          CO-ORDS
        </li>
        <li
          className={select === 4 ? style.colorchange : ""}
          onClick={() => handleItemClick(4)}
        >
          BOTTOM
        </li>
        <li
          className={select === 5 ? style.colorchange : ""}
          onClick={() => handleItemClick(5)}
        >
          JACKETS
        </li>
        <li
          className={select === 6 ? style.colorchange : ""}
          onClick={() => handleItemClick(6)}
        >
          ACCESSORIES
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
