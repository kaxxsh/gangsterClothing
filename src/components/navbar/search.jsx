"use client";
import style from "@/styles/nav/nav.module.css";
import { useState } from "react";
import Image from "next/image";

const Search = () => {
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
            <Image
              src="/navbar/search.svg"
              width={24}
              height={24}
              alt="Picture of the author"
            />
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

export default Search;
