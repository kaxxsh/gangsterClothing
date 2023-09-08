import React from "react";
import styles from "@/styles/footer/footer.module.css";
import Image from "next/image";

const contact = () => {
  return (
    <section>
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.t1}>
            <img src="./footer/quality.svg" alt="" />
            <div className={styles.content}>
              <div className={styles.title}>Premium Quality</div>
              <div className={styles.description}>
                All the clothing products are made from 100% premium quality
                fabric.
              </div>
            </div>
          </div>
          <div className={styles.t2}>
            <div className={styles.title}>Secure Payments</div>
            <div className={styles.description}>
              Highly Secured SSL-Protected Payment Gateway.
            </div>
          </div>
          <div className={styles.t3}>
            <img src="./footer/return.svg" alt="" />
            <div className={styles.content}>
              <div className={styles.title}>7 Days Return</div>
              <div className={styles.description}>
                Return or exchange the orders within 7 days of delivery.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.address}>
            <div className={styles.office}>
              <div className={styles.title}>Registered Office Address</div>
              <div className={styles.description}>
                144/116,2H Lakshmi apartment, pammal main road
                ,pammal, Chennai- 75
              </div>
            </div>
            <div className={styles.timing}>
              <div className={styles.title}>Office Timings</div>
              <div className={styles.description}>
                Mon - Sat : 10:00 am - 07:00 pm
              </div>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.title}>USEFUL LINKS</div>
            <div className={styles.description}>
              <ul>
                <li>
                  <a href="">About Us</a>{" "}
                </li>
                <li>
                  <a href="">Return,Exchange & Refund</a>{" "}
                </li>
                <li>
                  <a href="">Terms And Conditions</a>{" "}
                </li>
                <li>
                  <a href="">Cancellaction Policy</a>{" "}
                </li>
                <li>
                  <a href="">Shipping Policy</a>{" "}
                </li>
                <li>
                  <a href="">How To Order</a>{" "}
                </li>
                <li>
                  <a href="">Contact Us</a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.category}>
            <div className={styles.title}>CATEGORY</div>
            <div className={styles.description}>
              <ul>
                <li>
                  {" "}
                  <a href="">T-shirt</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="">Shirt</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="">Bottoms</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="">Jacket</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="">Co-ords</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="">Accessories</a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.support}>
            <div className={styles.title}>SUPPORT</div>
            <div className={styles.mail}>
              <div className={styles.title}>Mail</div>
              <div className={styles.description}>email@gmail.com</div>
            </div>
            <div className={styles.phone}>
              <div className={styles.title}>Phone</div>
              <div className={styles.description}>000000000</div>
            </div>
          </div>
        </div>
        <div className={styles.footerdown}>
          <div className={styles.payment}>
            <div className={styles.title}>100% Secure Payment</div>
            <div className={styles.imagedesign}>
              <Image
                src="./footer/cod.svg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <Image
                src="./footer/gpay.svg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <Image
                src="./footer/amazonpay.svg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <Image
                src="./footer/card.svg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className={styles.socialmedia}>
            <div className="">Follow us:</div>
            <a href="">
              <Image
                src="./footer/facebook.svg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </a>
            <a
              href="https://instagram.com/_gangster_clothing?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
            >
              <Image
                src="./footer/insta.svg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </a>
            <a href="">
              <Image
                src="./footer/telegram.svg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </a>
          </div>
        </div>
        <div className={styles.copyrights}>
          © 2023 website url. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default contact;
