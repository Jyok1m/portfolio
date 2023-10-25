"use client";

import Typed from "typed.js";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/app/components/SocialIcons";

function SocialLink({ icon: Icon, ...props }) {
	return (
		<Link className="group -m-1 p-1" {...props} target="_blank">
			<Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
		</Link>
	);
}

export default function Intro() {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["cuistot amateur", "passionné de jeux vidéos", "pilote de ligne virtuel", "fan de rugby", "amateur de bonne bière"],
			startDelay: 300,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 500,
			loop: true,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div className="max-w-2xl">
			<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl" style={{ height: 160 }}>
				Développeur full-stack, teacher et{" "}
				<span ref={el} className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"></span>.
			</h1>
			<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
				Hello world, c'est Joachim! En plein dans le code ou à la conquête de nouvelles saveurs en cuisine, ma palette de talents est variée.
				Développeur full-stack et enseignant passionné, je crée des solutions numériques sur-mesure pour un éventail de clients, tout en pimentant ma
				vie avec quelques délices culinaires et voyages excitants !
			</p>
			<div className="mt-6 flex gap-6">
				<SocialLink href="https://github.com/Jyok1m" aria-label="Suivez-moi sur GitHub" icon={GitHubIcon} />
				<SocialLink href="https://linkedin.com/in/joachim-jasmin/" aria-label="Suivez-moi sur LinkedIn" icon={LinkedInIcon} />
				<SocialLink href="https://instagram.com/joachimjasmin/" aria-label="Suivez-moi sur Instagram" icon={InstagramIcon} />
			</div>
		</div>
	);
}
