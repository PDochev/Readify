const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const express = require("express");
const mongoose = require("mongoose");
// const ExpressError = require("./utils/ExpressError.js");
const documentsRoute = require("./routes/documentsRoute.js");
const googleAuthRoute = require("./routes/googleAPI.js");
const userRoute = require("./routes/userRoute.js");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("./auth/passportGoogleSSO.js");
const cookieSession = require("cookie");

const db_url = process.env.DB_URL || "mongodb://localhost:27017/readify";
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.setHeader(
  "Set-Cookie",
  cookieSession.serialize("XSRF-TOKEN", YOUR_OBJECT, {
    // XSRF-TOKEN is the name of your cookie
    sameSite: "lax", // lax is important, don't use 'strict' or 'none'
    httpOnly: process.env.ENVIRONMENT !== "development", // must be true in production
    path: "/documents",
    secure: process.env.ENVIRONMENT !== "development", // must be true in production
    maxAge: 60 * 60 * 24 * 7 * 52, // 1 year
    domain: "https://readifyapp.netlify.app/", // the period before is important and intentional
  })
);
// app.use(
//   session({
//     secret: process.env.COOKIE_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     domain: "https://readifyapp.netlify.app/",
//     // cookie: {
//     //   httpOnly: true,
//     //   // secure: true,
//     //   expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//     //   maxAge: 1000 * 60 * 60 * 24 * 7,
//     // },
//     maxAge: 24 * 60 * 60 * 1000,
//   })
// );

app.use(
  cors({
    origin: process.env.ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(googleAuthRoute);
app.use("/documents", documentsRoute);
app.use(userRoute);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to Readify");
});

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
