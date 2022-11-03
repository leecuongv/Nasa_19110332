const express = require('express')
const {
    getAllLaunches,
} = require('./launchesController')
const launchesRouter = express.Router()

launchesRouter.get('/launches', getAllLaunches)

module.exports = launchesRouter