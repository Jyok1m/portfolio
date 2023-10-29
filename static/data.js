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
		description: "portfolioDesc",
		imageUrl: "https://res.cloudinary.com/tablee/image/upload/v1698317884/Portfolio/yjvzubjrcqr6u6wmn8d4.png",
		imageAlt: "Écran d'accueil de l'application Tablée",
		date: "2023",
		datetime: "2023-10-26",
		categories: [{ title: "NextJS 13" }, { title: "Tailwind CSS" }],
	},
	{
		title: "Tablée App",
		href: "https://tablee.app/",
		description: "tableeDesc",
		imageUrl: "https://res.cloudinary.com/tablee/image/upload/v1698317135/Portfolio/qx9a3lniger5u94horsv.png",
		imageAlt: "Écran d'accueil de l'application Tablée",
		date: "2023",
		datetime: "2023-03-15",
		categories: [{ title: "MERN" }, { title: "Material UI" }],
	},
	{
		title: "Ariane - La Capsule Coding Bootcamp",
		href: "https://ariane.lacapsule.academy/",
		description: "arianeDesc",
		imageUrl: "https://res.cloudinary.com/tablee/image/upload/v1698317453/Portfolio/gdesdzj7b1r9t2jykmml.png",
		date: "2023",
		datetime: "2023-04-20",
		categories: [{ title: "MERN" }, { title: "Ant Design" }],
	},
	{
		title: "Skemanopoly",
		href: null,
		description: "skemaDesc",
		imageUrl: "https://res.cloudinary.com/tablee/image/upload/v1698320317/Portfolio/ivikb1fxd8fxxs0y63ho.png",
		date: "2021",
		datetime: "2021-12-20",
		categories: [{ title: "Visual Basic" }],
	},
];

export const resume = [
	{
		company: "La Capsule - Coding Bootcamp",
		title: "capsule",
		logo: "/images/logos/la-capsule.png",
		start: "2023",
		end: {
			label: "Aujourd'hui",
			dateTime: new Date().getFullYear().toString(),
		},
	},
	{
		company: "Tablée",
		title: "tablee",
		logo: "/images/logos/tablee.png",
		start: "2023",
		end: {
			label: "Aujourd'hui",
			dateTime: new Date().getFullYear().toString(),
		},
	},
	{
		company: "Park Hyatt Paris-Vendôme",
		title: "hyatt",
		logo: "/images/logos/hyatt.svg",
		start: "2022",
		end: "2022",
	},
	{
		company: "Mandarin Oriental Hyde Park",
		title: "mandarinOriental",
		logo: "/images/logos/mandarin-oriental.svg",
		start: "2020",
		end: "2021",
	},
];
