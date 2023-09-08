import React from "react";
import style from "@/styles/main/main.module.css";

const main = () => {
  return (
    <section>
      <div className={style.main}>
        <div className={style.top}>
          <div className={style.title}>stylist picks beat the heat</div>
          <div className={style.shopbtn}>SHOP NOW</div>
        </div>
        <div className={style.updates}>
          <div className={style.title}>
            <div className={style.subtitle}>Discover NEW Arrivals</div>
            <div className={style.description}>Recently added shirts!</div>
          </div>
          <div className={style.display}>
            <a href="">
              <div className={style.card}>
                <img src="/demo.jpg" alt="" />
                <div className={style.name}>Gray Polo Shirt</div>
                <div className={style.price}>RS 49.00</div>
              </div>
            </a>
            <a href="">
              <div className={style.card}>
                <img src="/demo.jpg" alt="" />
                <div className={style.name}>Gray Polo Shirt</div>
                <div className={style.price}>RS 49.00</div>
              </div>
            </a>
            <a href="">
              <div className={style.card}>
                <img src="/demo.jpg" alt="" />
                <div className={style.name}>Gray Polo Shirt</div>
                <div className={style.price}>RS 49.00</div>
              </div>
            </a>
            <a href="">
              <div className={style.card}>
                <img src="/demo.jpg" alt="" />
                <div className={style.name}>Gray Polo Shirt</div>
                <div className={style.price}>RS 49.00</div>
              </div>
            </a>
            <a href="">
              <div className={style.card}>
                <img src="/demo.jpg" alt="" />
                <div className={style.name}>Gray Polo Shirt</div>
                <div className={style.price}>RS 49.00</div>
              </div>
            </a>
            <a href="">
              <div className={style.card}>
                <img src="/demo.jpg" alt="" />
                <div className={style.name}>Gray Polo Shirt</div>
                <div className={style.price}>RS 49.00</div>
              </div>
            </a>
            <a href="">
              <div className={style.card}>
                <img src="/demo.jpg" alt="" />
                <div className={style.name}>Gray Polo Shirt</div>
                <div className={style.price}>RS 49.00</div>
              </div>
            </a>
            <a href="">
              <div className={style.card}>
                <img src="/demo.jpg" alt="" />
                <div className={style.name}>Gray Polo Shirt</div>
                <div className={style.price}>RS 49.00</div>
              </div>
            </a>
          </div>
        </div>

        <div className={style.Topsellers}>
          <div className={style.title}>
            <div className={style.subtitle}>Top Sellers</div>
            <div className={style.description}>
              Browse our top-selling products
            </div>
          </div>
          <div className={style.display}>
            <a href="">
              <div className={style.card}>
                <img src="/demo.jpg" alt="" />
                <div className={style.name}>Gray Polo Shirt</div>
                <div className={style.price}>RS 49.00</div>
              </div>
            </a>
            <a href="">
              <div className={style.card}>
                <img src="/demo.jpg" alt="" />
                <div className={style.name}>Gray Polo Shirt</div>
                <div className={style.price}>RS 49.00</div>
              </div>
            </a>
            <a href="">
              <div className={style.card}>
                <img src="/demo.jpg" alt="" />
                <div className={style.name}>Gray Polo Shirt</div>
                <div className={style.price}>RS 49.00</div>
              </div>
            </a>
            <a href="">
              <div className={style.card}>
                <img src="/demo.jpg" alt="" />
                <div className={style.name}>Gray Polo Shirt</div>
                <div className={style.price}>RS 49.00</div>
              </div>
            </a>
          </div>
        </div>
        <div className={style.buy}>
          <div className={style.shopnow}>SHOP NOW</div>
        </div>
      </div>
    </section>
  );
};

export default main;
