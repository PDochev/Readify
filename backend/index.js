const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const express = require("express");
const mongoose = require("mongoose");
const ExpressError = require("./utils/ExpressError.js");
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

app.use(
  cors({
    origin: "https://readifyapp.netlify.app/",
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(userRoute);
app.use(googleAuthRoute);
app.use("/documents", documentsRoute);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to Readify");
});

// app.all("*", (req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

app.use((req, res, next) => {
  res.status(404).send("404 - Not Found");
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
