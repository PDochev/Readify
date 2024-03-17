const express = require("express");
const passport = require("passport");
const router = express.Router();

const successURL =
  process.env.SUCCESS_URL || "https://readifyapp.netlify.app/documents";
const failureURL =
  process.env.FAILURE_URL || "https://readifyapp.netlify.app/login";

// const successURL = "http://localhost:5173/documents";
// const failureURL = "http://localhost:5173/login";

router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: successURL,
    failureRedirect: failureURL,
    failureMessage: "Invalid email or password",
    scope: ["profile", "email"],
  }),
  (req, res) => {
    console.log("User signed in" + req.user);
    res.send("Thank you for signing in!");
  }
);

module.exports = router;
