import { ProductType } from "@/types/type";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductType }) => {
	return (
		<Link href={`/product/${product.slug}`}>
			<div className="rounded-xl border border-gray-200 bg-white-primary p-3">
				<div className="flex gap-2">
					<div className="p-2 rounded-xl bg-green-50 border border-gray-200">
						<span className="text-2xl">{product.image}</span>
					</div>
					<div className="flex flex-col">
						<span className="text-xl font-bold">{product.nameBn}</span>
						<span className="text-sm text-gray-600 flex gap-0.5">
							<span>প্রতি</span>
							<span>
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
						</span>
					</div>
				</div>
				<div className="flex justify-between items-center mt-2">
					<div className="flex flex-col">
						<span className="text-sm">আজকের দাম</span>
						<span className="text-xl font-bold">
							{product.today.toLocaleString("bn-BD")}{" "}
							<span className="text-sm text-gray-600">টাকা</span>
						</span>
					</div>
					<div>
						<span
							className={`${product.change.dir === "up" ? "text-red-600 bg-red-50" : product.change.dir === "down" ? "text-green-600 bg-green-50" : "text-gray-600 bg-gray-100"} py-1 px-2 rounded-xl text-sm font-semibold`}
						>
							<span className="text-[12px] mr-1">
								{product.change.dir === "up"
									? "▲"
									: product.change.dir === "down"
										? "▼"
										: "≈"}{" "}
							</span>
							<span>
								{Math.abs(product.change.pct).toLocaleString("bn-BD")}%
							</span>
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
