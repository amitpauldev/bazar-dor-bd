import Link from "next/link";
import React from "react";

const NavList = async () => {
	const res = await fetch(
		"https://api.api-store.workers.dev/api/bazardor/categories",
	);
	const data: { id: string; nameBn: string; slug: string; icon: string }[] =
		await res.json();

	return (
		<nav className="mt-2 border-y border-gray-200 py-3">
			<ul className="wrapper flex flex-wrap items-center gap-4 sm:gap-8 text-sm px-6">
				{data.map((item) => (
					<li key={item.id}>
						<Link href={`/category/${item.slug}`}>
							<span>{item.icon}</span>
							<span className="ml-1">{item.nameBn}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavList;
