import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config(); // load .env file

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

async function testUpload() {
  try {
    const res = await cloudinary.uploader.upload("https://picsum.photos/200", {
      folder: "strapi-test",
    });
    console.log("✅ Upload successful!");
    console.log("URL:", res.secure_url);
  } catch (err: any) {
    console.error("❌ Upload failed:", err.message);
  }
}

testUpload();
