"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
	const router = useRouter();
	const [form, setForm] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		try {
			const res = await fetch("http://localhost:5000/api/auth/signin", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});
			const data = await res.json();
			if (!res.ok) {
				setError(data.msg || "Sign in failed");
				return;
			}
			// Save token to localStorage or cookie if needed
			localStorage.setItem("token", data.token);
			router.push("/");
		} catch (err) {
			console.error(err);
			setError("Network error");
		}
	};

	return (
		<section className="p-8 max-w-md mx-auto">
			<h2 className="text-2xl font-bold mb-4">Sign In</h2>
			<form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
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
					className="bg-blue-600 text-white px-4 py-2 rounded">
					Sign In
				</button>
			</form>
			{error && <p className="text-red-600 mt-2">{error}</p>}
			<p className="mt-4 text-sm">
				Don&apos;t have an account?{" "}
				<a href="/signup" className="text-blue-600 underline">
					Sign Up
				</a>
			</p>
		</section>
	);
}
