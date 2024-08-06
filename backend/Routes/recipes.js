require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiKey = process.env.KITCHENACT_API_KEY;
// Route pour obtenir les recettes
router.get("/home", async (req, res) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&sort=healthiness&maxCalories=700&minProtein=20&number=20&apiKey=${apiKey}`;
});
