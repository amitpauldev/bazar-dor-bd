import Link from "next/link";
import { ArrowLeft, PackageSearch } from "lucide-react";

const CategoryEmptyState = ({
	title = "কোনো পণ্য পাওয়া যায়নি",
	description = "এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য পাওয়া যাচ্ছে না।",
}: {
	title?: string;
	description?: string;
}) => {
	return (
		<section className="flex min-h-[60vh] items-center justify-center px-4 py-16">
			<div className="w-full max-w-md text-center">
				{/* Icon */}
				<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
					<PackageSearch className="h-10 w-10 text-primary" />
				</div>

				{/* 404 */}
				<p className="mt-6 text-sm font-semibold tracking-wider text-primary uppercase">
					404
				</p>

				{/* Title */}
				<h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
					{title}
				</h1>

				{/* Description */}
				<p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500 sm:text-base">
					{description}
				</p>

				{/* CTA */}
				<Link
					href="/"
					className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
				>
					<ArrowLeft className="h-4 w-4" />
					হোম পেজে ফিরে যান
				</Link>
			</div>
		</section>
	);
};

export default CategoryEmptyState;
