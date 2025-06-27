"use client";
// import Navbar from "../components/Navbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function Store() {
	return (
		<>
			<Navbar />
			<section className="p-8 max-w-4xl mx-auto">
				<h2 className="text-2xl font-bold mb-4">Store</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{/* Example product */}
					<div className="bg-white rounded shadow p-4 flex flex-col items-center">
						<img
							src="/book1.jpg"
							alt="Book Title"
							className="w-24 h-36 object-cover mb-2"
						/>
						<h3 className="font-semibold">Book Title</h3>
						<span className="text-green-600 font-bold">$9.99</span>
						<button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded">
							Add to Cart
						</button>
					</div>
					{/* Repeat for more products */}
				</div>
			</section>
			<Footer />
		</>
	);
}
