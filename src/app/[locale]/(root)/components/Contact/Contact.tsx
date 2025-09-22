import { Card, CardContent } from "@/app/[locale]/(root)/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/app/[locale]/(root)/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("HomePage.contacts")
  const p = useTranslations("HomePage.contactInfo")
  const f = useTranslations("FooterPage.contact")
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

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
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
                    href="tel:+998916440702"
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
                  <Link href={"https://t.me/InventoryUz"} target="_blank">
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.339267210929!2d69.31522167653975!3d41.301482501318546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5112d8efde1%3A0x9599cb3144fe01e0!2zMiAyLCDRg9C70LjRhtCwINCc0LDRhdGC0YPQvNC60YPQu9C4IDEyMiwg0KLQvnNoa2VudCwgVG9zaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1758517357628!5m2!1sru!2s" width="600" height="450" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                <Link href={"tel:+998916440702"}>
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
