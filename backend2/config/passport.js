const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// user model
const User = require("../model/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: "YOU CLIENT ID", // enter your client ID here
      clientSecret: "YOUR CLIENT SECRET", // enter your client secret here
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        //console.log("profile :- ", profile);
        let user = await User.findOne({ name: profile.displayName });

        if (user) {
          user.profilePic = profile.photos[0].value;
          await user.save();
          done(null, user); // User already exists in the database
        } else {
          user = await User.create({
            name: profile.displayName,
          }); // Create a new user in the database
          done(null, user);
        }
      } catch (err) {
        console.error(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
