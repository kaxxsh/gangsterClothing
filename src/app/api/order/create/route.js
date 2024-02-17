import { NextResponse } from "next/server";
import dbConnection from "../../utils/db.js";
import Razorpay from "razorpay";
import { v4 as uuidv4 } from "uuid";

dbConnection();
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const totalAmount = Number(searchParams.get("amount"));

  const amount = totalAmount * 100;
  const options = {
    amount: amount.toString(),
    currency: "INR",
    receipt: uuidv4(),
  };

  const order = await razorpay.orders.create(options);
  console.log(order);

  return NextResponse.json({ message: "success", order });
}
