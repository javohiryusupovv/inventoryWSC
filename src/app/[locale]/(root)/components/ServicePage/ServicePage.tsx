import { Card, CardContent, CardHeader, CardTitle } from "@/app/[locale]/(root)/components/ui/card"
import { Button } from "@/app/[locale]/(root)/components/ui/button"
import { Package, Search, Settings, GraduationCap, Database, BarChart3, ArrowRight } from "lucide-react"

const serviceIcons = {
  0: Package,
  1: Search,
  2: Settings,
  3: GraduationCap,
  4: Database, // WMS icon
  5: BarChart3, // ERP icon
}

const serviceItems = [
  {
    title: "Инвентаризация складов",
    description:
      "Фактическая проверка остатков, выявление недостач/излишков, сверка с учётом, оформление отчёта и рекомендации.",
    link: "Подробнее",
  },
  {
    title: "Аудит складских процессов",
    description:
      "Диагностика приёмки, хранения, комплектации, отгрузки; поиск потерь; план улучшений с KPI.",
    link: "Подробнее",
  },
  {
    title: "Оптимизация и внедрение",
    description:
      "Перепланировка зон, адресное хранение, маршруты, правила комплектации; снижение времени и ошибок.",
    link: "Подробнее",
  },
  {
    title: "Обучение и сопровождение",
    description:
      "Инструкции, тренинги персонала, контроль показателей, поддержка после сдачи проекта.",
    link: "Подробнее",
  },
  {
    title: "WMS - Система управления складом",
    description:
      "Внедрение и настройка WMS систем для автоматизации складских операций, контроля запасов и оптимизации логистических процессов.",
    link: "Подробнее",
  },
  {
    title: "ERP - Планирование ресурсов предприятия",
    description:
      "Интеграция складских процессов с ERP системами, настройка модулей управления запасами и синхронизация данных.",
    link: "Подробнее",
  },
]


export default function ServicePage() {
    return (
        <section id="services" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Наши услуги</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Комплексные решения для эффективного управления складскими операциями
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceItems.map((service, index) => {
                        const Icon = serviceIcons[index as keyof typeof serviceIcons]
                        return (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card">
                                <CardHeader className="pb-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-[#aa60fa]/10 rounded-lg flex items-center justify-center group-hover:bg-[#aa60fa]/20 transition-colors">
                                            <Icon className="w-6 h-6 text-[#aa60fa]" />
                                        </div>
                                        <div className="flex-1">
                                            <CardTitle className="text-xl text-foreground group-hover:text-[#aa60fa] transition-colors text-balance">
                                                {service.title}
                                            </CardTitle>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">{service.description}</p>
                                    <Button variant="ghost" className="group/btn p-0 h-auto text-accent hover:text-[#aa60fa]">
                                        Подробнее
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Service Features Grid */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#aa60fa] mb-2">24/7</div>
                        <p className="text-muted-foreground">Поддержка клиентов</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#aa60fa] mb-2">99.9%</div>
                        <p className="text-muted-foreground">Точность инвентаризации</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#aa60fa] mb-2">48ч</div>
                        <p className="text-muted-foreground">Среднее время выполнения</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
