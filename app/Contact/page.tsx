"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
	return (
		<>
			<Navbar />
			<section className="p-8 max-w-2xl mx-auto min-h-screen flex flex-col items-center text-center">
				<h2 className="text-2xl font-serif text-amber-900 font-bold mb-2">
					Contact
				</h2>
				<p className="text-gray-700 font-serif mb-4">
					Reach out for collaborations, questions, or just to say hello!
				</p>
				<form className="flex flex-col space-y-4 w-full max-w-md mx-auto">
					<input
						type="text"
						placeholder="Your Name"
						className="border border-amber-700 rounded-full p-2 shadow font-serif"
						required
					/>
					<input
						type="email"
						placeholder="Your Email"
						className="border border-amber-700 rounded-full p-2 shadow font-serif"
						required
					/>
					<textarea
						placeholder="Your Message"
						className="border border-amber-700 rounded-lg p-2 shadow font-serif"
						rows={4}
						required
					/>
					<button
						type="submit"
						className="bg-amber-700 text-white px-4 py-2 rounded shadow hover:bg-amber-800 transition font-serif">
						Send Message
					</button>
				</form>
			</section>
			<Footer />
		</>
	);
}
