import { LoaderCircle } from "lucide-react";

const Loading = () => {
	return (
		<div className="min-h-[60vh] w-full flex items-center justify-center gap-2">
			<LoaderCircle className="h-8 w-8 animate-spin text-green-600 text-2xl" />{" "}
			লোড হচ্ছে...
		</div>
	);
};

export default Loading;
