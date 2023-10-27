"use client";

import useDownloader from "react-use-downloader";
import { ArrowDownIcon } from "@heroicons/react/20/solid";

export default function ProjectDownloader() {
	const { download } = useDownloader();

	const fileUrl = "/assets/Skemanopoly.zip";
	const filename = "Skemanopoly";

	return (
		<div className="flex mt-5 h-8 hover:cursor-pointer" style={{ alignItems: "center" }} onClick={() => download(fileUrl, filename)}>
			<p className="text-sm leading-6 text-zinc-100 hover:underline">Télécharger le ZIP</p>
			<ArrowDownIcon className="h-5 w-5 ml-2 text-zinc-100" />
		</div>
	);
}
