"use client";

import styles from "@/styles/area51.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Area51Layout({ children }) {
  const pathname = usePathname();
  return (
    <div className={styles.area51}>
      <div className={styles.nav}>&lt;Area 51 /&gt;</div>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Link
            className={
              pathname == "/area51/home" || (pathname == "/area51" ? styles.active : undefined)
            }
            href="/area51"
          >
            Home
          </Link>
          <Link
            className={pathname.includes("/area51/orders") ? styles.active : undefined}
            href="/area51/orders"
          >
            Orders
          </Link>
          <Link
            className={pathname.includes("/area51/products") ? styles.active : undefined}
            href="/area51/products"
          >
            Products
          </Link>
          <Link
            className={pathname.includes("/area51/customers") ? styles.active : undefined}
            href="/area51/customers"
          >
            Customers
          </Link>
          <Link
            className={pathname.includes("/area51/analytics") ? styles.active : undefined}
            href="/area51/analytics"
          >
            Analytics
          </Link>
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
}
