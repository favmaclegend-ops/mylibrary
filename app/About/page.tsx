"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
	return (
		<>
			<Navbar />
			<section className="bg-amber-100 p-4 sm:p-6 md:p-8 w-full min-h-screen flex flex-col items-center text-center">
				<img
					src="/author.jpg"
					alt="Author"
					className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mb-4 shadow"
				/>
				<h2 className="text-xl sm:text-2xl font-serif text-amber-900 font-bold mb-2">
					About the Author
				</h2>
				<p className="text-gray-700 font-serif text-base sm:text-lg max-w-md">
					Hi! I am Author Name, a passionate writer of fiction and
					non-fiction. My mission is to inspire and entertain readers
					around the world.
				</p>
			</section>
			<Footer />
		</>
	);
}
