import { ArrowRightIcon, DocumentTextIcon } from "@heroicons/react/20/solid";
import ProjectDownloader from "@client-components/home/ProjectDownloader";
import { projects } from "@static";

export default function Projects() {
	return (
		<div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40" id="projets">
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<DocumentTextIcon className="h-6 w-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
				<span className="ml-3">Projets</span>
			</h2>
			<div className="mt-10 lg:flex lg:flex-wrap">
				{projects.map((project, i) => (
					<article key={i} className="flex flex-col lg:w-5/12 gap-8 mt-10 mx-auto">
						<div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-full lg:h-64 lg:shrink-0">
							<img src={project.imageUrl} alt={project.imageAlt} className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
							<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
						</div>
						<div>
							<div className="flex items-center gap-x-4 text-xs">
								<time dateTime={project.datetime} className="text-zinc-400">
									{project.date}
								</time>
								{project.categories.map((cat, i) => (
									<div key={i} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-[#101827] hover:bg-gray-100">
										{cat.title}
									</div>
								))}
							</div>
							<div className="relative max-w-xl">
								<h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-800 dark:text-zinc-100">
									<a href={project.href} target="_blank">
										{project.title}
									</a>
								</h3>
								<p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>
								{project.href ? (
									<a href={project.href} target="_blank" className="flex mt-5 h-8 hover:cursor-pointer" style={{ alignItems: "center" }}>
										<p className="text-sm leading-6 text-zinc-800 dark:text-zinc-100 hover:underline">Visiter le site</p>
										<ArrowRightIcon className="h-5 w-5 ml-2 text-zinc-100" />
									</a>
								) : (
									<ProjectDownloader />
								)}
							</div>
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
