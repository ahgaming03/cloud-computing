const Book = require("../models/Book");
// book_index, book_create_post, book_create_get, book_details, book_delete

// view all books
const book_index = (req, res) => {
    Book.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("books/index", { title: "All books", books: result });
        })
        .catch((err) => {
            console.error(err);
        });
};

// add book
const book_create_post = (req, res) => {
    const book = new Book(req.body);

    book.save()
        .then((result) => {
            res.redirect("/books");
        })
        .catch((err) => {
            console.error(err);
        });
};

// view create book form
const book_create_get = (req, res) => {
    res.render("books/create", { title: "Create a new book" });
};

// 
const book_details = (req, res) => {
    const id = req.params.id;
    Book.findById(id)
        .then((result) => {
            res.render("books/details", { book: result, title: "Book Details" });
        })
        .catch((err) => {
            res.status(404).render("404", { title: "404" });
        });
};

// delete book
const book_delete = (req, res) => {
    const id = req.params.id;
    
    Book.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: "/books" });
        })
        .catch((err) => {
            console.error(err);
        });
};

module.exports = {
    book_index,
    book_create_post,
    book_create_get,
    book_details,
    book_delete,
};
