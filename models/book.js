const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookSchema = new Schema({
  //SEE homework instruction number 4
  googleId: String,
  title: { type: String, required: true},
  subtitle: String,
  authors: Array,
  description: String,
  image: String,
  link: String,
  date: {type: Date, default:Date.now}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
