
const express = require('express');
const router = express.Router();

router.get("/", (request, response, next) => {
    response.status(200).json({success: {message: "This will send all resources"}, statusCode: 200})
});

router.get("/:id", (request, response, next) => {
    response.status(200).json({success: {message: "This will send all of the resource data by ID"}, statusCode: 200});
});

router.get("/:state", (request, response, next) => {
    response.status(200).json({success: {message: "This will send all of the resource data by state"}, statusCode: 200});
});

router.post("/create/new", (request, response, next) => {
    response.status(200).json({success: {message: "This will send all of the data that will have the ability to create new entries"}, statusCode: 200});
});

router.put("/edit/:id", (request, response, next) => {
    response.status(200).json({success: {message: "This will send all of the update resource form page data to modify a resource ID"}, statusCode: 200});
});

router.delete("/delete/:id", (request, response, next) => {
    response.status(200).json({success: {message: "This will send all of the data that will have the ability to delete a book by their ID"}, statusCode: 200});
});

//export so routes are usable
module.exports = router;


