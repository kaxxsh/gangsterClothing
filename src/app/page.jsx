import React from "react";
import style from "./page.module.css";
import Nav from "@/components/navbar/nav";
import Contact from "@/components/footer/footer";
import Main from "@/components/main/main";
import Top from "@/components/navbar/headerTop";

const page = () => {
  return (
    <section>
      <Top />
      <div className={style.navbar}>
        <Nav />
      </div>
      <Main />
      <Contact />
    </section>
  );
};

export default page;
