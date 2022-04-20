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

const db = mongoose.connection;
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

// // this application uses Express, a backend server technology.  React is for the front-end.
// // You can use the "require()" statement".  If you wish to use "import() instead", add ' "type": "module" ' to the package.json file.

// // ---------------Setup the express server -------------------------------------------------
// // Pull in the express library
// const express = require("express"); // same as the 'import Express from "express" 'statement.
// const multer = require("multer");

// const path = require("path");

// // Create the app variable to allow us to configure the server
// const app = express();

// // --------------- Setup MongoDB  ----------------------------------------------------------
// // configure dotenv to allow us to use the .env file, which contains the mongodb connection string
// const dotenv = require("dotenv");
// dotenv.config();

// app.use("/images", express.static(path.join(__dirname, "/images")));

// // Pull in the mongoose library
// const mongoose = require("mongoose");

// // Connect to the mongoose DB
// mongoose
//   .connect(process.env.MONGO_URL, {})
//   .then(console.log("connected to MongoDB"))
//   .catch((err) => console.log(err));

// // Configure multer for image handling
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./images");
//   },
//   filename: (req, file, cb) => {
//     //cb(null, req.body.name);
//     cb(null, "Hello.png");
//   },
// });

// // This code uses multer to upload an image into folder "/api/images"
// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   res.status(200).json("File has been uploaded");
// });

// // another way to check if we are connected to the database
// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("connected to Database"));

// // --------------- Setup Routes  ----------------------------------------------------------

// // app.use allows us to use any middleware, which is code that runs
// //  when the server gets a request but before it gets passed to the routes.
// // First we need to tell express to accept json as a body instead of a post element
// app.use(express.json());

// // create a variable that points to the auth router to route our user information.
// const authRoute = require("./routes/auth");
// const usersRoute = require("./routes/users");
// const postRoute = require("./routes/posts");
// const categoryRoute = require("./routes/categories");

// // here we take anything that comes from a request that starts with "/api/auth" endpoint,
// // send sends it to the authRoute module (.../api/routes/auth.js)
// app.use("/api/auth", authRoute);
// app.use("/api/users", usersRoute);
// app.use("/api/posts", postRoute);
// app.use("/api/categories", categoryRoute);

// // Start the server with port 5000
// app.listen("5000", () => {
//   console.log("Express Server Has Started!");
// });
