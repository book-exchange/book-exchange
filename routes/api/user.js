const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/user"
router.route("/")
  .post(articlesController.saveUser);

 router
 	.route("/:id")
 	.get(articlesController.findById)
  	.put(articlesController.update)
  	.delete(articlesController.remove);

module.exports = router;
