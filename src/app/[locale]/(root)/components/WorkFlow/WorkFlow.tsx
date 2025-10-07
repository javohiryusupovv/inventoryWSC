import { ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useTranslations } from "next-intl";


export default function WorkFlow() {
    const t = useTranslations("HomePage")
    const p = useTranslations("HomePage.processSteps")
    const s = useTranslations("HomePage.principles")

    const steps = [
        {
            step: 1,
            title: p("stepone.title"),
        },
        {
            step: 2,
            title: p("steptwo.title"),
        },
        {
            step: 3,
            title: p("stepthree.title"),
        },
        {
            step: 4,
            title: p("stepfour.title"),
        },
        {
            step: 5,
            title: p("stepfive.title"),
        },
    ]
    return (
        <section id="workflow" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance" data-aos="fade-up">{t("howWeWork")}</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty" data-aos="fade-up">
                        {t("howWeWorkDesc")}
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
                                    <div className="relative z-10 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" data-aos="flip-left">
                                        <span className="text-white font-bold text-lg">{index + 1}</span>
                                    </div>

                                    {/* Step Card */}
                                    <Card className="text-center group hover:shadow-lg transition-all duration-300" data-aos="zoom-in">
                                        <CardContent className="py-6 px-3">
                                            <h3 className="font-semibold text-foreground mb-2 text-balance">{step.title}</h3>
                                            <div className="w-8 h-8 bg-orange-400/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-400/20 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-orange-400" />
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Arrow (except for last item) */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute top-5 -right-2 z-20">
                                            <ArrowRight className="w-4 h-4 text-orange-400" />
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
                            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0" data-aos="flip-left">
                                <span className="text-white font-bold">{index + 1}</span>
                            </div>

                            {/* Step Content */}
                            <Card className="flex-1 group hover:shadow-lg transition-all duration-300" data-aos="zoom-in">
                                <CardContent className="p-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold text-foreground text-balance">{step.title}</h3>
                                        <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Process Benefits */}
                <div className="mt-16 bg-muted/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-foreground text-center mb-8">{s("approachAdvantages")}</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center" data-aos="zoom-in">
                            <div className="w-12 h-12 bg-orange-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-orange-400" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">{s("transparency.title")}</h4>
                            <p className="text-sm text-muted-foreground">{s("transparency.desc")}</p>
                        </div>
                        <div className="text-center" data-aos="zoom-in">
                            <div className="w-12 h-12 bg-orange-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-orange-400" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">{s("quality.title")}</h4>
                            <p className="text-sm text-muted-foreground">{s("quality.desc")}</p>
                        </div>
                        <div className="text-center" data-aos="zoom-in">
                            <div className="w-12 h-12 bg-orange-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-orange-400" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">{s("result.title")}</h4>
                            <p className="text-sm text-muted-foreground">{s("result.desc")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
