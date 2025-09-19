import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { metadataContent } from "../../../constants/page";
import "../globals.css";
// export const metadata: Metadata = {
//   title: "Inventory Uzbekistan - Инвентаризация и аудит складов",
//   description:
//     "Профессиональная инвентаризация и аудит складов по всему Узбекистану. Точная проверка, низкие цены, гарантия результата.",
//   generator: "v0.app",
//   keywords: [
//     "инвентаризация складов",
//     "аудит складов",
//     "Узбекистан",
//     "складская логистика",
//     "управление запасами",
//     "оптимизация складов",
//   ],
//   authors: [{ name: "Inventory Uzbekistan" }],
//   openGraph: {
//     title: "Inventory Uzbekistan - Инвентаризация и аудит складов",
//     description:
//       "Профессиональная инвентаризация и аудит складов по всему Узбекистану. Точная проверка, низкие цены, гарантия результата.",
//     url: "https://inventory.uz",
//     siteName: "Inventory Uzbekistan",
//     locale: "ru_UZ",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Inventory Uzbekistan - Инвентаризация и аудит складов",
//     description:
//       "Профессиональная инвентаризация и аудит складов по всему Узбекистану. Точная проверка, низкие цены, гарантия результата.",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = metadataContent[locale as "uz" | "ru" | "en"] ?? metadataContent.uz;

  return {
    title: t.title,
    description: t.description,
    keywords: [
      "CLAMO",
      "litsenziya",
      "akkreditatsiya",
      "davlat muassasasi",
      "ruxsatnoma",
      "ta'lim litsenziyasi",
      "sog‘liqni saqlash akkreditatsiyasi",
      "Uzbekistan",
      "litsenziyalash markazi",
      "akkreditatsiya qilish",
    ],
    authors: [{ name: "Inventory Uzbekistan" }],
    openGraph: {
      title: t.title,
      description: t.ogDescription,
      url: "https://inventory.uz",
      siteName: "Inventory Uzbekistan",
      locale: locale, 
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.twitterDescription,
    },
  } satisfies Metadata;
}
export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}>) {
  const locale = (await params).locale
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://inventory.uz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
