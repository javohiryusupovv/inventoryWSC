"use client"

import { CheckCircle, MessageCircle, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import ModalAriza from "./_components/ModalAriza";
import Link from "next/link";
import { useTranslations } from "next-intl";
import CountUp from 'react-countup';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Image from "next/image";
import HomeImg from "../../../../../../public/og-image.jpg"

export default function HomeSection() {
    const t = useTranslations("HomePage");
    const f = useTranslations("Form");

    useEffect(() => {
        AOS.init({
            duration: 400, // animatsiya davomiyligi (ms)
            once: true,     // faqat 1 marta ishlasinmi yoki scroll qilganda ham
        });
    }, []);

    
    return (
        <section className="pb-20 lg:py-16">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <div className="space-y-4" data-aos="fade-up">
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance">
                                {t("title")}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{t("subtitle")}</p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <ModalAriza />
                            <Link href={"https://t.me/InventoryUz"} target="_blank" className="max-sm:w-full" rel="noopener noreferrer" data-aos="fade-right">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="flex items-center w-full !bg-orange-400 text-white hover:!bg-orange-400/80 border-0 transition-all duration-200 hover:!text-white space-x-2 text-lg px-8 py-6 bg-transparent"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span >{t("telegram")}</span>
                                </Button>

                            </Link>
                        </div>

                        {/* Microtext */}
                        <p className="text-sm text-muted-foreground flex items-center space-x-2" data-aos="fade-up">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{t("responseTime")}</span>
                        </p>
                    </div>

                    {/* Right Column - Visual */}
                    <div className="relative">
                        <Card className="overflow-hidden" data-aos="fade-left">
                            <CardContent className="p-0">
                                <Image
                                    src={HomeImg}
                                    alt="Professional warehouse inventory management"
                                    className="max-w-full h-[400px] lg:h-[500px] object-cover"
                                    loading="eager"
                                    width={600}
                                    height={400}
                                    priority
                                />
                            </CardContent>
                        </Card>

                        {/* Floating Stats Cards */}
                        <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg" data-aos="fade-up">
                            <div className="text-2xl font-bold text-primary"><CountUp start={0} end={15} duration={4}/>+</div>
                            <div className="text-sm text-muted-foreground">{f("stats.years")}</div>
                        </div>

                        <div className="absolute -top-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-lg" data-aos="fade-down">
                            <div className="text-2xl font-bold text-black"><CountUp start={0} end={50} duration={4}/>+</div>
                            <div className="text-sm text-muted-foreground">{f("stats.projects")}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
