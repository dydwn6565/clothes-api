const express = require("express");
const router = express.Router();
const items = require("./itemsJson.json");

router.get("/", async (req, res) => {
  try {
    res.json(items);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
