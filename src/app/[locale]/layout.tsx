import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import CookieConsent from "./(root)/components/CookieConsent/CookieConsent";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (await params).locale;

  // Til bo‘yicha matnlarni sozlash
  const meta = {
    ru: {
      title: "Инвентаризация и аудит складов по всему Узбекистану",
      description:
        "Профессиональная инвентаризация и аудит складов в Узбекистане. Точная проверка, оптимизация логистики, гарантия результата и лучшие цены.",
    },
    uz: {
      title:
        "Omborlarni inventarizatsiya va audit qilish butun O'zbekiston bo'ylab",
      description:
        "Butun O‘zbekistonda omborlarni professional inventarizatsiya va auditi. Aniqlik, logistika optimallashtirish va kafolatlangan natija.",
    },
    en: {
      title: "Inventory and warehouse audit across all Uzbekistan",
      description:
        "Professional warehouse inventory and audit across Uzbekistan. Accurate checks, logistics optimization, guaranteed results and best prices.",
    },
  };

  const t = meta[locale as keyof typeof meta] || meta["ru"];

  return {
    title: t.title,
    description: t.description,
    icons: {
      icon: [
        { url: "/inventory.ico", type: "image/x-icon" },
        { url: "/inventory.png", type: "image/png" },
      ],
      shortcut: { url: "/inventory.ico" },
      apple: { url: "/apple-touch-icon.png" },
    },
    alternates: {
      canonical: `https://inventory.uz${locale === "ru" ? "" : `/${locale}`}`,
      languages: {
        ru: "https://inventory.uz",
        uz: "https://inventory.uz/uz",
        en: "https://inventory.uz/en",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://inventory.uz${locale === "ru" ? "" : `/${locale}`}`,
      siteName: "Inventory Uzbekistan",
      locale: locale,
      type: "website",
      images: [
        {
          url: "https://inventory.uz/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["https://inventory.uz/og-image.jpg"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = (await params).locale;
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://inventory.uz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/inventory.png"
          type="image/png"
          sizes="512x512"
        />
        <meta name="theme-color" content="#1f2937" />
        {/* Yandex.Metrika counter */}
        {/* Yandex.Metrika counter */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),
              a=e.getElementsByTagName(t)[0],
              k.async=1,
              k.src=r,
              a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104589984', 'ym');

          ym(104589984, 'init', {
              ssr:true,
              webvisor:true,
              clickmap:true,
              ecommerce:"dataLayer",
              accurateTrackBounce:true,
              trackLinks:true
          });
        `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/104589984"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
