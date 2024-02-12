
import styles from "@/styles/products/display.module.scss";
import { BASE_URL } from "@/config";

//open browser

const page = async ({ params }) => {
  const { data } = await fetch(
    BASE_URL + `/api/area51/product/${params.category}`,
    {
      cache: "no-store",
      credentials: "include",
      method: "GET",
    }
  ).then((res) => res.json());
  return (
    <section>
      <div className={styles.display}>
        <div className={styles.filter}>
          <div className="">Filter</div>
          <div className="">
            <div className="">PRICE</div>
            <div className="">high to low</div>
            <div className="">low to high</div>
          </div>
        </div>
        <div className={styles.products}>
          {data?.map((items) => {
            return (
              <a href="" key={items._id}>
                <div className={styles.card}>
                  <img src={items.media[0]} alt="" />
                  <div className={styles.details}>
                    <div className={styles.name}>{items.title}</div>
                    <div className={styles.pricedetails}>
                      <div className={styles.currentprice}>{items.price}</div>
                      <div className={styles.oldprice}>{items.compare}</div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
