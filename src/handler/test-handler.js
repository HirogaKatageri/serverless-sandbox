const { serverless, app } = require("./base-handler");

app.get("/success", async (req, res) => {
  res.sendSuccess({ demo: true });
});

app.get("/error", async (req, res) => {
  res.sendError({ code: 400000, message: "Error is on purpose" });
});

module.exports.handler = serverless(app);
