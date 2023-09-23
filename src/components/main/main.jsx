import React from "react";
import styles from "@/styles/main/main.module.css";

const main = () => {
  return (
    <section>
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.content}>
            <div className={styles.title}>stylist picks beat the heat</div>
            <div className={styles.shopbtn}>
              <a href="/products/tshirt">SHOP NOW</a>
            </div>
          </div>
        </div>
        <div className={styles.updates}>
          <div className={styles.title}>
            <div className={styles.subtitle}>Discover NEW Arrivals</div>
            <div className={styles.description}>Recently added shirts!</div>
          </div>
          <div className={styles.display}>
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

        <div className={styles.Topsellers}>
          <div className={styles.title}>
            <div className={styles.subtitle}>Top Sellers</div>
            <div className={styles.description}>
              Browse our top-selling products
            </div>
          </div>
          <div className={styles.display}>
            <a href="/products/shirt">
              <div className={styles.card}>
                <img src="/main/shirt.jpg" alt="" />
                <div className={styles.category}>
                  <div className={styles.name}>SHIRT</div>
                </div>
              </div>
            </a>
            <a href="/products/tshirt">
              <div className={styles.card}>
                <img src="/main/tshirt.jpg" alt="" />
                <div className={styles.category}>
                  <div className={styles.name}>T-SHIRT</div>
                </div>
              </div>
            </a>
            <a href="/products/bottom">
              <div className={styles.card}>
                <img src="/main/bottom.jpg" alt="" />
                <div className={styles.category}>
                  <div className={styles.name}>BOTTOM</div>
                </div>
              </div>
            </a>
            <a href="/products/jackets">
              <div className={styles.card}>
                <img src="/main/jackets.webp" alt="" />
                <div className={styles.category}>
                  <div className={styles.name}>JACKETS</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.buy}>
          <div className={styles.shopnow}>
            <a href="/products/tshirt ">SHOP NOW</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default main;
