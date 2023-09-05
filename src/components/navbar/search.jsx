"use client";
import style from "@/styles/nav.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";

const search = () => {
  const [search, setsearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <section>
      <form action="submit" onSubmit={handleSearch}>
        <div className={style.search}>
          <div className={style.searchimg}>
            <BiSearchAlt size={20} />
          </div>
          <input
            type="search"
            placeholder="Search Product"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default search;
