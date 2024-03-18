const express = require("express");
const cors = require("cors");
const router = express.Router();

app.use(cors());
router.get("/user", (req, res) => {
  if (req.user) {
    res.json({
      email: req.user.email,
      fullName: req.user.fullName,
      picture: req.user.picture,
    });
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
