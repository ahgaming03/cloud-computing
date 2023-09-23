const express = require("express");
const bookController = require("../controllers/bookController");
const router = express.Router();

// view all books
router.get("/", bookController.book_index);

// add book
router.post("/", bookController.book_create_post);

// view create book form
router.get("/create", bookController.book_create_get);

// view single book
router.get("/:id", bookController.book_details);

// delete book
router.delete("/:id", bookController.book_delete);

module.exports = router;
