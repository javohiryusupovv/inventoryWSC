import { Card, CardContent } from "@/app/[locale]/(root)/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/app/[locale]/(root)/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("HomePage.contacts")
  const p = useTranslations("HomePage.contactInfo") 
  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("desc")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Phone */}
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#aa60fa]/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#aa60fa]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#aa60fa]" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {p("contactLabels.phone")}
                  </h3>
                  <a
                    href="tel:+998900700251"
                    className="text-muted-foreground hover:text-[#aa60fa] transition-colors"
                  >
                    +998 (90) 070 02 51
                  </a>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#aa60fa]/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#aa60fa]/20 transition-colors">
                    <Mail className="w-6 h-6 text-[#aa60fa]" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{p("contactLabels.email")}</h3>
                  <a
                    href="mailto:info@inventory.uz"
                    className="text-muted-foreground hover:text-[#aa60fa] transition-colors"
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
                  <div className="w-12 h-12 bg-[#aa60fa]/10 rounded-lg flex items-center justify-center group-hover:bg-[#aa60fa]/20 transition-colors">
                    <MapPin className="w-6 h-6 text-[#aa60fa]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {p("contactLabels.address")}
                    </h3>
                    <p className="text-muted-foreground">
                      {p("address")}
                    </p>
                    {/* <p className="text-muted-foreground">
                      Бизнес-центр &quot;Инвентори&quot;, 5 этаж
                    </p> */}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#aa60fa]/10 rounded-lg flex items-center justify-center group-hover:bg-[#aa60fa]/20 transition-colors">
                    <Clock className="w-6 h-6 text-[#aa60fa]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {p("contactLabels.workingHours")}
                    </h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>{p("workingHours.mondayToFriday")}</p>
                      <p>{p("workingHours.saturday")}</p>
                      <p>{p("workingHours.sunday")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Telegram */}
            <Card className="bg-[#aa60fa]/5 border-[#aa60fa]/20 group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#aa60fa]/10 rounded-lg flex items-center justify-center group-hover:bg-[#aa60fa]/20 transition-colors">
                      <MessageCircle className="w-6 h-6 text-[#aa60fa]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {p("contactLabels.telegram")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {p("telegram")}
                      </p>
                    </div>
                  </div>
                  <Link href={"https://t.me/Javoxir_iq"} target="_blank">
                    <Button variant="outline" size="sm">
                      {p("writeButton")}
                    </Button>
                  </Link>
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
                    <p className="text-muted-foreground">{p("map")}</p>
                    <p className="text-sm text-muted-foreground">
                      г. Ташкент, ул. Амира Темура, 123
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-2">
                  {p("urgentConsultation.title")}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {p("urgentConsultation.desc")}
                </p>
                <Link href={"tel:+998900700251"}>
                  <Button className="w-full">{p("urgentConsultation.button")}</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
