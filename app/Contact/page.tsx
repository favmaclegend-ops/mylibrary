"use client";
// import Navbar from "../components/Navbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
	return (
		<>
			<Navbar />
			<section className="p-8 max-w-md mx-auto">
				<h2 className="text-2xl font-bold mb-4">Contact</h2>
				<form className="flex flex-col space-y-4">
					<input
						type="text"
						placeholder="Your Name"
						className="border rounded p-2"
						required
					/>
					<input
						type="email"
						placeholder="Your Email"
						className="border rounded p-2"
						required
					/>
					<textarea
						placeholder="Your Message"
						className="border rounded p-2"
						rows={4}
						required
					/>
					<button
						type="submit"
						className="bg-blue-600 text-white px-4 py-2 rounded">
						Send Message
					</button>
				</form>
			</section>
			<Footer />
		</>
	);
}
