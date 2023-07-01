const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const MicrosoftStrategy = require('passport-microsoft').Strategy;

// user model
const User = require("../model/user");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "57627952463-gjbkcmlamu1ai3spllmt0l3ehtometsh.apps.googleusercontent.com", // enter your client ID here
      clientSecret: "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", // enter your client secret here
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("profile :- ", profile);
        let user = await User.findOne({ email: profile.emails[0].value });

        if (user) {
          done(null, user); // User already exists in the database
        } else {
          user = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            profilePic: profile.photos[0].value,
          }); // Create a new user in the database
          done(null, user);
        }
      } catch (err) {
        console.error(err);
      }
    }
  )
);

passport.use(
  new MicrosoftStrategy(
    {
      clientID: "f8363733-11c0-400f-a6e1-b20018b19ecf",
      clientSecret: "KV58Q~sYmODRMsixygr9huMInE6UxIrqpK3OAbzO",
      callbackURL: "/auth/microsoft/callback", // The URL to redirect to after authentication
      scope: ["user.read"], // The scopes you want to request
    },
    async (accessToken, refreshToken, profile, done) => {
      //try {
      console.log("profile :- ", profile);
      dont(null,profile);
      //let user = await User.findOne({ email: profile.emails[0].value });

      //if (user) {
      //   done(null, user); // User already exists in the database
      // } else {
      //   user = await User.create({
      //    name: profile.displayName,
      //    email: profile.emails[0].value,
      //    profilePic: profile.photos[0].value,
      //  }); // Create a new user in the database
      //done(null, user);
    }
    //} catch (err) {
    // console.error(err);
    //}
    //}
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
