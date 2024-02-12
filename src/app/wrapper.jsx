"use client";

import Top from "@/components/navbar/headerTop";
import Nav from "@/components/navbar/nav";
import Contact from "@/components/footer/footer";

import { usePathname } from "next/navigation";
const Wrapper = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes("area51") ||
      pathname.includes("login") ||
      pathname.includes("signup") ? (
        children
      ) : (
        <>
          <Top />
          <div style={{ position: "sticky", top: 0, zIndex: "1" }}>
            <Nav />
          </div>
          {children}
          <Contact />
        </>
      )}
    </>
  );
};

export default Wrapper;
