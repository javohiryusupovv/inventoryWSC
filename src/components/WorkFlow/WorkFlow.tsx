import { ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";


const steps = [
  {
    step: 1,
    title: "Диагностика и бриф",
  },
  {
    step: 2,
    title: "План и смета",
  },
  {
    step: 3,
    title: "Инвентаризация/аудит",
  },
  {
    step: 4,
    title: "Итоговый отчёт и рекомендации",
  },
  {
    step: 5,
    title: "Поддержка и контроль улучшений",
  },
]



export default function WorkFlow() {
    return (
        <section id="workflow" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Как мы работаем</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Проверенная методология работы, обеспечивающая максимальную эффективность
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>

                        <div className="grid grid-cols-5 gap-4">
                            {steps.map((step, index) => (
                                <div key={index} className="relative">
                                    {/* Step Circle */}
                                    <div className="relative z-10 w-16 h-16 bg-[#aa60fa] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                        <span className="text-white font-bold text-lg">{index + 1}</span>
                                    </div>

                                    {/* Step Card */}
                                    <Card className="text-center group hover:shadow-lg transition-all duration-300">
                                        <CardContent className="py-6 px-3">
                                            <h3 className="font-semibold text-foreground mb-2 text-balance">{step.title}</h3>
                                            <div className="w-8 h-8 bg-[#aa60fa]/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#aa60fa]/20 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-[#aa60fa]" />
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Arrow (except for last item) */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute top-5 -right-2 z-20">
                                            <ArrowRight className="w-4 h-4 text-[#aa60fa]" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Vertical Timeline */}
                <div className="lg:hidden space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            {/* Step Number */}
                            <div className="w-12 h-12 bg-[#aa60fa] rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold">{index + 1}</span>
                            </div>

                            {/* Step Content */}
                            <Card className="flex-1 group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold text-foreground text-balance">{step.title}</h3>
                                        <CheckCircle className="w-5 h-5 text-[#aa60fa] flex-shrink-0" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Process Benefits */}
                <div className="mt-16 bg-muted/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-foreground text-center mb-8">Преимущества нашего подхода</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[#aa60fa]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-[#aa60fa]" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Прозрачность</h4>
                            <p className="text-sm text-muted-foreground">Полная отчетность на каждом этапе работы</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[#aa60fa]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-[#aa60fa]" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Качество</h4>
                            <p className="text-sm text-muted-foreground">Строгий контроль качества на всех этапах</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[#aa60fa]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-[#aa60fa]" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Результат</h4>
                            <p className="text-sm text-muted-foreground">Гарантированное достижение поставленных целей</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
