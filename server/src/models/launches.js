const mongoose = require("mongoose")

const launchesSchema = new mongoose.Schema({

    flightNumber: {
        type: Number,
        required: true
    },
    lauchDay: {
        type: Date,
        required: true
    },
    mission: {
        type: String,
        required: true
    },
    rocket: {
        type: String,
        required: true
    },
    target: {
        type: String,

    },
    customer: [String],
    upcoming: {
        type: Boolean,
        require: true
    },
    success: {
        type: Boolean,
        required: true,
        default: true
    }


})
const launches = mongoose.model("Launch", launchesSchema)
module.exports = launches