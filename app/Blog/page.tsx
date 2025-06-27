"use client";
import Link from "next/link";
// import Navbar from "../components/Navbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Blog() {
	return (
		<>
			<Navbar />
			<section className="p-8 max-w-3xl mx-auto">
				<h2 className="text-2xl font-bold mb-4">Blog</h2>
				<ul>
					<li className="mb-4">
						<Link
							href="/blog/my-first-post"
							className="text-blue-600 hover:underline font-semibold">
							My First Blog Post
						</Link>
						<p className="text-gray-500 text-sm">June 2025</p>
					</li>
					{/* Repeat for more posts */}
				</ul>
			</section>
			<Footer />
		</>
	);
}
