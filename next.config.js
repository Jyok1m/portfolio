/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: [],
	},
	i18n: {
		locales: ["fr"],
		defaultLocale: "fr",
	},
};

module.exports = nextConfig;
