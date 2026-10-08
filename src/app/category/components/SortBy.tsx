"use client";

import { ArrowDownUp } from "lucide-react";

const SortBy = ({
	setSort,
}: {
	setSort: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return (
		<div className="flex items-center gap-3">
			<label
				htmlFor="sort"
				className="flex items-center gap-2 text-sm font-medium text-gray-700"
			>
				<ArrowDownUp className="h-4 w-4 text-primary" />
				<span>সাজান</span>
			</label>

			<select
				onChange={(e) => setSort(e.target.value)}
				id="sort"
				className="cursor-pointer rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
				defaultValue="default"
			>
				<option value="default">ডিফল্ট</option>
				<option value="price-low">দাম: কম থেকে বেশি</option>
				<option value="price-high">দাম: বেশি থেকে কম</option>
			</select>
		</div>
	);
};

export default SortBy;
