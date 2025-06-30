"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Wood-like color for icons
const FilterIcon = () => (
	<svg
		className="w-5 h-5 text-[#8B5C2A]"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		viewBox="0 0 24 24">
		<path d="M4 6h16M6 12h12M10 18h4" />
	</svg>
);

const SearchIcon = () => (
	<svg
		className="w-5 h-5 text-[#8B5C2A]"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		viewBox="0 0 24 24">
		<circle cx="11" cy="11" r="8" />
		<line x1="21" y1="21" x2="16.65" y2="16.65" />
	</svg>
);

export default function Books() {
	const [books, setBooks] = useState([]);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("title");
	const [showFilter, setShowFilter] = useState(false);
	const router = useRouter();

	useEffect(() => {
		fetch("http://localhost:5000/api/books")
			.then((res) => res.json())
			.then(setBooks);
	}, []);

	const filteredBooks = books
		.filter((book) => {
			if (!search) return true;
			const value =
				filter === "title"
					? book.title
					: filter === "author"
					? book.author
					: "";
			return value?.toLowerCase().includes(search.toLowerCase());
		})
		.sort((a, b) => {
			if (filter === "created") {
				return new Date(b.createdAt) - new Date(a.createdAt);
			}
			if (filter === "modified") {
				return new Date(b.updatedAt) - new Date(a.updatedAt);
			}
			return 0;
		});

	return (
		<>
			<Navbar />
			<section className="bg-amber-100 p-4 sm:p-6 md:p-8 w-full min-h-screen">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-3xl font-serif font-bold tracking-wide text-[#8B5C2A]">
						Books
					</h2>
					<button
						className="bg-amber-700 text-white px-5 py-2 rounded shadow hover:bg-amber-800 transition font-serif"
						onClick={() => router.push("/books/add")}>
						Add Book
					</button>
				</div>
				<div className="flex gap-2 mb-6 items-center">
					<div className="relative flex-1">
						<span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<SearchIcon />
						</span>
						<input
							type="text"
							placeholder="Search books..."
							className="pl-10 pr-4 py-2 border border-[#8B5C2A] rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#8B5C2A] w-full font-serif"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
					<div className="relative">
						<button
							type="button"
							className="p-2 rounded-full border border-[#8B5C2A] bg-white hover:bg-amber-200 transition"
							onClick={() => setShowFilter((v) => !v)}
							aria-label="Filter">
							<FilterIcon />
						</button>
						{showFilter && (
							<div className="absolute right-0 mt-2 w-44 bg-white border border-[#8B5C2A] rounded shadow-lg z-10">
								<select
									className="w-full p-2 rounded font-serif"
									value={filter}
									onChange={(e) => {
										setFilter(e.target.value);
										setShowFilter(false);
									}}>
									<option value="title">Book Name</option>
									<option value="author">Author Name</option>
									<option value="created">Time Created</option>
									<option value="modified">Time Modified</option>
								</select>
							</div>
						)}
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{filteredBooks.map((book) => (
						<div
							key={book._id}
							className="bg-white rounded shadow p-4 flex flex-col items-center">
							{book.coverUrl && (
								<img
									src={book.coverUrl}
									alt={book.title}
									className="w-24 h-36 object-cover mb-2"
								/>
							)}
							<h3 className="font-semibold">{book.title}</h3>
							<p className="text-sm text-gray-500">{book.author}</p>
							<p className="text-sm text-gray-500">{book.genre || ""}</p>
							<span className="text-green-600 font-bold">
								${book.price}
							</span>
						</div>
					))}
				</div>
			</section>
			<Footer />
		</>
	);
}
