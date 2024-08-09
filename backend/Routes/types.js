require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiKey = process.env.KITCHENACT_API_KEY;

//Route pour obtenir les types de cuisine
router.get("/types", async (req, res) => {
  const url = `complexSearch?type=${type}&number=15&apiKey=${apiKey}`;
  try {
    const response = await axios.get(url);
    res.json(response.data.results);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
