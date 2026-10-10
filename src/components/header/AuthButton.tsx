"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowUpRight, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AuthButton = () => {
	const { data: session } = authClient.useSession();
	const user = session?.user;

	return (
		<div>
			{user ? (
				<Link href="/profile">
					<div className="flex gap-3 items-center">
						<div className="relative h-8 w-8 shrink-0">
							{user?.image ? (
								<Image
									src={user.image}
									alt="প্রোফাইল ছবি"
									fill
									sizes="96px"
									className="rounded-lg border-4 border-green-100 object-cover"
								/>
							) : (
								<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-700">
									<UserRound size={20} />
								</div>
							)}
						</div>

						<h2 className="text-lg font-semibold text-gray-900">
							{user?.name}
						</h2>
					</div>
				</Link>
			) : (
				<div className="flex items-center text-sm">
					<Link
						href="/sign-in"
						className="px-3 py-1 rounded-xl hover:underline"
					>
						সাইন ইন
					</Link>
					<Link
						href="/sign-up"
						className="px-3 py-1 bg-primary rounded-xl text-white hover:bg-primary/90 transition-all duration-300"
					>
						সাইন আপ
					</Link>
				</div>
			)}
		</div>
	);
};

export default AuthButton;
