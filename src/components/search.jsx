import React from "react";
import style from "@/styles/nav.module.css";
import { BiSearchAlt } from "react-icons/bi";

// import { SearchIcon, Search } from "@mui/icons-material/Search";

const search = () => {
  const handleSearch = () => {};
  return (
    <section>
      <form action="">
        <div className={style.search}>
          <div className={style.searchimg}>
            <BiSearchAlt size={25} />
          </div>
          <input type="text" placeholder="Search Product" />
        </div>
      </form>
      {/* <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search> */}
    </section>
  );
};

export default search;
