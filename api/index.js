const express = require("express"); // same as the 'import Express from "express" 'statement.
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
// test ckeditor
const ckloadRoute = require("./routes/ckloads");
// test ckeditor
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const db = mongoose.connection;                                   // connect to mongoose
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to Database"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
// for ckeditor testing
app.use("/api/ckloads", ckloadRoute);
// ckeditor testing

// Start the server with port 5000
app.listen("5000", () => {
  console.log("Express Server Has Started!");
});