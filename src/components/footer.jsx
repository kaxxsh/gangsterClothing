import React from "react";
import style from "@/styles/contact.module.css";

const contact = () => {
  return (
    <section>
      <div className={style.footer}>
        <div className={style.footerTop}>
          <div className={style.t1}>
            <img src="./footer/quality.svg" alt="" />
            <div className={style.content}>
              <div className={style.title}>Premium Quality</div>
              <div className={style.description}>
                All the clothing products are made from 100% premium quality
                fabric.
              </div>
            </div>
          </div>
          <div className={style.t2}>
            <div className={style.title}>Secure Payments</div>
            <div className={style.description}>
              Highly Secured SSL-Protected Payment Gateway.
            </div>
          </div>
          <div className={style.t3}>
            <img src="./footer/return.svg" alt="" />
            <div className={style.content}>
              <div className={style.title}>7 Days Return</div>
              <div className={style.description}>
                Return or exchange the orders within 7 days of delivery.
              </div>
            </div>
          </div>
        </div>
        <div className={style.contact}>
          <div className={style.address}>
            <div className={style.office}>
              <div className={style.title}>Registered Office Address</div>
              <div className={style.description}>
                Lotus Corporate Park Wing G-02, 15th floor 1502, Ram Mandir
                Lane, Jay Coach Junction, off Western Express Highway, Goregaon,
                Mumbai, 400063
              </div>
            </div>
            <div className={style.timing}>
              <div className={style.title}>Office Timings</div>
              <div className={style.description}>
                Mon - Sat : 10:00 am - 07:00 pm
              </div>
            </div>
          </div>
          <div className={style.links}>
            <div className={style.title}>USEFUL LINKS</div>
            <div className={style.description}>
              <ul>
                <li>
                  <a href="">ABOUT US</a>{" "}
                </li>
                <li>
                  <a href="">RETURN,EXHANGE & REFUND</a>{" "}
                </li>
                <li>
                  <a href="">TERMS AND CONDITIONS</a>{" "}
                </li>
                <li>
                  <a href="">CANCELLATION POLICY</a>{" "}
                </li>
                <li>
                  <a href="">SHIPPING POLICY</a>{" "}
                </li>
                <li>
                  <a href="">HOW TO ORDER</a>{" "}
                </li>
                <li>
                  <a href="">CONTACT US</a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.footerdown}>
          <div className={style.title}>100% Secure Payment</div>
          <img src="./footer/cod.svg" alt="" />
          <div className={style.socialmedia}>
            <div className="">Follow us:</div>
            <a href="">
              <img src="./footer/facebook.svg" alt="" />
            </a>
            <a href="">
              <img src="./footer/insta.svg" alt="" />
            </a>
            <a href="">
              <img src="./footer/telegram.svg" alt="" />
            </a>
          </div>
        </div>
        <div className={style.copyrights}>
          © 2023 website url. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default contact;
