const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/saved"
router.route("/")
  .get(articlesController.findAllSaved);

module.exports = router;
