const express = require("express");
const testing = require("../controllers/test/testing");
const testingWithAuth = require("../controllers/test/testingWithAuth");
const authorize = require("../middlewares/authorize");

const router = express.Router();

router.route("/").get(testing).post(authorize, testingWithAuth);

module.exports = router;
