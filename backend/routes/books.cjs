const express = require("express");
const Book = require("../models/Book.cjs");
const router = express.Router();

// Get all books
router.get("/", async (req, res) => {
	try {
		const books = await Book.find({ verified: true }); // Only verified books
		res.json(books);
	} catch (err) {
		res.status(500).json({ msg: "Server error" });
	}
});

// Add a new book
router.post("/", async (req, res) => {
	try {
		const book = new Book(req.body);
		await book.save();
		res.status(201).json(book);
	} catch (err) {
		res.status(500).json({ msg: "Server error" });
	}
});

module.exports = router;
