"use client";

import Image from "next/image";
import { UserRound, LogOut, LoaderCircle, ArrowUpRight } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ProfilePage() {
	const { data: session, isPending } = authClient.useSession();
	const user = session?.user;

	const router = useRouter();

	// Sign out
	const handleSignOut = async () => {
		const confirmed = window.confirm("আপনি কি সাইন আউট করতে চান?");

		if (!confirmed) return;

		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					toast.success("সাইন আউট করা হয়েছে।");
					router.replace("/");
					router.refresh();
				},
				onError: (ctx) => {
					toast.error("সাইন আউট করা যায়নি।");
				},
			},
		});
	};

	if (isPending) {
		return (
			<div className="flex min-h-[60vh] items-center justify-center">
				<LoaderCircle className="h-8 w-8 animate-spin text-green-600" />
			</div>
		);
	}

	if (!user) {
		return (
			<div className="mx-auto max-w-lg px-4 py-20 text-center">
				<h1 className="text-2xl font-bold text-gray-900">
					আপনি সাইন ইন করেননি
				</h1>
				<p className="mt-3 text-gray-600">
					প্রোফাইল দেখতে প্রথমে সাইন ইন করুন।
				</p>
				<a
					href="/sign-in"
					className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
				>
					সাইন ইন করুন
				</a>
			</div>
		);
	}

	return (
		<main className="min-h-screen bg-gray-50 px-4 py-10 sm:py-16">
			<div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
				{/* Header */}
				<div className="bg-linear-to-r from-green-50 to-emerald-100 px-6 py-10 sm:px-10">
					<h1 className="text-3xl font-bold text-gray-900">আমার প্রোফাইল</h1>
					<p className="mt-2 text-gray-600">
						আপনার ব্যক্তিগত তথ্য এখানে দেখুন এবং আপডেট করুন।
					</p>
				</div>

				<div className="space-y-6 p-6 sm:p-10">
					{/* Profile image */}
					<section className="flex gap-5 rounded-xl border border-gray-200 p-5 items-center">
						<div className="relative h-24 w-24 shrink-0">
							{user.image ? (
								<Image
									src={user.image}
									alt="প্রোফাইল ছবি"
									fill
									sizes="96px"
									className="rounded-full border-4 border-green-100 object-cover"
								/>
							) : (
								<div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-700">
									<UserRound size={42} />
								</div>
							)}
						</div>

						<div className="flex-1">
							<h2 className="text-lg font-semibold text-gray-900">
								{user?.name}
							</h2>

							<Link
								href="/profile/update-profile"
								className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
							>
								<ArrowUpRight size={18} />
								আপডেট করুন
							</Link>
						</div>
					</section>

					{/* Email */}
					<section className="rounded-xl border border-gray-200 p-5">
						<h2 className="text-lg font-semibold text-gray-900">
							ইমেইল ঠিকানা
						</h2>
						<p className="mt-1 text-sm text-gray-500">
							আপনার অ্যাকাউন্টের ইমেইল ঠিকানা।
						</p>
						<p className="mt-4 break-all rounded-lg bg-gray-50 px-4 py-3 text-gray-700">
							{user?.email}
						</p>
					</section>

					{/* Sign out */}
					<section className="border-t border-gray-200 pt-6">
						<button
							type="button"
							onClick={handleSignOut}
							className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-100"
						>
							<LogOut size={19} />
							সাইন আউট করুন
						</button>
						<p className="mt-3 text-center text-sm text-gray-500">
							আপনার অ্যাকাউন্ট থেকে নিরাপদে বের হয়ে যান।
						</p>
					</section>
				</div>
			</div>
		</main>
	);
}
