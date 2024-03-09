import { NextResponse } from "next/server";
import { cart } from "../utils/schema";
import dbConnection from "../utils/db.js";

dbConnection();

export async function GET(req) {
  try {
    const res = await cart.find();
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ error: "Error fetching cart items" });
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
    console.error("POST Error:", error);
    return NextResponse.json({ error: "Error creating a new cart item" });
  }
}

export async function PATCH(req) {
  try {
    const { id, count } = await req.json();

    if (!id || count === undefined) {
      return NextResponse.json({ error: "Invalid request parameters" });
    }

    const updatedCartItem = await cart.findOneAndUpdate(
      { id },
      { $set: { count } },
      { new: true }
    );

    if (!updatedCartItem) {
      return NextResponse.json({ error: "Item not found in the cart" });
    }

    return NextResponse.json({ data: updatedCartItem }, { status: 200 });
  } catch (error) {
    console.error("PATCH Error:", error);
    return NextResponse.json({ error: "Error updating cart item" });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Invalid request parameters" });
    }

    const deletedCartItem = await cart.findOneAndDelete({ id });

    if (!deletedCartItem) {
      return NextResponse.json({ error: "Item not found in the cart" });
    }

    return NextResponse.json({ data: deletedCartItem }, { status: 200 });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ error: "Error deleting cart item" });
  }
}
