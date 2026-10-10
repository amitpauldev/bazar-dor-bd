import { ProductType } from "@/types/type";
import ProductCard from "../ui/ProductCard";
import getApiBaseURL from "@/baseurl/base-url";

const AllProducts = async () => {
	const baseURL = await getApiBaseURL();
	const res = await fetch(`${baseURL}/products`);
	const data: ProductType[] = await res.json();

	return (
		<div id="allProducts" className="mt-8">
			<h2 className="text-2xl font-bold text-gray-900 mt-3 mb-1">সব পণ্য</h2>
			<span className="text-sm text-gray-500">
				মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হয়েছে
			</span>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
				{data.map((item) => (
					<ProductCard key={item.id} product={item} />
				))}
			</div>
		</div>
	);
};

export default AllProducts;
