import AllProducts from "@/components/home/AllProducts";
import TodayDecrese from "@/components/home/TodayDecrese";
import TodayIncrese from "@/components/home/TodayIncrese";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
	return (
		<main className="wrapper">
			<div className="py-2 px-4 mt-5 rounded-xl border border-gray-200 bg-white-primary flex flex-col md:flex-row justify-between items-center md:items-start">
				<div className="md:w-1/2">
					<span className="text-[12px] font-semibold text-primary bg-green-100 rounded-xl px-2 py-1">
						{new Date().toLocaleString("bn-BD", {
							weekday: "long",
							day: "numeric",
							month: "long",
							year: "numeric",
						})}
					</span>
					<h1 className="text-4xl font-bold text-gray-900 my-3">
						আজকের বাজারের দাম এক নজরে
					</h1>
					<p className="text-gray-600 my-5">
						চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
						বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
					</p>

					<a href="#allProducts">
						<button className="bg-primary text-white rounded-xl px-4 py-2 text-sm font-extrabold cursor-pointer hover:bg-primary/80 transition-colors duration-300">
							সবগুলি পণ্য দেখুন
						</button>
					</a>
				</div>
				<div>
					<Image
						src="/assets/bazar-hero.png"
						alt="bazar dor"
						width={400}
						height={400}
					/>
				</div>
			</div>

			<Suspense fallback={<div>Loading...</div>}>
				<TodayIncrese />
				<TodayDecrese />
				<AllProducts />
			</Suspense>
		</main>
	);
}
