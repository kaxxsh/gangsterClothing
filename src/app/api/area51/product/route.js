import { NextResponse } from "next/server";
import { product } from "../../utils/schema";
import dbConnection from "../../utils/db.js";
import { v2 as cloudinary } from "cloudinary";

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
          const arrayBuffer = await files[i].arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          const { secure_url } = await new Promise((resolve, reject) => {
            cloudinary.uploader
              .upload_stream((error, result) => {
                if (error) {
                  reject(error);
                  return;
                }
                resolve(result);
              })
              .end(buffer);
          });
          formData.append("media", secure_url);
        }
      }
    }
    const data = Object.fromEntries(formData);
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
