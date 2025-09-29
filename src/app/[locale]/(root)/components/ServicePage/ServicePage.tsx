"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/[locale]/(root)/components/ui/card"
import { Package, Search, Settings, GraduationCap, Database, BarChart3 } from "lucide-react"
import { useTranslations } from "next-intl"
import CountUp from "react-countup";

const serviceIcons = {
  0: Package,
  1: Search,
  2: Settings,
  3: GraduationCap,
  4: Database,
  5: BarChart3,
}


export default function ServicePage() {
  const t = useTranslations("HomePage")
  const s = useTranslations("HomePage.services")
  const f = useTranslations("HomePage.stats")

  const serviceItems = [
    { title: s("inventory.title"), description: s("inventory.desc") },
    { title: s("audit.title"), description: s("audit.desc") },
    { title: s("optimization.title"), description: s("optimization.desc") },
    { title: s("training.title"), description: s("training.desc") },
    { title: s("wms.title"), description: s("wms.desc") },
    { title: s("erp.title"), description: s("erp.desc") },
  ]

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance" data-aos="fade-up">{t("ourServices")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty" data-aos="fade-up">
            {t("ourServicesDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => {
            const Icon = serviceIcons[index as keyof typeof serviceIcons]
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card" data-aos="zoom-out">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-400/10 rounded-lg flex items-center justify-center group-hover:bg-orange-400/20 transition-colors">
                      <Icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground group-hover:text-orange-400 transition-colors text-balance">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Service Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2"><CountUp end={24} duration={2} />/7</div>
            <p className="text-muted-foreground">{f("support.label")}</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2"><CountUp end={99.9} decimals={1} duration={2.5} />%</div>
            <p className="text-muted-foreground">{f("accuracy.label")}</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2"><CountUp end={48} duration={2} />{f("time.value")}</div>
            <p className="text-muted-foreground">{f("time.label")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
