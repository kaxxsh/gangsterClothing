import { product } from "@/app/api/utils/schema";
import { NextResponse } from "next/server";
import dbConnection from "@/app/api/utils/db";

dbConnection();
export async function GET(req, { params }) {
  const id = params.id;

  try {
    let res;
    if (
      ["tshirt", "shirt", "coord", "jacket", "bottom", "accessory"].includes(id)
    ) {
      res = await product.find({ category: id });
    } else {
      res = await product.findById(id);
    }
    return NextResponse.json({ data: res }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const id = params.id;
  try {
    const res = await product.findByIdAndDelete(id);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
