import { useTranslations } from "next-intl";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/global/SocialIcons";
import IntroTitle from "@client-components/home/IntroTitle";
import SocialLink from "@global-components/SocialLink";

export default function Intro() {
	const t = useTranslations("Intro");
	const title = t("title");
	const keys = ["cooking", "video games", "aviation", "rugby", "beer"];

	return (
		<div className="max-w-2xl">
			<IntroTitle title={title} passions={keys.map((key) => t(key))} />
			<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">{t("bio")}</p>
			<div className="mt-6 flex gap-6">
				<SocialLink href="https://github.com/Jyok1m" aria-label="Suivez-moi sur GitHub" icon={GitHubIcon} />
				<SocialLink href="https://linkedin.com/in/joachim-jasmin/" aria-label="Suivez-moi sur LinkedIn" icon={LinkedInIcon} />
				<SocialLink href="https://instagram.com/joachimjasmin/" aria-label="Suivez-moi sur Instagram" icon={InstagramIcon} />
			</div>
		</div>
	);
}
