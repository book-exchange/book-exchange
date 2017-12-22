const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/user"
router.route("/")
  .post(articlesController.saveUser);

module.exports = router;
