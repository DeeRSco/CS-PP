const mongoose = require("mongoose");

const {Schema} = mongoose;

const resourceSchema = new Schema ({
    name: {
        type: String,
    },
    state: {
        type: String,
    },
    location: {
        type: String,
    },
    phone: {
        type: String,
    },
    website: {
        type: String,
    },
    services: {
        type: Array,
    },
});

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;