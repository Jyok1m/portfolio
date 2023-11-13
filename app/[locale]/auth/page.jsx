import { Container } from "@global-components/Container";
import { useTranslations } from "next-intl";
import Signin from "@client-components/auth/Signin";

export default function Auth() {
	const t = useTranslations("Auth");
	return (
		<Container className="mt-12 md:mt-14">
			<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
				<div className="space-y-20 ">
					<div className="sm:mx-auto sm:w-full sm:max-w-sm">
						<h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-800 dark:text-zinc-100">{t("title")}</h2>
						<h4 className="mt-5 text-center italic text-l leading-9 tracking-tight text-zinc-800 dark:text-zinc-100">{t("subtitle")}</h4>
					</div>
					<Signin
						t={{
							email: t("email"),
							emailPlaceholder: t("emailPlaceholder"),
							invalidEmail: t("invalidEmail"),
							existingUser: t("existingUser"),
							password: t("password"),
							passwordPlaceholder: t("passwordPlaceholder"),
							invalidPassword: t("invalidPassword"),
							forgot: t("forgot"),
							signin: t("signin"),
							notRegistered: t("notRegistered"),
							signupLink: t("signupLink"),
						}}
					/>
				</div>
			</div>
		</Container>
	);
}
