import { NextResponse } from "next/server";
import { product } from "../utils/schema";
import dbConnection from "../utils/db.js";

dbConnection(process.env.NEXT_PUBLIC_MONGO_URL);
export async function POST(req) {
  try {
    const data = await req.json();
    try {
      const res = await product.create({
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        description: data.description,
        image: data.image,
        category: data.category,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    return NextResponse.json({ message: "Product Added" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
