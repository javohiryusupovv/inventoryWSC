import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function Contact() {
    return (
        <section id="contacts" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Контакты</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Свяжитесь с нами удобным способом — мы всегда готовы помочь
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Phone */}
                            <Card className="group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                                        <Phone className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">Телефон</h3>
                                    <a href="tel:+998901234567" className="text-muted-foreground hover:text-accent transition-colors">
                                        +998 (90) 123-45-67
                                    </a>
                                </CardContent>
                            </Card>

                            {/* Email */}
                            <Card className="group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                                        <Mail className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                                    <a
                                        href="mailto:info@inventory.uz"
                                        className="text-muted-foreground hover:text-accent transition-colors"
                                    >
                                        info@inventory.uz
                                    </a>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Address */}
                        <Card className="group hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Адрес</h3>
                                        <p className="text-muted-foreground">г. Ташкент, ул. Амира Темура, 123</p>
                                        <p className="text-muted-foreground">Бизнес-центр "Инвентори", 5 этаж</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Working Hours */}
                        <Card className="group hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                        <Clock className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Режим работы</h3>
                                        <div className="space-y-1 text-muted-foreground">
                                            <p>Понедельник - Пятница: 9:00 - 18:00</p>
                                            <p>Суббота: 9:00 - 14:00</p>
                                            <p>Воскресенье: выходной</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Telegram */}
                        <Card className="bg-accent/5 border-accent/20 group hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                            <MessageCircle className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Telegram</h3>
                                            <p className="text-sm text-muted-foreground">Быстрая связь в мессенджере</p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                    >
                                        Написать
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Map Placeholder */}
                    <div className="space-y-6">
                        <Card className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className="w-full h-96 bg-muted flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                        <p className="text-muted-foreground">Интерактивная карта</p>
                                        <p className="text-sm text-muted-foreground">г. Ташкент, ул. Амира Темура, 123</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Contact */}
                        <Card className="bg-primary/5 border-primary/20">
                            <CardContent className="p-6 text-center">
                                <h3 className="font-semibold text-foreground mb-2">Нужна срочная консультация?</h3>
                                <p className="text-sm text-muted-foreground mb-4">Оставьте заявку и мы перезвоним в течение 15 минут</p>
                                <Button className="w-full">Срочная консультация</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
