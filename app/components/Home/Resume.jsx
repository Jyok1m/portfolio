import Image from "next/image";
import BriefcaseIcon from "../Icons/BriefcaseIcon";
import ArrowDownIcon from "../Icons/ArrowDownIcon";

import Button from "@/app/components/Button";

function Role({ role }) {
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
				<dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
				<dt className="sr-only">Date</dt>
				<dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label={`${startLabel} until ${endLabel}`}>
					<time dateTime={startDate}>{startLabel}</time> <span aria-hidden="true">—</span> <time dateTime={endDate}>{endLabel}</time>
				</dd>
			</dl>
		</li>
	);
}

export default function Resume() {
	let resume = [
		{
			company: "La Capsule",
			title: "Développeur Full-Stack et Teacher Assistant",
			logo: "/images/logos/la-capsule.png",
			start: "2023",
			end: {
				label: "Aujourd'hui",
				dateTime: new Date().getFullYear().toString(),
			},
		},
		{
			company: "Tablée",
			title: "Fondateur et CTO",
			logo: "/images/logos/tablee.png",
			start: "2023",
			end: {
				label: "Aujourd'hui",
				dateTime: new Date().getFullYear().toString(),
			},
		},
		{
			company: "Park Hyatt Paris-Vendôme",
			title: "Corporate Leadership Training en Finance",
			logo: "/images/logos/hyatt.svg",
			start: "2022",
			end: "2022",
		},
		{
			company: "Mandarin Oriental Hyde Park",
			title: "Auditeur Interne",
			logo: "/images/logos/mandarin-oriental.svg",
			start: "2020",
			end: "2021",
		},
	];

	return (
		<div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<BriefcaseIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Expériences professionnelles</span>
			</h2>
			<ol className="mt-6 space-y-4">
				{resume.map((role, roleIndex) => (
					<Role key={roleIndex} role={role} />
				))}
			</ol>
			<Button
				href="#"
				variant="secondary"
				className="mt-6 w-full"
				title={
					<>
						Télécharger mon CV
						<ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
					</>
				}
			/>
		</div>
	);
}
