import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/global/SocialIcons";

import IntroTitle from "@client-components/home/IntroTitle";
import SocialLink from "@global-components/SocialLink";

export default function Intro() {
	return (
		<div className="max-w-2xl">
			<IntroTitle />
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
