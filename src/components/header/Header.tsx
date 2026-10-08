import NavList from "./NavList";
import Marquee from "./Marquee";
import Logo from "../ui/Logo";

const HeaderSection = () => {
	return (
		<header className="mt-2 bg-white-secondary">
			<div className="wrapper flex justify-between items-center">
				{/* Logo */}
				<Logo />

				{/* Profile menu  */}
				<div className="flex flex-col gap-1.5">
					<div>A</div>
					<div>B</div>
				</div>
			</div>

			<NavList />
			<Marquee />
		</header>
	);
};

export default HeaderSection;
