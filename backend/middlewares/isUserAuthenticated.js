const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login/google");
  }
};

module.exports = ensureAuthenticated;
