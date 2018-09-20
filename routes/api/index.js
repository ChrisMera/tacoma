const router = require("express").Router();
const quoteRoutes = require("./quotes");

// Quote routes
router.use("/quotes", quoteRoutes);

module.exports = router;
