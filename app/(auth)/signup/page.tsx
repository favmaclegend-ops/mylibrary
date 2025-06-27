"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
	const router = useRouter();
	const [form, setForm] = useState({ name: "", email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			const res = await fetch("http://localhost:5000/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});
			const data = await res.json();
			if (!res.ok) {
				setError(data.msg || "Sign up failed");
				return;
			}
			router.push("/signin");
		} catch (err) {
			setError("Network error");
		}
	};

	return (
		<section className="p-8 max-w-md mx-auto">
			<h2 className="text-2xl font-bold mb-4">Sign Up</h2>
			<form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
				<input
					name="name"
					type="text"
					placeholder="Name"
					className="border rounded p-2"
					value={form.name}
					onChange={handleChange}
					required
				/>
				<input
					name="email"
					type="email"
					placeholder="Email"
					className="border rounded p-2"
					value={form.email}
					onChange={handleChange}
					required
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					className="border rounded p-2"
					value={form.password}
					onChange={handleChange}
					required
				/>
				<button
					type="submit"
					className="bg-green-600 text-white px-4 py-2 rounded">
					Sign Up
				</button>
			</form>
			{error && <p className="text-red-600 mt-2">{error}</p>}
			<p className="mt-4 text-sm">
				Already have an account?{" "}
				<a href="/signin" className="text-blue-600 underline">
					Sign In
				</a>
			</p>
		</section>
	);
}
