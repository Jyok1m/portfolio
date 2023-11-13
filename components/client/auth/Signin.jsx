import Button from "@global-components/Button";

export default function Signin({ t }) {
	return (
		<div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
			<form className="space-y-6" action="#" method="POST">
				<div>
					<label htmlFor="email" className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-100">
						{t.email}
					</label>
					<div className="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							placeholder={t.emailPlaceholder}
							autoComplete="email"
							required
							className="block w-full rounded-md border-0 py-1.5 px-2 text-zinc-800 dark:text-zinc-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<div className="flex items-center justify-between">
						<label htmlFor="password" className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-100">
							{t.password}
						</label>
						<div className="text-sm">
							<a href="#" className="font-semibold leading-6 text-zinc-800 dark:text-zinc-100 hover:dark:text-zinc-400 hover:text-zinc-500">
								{t.forgot}
							</a>
						</div>
					</div>
					<div className="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							placeholder={t.passwordPlaceholder}
							autoComplete="current-password"
							required
							className="block w-full rounded-md border-0 py-1.5 px-2 text-zinc-800 dark:text-zinc-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<Button
						type="submit"
						className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm"
						title={t.signin}
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
