import getApiBaseURL from "@/baseurl/base-url";
import { ProductType } from "@/types/type";
import MarqueeText from "react-marquee-text";

const Marquee = async () => {
	const baseURL = await getApiBaseURL();
	const res = await fetch(`${baseURL}/products`);
	const data: ProductType[] = await res.json();

	return (
		<div className="bg-green-50 border-y-2 border-gray-100 shadow">
			<MarqueeText direction="right">
				{data.map((item) => (
					<div
						key={item.id}
						className="py-2 px-4 border-x border-gray-100 bg-white"
					>
						<div className="flex items-center gap-1 text-sm">
							<span>{item.image}</span>
							<span>{item.nameBn}</span>
							<span>{item.today.toLocaleString("bn-BD")}</span>
							<span>
								টাকা/
								{item.unit === "kg"
									? "কেজি"
									: item.unit === "litre"
										? "লিটার"
										: item.unit === "dozen"
											? "ডজন "
											: item.unit}
							</span>
							<span
								className={`${item.change.dir === "up" ? "text-red-600" : "text-green-600"}`}
							>
								{item.change.dir === "up"
									? "▲"
									: item.change.dir === "down"
										? "▼"
										: "≈"}{" "}
								{Math.abs(item.change.pct).toLocaleString("bn-BD")}%
							</span>
						</div>
					</div>
				))}
			</MarqueeText>
		</div>
	);
};

export default Marquee;
