import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "uz", "ru"],
    defaultLocale: "ru",
    localeDetection: false
})

export const config = {
    matcher: ['/', '/(uz|en|ru)/:path*']
}
