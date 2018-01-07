const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/event"
router.route("/")
  .post(articlesController.saveEvent);

module.exports = router;
