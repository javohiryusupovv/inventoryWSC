import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { newsData } from "../../../../constants/page"

type ArticlePageParams = { params: Promise<{ slug: string }> }

// SEO metadata slug bo‘yicha
export async function generateMetadata({ params }: ArticlePageParams): Promise<Metadata> {
  const { slug } = await params
  const article = newsData.find((item) => item.slug === slug)

  if (!article) {
    return {
      title: "Статья не найдена - Inventory Uzbekistan",
    }
  }

  return {
    title: `${article.title} - Inventory Uzbekistan`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image.src],
    },
  }
}

export default async function Page({ params }: ArticlePageParams) {
  const { slug } = await params
  const article = newsData.find((item) => item.slug === slug)

  if (!article) return notFound()

  return (
    <main className="min-h-screen">
      <article className="py-20 pt-[100px] bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/news">
              <Button
                variant="ghost"
                className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-200/50"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Назад к новостям</span>
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
              {article.description}
            </p>

            <div className="flex items-center justify-between border-b border-border pb-6">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
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
            <Image
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg"
              loading="eager"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-foreground leading-relaxed">
              <p className="mb-5">
                Здесь будет полный контент статьи с подробным описанием темы, анализом ситуации,
                практическими рекомендациями и выводами.
              </p>
              <p>
                Пока что в <code>newsData</code> у нас только описание (<code>description</code>),
                но вы можете добавить отдельное поле <code>content</code>, если хотите хранить полные тексты.
              </p>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Опубликовано {article.date}</div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Поделиться:</span>
                <Button variant="ghost" size="sm">Facebook</Button>
                <Button variant="ghost" size="sm">Twitter</Button>
                <Button variant="ghost" size="sm">LinkedIn</Button>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </main>
  )
}
