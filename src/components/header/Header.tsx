import NavList from "./NavList";
import Marquee from "./Marquee";
import Logo from "../ui/Logo";
import Link from "next/link";

const HeaderSection = () => {
	return (
		<header className="mt-2 bg-white-secondary">
			<div className="wrapper flex justify-between items-center">
				{/* Logo */}
				<Logo />

				{/* Profile menu  */}
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
			</div>

			<NavList />
			<Marquee />
		</header>
	);
};

export default HeaderSection;
