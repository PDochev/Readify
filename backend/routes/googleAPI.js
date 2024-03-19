const express = require("express");
const passport = require("passport");
const router = express.Router();

const successURL = process.env.SUCCESS_URL || "http://localhost:5173/documents";
const failureURL = process.env.FAILURE_URL || "http://localhost:5173/login";

// const successURL = "http://localhost:5173/documents";
// const failureURL = "http://localhost:5173/login";

router.get(
  "/login/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
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
