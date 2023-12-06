"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ExclamationCircleIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { notification } from "antd";
import { emailRegex, passwordRegex } from "@/utils/regex";
import Button from "@global-components/Button";

export default function Signin({ t }) {
	/* ---------------------------------------------------------------- */
	/*                            State hooks                           */
	/* ---------------------------------------------------------------- */
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
			message: status !== "success" && "Woops !",
			description: status !== "success" && t.errorSignin,
			icon: (
				<>
					{status === "success" && <CheckCircleIcon style={{ color: "green" }} />}
					{status !== "success" && <XCircleIcon style={{ color: "red" }} />}
				</>
			),
		});
	};

	const onSubmit = async (form) => {
		// setLoading(true);

		// try {
		// 	const res = await fetch("../api/auth/signin", {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify(form),
		// 	});

		// 	if (res.status === 201) {
		// 		reset();
		// 	} else {
		// 		openNotification("error");
		// 	}
		// } catch (error) {
		// 	openNotification("error");
		// } finally {
		// 	setLoading(false);
		// }
	};

	return (
		<div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				{contextHolder}
				<div>
					<label htmlFor="email" className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-100">
						{t.email}
					</label>
					<div className="relative mt-2 rounded-md">
						<input
							id="email"
							name="email"
							type="email"
							autoComplete="email"
							placeholder={t.emailPlaceholder}
							disabled={loading}
							className="block w-full rounded-md border-0 py-1.5 px-2 text-zinc-800 dark:text-zinc-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
							aria-invalid={errors.email ? "true" : "false"}
							{...register("email", {
								required: { value: true, message: t.requiredField },
								pattern: { value: emailRegex, message: t.invalidEmail },
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

				<div>
					<div className="flex items-center justify-between">
						<label htmlFor="password" className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-100">
							{t.password}
						</label>
						{/* <div className="text-sm">
							<a href="#" className="font-semibold leading-6 text-zinc-800 dark:text-zinc-100 hover:dark:text-zinc-400 hover:text-zinc-500">
								{t.forgot}
							</a>
						</div> */}
					</div>
					<div className="relative mt-2 rounded-md">
						<input
							id="password"
							name="password"
							type="password"
							autoComplete="current-password"
							placeholder={t.passwordPlaceholder}
							disabled={loading}
							className="block w-full rounded-md border-0 py-1.5 px-2 text-zinc-800 dark:text-zinc-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
							aria-invalid={errors.password ? "true" : "false"}
							{...register("password", {
								required: { value: true, message: t.requiredField },
								pattern: { value: passwordRegex, message: t.invalidPassword },
							})}
						/>
						{errors.password && (
							<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
								<ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
							</div>
						)}
					</div>
					{errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
				</div>

				<div>
					<Button
						type="submit"
						className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm"
						title={t.signin}
						loading={loading}
					/>
				</div>
			</form>

			<p className="mt-10 text-center text-sm text-gray-500">
				{t.notRegistered}{" "}
				<a href="#" className="font-semibold leading-6 text-zinc-800 dark:text-zinc-100 hover:dark:text-zinc-400 hover:text-zinc-500">
					{t.signupLink}
				</a>
			</p>
		</div>
	);
}
