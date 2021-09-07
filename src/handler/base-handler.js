const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const morgan = require("morgan");
const cors = require("cors");
const responseTime = require("response-time");
const timeout = require("connect-timeout");
const partialResponse = require("express-partial-response");
const ResponseManager = require("../response/response-manager");
const ErrorCodes = require("../error-codes");

const app = express();

// Response Manager
app.use(ResponseManager);

// Connection Timeout
app.use(timeout("15s"));

const stopOnTimeout = (req, res, next) => {
  if (!req.timedout) next();
  else
    res.sendError({
      code: ErrorCodes.TIME_OUT,
      message: "Response timed out",
    });
};

// Simple implementation of Body Parser.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Partial response
app.use(partialResponse());

// Compression
app.use(compression());

// API logger
app.use(morgan("sandbox-api"));

// Cross Origin Resource Sharing
app.use(cors());

// Response Time logging
app.use(responseTime());

// Check if timed out.
app.use(stopOnTimeout);

module.exports = { serverless, app };
