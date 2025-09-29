import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import ModalAriza from "../Home/_components/ModalAriza";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("HomePage")
  return (
    <section className="py-20 max-sm:py-10 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-card/95 backdrop-blur">
          <CardContent className="p-12 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance" data-aos="fade-up">
                  {t("callToAction.title")}
                </h2>
                <p className="text-xl text-muted-foreground text-pretty" data-aos="fade-up">
                  {t("callToAction.desc")}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <ModalAriza />
                <Link href={"https://t.me/InventoryUz"} target="_blank" className="max-sm:w-full" data-aos="fade-left">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center w-full !bg-orange-400 text-white hover:!bg-orange-400/80 transition-all duration-200 hover:!text-white space-x-2 text-lg px-8 py-6 bg-transparent"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{t("telegram")}</span>
                  </Button>

                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid md:grid-cols-3 grid-cols-2 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-1">
                    {t("callToAction.responseTime.value")}
                  </div>
                  <p className="text-sm text-muted-foreground">{t("callToAction.responseTime.label")}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-1">
                    {t("callToAction.responseTime.value")}
                  </div>
                  <p className="text-sm text-muted-foreground">{t("callToAction.responseTime.label")}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-1">
                    {t("callToAction.responseTime.value")}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("callToAction.responseTime.label")}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Modal */}
    </section>
  );
}
