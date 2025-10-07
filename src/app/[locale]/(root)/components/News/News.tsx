import { Button } from "@/app/[locale]/(root)/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { newsData } from "../../../../../../constants/page";
import { useLocale, useTranslations } from "next-intl";


export default function NewsHome() {
    const news = newsData;
    const locale = useLocale()
    const t = useTranslations("HomePage")
  return (
    <section className="py-20 max-sm:py-10 max-sm:pb-5 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance" data-aos="fade-up">
            {t("newsAndArticles")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty" data-aos="fade-up">
            {t("newsAndArticlesDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.slice(0, 3).map((item) => (
            <Link href={`/${locale}/news/${item.slug}`}
              key={item.id}
              className="bg-white rounded-lg shadow p-4 group cursor-pointer"
              data-aos="fade-up"
            >
              <div className="w-full h-[200px] mb-4 rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title_en}
                  width={400}
                  height={200}
                  className=" transition-all duration-200 group-hover:scale-105 w-full h-full object-center object-cover"
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
                className="text-orange-400 flex items-center gap-1 font-medium"
              >
                {t("read")} <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <Link href={`/${locale}/news`}>
            <Button
              size="lg"
              variant="outline"
              className="group bg-transparent hover:bg-orange-400 border-orange-400 text-orange-400 hover:text-white transition-all duration-200"
            >
              {t("news")}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
