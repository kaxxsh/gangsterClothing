"use client";
import { useState } from "react";
import styles from "@/styles/products/product.module.css";

const Products = () => {
  const [select, setselect] = useState(2);
  return (
    <section>
      <div className={styles.product}>
        {/* <div className={styles.path}></div> */}
        <div className={styles.productdisplay}>
          <div className={styles.imageslist}>
            <div className={styles.imgarray}>
              <img src="/demo.jpg" alt="" />
              <img src="/demo.jpg" alt="" />
              <img src="/demo.jpg" alt="" />
              <img src="/demo.jpg" alt="" />
            </div>
            <div className={styles.imgview}>
              <img src="/demo.jpg" alt="" />
            </div>
          </div>
          <div className={styles.productdetails}>
            <div className={styles.productcard}>
              <div className={styles.productname}>T-shirt polo shirt</div>
              <div className={styles.productprice}>
                <div className={styles.currentprice}>RS. 6000</div>
                <div className={styles.oldprice}>RS. 7000</div>
              </div>
              <div className={styles.productcolours}>
                <div className={styles.colourname}>
                  Colour : <span className={styles.span}>RED</span>
                </div>
                <div className={styles.colourlist}>
                  <div className={styles.card}>
                    <div className={styles.colour}></div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.colour}></div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.colour}></div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.colour}></div>
                  </div>
                </div>
              </div>
              <div className={styles.productsizes}>
                <div className={styles.sizename}>
                  size : <span className={styles.span}>S</span>
                </div>
                <div className={styles.sizelist}>
                  <div className={styles.card}>
                    <div className={styles.size}>S</div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.size}>M</div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.size}>L</div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.size}>XL</div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.size}>XXL</div>
                  </div>
                </div>
              </div>
              <div className={styles.addcart}>
                <div className={styles.quantity}>
                  <div className={styles.add}>+</div>
                  <div className={styles.count}>2</div>
                  <div className={styles.sub}>-</div>
                </div>
                <div className={styles.cart}>ADD TO CART</div>
              </div>
              <div className={styles.buy}>
                <div className={styles.buybtn}>BUY</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.customer}>
            <div className={styles.title}>Customer Reviews</div>
            <div className={styles.star}>
              star <span>Be the first to write a review</span>
            </div>
          </div>
          <div className={styles.sendreview}>Write your Review</div>
        </div>

        <div className={styles.productdetails}>
          <div
            className={select === 1 ? styles.titleclick : styles.title}
            onClick={() => setselect(1)}
          >
            Product description
          </div>
          <div
            className={select === 2 ? styles.titleclick : styles.title}
            onClick={() => setselect(2)}
          >
            Exchange & Return
          </div>
        </div>
        {select === 1 ? (
          <>
            <div className={styles.clothdescription}>
              <ul>
                <li>Brand Name : Gangster clothing</li>
                <li>Origin : Gangster clothing</li>
                <li>Gender : Gangster clothing</li>
                <li>Season : Gangster clothing</li>
                <li>Material : Gangster clothing</li>
                <li>Features : Gangster clothing</li>
                <li>Sports : Gangster clothing</li>
                <li>Sports : Gangster clothing</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className={styles.policy}>
              <div className={styles.description}>
                <b>Exchange:</b>
                <br /> We are trying hard to serve your order to your
                appropriate products and sizes. In case if you received the
                wrong product or it's unfit to your size, you can exchange your
                product within 7 days of delivery. Your Pickup will be arranged
                by powerlook within 2-3 working days of your request. All
                Products must be unused, unwashed and returned with the original
                packing & tags when we receive it. In case, the order does not
                meet the above conditions exchange request will not be processed
                and your order will be sent back to your picked up address. *In
                case of an exchange, if the size is not available, you can place
                a refund request which will proceed as refund policy. No other
                product can be exchanged on behalf of the same.
              </div>

              <div className={styles.description}>
                <b>Returns:</b>
                <br /> We are working hard to provide you the latest fashion at
                affordable rates with Best quality fabric. If you didn't like
                the product or it's not to your expectations simply return the
                product within 7 days of delivery. We can arrange a pick-up for
                you with an easy online return process. Login to your My Orders
                section at Powerlook.in Select the Order and click Return
                Product or To return the product now, Click Here. *Shipping
                Charges and COD charges charged at the time of placing the order
                is non- refundable. *We shall charge you shipping charges of
                Rs.100 in case of reverse pick up the same shall be deducted
                from your refund. Important Points to remember, Return request
                needs to be within 7 days of the delivery date. Your Pickup will
                be done in 2-3 working days. All returned products must be
                unused or unwashed or undamaged and return with the original
                packing and tags when we receive it. Items without tags will not
                be accepted. The refund is subject to your returns met the above
                conditions else returns will not be accepted. In case you
                receive a damaged / defective product, we should be notified
                within 24 hours of delivery. Also, we request you to email us a
                photograph of the damaged / defective product. In case you fail
                to intimate about the same, return might not be processed.
              </div>
              <div className={styles.description}>
                <b>Refund Policy Amount Refund:</b>
                <br /> 1. If you cancel the Order, the full amount will be
                refunded to you includes shipping charges and COD charges if
                any. 2. If you return the product, shipping charges and COD
                charges charged at the time while placing the order will be
                deducted. Also, the Reverse Shipping charges of Rs.100 will be
                charged and the balance amount will be refunded to you. Mode of
                Refund: 1. Prepaid Orders: The amount will be refunded to the
                same account from which the order has been placed. Once we
                received the product, the amount will be processed in 1-2
                working days. Your money will be reflected in your account in
                5-7 working days. 2. COD Orders: The amount will be transferred
                to the Bank Account mentioned while placing the Return Request
                and your amount will be reflected in your account within 7
                working days of the details. 3. Wallet Method: In case of wrong
                Bank Details intimation will be sent for the same. If we didn't
                receive a reply for the same in 7 days the amount will be
                transferred to your Powerlook Wallet. *E-wallet refunds will be
                credited to your powerlook wallet within 2 working days after
                the order has been received by us. *Once the refund is processed
                to the Powerlook Wallet it will not be reversed to your bank
                account. *For Every used or inappropriate product received in
                Returns from the customer will be returned back to the customer
                and shipping will be charged. *In case of Pincode is not
                serviceable for returns, the customer has to make self courier
                to mentioned warehouse address, and Return Shipping charges will
                not be debited.
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Products;
