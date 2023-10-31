import "@/app/global.css";
import { useTranslations } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/app/[locale]/providers";
import { notFound } from "next/navigation";

import Header from "@global-components/Header";
import Footer from "@global-components/Footer";

const locales = ["en", "fr"];

function MainLayout({ children }) {
	const t = useTranslations("HeaderFooter");
	const keys = ["about", "projects", "contact"];

	return (
		<div className="flex w-full">
			<div className="fixed inset-0 flex justify-center sm:px-8">
				<div className="flex w-full max-w-7xl lg:px-8">
					<div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-[#101827] dark:ring-zinc-300/20" />
				</div>
			</div>
			<div className="relative flex w-full flex-col">
				<Header
					labels={keys.map((key) => {
						return { label: t(key), href: key !== "about" ? `/#${key}` : "/#" };
					})}
				/>
				<main className="flex-auto">{children}</main>
				<Footer
					labels={keys.map((key) => {
						return { label: t(key), href: key !== "about" ? `#/${key}` : "/#" };
					})}
				/>
			</div>
		</div>
	);
}

export const metadata = {
	title: {
		template: "%s - Joachim Jasmin",
		default: "Joachim Jasmin - Développeur, Formateur et Cuistot en herbe",
	},
	description:
		"Je m'appelle Joachim Jasmin. Je suis développeur web et mobile full-stack, basé à Paris. En parrallèle, je suis également Teacher à La Capsule Coding Bootcamp et cuistot en herbe.",
};

export default function LocaleLayout({ children, params: { locale } }) {
	const isValidLocale = locales.some((cur) => cur === locale);
	if (!isValidLocale) notFound();

	return (
		<html lang={locale} className="h-full antialiased" suppressHydrationWarning>
			<body className="flex h-full bg-zinc-50 dark:bg-[#0d1b2a]">
				<Providers>
					<MainLayout>{children}</MainLayout>
				</Providers>
				<Analytics />
			</body>
		</html>
	);
}
