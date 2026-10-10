import type { Metadata } from "next";
import { Noto_Serif_Bengali, Inter } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";

const notoSerifBengali = Noto_Serif_Bengali({
	variable: "--font-noto-serif-bengali",
	subsets: ["latin", "bengali"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Bazar Dor BD",
	description: "Bazar Dor is a Bangladeshi market price tracker website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${notoSerifBengali.variable} ${inter.variable} antialiased`}
		>
			<body>
				<HeaderSection />
				{children}
				<Toaster position="top-center" reverseOrder={false} />
				<Footer />
			</body>
		</html>
	);
}
