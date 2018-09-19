const router = require("express").Router();
const quoteRoutes = require("./quotes");

// Customer routes
router.use("/quotes", quoteRoutes);

module.exports = router;
