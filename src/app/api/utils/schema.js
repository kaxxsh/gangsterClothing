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

// {
//   id: 'order_Nc2qQc1c0xksZR',
//   entity: 'order',
//   amount: 50000,
//   amount_paid: 0,
//   amount_due: 50000,
//   currency: 'INR',
//   receipt: '9030c376-13a3-451d-a8d4-d180d3b5af90',
//   offer_id: null,
//   status: 'created',
//   attempts: 0,
//   notes: [],
//   created_at: 1708194335
// }

const Order = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    amount_paid: {
      type: Number,
      required: true,
    },
    amount_due: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    receipt: {
      type: String,
      required: true,
    },
    offer_id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    attempts: {
      type: Number,
      required: true,
    },
    notes: {
      type: Array,
    },
    created_at: {
      type: Number,
      required: true,
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
