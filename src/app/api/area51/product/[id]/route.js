import { product } from "@/app/api/utils/schema";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params.id;
  try {
    const res = await product.findById(id);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
