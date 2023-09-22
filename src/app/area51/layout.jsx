"use client";

import styles from "@/styles/area51.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <div className={styles.area51}>
      <div className={styles.nav}>Area51</div>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Link
            className={pathname == "/area51/home" || (pathname == "/area51" && styles.active)}
            href="/area51"
          >
            Home
          </Link>
          <Link className={pathname == "/area51/orders" && styles.active} href="/area51/orders">
            Orders
          </Link>
          <Link className={pathname == "/area51/products" && styles.active} href="/area51/products">
            Products
          </Link>
          <Link
            className={pathname == "/area51/customers" && styles.active}
            href="/area51/customers"
          >
            Customers
          </Link>
          <Link
            className={pathname == "/area51/analytics" && styles.active}
            href="/area51/analytics"
          >
            Analytics
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
