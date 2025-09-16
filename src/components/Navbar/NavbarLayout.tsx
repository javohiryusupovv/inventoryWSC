import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function NavbarLayout() {
    return (
        <div>
            <header className="bg-background border-b border-border sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-sm">IU</span>
                            </div>
                            <span className="font-bold text-xl text-foreground">Inventory Uzbekistan</span>
                        </Link>

                        {/* Contact Info & Language Switcher */}
                        <div className="flex items-center space-x-4">
                            <div className="hidden md:flex items-center space-x-4 text-sm text-muted-foreground">
                                <a
                                    href="tel:+998901234567"
                                    className="flex items-center space-x-1 hover:text-foreground transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>+998 (90) 123-45-67</span>
                                </a>
                                <a
                                    href="mailto:info@inventory.uz"
                                    className="flex items-center space-x-1 hover:text-foreground transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>info@inventory.uz</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
