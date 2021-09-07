const ResponseModel = require("./response-model");

module.exports = (req, res, next) => {
  res.sendSuccess = (data, message = "") => {
    res.json(ResponseModel.Success(data, message));
  };
  res.sendError = ({ code, message = "", error = {} }) => {
    res.status(400).json(ResponseModel.Error(code, message, error));
  };
  next();
};
