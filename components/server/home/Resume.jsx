import Image from "next/image";
import { useTranslations } from "next-intl";
import { BriefcaseIcon } from "@heroicons/react/20/solid";

import ResumeDownload from "@/components/client/home/ResumeDownloader";

import { resume } from "@static";

function Role({ role }) {
	const t = useTranslations("Resume");
	let startLabel = typeof role.start === "string" ? role.start : role.start.label;
	let startDate = typeof role.start === "string" ? role.start : role.start.dateTime;

	let endLabel = typeof role.end === "string" ? role.end : role.end.label;
	let endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

	return (
		<li className="flex gap-4">
			<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
				<Image src={role.logo} alt={role.company} width={640} height={640} className="h-7 w-7" unoptimized />
			</div>
			<dl className="flex flex-auto flex-wrap gap-x-2">
				<dt className="sr-only">Company</dt>
				<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{role.company}</dd>
				<dt className="sr-only">Role</dt>
				<dd className="text-xs text-zinc-500 dark:text-zinc-400">{t(role.title)}</dd>
				<dt className="sr-only">Date</dt>
				<dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label={`${startLabel} until ${endLabel}`}>
					<time dateTime={startDate}>{startLabel}</time> <span aria-hidden="true">—</span> <time dateTime={endDate}>{endLabel}</time>
				</dd>
			</dl>
		</li>
	);
}

export default function Resume() {
	const t = useTranslations("Resume");
	return (
		<div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<BriefcaseIcon className="h-6 w-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
				<span className="ml-3">{t("title")}</span>
			</h2>
			<ol className="mt-10 space-y-4">
				{resume.map((role, roleIndex) => (
					<Role key={roleIndex} role={role} />
				))}
			</ol>
			<ResumeDownload button={t("download")} />
		</div>
	);
}
