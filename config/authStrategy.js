const passport = require("passport");
const bcrypt = require("bcrypt");

const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy

const User = require("../models/userModel");

//LOCAL STRATEGY
passport.use(
    new LocalStrategy(
        (verify = (username, password, done) => {
            User.findOne({username: username}).then((user)=> {
                if (!user) {
                    return done(null, false, {message: "User not found"});
                }
                bcrypt.compare(password, user.password, (error, result) => {
                    console.log(`Result: ${result}`)
                    if (error) {
                        return done(error);
                    }
                    return done(null, user);
                });
            })
            .catch((error)=> {
                console.log(`There was an error: ${error}`);
            })
        })
    )
);


//GOOGLE STRATEGY
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5500/auth/google'
},
(accessToken, refreshToken, profile,done)=>{
    console.log(profile);
    return done(null, profile);
}
));



passport.serializeUser((user, done)=> {
    done(null, user);
});

passport.deserializeUser((user, done)=> {
    done(null, user);
});
