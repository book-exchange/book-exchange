const router = require("express").Router();
const articleRoutes = require("./articles");
const savedRoutes = require("./saved");
const scrapeRoutes = require("./scrape");

// article routes
router.use("/articles", articleRoutes);
router.use("/saved", savedRoutes);
router.use("/scrape", scrapeRoutes);


module.exports = router;
