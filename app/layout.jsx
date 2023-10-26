import MainLayout from "@/app/components/MainLayout";
import { Providers } from "@/app/providers";

import "@/app/styles/tailwind.css";

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
				<Providers>
					<MainLayout>{children}</MainLayout>
				</Providers>
			</body>
		</html>
	);
}
