const { Router } = require("express");
const router = new Router();
const { generateOrderNr, generateETA } = require("../utils/utils");

router.get("/", async (req, res) => {});

router.post("/order", async (req, res) => {});

module.exports = router;
