// dotenv
require("dotenv").config();

// import
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const router = require("./routes/routes");

const PORT = process.env.PORT || 5000;

// Middleware
// --static
app.use(express.static("public"));
// --bodypaser
app.use(bodyParser.urlencoded({ extended: true }));
// --ejs
app.set("view engine", "ejs");

// Route
app.use(router);

// Server Created
app.listen(PORT, () => {
  console.log("Server Started on Port : ", PORT);
});
