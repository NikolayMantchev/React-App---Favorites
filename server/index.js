
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());

dotenv.config({ path: path.join(__dirname, ".env") });
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/posts", postRoutes);
app.use("/user", userRouter);
const PORT = process.env.PORT || 5001;

let uri = process.env.DATABASE_URL;
if (!uri) {
  console.error("Missing DATABASE_URL in server/.env");
  process.exit(1);
}
uri = uri.trim().replace(/\uFEFF/g, "").replace(/\r/g, "").replace(/^["']|["']$/g, "");

mongoose
  .connect(uri, { serverSelectionTimeoutMS: 10000 })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    if (err.message.includes("bad auth") || (err.code === 8000)) {
      console.error(
        "Tip: Atlas rejected the username/password. Fix: 1) Atlas → Database Access → edit your user → Edit Password (use a password with only letters/numbers to avoid encoding issues). 2) Update DATABASE_URL in server/.env with the new password, then restart."
      );
    }
    if (err.message.includes("ECONNREFUSED") || err.message.includes("querySrv")) {
      console.error("Tip: Atlas → Network Access → add your IP or 0.0.0.0/0 for dev.");
    }
    process.exit(1);
  });
