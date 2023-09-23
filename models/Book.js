const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
