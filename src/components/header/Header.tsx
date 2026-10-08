import NavList from "./NavList";
import Marquee from "./Marquee";

const HeaderSection = () => {
	return (
		<header className="mt-2 bg-white-secondary">
			<div className="wrapper flex justify-between items-center">
				{/* Logo */}
				<div className="flex items-center gap-2">
					<span className="text-2xl bg-primary p-1.5 rounded-xl">🛒</span>
					<div className="flex flex-col">
						<span className="text-xl font-extrabold">বাজার দর</span>
						<span className="text-sm text-gray-600 tracking-tighter">
							{new Date().toLocaleString("bn-BD", {
								weekday: "long",
								day: "numeric",
								month: "long",
								year: "numeric",
							})}
						</span>
					</div>
				</div>

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
