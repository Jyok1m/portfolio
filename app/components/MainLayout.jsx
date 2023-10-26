import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function MainLayout({ children }) {
	return (
		<div className="flex w-full">
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
		</div>
	);
}
