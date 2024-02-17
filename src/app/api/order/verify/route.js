import { NextResponse } from "next/server";
import crypto from "crypto";
import dbConnection from "../../utils/db.js";

export async function POST(req, res) {
  const { razorpayOrderId, razorpaySignature, razorpayPaymentId, email } = await req.json();
  const body = razorpayOrderId + "|" + razorpayPaymentId;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpaySignature;

  if (!isAuthentic) {
    return NextResponse.json(
      { message: "invalid payment signature", error: true },
      { status: 400 }
    );
  }

  dbConnection();
  // await Order.findOneAndUpdate({ email: email }, { hasPaid: true });

  return NextResponse.json({ message: "payment success", error: false }, { status: 200 });
}
