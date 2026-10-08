import getApiBaseURL from "@/baseurl/base-url";
import { ProductType } from "@/types/type";
import { notFound } from "next/navigation";
import CategoryProducts from "../components/CategoryProducts";

const SingleCategoryPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;
	const baseURL = await getApiBaseURL();

	const [categoryRes, productsRes] = await Promise.all([
		fetch(`${baseURL}/categories/${slug}`, {
			cache: "no-store",
		}),
		fetch(`${baseURL}/products?category=${slug}`, {
			cache: "no-store",
		}),
	]);

	if (!categoryRes.ok) {
		notFound();
	}

	if (!productsRes.ok) {
		throw new Error("Failed to fetch category products");
	}

	const category = await categoryRes.json();
	const categoryDetails: ProductType[] = await productsRes.json();

	return (
		<main className="wrapper min-h-[60vh]">
			<div className="my-5 flex items-center gap-2 rounded-xl border border-gray-200 bg-white-primary p-4">
				<span className="text-5xl">{category.icon}</span>

				<div>
					<h1 className="text-xl font-bold">{category.nameBn}</h1>

					<span className="text-sm text-gray-500">
						{categoryDetails.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম
						ও পরিবর্তন
					</span>
				</div>
			</div>

			<CategoryProducts products={categoryDetails} />
		</main>
	);
};

export default SingleCategoryPage;
