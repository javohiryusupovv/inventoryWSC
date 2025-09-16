import { CheckCircle, MessageCircle, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function HomeSection() {
    return (
        <section className="pb-20 pt-[120px] lg:py-32">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance">
                                Инвентаризация и аудит складов по всему Узбекистану
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">Точная проверка, низкие цены, гарантия результата и поддержка</p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="flex items-center space-x-2 text-lg px-8 py-6" >
                                <Phone className="w-5 h-5" />
                                <span>Заказать звонок</span>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="flex items-center space-x-2 text-lg px-8 py-6 bg-transparent"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Aloqa Telegram</span>
                            </Button>
                        </div>

                        {/* Microtext */}
                        <p className="text-sm text-muted-foreground flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Ответим в течение 1 часа в рабочее время</span>
                        </p>
                    </div>

                    {/* Right Column - Visual */}
                    <div className="relative">
                        <Card className="overflow-hidden">
                            <CardContent className="p-0">
                                <img
                                    src="https://media.istockphoto.com/id/1138429558/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%8F%D0%B4%D1%8B-%D0%BF%D0%BE%D0%BB%D0%BE%D0%BA.jpg?s=612x612&w=0&k=20&c=zkhxc5hIJLIQiWaJX_RxaiKlKuanYzSjlqFuUt6fKtA="
                                    alt="Professional warehouse inventory management"
                                    className="w-full h-[400px] lg:h-[500px] object-cover"
                                    loading="eager"
                                />
                            </CardContent>
                        </Card>

                        {/* Floating Stats Cards */}
                        <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg">
                            <div className="text-2xl font-bold text-primary">10+</div>
                            <div className="text-sm text-muted-foreground">лет опыта</div>
                        </div>

                        <div className="absolute -top-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-lg">
                            <div className="text-2xl font-bold text-black">500+</div>
                            <div className="text-sm text-muted-foreground">проектов</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
