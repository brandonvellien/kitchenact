require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiKey = process.env.KITCHENACT_API_KEY;

// Route obtenir des recettes random
router.get("/home", async (req, res) => {
  const url = `https://api.spoonacular.com/recipes/random?number=15&apiKey=${apiKey}`;
  try {
    const response = await axios.get(url);
    res.json(response.data.recipes);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      error: "An error has occurred",
    });
  }
});

// Route pour obtenir les recettes avec recherhce
router.get("/home/searchresults", async (req, res) => {
  let url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=20&apiKey=${apiKey}`;

  if (sort) {
    url = url + `&sort=${sort}`;
  }
  if (cuisine) {
    url = url + `&cuisine=${cuisine}`;
  }
  if (diet) {
    url = url + `&diet=${diet}`;
  }
  if (type) {
    url = url + `&type=${type}`;
  }
  try {
    const response = await axios.get(url);
    res.json(response.data.results);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      error: "An error has occurred",
    });
  }
});
