import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Badge } from "lucide-react"
import Link from "next/link"
import Image, { StaticImageData } from "next/image";
import Imgs from "../../../public/cr7.webp"

interface NewsItem {
    id: number;
    image: StaticImageData;
    date: string;
    author: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        image: Imgs,
        date: "15.01.2024",
        author: "Алексей Петров",
        title: "Тренды автоматизации складов в 2024 году",
        description:
            "Обзор ключевых технологий и решений, которые изменят складскую логистику в ближайшие годы. Анализ внедрения роботизации и искусственного интеллекта в управление запасами.",
        tags: ["автоматизация", "технологии"],
        link: "/news/1",
    },
    {
        id: 2,
        image: Imgs,
        date: "10.01.2024",
        author: "Мария Иванова",
        title: "Лучшие практики управления запасами",
        description:
            "Проверенные методы оптимизации складских запасов, снижения издержек и повышения эффективности операций для современного бизнеса в условиях высокой конкуренции.",
        tags: ["управление", "запасы"],
        link: "/news/2",
    },
    {
        id: 3,
        image: Imgs,
        date: "08.01.2024",
        author: "Сергей Морозов",
        title: "Холодовая цепь в логистике Узбекистана",
        description:
            "Развитие инфраструктуры холодовой цепи для сохранения качества скоропортящихся товаров. Современные решения для фармацевтики и продуктов питания в условиях жаркого климата.",
        tags: ["холодовая цепь", "логистика"],
        link: "/news/3",
    },
];

export default function News() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Новости и статьи</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">Актуальная информация о складской логистике, новых технологиях и лучших практиках</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {newsData.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow p-4">
                            <Image src={item.image} alt={item.title} width={400} height={200} className="rounded-md mb-4" />
                            <div className="text-sm text-gray-500 flex gap-2 mb-2">
                                <span>{item.date}</span>
                                <span>· {item.author}</span>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-3">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {item.tags.map((tag) => (
                                    <span key={tag} className="bg-gray-300 text-gray-700 px-2 py-1 text-xs rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a href={item.link} className="text-purple-600 flex items-center gap-1 font-medium">
                                Читать <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* View All News Button */}
                <div className="text-center">
                    <Link href={`/news`}>
                        <Button size="lg" variant="outline" className="group bg-transparent">
                            Yangiliklar
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
