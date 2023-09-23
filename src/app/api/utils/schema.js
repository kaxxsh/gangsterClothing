import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validator: {
        validate: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
        message: "Email is not valid",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

const Product = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    media: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    compare: {
      type: Number,
    },
    category: {
      type: String,
      required: true,
      enum: ["tshirt", "shirt", "coord", "jacket", "bottom", "accessory"],
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
    },
    stock: {
      type: Number,
      required: true,
    },
    sizes: {
      type: Array,
    },
    colors: {
      type: Array,
    },
  },
  { timestamps: true }
);

User.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

const authUser = mongoose.models.authUser || mongoose.model("authUser", User);
const product = mongoose.models.product || mongoose.model("product", Product);

export { authUser, product };
