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

router.get("/ranking", async (req, res) => {
  try {
    res.json(items["ranking"]);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
});

router.get("/recommend", async (req, res) => {
  try {
    res.json(items["recommend"]);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
});

router.get("/searched", async (req, res) => {
  try {
    const keywords = req.query.keyword.split(",");

    const matchedItemFromHoody = items.outer.hoody.filter((hoody) =>
      hoody.keyword.includes(...keywords)
    );

    const matchedItemFromCardigan = items.outer.cardigan.filter((cardigan) =>
      cardigan.keyword.includes(...keywords)
    );
    const matchedItemFromDenim = items.pants["denim pants"].filter((denim) =>
      denim.keyword.includes(...keywords)
    );
    const matchedItemFromSlack = items.pants.slacks.filter((slacks) =>
      slacks.keyword.includes(...keywords)
    );
    const searchedItemList = Object.assign(
      matchedItemFromHoody,
      matchedItemFromCardigan,
      matchedItemFromDenim,
      matchedItemFromSlack
    );

    res.status(200).json(searchedItemList);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
});

router.post("/checkout", (req, res) => {
  console.log(req.body);
  res.send({ success: success });
});

module.exports = router;
