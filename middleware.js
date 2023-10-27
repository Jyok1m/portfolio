import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	locales: ["en", "fr"],
	defaultLocale: "fr",
});

export const config = {
	matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
