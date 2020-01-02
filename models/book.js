const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookSchema = new Schema({
  //SEE homework instruction number 4
  title: { type: String, required: true},
  authors: String,
  description: String,
  image: String,
  link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
