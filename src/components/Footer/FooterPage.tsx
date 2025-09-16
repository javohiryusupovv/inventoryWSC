
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"


export default function FooterPage() {
    return (
        <footer className="bg-muted border-t border-border">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-sm">IU</span>
                            </div>
                            <span className="font-bold text-lg">Inventory Uzbekistan</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Профессиональная инвентаризация и аудит складов по всему Узбекистану
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Навигация</h3>
                        <nav className="space-y-2">
                            <Link
                                href={`#services`}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Услуги
                            </Link>
                            <Link
                                href={`#workflow`}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Как работаем
                            </Link>
                            <Link
                                href={`#cases`}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Кейсы
                            </Link>
                            <Link
                                href={`/news`}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Новости
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Контакты</h3>
                        <div className="space-y-3">
                            <a
                                href="tel:+998901234567"
                                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                <span>+998 (90) 123-45-67</span>
                            </a>
                            <a
                                href="mailto:info@inventory.uz"
                                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                <span>info@inventory.uz</span>
                            </a>
                            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 mt-0.5" />
                                <span>г. Ташкент, ул. Амира Темура, 123</span>
                            </div>
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Режим работы</h3>
                        <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mt-0.5" />
                            <div>
                                <div>Пн-Пт: 9:00 - 18:00</div>
                                <div>Сб: 9:00 - 14:00</div>
                                <div>Вс: выходной</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-muted-foreground">© 2024 Inventory Uzbekistan. Все права защищены.</p>
                    <div className="flex space-x-6">
                        <Link
                            href={`/privacy`}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Политика конфиденциальности
                        </Link>
                        <Link
                            href={`/cookies`}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
