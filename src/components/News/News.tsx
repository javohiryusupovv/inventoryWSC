import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Badge } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { newsData } from "../../../constants/page";


export default function NewsHome() {
    const news = newsData;
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Новости и статьи
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Актуальная информация о складской логистике, новых технологиях и
            лучших практиках
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-4 group cursor-pointer"
            >
              <div className="w-full h-[200px] mb-4 rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
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
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {item.author}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-[#aa60fa] line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-3 line-clamp-3">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#aa60fa]/70 group-hover:bg-[#aa60fa] transition-all duration-200 text-white px-2 py-1 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/news/${item.slug}`}
                className="text-purple-600 flex items-center gap-1 font-medium"
              >
                Читать <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <Link href={`/news`}>
            <Button
              size="lg"
              variant="outline"
              className="group bg-transparent hover:bg-[#aa60fa] hover:text-white transition-all duration-200"
            >
              Yangiliklar
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
