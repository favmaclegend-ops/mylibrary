"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<section className="bg-amber-100 p-4 sm:p-6 md:p-8 w-full min-h-screen flex flex-col items-center text-center">
				<img
					src="/author.jpg"
					alt="Author"
					className="w-32 h-32 rounded-full mb-4 shadow"
				/>
				<h1 className="text-3xl font-serif text-amber-900 font-bold mb-2">
					Welcome to Author Name's Website
				</h1>
				<p className="text-gray-700 font-serif">
					Discover my books, read the blog, and join the newsletter for
					updates!
				</p>
			</section>
			<Footer />
		</>
	);
}
