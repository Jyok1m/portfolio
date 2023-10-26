"use client";

import React from "react";
import useDownloader from "react-use-downloader";
import ArrowDownIcon from "@/app/components/Icons/ArrowDownIcon";
import Button from "@/app/components/Button";

export default function ResumeDownload() {
	const { download, error } = useDownloader();

	const fileUrl = "/assets/CV-Joachim-Jasmin.pdf";
	const filename = "CV Joachim Jasmin - 2023_2024.pdf";

	return (
		<Button
			onClick={() => download(fileUrl, filename)}
			variant="secondary"
			className="mt-6 w-full flex bg-zinc-100 hover:bg-[#0d1b2a]"
			title={
				<>
					Télécharger mon CV
					<ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
				</>
			}
		/>
	);
}
