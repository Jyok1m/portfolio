/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")("./i18n.js");

module.exports = withNextIntl({
	reactStrictMode: false,
	images: {
		domains: ["res.cloudinary.com"],
	},
});
