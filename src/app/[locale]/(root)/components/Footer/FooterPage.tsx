"use client"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
// import Logo from "../../../public/icons/logo.svg"
import Logo from "../../../../../../public/logo.svg"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"


export default function FooterPage() {
    const locale = useLocale()
    const t = useTranslations("FooterPage")
    return (
        <footer className="bg-muted border-t border-border">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Image width={200} height={200} src={Logo} alt="Logo Inventory.uz"  className="max-w-full object-cover" priority/>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {t("slogan")}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">{t("navigation")}</h3>
                        <nav className="space-y-2">
                            <Link
                                href={`/#services`}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {t("links.services")}
                            </Link>
                            <Link
                                href={`/#workflow`}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {t("links.howWeWork")}
                            </Link>
                            <Link
                                href={`/${locale}/news`}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {t("links.news")}
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">{t("links.contacts")}</h3>
                        <div className="space-y-3">
                            <a
                                href="tel:+998887790060"
                                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                <span>+998 (88) 779-00-60</span>
                            </a>
                            <a
                                href="mailto:&#105;&#110;&#102;&#111;&#064;&#105;&#110;&#118;&#101;&#110;&#116;&#111;&#114;&#121;&#046;&#117;&#122;"
                                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                <span>info@inventory.uz</span>
                            </a>
                            <a href="https://maps.app.goo.gl/3GfVUrq82nn1AJPt7" target="_blank" rel="noopener noreferrer" className="flex group items-start space-x-2 text-sm text-muted-foreground">
                                <MapPin className="group-hover:text-black transition-all duration-200 sm:w-10 sm:h-10 w-5 h-5 sm:mt-0.5" />
                                <span className=" transition-all duration-200 group-hover:text-black">{t("contact.address")}</span>
                            </a>
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">{t("workingHours.title")}</h3>
                        <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mt-0.5" />
                            <div>
                                <div>{t("workingHours.mondayFriday")}</div>
                                <div>{t("workingHours.saturday")}</div>
                                <div>{t("workingHours.sunday")}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {t("footerBottom.rights")}</p>
                    <div className="flex space-x-6">
                        <Link
                            href={`/${locale}/privacy`}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {t("footerBottom.privacyPolicy")}
                        </Link>
                        <Link
                            href={`/${locale}/cookies`}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {t("footerBottom.cookies")}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
