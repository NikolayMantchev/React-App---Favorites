
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";


const app = express();
app.use(cors());

dotenv.config();
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use("/posts", postRoutes);
app.use("/user", userRouter);
const PORT = process.env.PORT || 5001;

const uri = process.env.DATABASE_URL;
if (!uri) {
  console.error(
    "Missing DATABASE_URL. Create a .env file with DATABASE_URL=your_mongodb_connection_string"
  );
  process.exit(1);
}

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    if (err.message.includes("ECONNREFUSED") || err.message.includes("querySrv")) {
      console.error(
        "Tip: Check 1) Internet connection 2) MongoDB Atlas → Network Access → add your IP (or 0.0.0.0/0 for dev) 3) DATABASE_URL in .env"
      );
    }
    process.exit(1);
  });

mongoose.set("useFindAndModify", false);
