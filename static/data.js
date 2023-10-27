export const photos = [
	{
		src: "https://res.cloudinary.com/tablee/image/upload/v1698308824/Portfolio/a97wc9rfuinvswgu0hng.jpg",
		alt: "Photo prise de l'intérieur d'un avion",
	},
	{
		src: "https://res.cloudinary.com/tablee/image/upload/v1698308824/Portfolio/uts5rvgx25zirt5znyly.jpg",
		alt: "Photo de poulet à la sauce aigre-douce",
	},
	{
		src: "https://res.cloudinary.com/tablee/image/upload/v1698308824/Portfolio/kockgbiobckq0agaahod.jpg",
		alt: "Photo de VS Code",
	},
	{
		src: "https://res.cloudinary.com/tablee/image/upload/v1698308824/Portfolio/epdhrdvgkmnkp44jyeyy.png",
		alt: "Photo d'un moment de mentorat à La Capsule",
	},
	{
		src: "https://res.cloudinary.com/tablee/image/upload/v1698308824/Portfolio/tfvnmybnbkavfaxnc01q.jpg",
		alt: "Photo à la coupe du monde de rugby 2023 au Stade de France",
	},
];

export const projects = [
	{
		title: "Joachim Jasmin - Portfolio",
		href: "https://joachim-jasmin-portfolio.vercel.app/",
		description:
			"Ce portfolio est un projet personnel évolutif qui me permet de mettre en avant mes compétences et mes projets, tout en essayant de nouvelles technologies.",
		imageUrl: "https://res.cloudinary.com/tablee/image/upload/v1698317884/Portfolio/yjvzubjrcqr6u6wmn8d4.png",
		imageAlt: "Écran d'accueil de l'application Tablée",
		date: "2023",
		datetime: "2023-10-26",
		categories: [{ title: "NextJS 13" }, { title: "Tailwind CSS" }],
	},
	{
		title: "Tablée App",
		href: "https://tablee.app/",
		description:
			"Tablée est une application de mise en relation entre professionnels CHR et étudiants en hôtellerie-restauration. Elle offre un accès à des missions ponctuelles et à des extras dans les établissements parisiens.",
		imageUrl: "https://res.cloudinary.com/tablee/image/upload/v1698317135/Portfolio/qx9a3lniger5u94horsv.png",
		imageAlt: "Écran d'accueil de l'application Tablée",
		date: "2023",
		datetime: "2023-03-15",
		categories: [{ title: "MERN" }, { title: "Material UI" }],
	},
	{
		title: "Ariane - La Capsule Coding Bootcamp",
		href: "https://ariane.lacapsule.academy/",
		description:
			"Ariane est la plateforme pédagogique de La Capsule. Elle permet aux étudiants de suivre leur progression, de consulter les cours et de réaliser les exercices.",
		imageUrl: "https://res.cloudinary.com/tablee/image/upload/v1698317453/Portfolio/gdesdzj7b1r9t2jykmml.png",
		date: "2023",
		datetime: "2023-04-20",
		categories: [{ title: "MERN" }, { title: "Ant Design" }],
	},
	{
		title: "Skemanopoly",
		href: null,
		description:
			"Adaptation du jeu de Monopoly créé dans le cadre d'un projet d'études. Le jeu reprend les codes du Monopoly classique, mais avec des mécaniques personnalisées à Skema Business School.",
		imageUrl: "https://res.cloudinary.com/tablee/image/upload/v1698320317/Portfolio/ivikb1fxd8fxxs0y63ho.png",
		date: "2021",
		datetime: "2021-12-20",
		categories: [{ title: "Visual Basic" }],
	},
];

export const resume = [
	{
		company: "La Capsule",
		title: "Développeur Full-Stack et Teacher Assistant",
		logo: "/images/logos/la-capsule.png",
		start: "2023",
		end: {
			label: "Aujourd'hui",
			dateTime: new Date().getFullYear().toString(),
		},
	},
	{
		company: "Tablée",
		title: "Fondateur et CTO",
		logo: "/images/logos/tablee.png",
		start: "2023",
		end: {
			label: "Aujourd'hui",
			dateTime: new Date().getFullYear().toString(),
		},
	},
	{
		company: "Park Hyatt Paris-Vendôme",
		title: "Corporate Leadership Training en Finance",
		logo: "/images/logos/hyatt.svg",
		start: "2022",
		end: "2022",
	},
	{
		company: "Mandarin Oriental Hyde Park",
		title: "Auditeur Interne",
		logo: "/images/logos/mandarin-oriental.svg",
		start: "2020",
		end: "2021",
	},
];
