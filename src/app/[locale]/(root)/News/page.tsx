"use client"

import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { newsData } from "../../../../../constants/page";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

export default function News() {
  const locale = useLocale();
  const news = newsData;
  const t = useTranslations("HomePage");

  useEffect(() => {
    AOS.init({
        duration: 400, // animatsiya davomiyligi (ms)
        once: true,     // faqat 1 marta ishlasinmi yoki scroll qilganda ham
    });
}, []);

  return (
    <section className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("newsAndArticles")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("newsAndArticlesDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <Link href={`/${locale}/news/${item.slug}`}
              key={item.id}
              className="bg-white rounded-lg shadow p-4 group cursor-pointer"
              data-aos="fade-up"
              rel="noopener noreferrer"
            >
              <div className="w-full h-[200px] mb-4 rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title_en}
                  width={324}
                  height={200}
                  loading="lazy"
                  className=" transition-all duration-200 group-hover:scale-105 max-w-full h-full object-center object-cover"
                  priority
                />
              </div>
              <div className="text-sm text-gray-500 flex gap-4 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-400 line-clamp-2">
                {locale === "uz"
                  ? item.title_uz
                  : locale === "ru"
                  ? item.title_ru
                  : item.title_en}
              </h3>
              <p className="text-gray-600 mb-3 line-clamp-3">
                {locale === "uz"
                  ? item.description_uz
                  : locale === "ru"
                  ? item.description_ru
                  : item.description_en}
              </p>
              <button
                className="text-orange-600 flex items-center gap-1 font-medium"
              >
                {t("read")} <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
