const passport = require("passport");
const bcrypt = require("bcrypt");

const resources = require("../data/data");

const login = (request, response, next) => {
    response.status(200).json({
        success: {message: "You've logged in"},
        statusCode: 200
    })
};

const localLogin = (request, response, next) => {
    response.status(200).json({
        success:{message: "You're now logged in"},
        statusCode: 200
    })
};

const loginLocalFailed = (request, response, next) => {
    response.status(401).json({
        error: {message: "Username or password is incorrect"}, 
        statusCode: 401
    })
};

const logoutRequest = (request, response, next) => {
    request.logout((error)=> {
        if (error) {
            response.status(400).json({
                error: {message: "Something went wrong"},
                statusCode: 400
            })
        }
        response.status(200).json({
            success: {message: "User logged out"},
            statusCode: 200})
    })
};

module.exports = {login, localLogin, loginLocalFailed, logoutRequest};