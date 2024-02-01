import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

import express from "express";
import mongoose from "mongoose";
import { Document } from "./models/documentModel.js";
import documentsRoute from "./routes/documentsRoute.js";
import cors from "cors";

const db_url = process.env.DB_URL || "mongodb://localhost:27017/readify";
const port = process.env.PORT || 3000;

const app = express();
// Parse incoming JSON into objects
app.use(express.json());
// Allow cross-origin requests
app.use(cors());
//Allow custom origins
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
app.use("/documents", documentsRoute);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN tutorial");
});

mongoose
  .connect(db_url)
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Serving on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
