
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
const uri = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5001;



// async function connectToDatabase() {
//   try {
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`Server Running on Port: http://localhost:${PORT}`);
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }
// connectToDatabase()
mongoose
    .connect(uri, {
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
