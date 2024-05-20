const passport = require("passport");
const bcrypt = require("bcrypt");

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/userModel");

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



passport.serializeUser((user, done)=> {
    done(null, user);
});

passport.deserializeUser((user, done)=> {
    done(null, user);
});
