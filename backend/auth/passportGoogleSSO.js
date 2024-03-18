const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel.js");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ||
        "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    },

    async (req, accessToken, refreshToken, profile, cb) => {
      const defaultUser = {
        fullName: `${profile.name.givenName} ${profile.name.familyName}`,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
        googleId: profile.id,
      };

      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = new User(defaultUser);
          await user.save();
        }
        cb(null, user);
      } catch (err) {
        console.log("Error signing up with Google", err);
        cb(err, null);
      }
    }
  )
);

passport.serializeUser(function (user, cb) {
  console.log("Serializing user", user);
  cb(null, user.id);
});
passport.deserializeUser(async (id, cb) => {
  try {
    const user = await User.findOne({ _id: id });
    console.log("Deserializing user", user);
    cb(null, user);
  } catch (err) {
    console.log("Error deserializing user", err);
    cb(err, null);
  }
});
