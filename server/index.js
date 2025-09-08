
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from 'dotenv'
import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";


const app = express();
app.use(cors());

dotenv.config();
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use("/posts", postRoutes);
app.use("/user", userRouter);

const PORT = process.env.PORT || 5001;
const databaseUrl = process.env.DATABASE_URL;
console.log(databaseUrl);
console.log(PORT);

mongoose
    .connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server Running on Port: http://localhost:${PORT}`)
        )
    )
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
