import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		template: "%s - Joachim Jasmin",
		default: "Joachim Jasmin - Développeur, Formateur et Cuistot en herbe",
	},
	description:
		"Je m'appelle Joachim Jasmin. Je suis développeur web et mobile full-stack, basé à Paris. En parrallèle, je suis également Teacher à La Capsule Coding Bootcamp et cuistot en herbe.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr" className="h-full antialiased" suppressHydrationWarning>
			<body className="flex h-full bg-zinc-50 dark:bg-[#0d1b2a]">
				<div className="fixed inset-0 flex justify-center sm:px-8">
					<div className="flex w-full max-w-7xl lg:px-8">
						<div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-[#101827] dark:ring-zinc-300/20" />
					</div>
				</div>
				<div className="relative flex w-full flex-col">
					<Header />
					<main className="flex-auto">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
