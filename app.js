require("dotenv").config();
require("./config/connection");
require("./config/authStrategy");

//PACKAGES
const express = require('express');
const morgan = require('morgan');
const path = require ("node:path");
const session = require("express-session");
const passport = require("passport");
const helmet = require("helmet");

//MIDDLEWARE
const app = express();
const PORT = process.env.PORT || 5500;
const cors = require("cors");

app.use(helmet({contentSecurityPolicy: false}));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());


//ROUTING
const siteRoutes = require("./routes/siteRoutes");
const adminRoutes = require("./routes/adminRoutes");

//morgan as middleware
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

//basic routes
app.get("/", (request, response, next) => {
    response.status(200).json({success: {message: "Index successful"}, statusCode: 200});
})

app.get("/about", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the about page"}, statusCode: 200});
})

app.get("/admin", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the Admin page"}, statusCode: 200});
})

app.get("/admin/create-resource", (request, response, next) => {
    // response.send("This route points to the Create Resoouce Page")
    response.status(200).json({success: {message: "This route points to the Create Resource Page"}, statusCode:200})
});


app.use("/api/resources", adminRoutes);
app.use("/", siteRoutes);



app.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}`);
    console.log(`http://localhost:${PORT}/`);
});