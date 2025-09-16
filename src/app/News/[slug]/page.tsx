import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2, Badge } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

interface ArticlePageProps {
    params: { slug: string }
}

// export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
//     const article = getNewsBySlug(params.slug)

//     if (!article) {
//         return {
//             title: "Статья не найдена - Inventory Uzbekistan",
//         }
//     }

//     return {
//         title: `${article.title.ru} - Inventory Uzbekistan`,
//         description: article.lead.ru,
//         openGraph: {
//             title: article.ogTitle?.ru || article.title.ru,
//             description: article.ogDescription?.ru || article.lead.ru,
//             images: [article.coverImage],
//         },
//     }
// }

export default function page() {
    return (
        <main className="min-h-screen">
            <article className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Link href="/news">
                            <Button
                                variant="ghost"
                                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>Назад к новостям</span>
                            </Button>
                        </Link>
                    </div>

                    {/* Article Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge>
                                управление
                            </Badge>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Лучшие практики управления запасами
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">Проверенные методы оптимизации складских запасов, снижения издержек и повышения эффективности операций для современного бизнеса в условиях высокой конкуренции.</p>

                        <div className="flex items-center justify-between border-b border-border pb-6">
                            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date().toLocaleDateString("ru-RU")}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <User className="w-4 h-4" />
                                    <span>Мария Иванова</span>
                                </div>
                            </div>

                            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                                <Share2 className="w-4 h-4" />
                                <span>Поделиться</span>
                            </Button>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="mb-12">
                        <img
                            src={`http://api.sher.legal/media/news/Huquqiy_Qollanma.jpg`}
                            alt="statik img"
                            className="w-full h-96 object-cover rounded-lg"
                            loading="eager"
                        />
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        <div className="text-foreground leading-relaxed">
                            <p className="mb-5">Здесь будет полный контент статьи с подробным описанием темы, анализом ситуации, практическими рекомендациями и выводами. Контент может включать списки, цитаты, статистику и другие элементы для лучшего восприятия информации.</p>
                        </div>
                    </div>

                    {/* Article Footer */}
                    <footer className="mt-16 pt-8 border-t border-border">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                                Опубликовано {new Date().toLocaleDateString("ru-RU")}
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-muted-foreground">Поделиться:</span>
                                <Button variant="ghost" size="sm">
                                    Facebook
                                </Button>
                                <Button variant="ghost" size="sm">
                                    Twitter
                                </Button>
                                <Button variant="ghost" size="sm">
                                    LinkedIn
                                </Button>
                            </div>
                        </div>
                    </footer>
                </div>
            </article>
        </main>
    )
}
