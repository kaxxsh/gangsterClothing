<<<<<<< HEAD
import React from "react";
import style from "@/styles/nav.module.css";
import Search from "@/components/search";
import { BiShoppingBag } from "react-icons/bi";

const Nav = () => {
  return (
    <section>
      <div className={style.nav}>
        <div className={style.logo}>
          <img src="/next.svg" alt="Gangester Clothing" />
        </div>
        <div className={style.menu}>
          <ul>
            <li>T-SHIRTS</li>
            <li>SHIRTS</li>
            <li>CO-ORDS</li>
            <li>BOTTOM</li>
            <li>JACKETS</li>
            <li>ACCESSORIES</li>
          </ul>
          <Search />
          <div className={style.cart}>
            <BiShoppingBag size={25} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
=======
const nav = () => {
  return <div>nav</div>;
};

export default nav;
>>>>>>> 2e9fef4b3a74959f3f67457ce78a7e420926fa09
