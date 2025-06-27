"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		// Check for token in localStorage
		setLoggedIn(!!localStorage.getItem("token"));
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.href = "/signin";
	};

	return (
		<nav className="flex items-center justify-between p-4 bg-white shadow">
			<div className="flex items-center space-x-2">
				<img
					src="/author.jpg"
					alt="Author"
					className="h-8 w-8 rounded-full"
				/>
				<span className="font-bold text-lg">Author Name</span>
			</div>
			<div className="space-x-4 flex items-center">
				<Link href="/">Home</Link>
				<Link href="/Books">Books</Link>
				<Link href="/About">About</Link>
				<Link href="/Blog">Blog</Link>
				<Link href="/Store">Store</Link>
				<Link href="/Contact">Contact</Link>
				{loggedIn && (
					<button
						onClick={handleLogout}
						className="bg-red-500 text-white px-3 py-1 rounded">
						Logout
					</button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
