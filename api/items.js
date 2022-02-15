const express = require("express");
const cors = require("cors");
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

router.get("/outer", async (req, res) => {
  try {
    res.json(items["outer"]);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
});

router.get("/outer/hoody", async (req, res) => {
  try {
    res.json(items["outer"]["hoody"]);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
});

router.get("/pants", async (req, res) => {
  try {
    res.json(items["pants"]);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
});

router.get("/pants/denim pants", async (req, res) => {
  try {
    res.json(items["pants"]["denim pants"]);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
});

router.get("/pants/slacks", async (req, res) => {
  try {
    res.json(items["pants"]["slacks"]);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
