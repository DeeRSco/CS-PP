const Resource = require("../models/resourceModel");
const passport = require("passport");

const getAllResources = async (request, response, next) => {
  try {
    if (200) {
      await Resource.find({}).then((resources) =>
        response.status(200).json({
            success: { message: "Found all resources"},
            data: resources,
            statusCode: 200,
          }));
    }
  } catch (error) {
    response.status(400).json({
      error: {message: "Something went wrong getting all the resources"},
      statusCode: 400,
    });
  }
};

const getResource = async (request, response, next) => {
  const id = request.params;

  try {
    if (200) {
      await Resource.find({ _id: id }).then((foundResource) => {
        response.status(200).json({
          success: { message: "Found the resource you are looking for" },
          data: foundResource,
          statusCode: 200,
        });
      });
    }
  } catch (error) {
    response.status(400).json({
      error: { message: "Something went wrong retrieving the resource" },
      statusCode: 400,
    });
  }
};

const createResource = async (request, response, next) => {
  const { id, name, state, location, phone, website, services } = request.body;
  const newResource = newResource({
    id,
    name,
    state,
    location,
    phone,
    website,
    services,
  });

  try {
    await newResource.save();
    response.status(201).json({
      success: { message: "A new resource is being created" },
      data: newResource,
      statusCode: 201,
    });
  } catch (error) {
    response.status(400).json({
      error: { message: "Something went wrong creating a resource" },
      statusCode: 400,
    });
  }
};

const editResource = async (request, response, next) => {
  const { id } = request.params;
  const { name, state, location, phone, website, services } = request.body;

  try {
    Resource.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          state,
          location,
          phone,
          website,
          services,
        },
      },
      { new: true }
    );
    await response.status(201).json({
      success: { message: "Resource is updated" },
      data: newResource,
      statusCode: 201,
    });
  } catch (error) {
    response.status(400).json({
      error: { message: "Something went wrong while editing the resource" },
      statusCode: 400,
    });
  }
};

const deleteResource = async (request, response, next) => {
  const { id } = request.params;
  try {
    await Resource.findByIdAndDelete(id);
    response.status(200).json({
      success: { message: "Resource successfully deleted" },
      statusCode: 200,
    });
  } catch (error) {
    response.status(400).json({
      error: { message: "Something went wrong while deleting the resource" },
      statusCode: 400,
    });
  }
};

module.exports = {
  getAllResources,
  getResource,
  createResource,
  editResource,
  deleteResource,
};
