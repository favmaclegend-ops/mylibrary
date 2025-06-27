"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBook() {
	const router = useRouter();
	const [form, setForm] = useState({
		title: "",
		author: "",
		description: "",
		genre: "",
		series: "",
		coverUrl: "",
		price: "",
		published: "",
	});
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			const token = localStorage.getItem("token");
			const res = await fetch("http://localhost:5000/api/books", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					// Uncomment below if you want to send token for authentication
					// Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					...form,
					price: parseFloat(form.price),
					published: form.published ? new Date(form.published) : undefined,
				}),
			});
			if (!res.ok) {
				const data = await res.json();
				setError(data.msg || "Failed to add book");
				return;
			}
			router.push("/books");
		} catch (err) {
			setError("Network error");
		}
	};

	return (
		<section className="p-8 max-w-lg mx-auto">
			<h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
			<form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
				<input
					name="title"
					placeholder="Title"
					className="border p-2 rounded"
					value={form.title}
					onChange={handleChange}
					required
				/>
				<input
					name="author"
					placeholder="Author"
					className="border p-2 rounded"
					value={form.author}
					onChange={handleChange}
					required
				/>
				<textarea
					name="description"
					placeholder="Description"
					className="border p-2 rounded"
					value={form.description}
					onChange={handleChange}
				/>
				<input
					name="genre"
					placeholder="Genre"
					className="border p-2 rounded"
					value={form.genre}
					onChange={handleChange}
				/>
				<input
					name="series"
					placeholder="Series"
					className="border p-2 rounded"
					value={form.series}
					onChange={handleChange}
				/>
				<input
					name="coverUrl"
					placeholder="Cover Photo URL"
					className="border p-2 rounded"
					value={form.coverUrl}
					onChange={handleChange}
				/>
				<input
					name="price"
					type="number"
					step="0.01"
					placeholder="Price"
					className="border p-2 rounded"
					value={form.price}
					onChange={handleChange}
				/>
				<input
					name="published"
					type="date"
					placeholder="Published Date"
					className="border p-2 rounded"
					value={form.published}
					onChange={handleChange}
				/>
				<button
					type="submit"
					className="bg-blue-600 text-white px-4 py-2 rounded">
					Add Book
				</button>
			</form>
			{error && <p className="text-red-600 mt-2">{error}</p>}
		</section>
	);
}
