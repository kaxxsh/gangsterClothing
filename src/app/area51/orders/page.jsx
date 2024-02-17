"use client";
import React from "react";
import PaymentButton from "./PaymentButton";

const page = () => {
  return (
    <div>
      <PaymentButton amount={500} />
    </div>
  );
};

export default page;
