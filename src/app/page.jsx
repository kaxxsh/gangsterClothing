import React from "react";
import style from "./page.module.css";
import Nav from "@/components/navbar/nav";
import Contact from "@/components/footer";
import Main from "@/components/main";

const page = () => {
  return (
    <section>
      <Nav />
      <Main />
      <Contact />
    </section>
  );
};

export default page;
