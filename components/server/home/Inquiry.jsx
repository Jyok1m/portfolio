import { useTranslations } from "next-intl";
import InquiryForm from "@client-components/home/InquiryForm";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

export default function Inquiry() {
	const t = useTranslations("Contact");
	return (
		<div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40" id="contact">
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<EnvelopeIcon className="w-6 h-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
				<span className="ml-3">{t("title")}</span>
			</h2>
			<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{t("desc")}</p>
			<InquiryForm
				firstname={t("firstname")}
				firstnamePlaceholder={t("firstnamePlaceholder")}
				lastname={t("lastname")}
				lastnamePlaceholder={t("lastnamePlaceholder")}
				email={t("email")}
				emailPlaceholder={t("emailPlaceholder")}
				company={t("company")}
				companyPlaceholder={t("companyPlaceholder")}
				phone={t("phone")}
				phonePlaceholderFR={t("phonePlaceholderFR")}
				phonePlaceholderUS={t("phonePlaceholderUS")}
				phonePlaceholderUK={t("phonePlaceholderUK")}
				message={t("message")}
				messageLength={t("messageLength")}
				messagePlaceholder={t("messagePlaceholder")}
				optional={t("optional")}
				submit={t("submit")}
				requiredField={t("requiredField")}
				invalidFirstname={t("invalidFirstname")}
				invalidLastname={t("invalidLastname")}
				invalidEmail={t("invalidEmail")}
				invalidPhone={t("invalidPhone")}
				invalidMessage={t("invalidMessage")}
				successMessage={t("successMessage")}
				errorMessage={t("errorMessage")}
			/>
		</div>
	);
}
