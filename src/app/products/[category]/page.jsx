"use client";
import styles from "@/styles/products/display.module.css";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);

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
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className={styles.card}>
              <img src="/demo.jpg" alt="" />
              <div className={styles.details}>
                <div className={styles.name}>Gray Polo Shirt</div>
                <div className={styles.pricedetails}>
                  <div className={styles.currentprice}>RS 49.00</div>
                  <div className={styles.oldprice}>RS 100.00</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default page;
