import AllProducts from "@/components/home/AllProducts";
import { Suspense } from "react";

const Products = () => {
	return (
		<div className="wrapper mb-10">
			<Suspense fallback={<div>Loading...</div>}>
				<AllProducts />
			</Suspense>
		</div>
	);
};

export default Products;
