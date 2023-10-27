import InquiryForm from "@client-components/home/InquiryForm";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

export default function Inquiry() {
	return (
		<div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40" id="contact">
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<EnvelopeIcon className="w-6 h-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
				<span className="ml-3">Contactez-moi</span>
			</h2>
			<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
				N'hésitez pas à me contacter si vous avez envie qu'on travaille ensemble pour l'un de vos projets!
			</p>
			<InquiryForm />
		</div>
	);
}
