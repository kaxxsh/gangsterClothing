import style from "@/styles/nav.module.css";
import Search from "@/components/navbar/search";
import Navmenu from "./navmenu";
import { BiShoppingBag } from "react-icons/bi";
import Top from "../headerTop";

const Nav = () => {
  return (
    <section>
      <Top />
      <div className={style.nav} >
        <div className={style.logo}>
          <img src="/logo.png" alt="Gangester Clothing" />
          <div className={style.companyName}>GANGSTER CLOTHING</div>
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
