"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { emailRegex, phoneRegex, stringRegex } from "@/utils/modules/regex";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { notification } from "antd";
import Button from "../Button";

export default function InquiryForm() {
	const [api, contextHolder] = notification.useNotification();
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const openNotification = (status = "error") => {
		api.open({
			message: status === "success" ? "Message envoyé !" : "Erreur lors de l'envoi du message...",
			description:
				status === "success"
					? "Merci pour votre message. Je reviendrai vers vous le plus rapidement possible !"
					: "Une erreur est survenue... Merci de réessayer plus tard.",
			icon: (
				<>
					{status === "success" && <CheckCircleOutlined style={{ color: "green" }} />}
					{status !== "success" && <CloseCircleOutlined style={{ color: "red" }} />}
				</>
			),
		});
	};

	const onSubmit = async (form) => {
		setLoading(true);

		try {
			const res = await fetch("../api/inquiries/new", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(form),
			});

			if (res.status === 201) {
				openNotification("success");
				reset();
			} else {
				openNotification("error");
			}
		} catch (error) {
			openNotification("error");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="mt-16">
				{contextHolder}
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					{/* First name */}

					<div>
						<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-zinc-100">
							Prénom
						</label>
						<div className="relative mt-2 rounded-md">
							<input
								type="text"
								name="firstname"
								id="firstname"
								autoComplete="given-name"
								disabled={loading}
								className={
									"block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 bg-[#d7d7da]"
								}
								placeholder="Jean"
								aria-invalid={errors.firstname ? "true" : "false"}
								{...register("firstname", {
									required: { value: true, message: "Champ requis." },
									pattern: { value: stringRegex, message: "Prénom invalide." },
								})}
							/>
							{errors.firstname && (
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
									<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
								</div>
							)}
						</div>
						{errors.firstname && <span className="text-red-500 text-sm">{errors.firstname.message}</span>}
					</div>

					{/* Last name */}

					<div>
						<label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-zinc-100">
							Nom de famille
						</label>
						<div className="relative mt-2 rounded-md">
							<input
								type="text"
								name="lastname"
								id="lastname"
								autoComplete="family-name"
								disabled={loading}
								className={
									"block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 bg-[#d7d7da]"
								}
								placeholder="Dupont"
								aria-invalid={errors.lastname ? "true" : "false"}
								{...register("lastname", {
									required: { value: true, message: "Champ requis." },
									pattern: { value: stringRegex, message: "Nom de famille invalide." },
								})}
							/>
							{errors.lastname && (
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
									<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
								</div>
							)}
						</div>
						{errors.lastname && <span className="text-red-500 text-sm">{errors.lastname.message}</span>}
					</div>

					{/* Email */}

					<div className="sm:col-span-2">
						<label htmlFor="email" className="block text-sm font-semibold leading-6 text-zinc-100">
							Email
						</label>
						<div className="relative mt-2 rounded-md">
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								disabled={loading}
								className={
									"block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 bg-[#d7d7da]"
								}
								placeholder="jean.dupont@jeandupont.fr"
								aria-invalid={errors.email ? "true" : "false"}
								{...register("email", {
									required: { value: true, message: "Champ requis." },
									pattern: { value: emailRegex, message: "Email invalide." },
								})}
							/>
							{errors.email && (
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
									<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
								</div>
							)}
						</div>
						{errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
					</div>

					{/* Company */}

					<div className="sm:col-span-2">
						<div className="flex justify-between text-sm leading-6">
							<label htmlFor="company" className="block text-sm font-semibold leading-6 text-zinc-100">
								Entreprise
							</label>
							<p id="company-description" className="text-gray-400">
								Optionnel
							</p>
						</div>
						<div className="relative mt-2 rounded-md shadow-sm">
							<input
								type="text"
								name="company"
								id="company"
								autoComplete="organization"
								disabled={loading}
								className={
									"block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 bg-[#d7d7da]"
								}
								placeholder="Jean Dupont SARL"
								aria-invalid={errors.company ? "true" : "false"}
								{...register("company", {
									required: { value: false },
									pattern: { value: stringRegex, message: "Nom d'entreprise invalide." },
								})}
							/>
							{errors.company && (
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
									<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
								</div>
							)}
						</div>
						{errors.company && <span className="text-red-500 text-sm">{errors.company.message}</span>}
					</div>

					{/* Phone */}

					<div className="sm:col-span-2">
						<div className="flex justify-between text-sm leading-6">
							<label htmlFor="phone" className="block font-semibold text-zinc-100">
								Numéro de téléphone
							</label>
							<p id="phone-description" className="text-gray-400">
								Optionnel
							</p>
						</div>
						<div className="relative mt-2 rounded-md shadow-sm">
							<div className="absolute inset-y-0 left-0 flex items-center">
								<label htmlFor="country" className="sr-only">
									Pays
								</label>
								<select
									id="country"
									name="country"
									autoComplete="country"
									disabled={loading}
									className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm bg-[#d7d7da]"
								>
									<option>FR</option>
								</select>
							</div>
							<input
								type="tel"
								name="phone"
								id="phone"
								autoComplete="tel"
								disabled={loading}
								className={
									"block w-full rounded-md border-0 pl-24 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 bg-[#d7d7da]"
								}
								placeholder="0123456789"
								aria-invalid={errors.phone ? "true" : "false"}
								{...register("phone", {
									required: { value: false },
									pattern: { value: phoneRegex, message: "Numéro de téléphone invalide." },
								})}
							/>
							{errors.phone && (
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
									<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
								</div>
							)}
						</div>
						{errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
					</div>

					{/* Message */}

					<div className="sm:col-span-2">
						<div className="flex justify-between text-sm leading-6">
							<label htmlFor="message" className="block text-sm font-semibold leading-6 text-zinc-100">
								Message
							</label>
							<p id="message-description" className="text-gray-400">
								Max 500 caractères
							</p>
						</div>
						<div className="relative mt-2 rounded-md shadow-sm">
							<textarea
								id="message"
								name="message"
								rows={4}
								aria-describedby="message-description"
								disabled={loading}
								className={
									"block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 bg-[#d7d7da]"
								}
								placeholder="Décrivez votre projet ici..."
								aria-invalid={errors.message ? "true" : "false"}
								{...register("message", {
									required: { value: true, message: "Champ requis." },
									maxLength: { value: 500, message: "Message trop long." },
								})}
							/>
							{errors.message && (
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
									<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
								</div>
							)}
						</div>
						{errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
					</div>
				</div>

				{/* Button */}

				<div className="mt-10 flex justify-end pt-8 w-full">
					<Button type="submit" className="ml-4 flex-none bg-zinc-100 hover:bg-[#0d1b2a]" title="Envoyer" loading={loading} />
				</div>
			</form>
		</>
	);
}
