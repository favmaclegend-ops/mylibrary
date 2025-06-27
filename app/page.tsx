"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		// Check for token in localStorage
		const token = localStorage.getItem("token");
		if (!token) {
			router.replace("/signin");
		}
	}, [router]);

	// Optionally, you can add a loading state here

	return (
		<>
			<Navbar />
			<section className="p-8 max-w-3xl mx-auto">
				<div className="flex flex-col items-center text-center">
					<img
						src="/author.jpg"
						alt="Author"
						className="w-24 h-24 rounded-full mb-4"
					/>
					<h1 className="text-4xl font-bold mb-2">
						Welcome to Author Names Website
					</h1>
					<p className="mb-6 text-lg text-gray-600">
						Discover my books, read the blog, and join the newsletter for
						updates!
					</p>
				</div>
			</section>
			<Footer />
		</>
	);
}
