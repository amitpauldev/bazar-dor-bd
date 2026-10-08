import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<Link href="/">
			<div className="flex items-center gap-2">
				<span className="text-2xl bg-primary p-1.5 rounded-xl">🛒</span>
				<div className="flex flex-col">
					<span className="text-xl font-extrabold">বাজার দর</span>
					<span className="text-sm text-gray-600 tracking-tighter">
						{new Date().toLocaleString("bn-BD", {
							weekday: "long",
							day: "numeric",
							month: "long",
							year: "numeric",
						})}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default Logo;
