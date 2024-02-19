import { NextResponse } from "next/server";
import { cart } from "../utils/schema";
import dbConnection from "../utils/db.js";

dbConnection();

export async function GET(req) {
  try {
    const res = await cart.find();
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}

export async function POST(req) {
  try {
    const { id, productid, color, size, count, image, price } =
      await req.json();
    const res = await cart.create({
      id: id,
      image: image,
      productid: productid,
      color: color,
      size: size,
      count: count,
      price: price,
    });
    return NextResponse.json({ data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
