import { NextResponse } from "next/server";
import { product } from "../../utils/schema";
import dbConnection from "../../utils/db.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { writeFile } from "fs/promises";
import { randomUUID } from "crypto";

dbConnection(process.env.NEXT_PUBLIC_MONGO_URL);
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUD_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUD_API_SECRET,
  secure: true,
});
export async function POST(req) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files");
    if (files) {
      for (let i = 0; i < files.length; i++) {
        if (typeof files[i] === "object") {
          const bytes = await files[i].arrayBuffer();
          const buffer = Buffer.from(bytes);
          const path = "/tmp/" + files[i].name;
          try {
            await writeFile(path, buffer);
          } catch (error) {
            return NextResponse.json({ message: error.message }, { status: 500 });
          }
          const { secure_url } = await cloudinary.uploader.upload(path, {
            public_id: randomUUID(),
            folder: "test",
          });
          formData.append("media", secure_url);
          fs.unlinkSync(path);
        } else {
          formData.append("media", files[i]);
        }
      }
    }
    const data = Object.fromEntries(formData);
    try {
      const prev = await product.findById(data._id);
      if (!prev) {
        await product.create({
          ...data,
          media: formData.getAll("media"),
          colors: JSON.parse(data.colors),
          sizes: JSON.parse(data.sizes),
        });
      } else {
        await product.findByIdAndUpdate(data._id, {
          ...data,
          media: formData.getAll("media"),
          colors: JSON.parse(data.colors),
          sizes: JSON.parse(data.sizes),
        });
      }
    } catch (error) {
      console.log(error);
    }
    return NextResponse.json({ message: "Product Added" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const res = await product.find();
    return NextResponse.json({ data: res }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
