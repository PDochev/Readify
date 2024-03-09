const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const express = require("express");
const mongoose = require("mongoose");
const documentsRoute = require("./routes/documentsRoute.js");
const googleAuthRoute = require("./routes/googleAPI.js");
const userRoute = require("./routes/userRoute.js");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("./auth/passportGoogleSSO.js");

const db_url = process.env.DB_URL || "mongodb://localhost:27017/readify";
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: 24 * 60 * 60 * 1000,
  })
);
// app.use(cors());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
//Allow custom origins
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
app.use(passport.initialize());
app.use(passport.session());
app.use(userRoute);
app.use(googleAuthRoute);
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
