"use client";

import { useState } from "react";
import styles from "@/styles/area51.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Area51 = () => {
  const pathname = usePathname();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    image: "",
    category: "",
  });
  return <div className={styles.test}>Hello</div>;
};

export default Area51;
