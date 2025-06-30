"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Store() {
	return (
		<>
			<Navbar />
			<section className="bg-amber-100 p-4 sm:p-6 md:p-8 w-full min-h-screen flex flex-col items-center text-center">
				<h2 className="text-2xl font-serif text-amber-900 font-bold mb-2">
					Store
				</h2>
				<p className="text-gray-700 font-serif">
					Browse and purchase my books and literary merchandise.
				</p>
				{/* Add your store items here */}
			</section>
			<Footer />
		</>
	);
}
