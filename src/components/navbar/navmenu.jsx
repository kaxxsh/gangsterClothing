"use client";
import styles from "@/styles/nav/nav.module.css";
import { useState } from "react";

const NavMenu = () => {
  const [select, setSelect] = useState(0);
  const handleItemClick = (itemNumber) => {
    setSelect(itemNumber);
  };

  

  return (
    <div className={styles.navmenu}>
      <ul>
        <li
          className={select === 1 ? styles.colorchange : ""}
          onClick={() => handleItemClick(1)}
        >
          <a href="/products/tshirt">T-SHIRTS</a>
        </li>
        <li
          className={select === 2 ? styles.colorchange : ""}
          onClick={() => handleItemClick(2)}
        >
          <a href="/products/shirt">SHIRTS</a>
        </li>
        <li
          className={select === 3 ? styles.colorchange : ""}
          onClick={() => handleItemClick(3)}
        >
          <a href="/products/coords">CO-ORDS</a>
        </li>
        <li
          className={select === 4 ? styles.colorchange : ""}
          onClick={() => handleItemClick(4)}
        >
          <a href="/products/bottom">BOTTOM</a>
        </li>
        <li
          className={select === 5 ? styles.colorchange : ""}
          onClick={() => handleItemClick(5)}
        >
          <a href="/products/jackets">JACKETS</a>
        </li>
        <li
          className={select === 6 ? styles.colorchange : ""}
          onClick={() => handleItemClick(6)}
        >
          <a href="/products/accessories">ACCESSORIES</a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
