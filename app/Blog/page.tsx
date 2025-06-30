"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Blog() {
	return (
		<>
			<Navbar />
			<section className="p-8 max-w-3xl mx-auto min-h-screen flex flex-col items-center text-center">
				<h2 className="text-2xl font-serif text-amber-900 font-bold mb-2">
					Blog
				</h2>
				<p className="text-gray-700 font-serif">
					Read my latest thoughts, stories, and literary adventures.
				</p>
				{/* Add your blog posts here */}
			</section>
			<Footer />
		</>
	);
}
