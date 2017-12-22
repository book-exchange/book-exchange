const router = require("express").Router();
const articleRoutes = require("./articles");
const savedRoutes = require("./saved");
const scrapeRoutes = require("./scrape");
const userRoutes = require("./user");

// article routes
router.use("/articles", articleRoutes);
router.use("/saved", savedRoutes);
router.use("/scrape", scrapeRoutes);
router.use("/user", userRoutes);

module.exports = router;
