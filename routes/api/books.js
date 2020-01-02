const router = require("express").Router();
const booksController = require("../../controllers/bookController");

// Matches with "/api/books"
router.route("/")
  // SEE activity 11-Stu_ReactRouter/Solved
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  // SEE activity 11-Stu_ReactRouter/Solved
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
