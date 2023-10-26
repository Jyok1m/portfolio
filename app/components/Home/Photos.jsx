import React from "react";
import Image from "next/image";
import clsx from "clsx";

const photos = [
	{
		src: "/images/photos/in-flight-shot.jpeg",
		alt: "Photo prise de l'intérieur d'un avion",
	},
	{
		src: "/images/photos/food-pic.jpeg",
		alt: "Photo de poulet à la sauce aigre-douce",
	},
	{
		src: "/images/photos/vs-code-pic.jpeg",
		alt: "Photo de VS Code",
	},
	{
		src: "/images/photos/pic-la-capsule.png",
		alt: "Photo d'un moment de mentorat à La Capsule",
	},
	{
		src: "/images/photos/rugby-pic.jpeg",
		alt: "Photo à la coupe du monde de rugby 2023 au Stade de France",
	},
];

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
