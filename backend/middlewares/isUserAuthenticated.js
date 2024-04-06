const ensureAuthorised = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login/google");
  }
};

module.exports = ensureAuthorised;

req.is