const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ youHave: "arrived!" });
});

module.exports = router;
