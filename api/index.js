// this application uses Express, a backend javascript technology.  React is for the front-end.
const express = require("express");
const app = express();

// for testing the connectivity
// console.log("hello");
// app.use("/peter", (req, res) => {
//   console.log("hey this is the main URL Peter");
// });

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

//----this code from the course does not work.
// mongoose.connect(process.env.MONGO_URL, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true,
// useFindAndModify: true,
//     });

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen("5000", () => {
  console.log("Backend is running!");
});
