import { Card, CardContent } from "../ui/card"
import { Shield, Zap, DollarSign, HeartHandshake } from "lucide-react"

const iconMap = {
    0: Shield,
    1: Zap,
    2: DollarSign,
    3: HeartHandshake,
}

const uspItems = [
    {
        title: "Лицензия и 10+ лет опыта",
        description: "работаем официально, соблюдаем стандарты",
    },
    {
        title: "Точность и скорость",
        description: "инвентаризация любой сложности без остановки бизнеса",
    },
    {
        title: "Цена ниже рынка",
        description: "прозрачная смета без скрытых затрат",
    },
    {
        title: "Гарантия и пост-поддержка",
        description: "остаёмся на связи и исправляем недочёты",
    },
]


export default function SecondPage() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Почему выбирают нас</h2>
                    <div className="w-24 h-1 bg-[#aa60fa] mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {uspItems.map((item, index) => {
                        const Icon = iconMap[index as keyof typeof iconMap]
                        return (
                            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-8">
                                    <div className="w-16 h-16 bg-[#aa60fa]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#aa60fa]/20 transition-colors">
                                        <Icon className="w-8 h-8 text-[#aa60fa]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-3 text-balance">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{item.description}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
