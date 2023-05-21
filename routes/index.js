const express = require("express");
const router = express.Router();
const { syncDatabase } = require("../utils/syncDatabase");
// CAR
const carAPI = require("./car.api");
router.use("/cars", carAPI);
router.get("/syncdatabase", function (req, res, next) {
  syncDatabase();
  res.status(200).send("sync succesful");
});
module.exports = router;
