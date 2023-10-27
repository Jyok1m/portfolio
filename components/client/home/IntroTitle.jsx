"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function IntroTitle() {
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
		<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl" style={{ height: 160 }}>
			Développeur full-stack, teacher et <span ref={el} className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl" />.
		</h1>
	);
}
