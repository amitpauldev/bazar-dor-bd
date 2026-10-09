"use client";

import Link from "next/link";
import {} from "lucide-react";
import { useState } from "react";

const SignInPage = () => {
	const [inValid, setInValid] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		const formValues = Object.fromEntries(formData.entries());
		console.log(formValues);

		// Continue with your signup logic here
	};

	return (
		<main className="min-h-screen bg-background px-4 py-10 sm:py-14">
			<div className="mx-auto w-full max-w-90">
				{/* Header */}
				<div className="mb-6 text-center">
					<h1 className="text-xl font-extrabold text-[#26352B]">সাইন ইন</h1>
					<p className="mt-1 text-xs text-gray-500">
						পণের বিস্তারিত ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
					</p>
				</div>

				{/* Sign Up Form */}
				<div className="rounded-xl border border-gray-100 bg-white/80 p-5 sm:p-6">
					<form className="space-y-3" onSubmit={handleSubmit}>
						{/* Email */}
						<div>
							<label
								htmlFor="email"
								className="mb-1 block text-xs font-semibold text-gray-700"
							>
								ইমেইল
							</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
							/>
						</div>

						{/* Password */}
						<div>
							<label
								htmlFor="password"
								className="mb-1 block text-xs font-semibold text-gray-700"
							>
								পাসওয়ার্ড
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="new-password"
								required
								className="h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
							/>
						</div>
						{inValid && (
							<p className="mt-1 text-xs text-red-500">
								ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।
							</p>
						)}

						{/* Submit */}
						<button
							type="submit"
							className="h-9 w-full rounded-md border border-emerald-500 bg-transparent text-sm font-semibold text-emerald-700 transition hover:bg-emerald-600 hover:text-white cursor-pointer"
						>
							অ্যাকাউন্টে ঢুকুন
						</button>
					</form>

					{/* Divider */}
					<div className="my-4 flex items-center gap-3">
						<div className="h-px flex-1 bg-gray-200" />
						<span className="text-xs text-gray-500">অথবা</span>
						<div className="h-px flex-1 bg-gray-200" />
					</div>

					{/* Social Sign Up */}
					<div className="grid grid-cols-2 gap-2">
						<button
							type="button"
							className="flex h-9 items-center justify-center gap-1.5 rounded-md border border-gray-200 text-[11px] font-medium text-gray-700 transition hover:bg-gray-50 cursor-pointer"
						>
							<svg
								viewBox="0 0 48 48"
								className="h-3.5 w-3.5"
								aria-hidden="true"
							>
								<path
									fill="#4285F4"
									d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
								/>
								<path
									fill="#34A853"
									d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
								/>
								<path
									fill="#FBBC05"
									d="M12.6 27.5a12 12 0 0 1 0-7v-5.3H5.8a20 20 0 0 0 0 17.6l6.8-5.3Z"
								/>
								<path
									fill="#EA4335"
									d="M24 12.1c3 0 5.7 1 7.8 3.1l5.9-5.9C34.1 6 29.5 4 24 4A20 20 0 0 0 5.8 15.2l6.8 5.3c1.6-4.8 6.1-8.4 11.4-8.4Z"
								/>
							</svg>
							Google দিয়ে চালিয়ে যান
						</button>

						<button
							type="button"
							className="flex h-9 items-center justify-center gap-1.5 rounded-md border border-gray-200 text-[11px] font-medium text-gray-700 transition hover:bg-gray-50 cursor-pointer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="15"
								height="15"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
							</svg>
							GitHub দিয়ে চালিয়ে যান
						</button>
					</div>

					{/* Sign In Link */}
					<p className="mt-4 text-center text-xs text-gray-500">
						অ্যাকাউন্ট নেই?{" "}
						<Link
							href="/sign-up"
							className="font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
						>
							সাইন আপ করুন
						</Link>
					</p>
				</div>

				{/* Back Link */}
				<p className="mt-5 text-center text-xs text-gray-400">
					<Link href="/" className="transition hover:text-emerald-600">
						← হোম পেজে ফিরে যান
					</Link>
				</p>
			</div>
		</main>
	);
};

export default SignInPage;
