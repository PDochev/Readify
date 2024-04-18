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

app.enable("trust proxy");
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: "none",
      secure: true,
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

// const allowCrossDomain = function (req, res, next) {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "https://server.readifyapp.org/"
//   );
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// };

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
