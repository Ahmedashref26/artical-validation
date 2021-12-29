var path = require("path");

const fetch = require("node-fetch");

// Express
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Dotenv configuration
const dotenv = require("dotenv");
dotenv.config();

// Get API Key
const API_KEY = process.env.API_KEY;

const mockAPIResponse = require("./mockAPI.js");

// Start up an instance of app
const app = express();
// Cors for cross origin allowance
app.use(cors());
// configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static("dist"));

console.log(__dirname);

// GET Route
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  //   res.sendFile(path.resolve("src/client/views/index.html"));
});

// POST Route
app.post("/analyze", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${req.body.url}&lang=en`
    );
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.error("Error", err);
  }
});

const port = 8081;
// Spin up the server
app.listen(port, (err) => {
  if (err) throw new Error(`Something goes wrong: ${err}`);
  console.log(`server running on localhost : ${port}`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
