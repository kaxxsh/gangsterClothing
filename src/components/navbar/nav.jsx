import style from "@/styles/nav.module.css";
import Search from "@/components/navbar/search";
import Navmenu from "./navmenu";
import { BiShoppingBag } from "react-icons/bi";

const Nav = () => {
  return (
    <section>
      <div className={style.nav}>
        <div className={style.logo}>
          <img src="/next.svg" alt="Gangester Clothing" />
        </div>
        <div className={style.menu}>
          <Navmenu />
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
