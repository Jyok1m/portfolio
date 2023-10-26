import InquiryForm from "./InquiryForm";
import MailIcon from "../Icons/MailIcon";

export default function Inquiry() {
	return (
		<div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40" id="contact">
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<MailIcon className="w-6 h-6 flex-none" />
				<span className="ml-3">Contactez-moi</span>
			</h2>
			<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
				N'hésitez pas à me contacter si vous avez envie qu'on travaille ensemble pour l'un de vos projets!
			</p>
			<InquiryForm />
		</div>
	);
}
