"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Books() {
	const [books, setBooks] = useState([]);
	const router = useRouter();

	useEffect(() => {
		fetch("http://localhost:5000/api/books")
			.then((res) => res.json())
			.then(setBooks);
	}, []);

	return (
		<>
			<Navbar />
			<section className="p-8 max-w-4xl mx-auto">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl font-bold">Books</h2>
					<button
						className="bg-blue-600 text-white px-4 py-2 rounded"
						onClick={() => router.push("/Books/add")}>
						Add Book
					</button>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{books.map((book) => (
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
