"use client";

import React, { useState } from "react";
import { ExclamationCircleIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import { emailRegex, phoneRegex, stringRegex } from "@/utils/modules/regex";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { notification } from "antd";

export default function ContactForm() {
	const [formState, setFormState] = useState({ firstName: "", lastName: "", email: "", company: "", phone: "", message: "", budget: "" });
	const [errorFields, setErrorFields] = useState([]);
	const [api, contextHolder] = notification.useNotification();

	const openNotification = (success = false) => {
		api.open({
			message: success ? "Message envoyé !" : "Erreur lors de l'envoi du message...",
			description: success
				? "Merci pour votre message. Je reviendrai vers vous le plus rapidement possible !"
				: "Merci de corriger vos champs et de réessayer.",
			icon: (
				<>
					{success && <CheckCircleOutlined style={{ color: "green" }} />}
					{!success && <CloseCircleOutlined style={{ color: "red" }} />}
				</>
			),
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case "email":
				if (emailRegex.test(value) || value === "") {
					setErrorFields(errorFields.filter((field) => field !== "email"));
				} else {
					setErrorFields(errorFields.concat("email"));
				}
				break;
			case "phone":
				if (phoneRegex.test(value) || value === "") {
					setErrorFields(errorFields.filter((field) => field !== "phone"));
				} else {
					setErrorFields(errorFields.concat("phone"));
				}
				break;
			case "message":
				if (value.length <= 500) {
					setErrorFields(errorFields.filter((field) => field !== "message"));
				} else {
					setErrorFields(errorFields.concat("message"));
				}
				break;
			default:
				if (stringRegex.test(value) || value === "") {
					setErrorFields(errorFields.filter((field) => field !== name));
				} else {
					setErrorFields(errorFields.concat(name));
				}
				break;
		}

		setFormState({ ...formState, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		for (const key in formState) {
			const value = formState[key];
			if (errorFields.includes(key) || (!["company", "phone"].includes(key) && value === "")) {
				return openNotification(false);
			}
		}

		setFormState({ firstName: "", lastName: "", email: "", company: "", phone: "", message: "", budget: "" });
	};

	return (
		<form onSubmit={handleSubmit} className="mt-16">
			{contextHolder}
			<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
				{/* First name */}

				<div>
					<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
						Prénom
					</label>
					<div className="relative mt-2 rounded-md shadow-sm">
						<input
							type="text"
							name="firstName"
							id="first-name"
							autoComplete="given-name"
							className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
								errorFields.includes("firstName")
									? "text-red-900 ring-red-400 placeholder:text-red-400 focus:ring-red-600"
									: formState.firstName !== ""
									? "text-green-900 ring-green-400 placeholder:text-green-400 focus:ring-green-600"
									: "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
							}`}
							placeholder="Jean"
							value={formState.firstName}
							onChange={handleChange}
						/>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
							{!errorFields.includes("firstName") && formState.firstName !== "" && (
								<CheckCircleIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
							)}
							{errorFields.includes("firstName") && <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />}
						</div>
					</div>
				</div>

				{/* Last name */}

				<div>
					<label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
						Nom de famille
					</label>
					<div className="relative mt-2 rounded-md shadow-sm">
						<input
							type="text"
							name="lastName"
							id="last-name"
							autoComplete="family-name"
							className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
								errorFields.includes("lastName")
									? "text-red-900 ring-red-400 placeholder:text-red-400 focus:ring-red-600"
									: formState.lastName !== ""
									? "text-green-900 ring-green-400 placeholder:text-green-400 focus:ring-green-600"
									: "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
							}`}
							placeholder="Dupont"
							value={formState.lastName}
							onChange={handleChange}
						/>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
							{!errorFields.includes("lastName") && formState.lastName !== "" && (
								<CheckCircleIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
							)}
							{errorFields.includes("lastName") && <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />}
						</div>
					</div>
				</div>

				{/* Email */}

				<div className="sm:col-span-2">
					<label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
						Email
					</label>
					<div className="relative mt-2 rounded-md shadow-sm">
						<input
							id="email"
							name="email"
							type="email"
							autoComplete="email"
							className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
								errorFields.includes("email")
									? "text-red-900 ring-red-400 placeholder:text-red-400 focus:ring-red-600"
									: formState.email !== ""
									? "text-green-900 ring-green-400 placeholder:text-green-400 focus:ring-green-600"
									: "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
							}`}
							placeholder="jean.dupont@jeandupont.fr"
							value={formState.email}
							onChange={handleChange}
						/>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
							{!errorFields.includes("email") && formState.email !== "" && <CheckCircleIcon className="h-5 w-5 text-green-500" aria-hidden="true" />}
							{errorFields.includes("email") && <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />}
						</div>
					</div>
				</div>

				{/* Company */}

				<div className="sm:col-span-2">
					<div className="flex justify-between text-sm leading-6">
						<label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
							Entreprise
						</label>
						<p id="phone-description" className="text-gray-400">
							Optionnel
						</p>
					</div>
					<div className="relative mt-2 rounded-md shadow-sm">
						<input
							type="text"
							name="company"
							id="company"
							autoComplete="organization"
							className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
								errorFields.includes("company")
									? "text-red-900 ring-red-400 placeholder:text-red-400 focus:ring-red-600"
									: formState.company !== ""
									? "text-green-900 ring-green-400 placeholder:text-green-400 focus:ring-green-600"
									: "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
							}`}
							placeholder="Jean Dupont SARL"
							value={formState.company}
							onChange={handleChange}
						/>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
							{!errorFields.includes("company") && formState.company !== "" && (
								<CheckCircleIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
							)}
							{errorFields.includes("company") && <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />}
						</div>
					</div>
				</div>

				{/* Phone */}

				<div className="sm:col-span-2">
					<div className="flex justify-between text-sm leading-6">
						<label htmlFor="phone" className="block font-semibold text-gray-900">
							Numéro de téléphone
						</label>
						<p id="phone-description" className="text-gray-400">
							Optionnel
						</p>
					</div>
					<div className="relative mt-2 rounded-md shadow-sm">
						<div className="absolute inset-y-0 left-0 flex items-center">
							<label htmlFor="country" className="sr-only">
								Country
							</label>
							<select
								id="country"
								name="country"
								autoComplete="country"
								className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
							>
								<option>FR</option>
							</select>
						</div>
						<input
							type="tel"
							name="phone"
							id="phone"
							autoComplete="tel"
							className={`block w-full rounded-md border-0 pl-24 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
								errorFields.includes("phone")
									? "text-red-900 ring-red-400 placeholder:text-red-400 focus:ring-red-600"
									: formState.phone !== ""
									? "text-green-900 ring-green-400 placeholder:text-green-400 focus:ring-green-600"
									: "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
							}`}
							placeholder="0123456789"
							value={formState.phone}
							onChange={handleChange}
						/>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
							{!errorFields.includes("phone") && formState.phone !== "" && <CheckCircleIcon className="h-5 w-5 text-green-500" aria-hidden="true" />}
							{errorFields.includes("phone") && <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />}
						</div>
					</div>
				</div>

				{/* Message */}

				<div className="sm:col-span-2">
					<div className="flex justify-between text-sm leading-6">
						<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
							Comment puis-je vous aider ?
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
							className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
								errorFields.includes("message")
									? "text-red-900 ring-red-400 placeholder:text-red-400 focus:ring-red-600"
									: formState.message !== ""
									? "text-green-900 ring-green-400 placeholder:text-green-400 focus:ring-green-600"
									: "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
							}`}
							placeholder="Décrivez votre projet ici..."
							value={formState.message}
							onChange={handleChange}
						/>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
							{!errorFields.includes("message") && formState.message !== "" && (
								<CheckCircleIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
							)}
							{errorFields.includes("message") && <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />}
						</div>
					</div>
				</div>

				{/* Budget */}

				<fieldset className="sm:col-span-2">
					<legend className="block text-sm font-semibold leading-6 text-gray-900">Quel est votre budget ?</legend>
					<div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
						<div className="flex gap-x-2.5">
							<input
								id="1k"
								name="budget"
								defaultValue="Moins de 1,000€"
								type="radio"
								className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
								checked={formState.budget === "Moins de 1,000€"}
								onChange={handleChange}
							/>
							<label htmlFor="budget-under-25k">Moins de 1,000€</label>
						</div>
						<div className="flex gap-x-2.5">
							<input
								id="1k-3.5k"
								name="budget"
								defaultValue="Entre 1,000€ et 3,500€"
								type="radio"
								className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
								checked={formState.budget === "Entre 1,000€ et 3,500€"}
								onChange={handleChange}
							/>
							<label htmlFor="budget-25k-50k">1,000€ - 3,500€</label>
						</div>
						<div className="flex gap-x-2.5">
							<input
								id="3.5k-6k"
								name="budget"
								defaultValue="Entre 3,500€ et 6,000€"
								type="radio"
								className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
								checked={formState.budget === "Entre 3,500€ et 6,000€"}
								onChange={handleChange}
							/>
							<label htmlFor="budget-50k-100k">3,500€ – 6,000€</label>
						</div>
						<div className="flex gap-x-2.5">
							<input
								id="6k"
								name="budget"
								defaultValue="Plus de 6,000€"
								type="radio"
								className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
								checked={formState.budget === "Plus de 6,000€"}
								onChange={handleChange}
							/>
							<label htmlFor="budget-over-100k">6,000€ +</label>
						</div>
					</div>
				</fieldset>
			</div>

			{/* Button */}

			<div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Envoyer
				</button>
			</div>
		</form>
	);
}
