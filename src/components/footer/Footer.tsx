import Link from "next/link";
import Logo from "../ui/Logo";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-gray-200 bg-white">
			<div className="wrapper py-10">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* Brand */}
					<div className="lg:col-span-2">
						<Logo />

						<p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
							বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
						</p>

						<p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">
							সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold text-gray-900">দ্রুত লিংক</h3>

						<ul className="mt-4 space-y-3 text-sm">
							<li>
								<Link
									href="/"
									className="text-gray-600 transition hover:text-primary"
								>
									হোম
								</Link>
							</li>

							<li>
								<Link
									href="/products"
									className="text-gray-600 transition hover:text-primary"
								>
									সব পণ্য
								</Link>
							</li>

							<li>
								<Link
									href="/categories"
									className="text-gray-600 transition hover:text-primary"
								>
									ক্যাটাগরি
								</Link>
							</li>
						</ul>
					</div>

					{/* Information */}
					<div>
						<h3 className="font-semibold text-gray-900">তথ্য</h3>

						<ul className="mt-4 space-y-3 text-sm">
							<li className="text-gray-600 transition hover:text-primary"></li>

							<li className="text-gray-600 transition hover:text-primary">
								গোপনীয়তা নীতি
							</li>

							<li className="text-gray-600 transition hover:text-primary">
								শর্তাবলি
							</li>
						</ul>
					</div>
				</div>

				{/* Disclaimer */}
				<div className="mt-8 rounded-lg bg-green-50 p-4">
					<p className="text-center text-xs leading-5 text-gray-500">
						দ্রষ্টব্য: এখানে প্রদর্শিত পণ্যের দাম শুধুমাত্র তথ্যগত উদ্দেশ্যে
						দেওয়া হয়েছে। প্রকৃত বাজারদর স্থান, সময়, পণ্যের মান ও বাজার
						পরিস্থিতির ওপর নির্ভর করে ভিন্ন হতে পারে।
					</p>
				</div>

				{/* Bottom */}
				<div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row">
					<p>© {currentYear} Amit Paul . সর্বস্বত্ব সংরক্ষিত।</p>

					<p>সঠিক তথ্যের জন্য স্থানীয় বাজারদর যাচাই করুন।</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
