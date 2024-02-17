import { NextResponse } from "next/server";
import dbConnection from "../../utils/db.js";
import Razorpay from "razorpay";

dbConnection();
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

export async function GET(request, { params }) {
  const orderId = params.id;

  const order = await razorpay.orders.fetch(orderId);

  return NextResponse.json({ message: "success", order });
}
