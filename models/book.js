const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const temp = 0;

const bookSchema = new Schema({
  TODO: temp//SEE homework instruction number 4
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
