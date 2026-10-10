"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowLeft, LoaderCircle, Pencil } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const UpdateProfile = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);
	const [name, setName] = useState("");

	const { data: session, isPending } = authClient.useSession();

	const user = session?.user;

	// Update the profile name
	const handleNameUpdate = async () => {
		if (!name.trim()) {
			alert("নাম লিখুন।");
			return;
		}

		setIsUpdating(true);

		try {
			const { error } = await authClient.updateUser({
				name: name.trim(),
			});

			if (error) {
				alert(error.message || "নাম আপডেট করা যায়নি।");
				return;
			}

			setIsEditing(false);
			alert("আপনার নাম সফলভাবে আপডেট হয়েছে।");
		} catch {
			alert("একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।");
		} finally {
			setIsUpdating(false);
		}
	};

	if (isPending) {
		return (
			<div className="flex min-h-[60vh] items-center justify-center">
				<LoaderCircle className="h-8 w-8 animate-spin text-green-600" />
			</div>
		);
	}

	return (
		<main className="mx-auto max-w-lg px-4 py-40">
			<div className="rounded-xl border border-gray-300 p-5 flex flex-col">
				<div className="flex items-center justify-between gap-3">
					<div>
						<h2 className="text-lg font-semibold text-gray-900">আপনার নাম</h2>
						<p className="mt-1 text-sm text-gray-500">
							আপনার প্রোফাইলে প্রদর্শিত নাম।
						</p>
					</div>

					{!isEditing && (
						<button
							type="button"
							onClick={() => {
								setName(user?.name || "User");
								setIsEditing(true);
							}}
							className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700 cursor-pointer"
						>
							<Pencil size={16} />
							নাম আপডেট
						</button>
					)}
				</div>

				{isEditing ? (
					<div className="mt-4 space-y-3">
						<input
							type="text"
							value={name}
							onChange={(event) => setName(event.target.value)}
							placeholder="আপনার নাম লিখুন"
							maxLength={100}
							className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
						/>

						<div className="flex flex-wrap gap-3">
							<button
								type="button"
								disabled={isUpdating || !name.trim()}
								onClick={handleNameUpdate}
								className="cursor-pointer rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
							>
								{isUpdating ? "আপডেট হচ্ছে..." : "পরিবর্তন সংরক্ষণ"}
							</button>

							<button
								type="button"
								disabled={isUpdating}
								onClick={() => setIsEditing(false)}
								className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2.5 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
							>
								বাতিল
							</button>
						</div>
					</div>
				) : (
					<p className="mt-4 rounded-lg bg-gray-50 px-4 py-3 font-medium text-gray-800">
						{user?.name}
					</p>
				)}
			</div>
			<Link
				href="/profile"
				className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 cursor-pointer"
			>
				<ArrowLeft size={18} />
				প্রোফাইলে ফিরুন
			</Link>
		</main>
	);
};

export default UpdateProfile;
