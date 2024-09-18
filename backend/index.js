const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Import de mes routes
const recipesRouter = require("./Routes/recipes");
const typesRouter = require("./Routes/types");

// utilisation de mes routes
app.use(recipesRouter);
app.use(typesRouter);

app.all("*", (req, res) => {
  res.status(404).json({ message: "all routes" });
});
app.listen(3000, () => {
  console.log("Server has started");
});
