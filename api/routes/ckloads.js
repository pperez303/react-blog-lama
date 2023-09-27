const router = require("express").Router();
const bodyparser = require("body-parser");
const multiparty = require("connect-multiparty");
const MultipartyMiddleware = multiparty({ uploadDir: "images" });

//const morgan = require("morgan");
console.log("in ckloads")

router.use(bodyparser.urlencoded({ extended: true }));

router.use(bodyparser.json());

// use this to check if your server is working
router.get("/", (req, res) => {
  res.send("Welcome to your server!");
});

router.post("/uploads", MultipartyMiddleware, (req, res) => {
  console.log("at uploads");
  // console.log(req.body);
  // console.log(req.files);
  const path = req.files.upload.path;
  console.log('path : ', path);

  res.status(200).json({
    uploaded: true,
    url: `http://localhost:8000/api/${path}`,
  });
});

module.exports = router;
