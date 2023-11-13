import Link from "next/link";
import { useTranslations } from "next-intl";
import { ContainerInner, ContainerOuter } from "@/components/global/Container";

function NavLink({ href, children }) {
	return (
		<Link href={href} className="transition text-zinc-800 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-400">
			{children}
		</Link>
	);
}

export default function Footer({ labels }) {
	const t = useTranslations("HeaderFooter");
	return (
		<footer className=" mt-20 flex-none">
			<ContainerOuter>
				<div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
					<ContainerInner>
						<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
							<div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
								{labels.map(({ label, href }) => (
									<NavLink href={href} key={href}>
										{label}
									</NavLink>
								))}
							</div>
							<p className="text-sm text-zinc-400 dark:text-zinc-500">
								&copy; {new Date().getFullYear()} {t("copyright")}
							</p>
						</div>
					</ContainerInner>
				</div>
			</ContainerOuter>
		</footer>
	);
}
