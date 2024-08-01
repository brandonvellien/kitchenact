const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Import de mes routes

// utilisation de mes routes

app.all("*", (req, res) => {
  res.status(404).json({ message: "all routes" });
});
app.listen(3000, () => {
  console.log("Server has started");
});
