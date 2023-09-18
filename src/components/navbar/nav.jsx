import styles from "@/styles/nav/nav.module.css";
import Search from "@/components/navbar/search";
import Navmenu from "./navmenu";
import Image from "next/image";

const Nav = () => {
  return (
    <section>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            width={24}
            height={24}
            alt="Picture of the author"
          />
          <div className={styles.companyName}>GANGSTER CLOTHING</div>
        </div>
        <div className={styles.menu}>
          <Navmenu />
          <Search />
          <div className={styles.cart}>
            <Image
              src="/navbar/cart.svg"
              width={24}
              height={24}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
