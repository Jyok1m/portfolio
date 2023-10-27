import React from "react";
import Image from "next/image";
import clsx from "clsx";

import { photos } from "@static";

export default function Photos() {
	let rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex md:justify-center gap-5 md:overflow-hidden overflow-x-auto py-4 sm:gap-8">
				{photos.map((image, imageIndex) => (
					<div
						key={imageIndex}
						className={clsx(
							"relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
							rotations[imageIndex % rotations.length]
						)}
					>
						<Image
							src={image.src}
							alt={image.alt}
							width={640}
							height={640}
							sizes="(min-width: 640px) 18rem, 11rem"
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
