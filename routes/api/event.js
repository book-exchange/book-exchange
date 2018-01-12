const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/event"
router.route("/")
  .post(articlesController.saveEvent);
// Matches with "/api/event/get"
router.route("/get")
  .get(articlesController.getEvents);
// Matches with "/api/event/:id"
router.route("/:id")
	.put(articlesController.addOneToCount);

module.exports = router;
