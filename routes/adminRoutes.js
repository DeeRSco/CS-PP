const express = require('express');
const passport = require("passport");

const { loginLocalFailed, logoutRequest } = require("../controllers/adminController");

const router = express.Router();


//a POST route
//  ------------------ PLACEHOLDER HANDLER FUNCTION BELOW -------------
router.post("/login/local",
    passport.authenticate("local", {failureRedirect: "/login/local/failed"}),
    (request, response, next) => {
        response
        .status(200)
        .json({
            success: {message: "User logged in"}, 
            data: 
            {username: request.user.username,
                firstName: request.user.firstName,
                lastName: request.user.lastName,}, 
                statusCode: 200})
    }
);

router.get("/login/local/failed", loginLocalFailed);

router.get("/logout", logoutRequest);

module.exports = router;