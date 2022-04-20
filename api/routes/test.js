const router = require("express").Router();

//CREATE POST
router.get("/", async (req, res) => {
  res.status(200).json({
    message: "testing our server",
  });
});
