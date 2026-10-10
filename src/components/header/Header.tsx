import NavList from "./NavList";
import Marquee from "./Marquee";
import Logo from "../ui/Logo";
import Link from "next/link";
import AuthButton from "./AuthButton";

const HeaderSection = () => {
	return (
		<header className="mt-2 bg-white-secondary">
			<div className="wrapper flex justify-between items-center">
				{/* Logo */}
				<Logo />

				{/* Profile menu  */}
				<AuthButton />
			</div>

			<NavList />
			<Marquee />
		</header>
	);
};

export default HeaderSection;
