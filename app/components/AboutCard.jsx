const timeline = [
	{
		name: "Formation en Python",
		description: "Formation d'un an dans le cadre d'un MSc en Gestion Financière de l'Entreprise à SKEMA Business School.",
		date: "Sep 2021",
		dateTime: "2021-09",
	},
	{
		name: "Formation en JavaScript",
		description:
			"Formation accélérée de 3 mois en développement web et mobile à La Capsule. Apprentissage de la stack MERN (MongoDB, ExpressJS, React, NodeJS) et de React Native.",
		date: "Jan 2023",
		dateTime: "2023-01",
	},
	{
		name: "Lancement de Tablée",
		description:
			"Lancement officiel de ma première Start-Up. J'ai codé la web app en utilisant React, ExpressJS et MongoDB, et l'application mobile avec React Native.",
		date: "Mar 2023",
		dateTime: "2023-03",
	},
	{
		name: "Stage en développement web",
		description: "Stage de six mois à La Capsule en tant que développeur full-stack et teacher assistant.",
		date: "Avr 2023 - Aujourd'hui",
		dateTime: "2024-04",
	},
];

export default function AboutCard() {
	return (
		<div className="bg-[#a9badc] relative isolate z-10 overflow-hidden rounded-lg mb-4">
			<div
				className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-25deg] bg-[#c5d1e7] shadow-xl shadow-indigo-600/10 ring-1 ring-[#c5d1e7] sm:-mr-80 lg:-mr-96"
				aria-hidden="true"
			/>
			<div className="mx-auto max-w-7xl px-6 py-28 sm:py-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
					<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
						Développeur web et mobile full-stack, basé à Paris.
					</h1>
					<div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
						<p className="text-lg leading-8 text-gray-600 mb-3">Hello World ! Je m'appelle Joachim Jasmin.</p>
						<p className="text-lg leading-8 text-gray-600 mb-3">
							Spécialisé dans le développement web et mobile, je suis passionné par l'accompagnement des entreprises dans leur transition numérique.
						</p>
						<p className="text-lg leading-8 text-gray-600 mb-3">
							Mon expertise réside dans la création d'applications efficaces, intuitives et performantes, visant à optimiser l'expérience des clients
							et collaborateurs.
						</p>
					</div>
					<img
						src="https://res.cloudinary.com/tablee/image/upload/v1698308836/Portfolio/gz1gi1t8zpblm6i2savl.png"
						alt="Joachim Jasmin"
						className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-20"
					/>
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#c5d1e7] sm:h-32" />

			<div className="mx-auto -mt-8 mb-28 max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
					{timeline.map((item) => (
						<div key={item.name}>
							<time dateTime={item.dateTime} className="flex items-center text-sm font-semibold leading-6 text-indigo-600">
								<svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
									<circle cx={2} cy={2} r={2} fill="currentColor" />
								</svg>
								{item.date}
								<div
									className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
									aria-hidden="true"
								/>
							</time>
							<p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
							<p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
