"use client";

import { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { ProductType } from "@/types/type";
import SortBy from "./SortBy";

const CategoryProducts = ({ products }: { products: ProductType[] }) => {
	const [sort, setSort] = useState("default");

	const sortedProducts = [...products].sort((a, b) => {
		if (sort === "price-low") {
			return a.today - b.today;
		}

		if (sort === "price-high") {
			return b.today - a.today;
		}

		return 0;
	});

	return (
		<>
			<div className="my-5 flex items-center justify-end gap-2 rounded-xl border border-gray-200 bg-white-primary p-4">
				<SortBy setSort={setSort} />
			</div>

			<div>
				<span className="text-sm text-gray-500">
					মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হয়েছে
				</span>

				<div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{sortedProducts.map((item) => (
						<ProductCard key={item.id} product={item} />
					))}
				</div>
			</div>
		</>
	);
};

export default CategoryProducts;
