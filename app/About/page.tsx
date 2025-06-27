"use client";

// import Navbar from "../components/Navbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
	return (
		<>
			<Navbar />
			<section className="p-8 max-w-2xl mx-auto">
				<div className="flex flex-col items-center text-center">
					<img
						src="/author.jpg"
						alt="Author"
						className="w-32 h-32 rounded-full mb-4"
					/>
					<h2 className="text-2xl font-bold mb-2">About the Author</h2>
					<p className="text-gray-700">
						{/* Replace with your bio */}
						Hi! I am Author Name, a passionate writer of fiction and
						non-fiction. My mission is to inspire and entertain readers
						around the world.
					</p>
				</div>
			</section>
			<Footer />
		</>
	);
}
