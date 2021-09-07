const express = require("express");
const router = express.Router();

const ErrorCodes = require("../error-codes");
const verify = require("./auth-verify");

router.post("/verify", async (req, res) => {
  try {
    const { idToken } = req.body;
    const token = await verify.verifyUser(idToken, req.body);
    res.sendSuccess({ name: token.name, picture: token.picture });
  } catch (error) {
    res.sendError({ code: ErrorCodes.AUTH_VERIFY, error });
  }
});

module.exports = router;
