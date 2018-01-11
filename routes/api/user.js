const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/user"
router.route("/")
  .post(articlesController.saveUser);
// Matches with "/api/user/login"
router.route("/login/:email/:password")
  .get(articlesController.findByEmail);

module.exports = router;
