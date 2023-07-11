const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")

const middleware = [bodyParser.json(), morgan("common"), cors(), bodyParser.urlencoded({ extended: false }), express.json(), helmet(), helmet.crossOriginResourcePolicy({ policy: "cross-origin" })]


module.exports = middleware;