const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  genre: String,
  series: String,
  coverUrl: String,
  price: Number,
  published: Date,
  verified: { type: Boolean, default: false }, // <-- add this line
});

const Book = mongoose.models.Book || mongoose.model("Book", BookSchema);

module.exports = Book;