const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/scrape"
router.route("/")
	.get(articlesController.create);

module.exports = router;
