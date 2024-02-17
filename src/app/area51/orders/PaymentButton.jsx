"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const PaymentButton = ({ amount }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const makePayment = async () => {
    setIsLoading(true);
    const key = process.env.NEXT_PUBLIC_RAZORPAY_API_KEY;
    const data = await fetch("/api/order/create?amount=" + amount);
    const { order } = await data?.json();
    const options = {
      key: key,
      name: "testing only",
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      modal: {
        ondismiss: function () {
          setIsLoading(false);
        },
      },
      handler: async function (response) {
        const data = await fetch("/api/order/verify", {
          method: "POST",
          body: JSON.stringify({
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            email: "testingonly@gmail.com",
          }),
        });

        const res = await data.json();
        if (res?.error === false) {
          // redirect to success page
        }
      },
      prefill: {
        email: "testingonly@gmail.com",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response) {
      alert("Payment failed. Please try again.");
      setIsLoading(false);
    });
  };

  return (
    <button disabled={isLoading} onClick={() => makePayment()}>
      Pay Now
    </button>
  );
};

export default PaymentButton;
