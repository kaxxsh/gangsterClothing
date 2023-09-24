import { NextResponse } from "next/server";
import { product } from "@/app/api/utils/schema.js";
import dbConnection from "@/app/api/utils/db";

dbConnection(process.env.NEXT_PUBLIC_MONGO_URL);

export async function GET(req) {
  try {
    const res = await product.find();
    return NextResponse.json({ data: res }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
  console.log(req);
}
