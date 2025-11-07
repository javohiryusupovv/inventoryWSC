import { Button } from "@/app/[locale]/(root)/components/ui/button";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { newsData } from "../../../../../../constants/page";
import ReactMarkdown from "react-markdown";

type ArticlePageParams = { params: Promise<{ slug: string; locale: string }> };

export async function generateMetadata({
  params,
}: ArticlePageParams): Promise<Metadata> {
  const { slug, locale } = await params;
  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Статья не найдена - Inventory Uzbekistan",
    };
  }

  const title =
    locale === "uz"
      ? article.title_uz
      : locale === "ru"
      ? article.title_ru
      : article.title_en;

  const description =
    locale === "uz"
      ? article.description_uz
      : locale === "ru"
      ? article.description_ru
      : article.description_en;

  return {
    title: `${title} - Inventory Uzbekistan`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: article.image?.src || "https://inventory.uz/og-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [article.image?.src || "https://inventory.uz/og-image.jpg"],
    },
  };
}

export default async function Page({ params }: ArticlePageParams) {
  const { slug, locale } = await params;
  const article = newsData.find((item) => item.slug === slug);

  if (!article) return notFound();

  // Kontentni locale bo‘yicha tanlash
  const content =
    locale === "uz"
      ? article.content_uz
      : locale === "ru"
      ? article.content_ru
      : article.content_en;

  return (
    <main className="min-h-screen">
      <article className="bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link href={`/${locale}/news`} rel="noopener noreferrer">
              <Button
                variant="ghost"
                className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-200/50"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>
                  {locale === "uz"
                    ? "Yangiliklarga qaytish"
                    : locale === "ru"
                    ? "Назад к новостям"
                    : "Back to news"}
                </span>
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <h6 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {locale === "uz"
                ? article.title_uz
                : locale === "ru"
                ? article.title_ru
                : article.title_en}
            </h6>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
              {locale === "uz"
                ? article.description_uz
                : locale === "ru"
                ? article.description_ru
                : article.description_en}
            </p>

            <div className="flex items-center justify-between border-b border-border pb-6">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {article.image && (
            <div className="mb-12">
              <Image
                src={article.image}
                alt={article.title_en}
                className="max-w-full h-96 object-cover rounded-lg"
                loading="eager"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div className="text-foreground leading-relaxed mb-10">
            <div className="prose xl:prose-xl max-w-none dark:prose-invert">
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      download
                      className="text-blue-600 underline"
                    />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
