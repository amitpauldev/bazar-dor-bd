import Link from "next/link";

const NotFound = () => {
	return (
		<main className="min-h-[70vh] flex items-center justify-center px-4">
			<div className="text-center">
				<p className="text-8xl font-bold text-primary">404</p>

				<h1 className="mt-4 text-2xl font-bold text-dark">
					পৃষ্ঠা খুঁজে পাওয়া যায়নি
				</h1>

				<p className="mt-2 text-gray-500">
					দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি পাওয়া যায়নি।
				</p>

				<Link
					href="/"
					className="mt-6 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:opacity-90"
				>
					হোম পেজে ফিরে যান
				</Link>
			</div>
		</main>
	);
};

export default NotFound;
