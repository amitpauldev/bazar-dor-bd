import { ProductType } from "@/types/type";
import ProductCard from "../ui/ProductCard";
import getApiBaseURL from "@/baseurl/base-url";

const TodayIncrese = async () => {
	const baseURL = await getApiBaseURL();
	const res = await fetch(`${baseURL}/products`);
	const data: ProductType[] = await res.json();

	const todayIncrese = data
		.filter((item) => item.today > item.yesterday)
		.sort((a, b) => b.change.pct - a.change.pct)
		.slice(0, 6);

	return (
		<div className="mt-8">
			<h2 className="text-2xl font-bold text-gray-900 my-3">
				<span className="text-sm text-red-600 mr-2">▲</span>আজ দাম বেড়েছে
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{todayIncrese.map((item) => (
					<ProductCard key={item.id} product={item} />
				))}
			</div>
		</div>
	);
};

export default TodayIncrese;
