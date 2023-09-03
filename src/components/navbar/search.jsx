import style from "@/styles/nav.module.css";
import { BiSearchAlt } from "react-icons/bi";

const search = () => {
  const handleSearch = () => {};
  return (
    <section>
      <form action="">
        <div className={style.search}>
          <div className={style.searchimg}>
            <BiSearchAlt size={20} />
          </div>
          <input type="search" placeholder="Search Product" />
        </div>
      </form>
    </section>
  );
};

export default search;
