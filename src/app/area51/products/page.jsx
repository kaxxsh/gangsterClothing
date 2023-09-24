import { BASE_URL } from "@/config";
import styles from "@/styles/area51.module.scss";
import Link from "next/link";

const page = async () => {
  const { data } = await fetch(BASE_URL + "/api/area51/product", {
    cache: "no-store",
    credentials: "include",
    method: "GET",
  }).then((res) => res.json());

  return (
    <div className={styles.products}>
      <div
        className={styles.top}
        style={{
          justifyContent: "space-between",
        }}
      >
        Products
        <Link className={styles.add} href="/area51/products/add">
          Add Product
        </Link>
      </div>
      <div className={styles.content}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Status</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <img
                      src={item.media[0]}
                      alt="prooduct image"
                      style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <div className={item.status == "active" ? styles.active : styles.inactive}>
                      {item.status}
                    </div>
                  </td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.stock}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
