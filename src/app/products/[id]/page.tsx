import getApiBaseURL from "@/baseurl/base-url";
import { SingleProductType } from "@/types/singleProductType";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const ProductDetailPage = async ({
	params,
}: {
	params: Promise<{ id: string }>;
}) => {
	const { id } = await params;

	const baseURL = await getApiBaseURL();
	const res = await fetch(`${baseURL}/products/${id}`);
	const product: SingleProductType = await res.json();

	if (!res.ok) {
		return notFound();
	}

	return (
		<main className="wrapper py-10">
			{/* Breadcrumbs */}
			<div className="flex gap-2 text-sm text-gray-500">
				<Link href="/">হোম</Link>
				<ChevronRight />
				<Link href={`/category/${product.category}`}>
					{product.categoryNameBn}
				</Link>
				<ChevronRight />
				<span>{product.nameBn}</span>
			</div>

			<div className="my-5 flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white-primary p-4">
				<div className="flex gap-4">
					<span className="text-5xl bg-green-50 border border-gray-200 py-4 px-3 rounded-xl">
						{product.image}
					</span>

					<div className="flex flex-col">
						<h1 className="text-3xl font-extrabold">{product.nameBn}</h1>

						<span className="text-sm text-gray-500">
							প্রতি{" "}
							{product.unit === "kg"
								? "কেজি"
								: product.unit === "litre"
									? "লিটার"
									: product.unit === "dozen"
										? "ডজন "
										: product.unit === "piece"
											? "পিস"
											: product.unit}{" "}
							· {product.categoryNameBn}
						</span>

						<span className="text-sm text-gray-600 mt-3">
							গতকালের তুলনায় আজ দাম বেড়েছে ·{" "}
							{(product.today - product.yesterday).toLocaleString("bn-BD")} টাকা
						</span>
					</div>
				</div>

				<div className="flex flex-col items-center py-2 px-4 rounded-xl bg-green-50 border border-gray-200">
					<span className="text-sm text-gray-600 text-nowrap">আজকের দাম</span>
					<span className="text-3xl font-bold">
						{product.today.toLocaleString("bn-BD")}
					</span>
					<span className="text-sm text-gray-600">
						টাকা /{" "}
						{product.unit === "kg"
							? "কেজি"
							: product.unit === "litre"
								? "লিটার"
								: product.unit === "dozen"
									? "ডজন "
									: product.unit === "piece"
										? "পিস"
										: product.unit}
					</span>
					<span
						className={`${product.change.dir === "up" ? "text-red-600" : product.change.dir === "down" ? "text-green-600" : "text-gray-600"} py-1 px-2 rounded-xl text-sm font-semibold text-nowrap`}
					>
						<span className="text-[12px] mr-1">
							{product.change.dir === "up"
								? "▲"
								: product.change.dir === "down"
									? "▼"
									: "≈"}{" "}
						</span>
						<span>{Math.abs(product.change.pct).toLocaleString("bn-BD")}%</span>
					</span>
				</div>
			</div>

			<div className="my-5 flex flex-col gap-8 rounded-xl border border-gray-200 bg-white-primary p-4">
				<div>
					<h2 className="text-xl font-extrabold mb-3">দামের সারসংক্ষেপ</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
						<div className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-white-primary py-2 px-4">
							<span className="text-sm text-gray-600">সর্বনিম্ন দাম</span>
							<div className="text-green-700">
								<span className="text-3xl font-bold">
									{Math.min(
										...product.markets.map((item) => item.min),
									).toLocaleString("bn-BD")}
								</span>
								<span>টাকা</span>
							</div>
							<span className="text-sm text-gray-600">
								সবচেয়ে কম দামের বাজার
							</span>
						</div>

						<div className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-white-primary py-2 px-4">
							<span className="text-sm text-gray-600">সর্বোচ্চ দাম</span>
							<div className="text-red-700">
								<span className="text-3xl font-bold">
									{Math.max(
										...product.markets.map((item) => item.max),
									).toLocaleString("bn-BD")}
								</span>
								<span>টাকা</span>
							</div>
							<span className="text-sm text-gray-600">
								সবচেয়ে বেশি দামের বাজার
							</span>
						</div>

						<div className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-white-primary py-2 px-4">
							<span className="text-sm text-gray-600">গড় দাম</span>
							<div className="text-green-800">
								<span className="text-3xl font-bold">
									{(
										(Math.min(...product.markets.map((item) => item.min)) +
											Math.max(...product.markets.map((item) => item.max))) /
										2
									).toLocaleString("bn-BD")}
								</span>
								<span>টাকা</span>
							</div>
							<span className="text-sm text-gray-600">
								প্রতি{" "}
								{product.unit === "kg"
									? "কেজি"
									: product.unit === "litre"
										? "লিটার"
										: product.unit === "dozen"
											? "ডজন "
											: product.unit === "piece"
												? "পিস"
												: product.unit}{" "}
								হিসাবে
							</span>
						</div>
					</div>
				</div>

				<div>
					<h2 className="text-xl font-extrabold mb-3">
						বাজারভিত্তিক আজকের দাম
					</h2>
					<div className="bg-white-primary rounded-xl border border-gray-200 overflow-hidden">
						<div className="overflow-x-auto">
							<table className="w-full border-collapse text-sm">
								<thead>
									<tr className="bg-gray-50 text-gray-900 font-extrabold text-lg">
										<th className="border border-gray-200 px-3 py-3 text-left">
											বাজার
										</th>
										<th className="border border-gray-200 px-3 py-3 text-left">
											বিভাগ
										</th>
										<th className="border border-gray-200 px-3 py-3 text-right">
											সর্বনিম্ন
										</th>
										<th className="border border-gray-200 px-3 py-3 text-right">
											সর্বোচ্চ
										</th>
										<th className="border border-gray-200 px-3 py-3 text-right">
											গড়
										</th>
									</tr>
								</thead>

								<tbody>
									{product.markets
										.sort((a, b) => a.min - b.min)
										.map((market, index) => {
											const average = (market.min + market.max) / 2;

											return (
												<tr
													key={`${market.market}-${index}`}
													className="transition-colors hover:bg-blue-50/50"
												>
													<td className="border border-gray-200 px-3 py-3 font-medium text-gray-800">
														{market.market}
													</td>
													<td className="border border-gray-200 px-3 py-3 text-gray-700">
														{market.division}
													</td>
													<td className="border border-gray-200 px-3 py-3 text-right text-gray-700">
														{market.min.toLocaleString("bn-BD")} টাকা
													</td>
													<td className="border border-gray-200 px-3 py-3 text-right text-gray-700">
														{market.max.toLocaleString("bn-BD")} টাকা
													</td>
													<td className="border border-gray-200 px-3 py-3 text-right font-bold text-gray-900">
														{average.toLocaleString("bn-BD", {
															minimumFractionDigits: 0,
															maximumFractionDigits: 2,
														})}{" "}
														টাকা
													</td>
												</tr>
											);
										})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ProductDetailPage;
