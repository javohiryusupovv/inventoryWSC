import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import ModalAriza from "../Home/_components/ModalAriza";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-card/95 backdrop-blur">
          <CardContent className="p-12 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                  Хотите навести порядок на складе?
                </h2>
                <p className="text-xl text-muted-foreground text-pretty">
                  Оставьте заявку — свяжемся в течение 1 часа
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <ModalAriza />
                <Link href={"https://t.me/Javoxir_iq"} target="_blank">
                    <Button
                    variant="outline"
                    size="lg"
                    className="flex group items-center !bg-[#aa60fa] text-white hover:!bg-[#aa60fa]/80 transition-all duration-200 hover:!text-white space-x-2 text-lg px-8 py-6 bg-transparent"
                    >
                    <MessageCircle className="w-5 h-5" />
                    <span>Aloqa Telegram</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#aa60fa] mb-1">
                    1 час
                  </div>
                  <p className="text-sm text-muted-foreground">Время ответа</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#aa60fa] mb-1">
                    Бесплатно
                  </div>
                  <p className="text-sm text-muted-foreground">Консультация</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#aa60fa] mb-1">
                    100%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Конфиденциальность
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
