import mongoose from "mongoose";

const merchantSchema = new mongoose.Schema(
  {
    businessName: { type: String, required: true, trim: true, maxlength: 80 },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^[a-z0-9-]{3,30}$/,
    },
    whatsappNumber: {
      type: String,
      required: true,
      match: /^254(7|1)\d{8}$/,
    },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Merchant", merchantSchema);