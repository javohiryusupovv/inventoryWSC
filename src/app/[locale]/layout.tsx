import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import CookieConsent from "./(root)/components/CookieConsent/CookieConsent";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (await params).locale;

  const meta = {
    ru: {
      title: "Инвентаризация и аудит складов по всему Узбекистану",
      description:
        "Профессиональная инвентаризация и аудит складов в Узбекистане. Точные результаты и надежный сервис для бизнеса.",
      keywords:
        "инвентаризация складов, аудит складов, инвентаризация в Узбекистане, аудит в Узбекистане, логистика, учет товаров, проверка склада",
    },
    uz: {
      title: "Omborlarni inventarizatsiya va audit qilish butun O'zbekiston bo'ylab",
      description:
        "O‘zbekistonda omborlarni professional inventarizatsiya va audit. Aniqlik, ishonchli xizmat va qulay narxlar.",
      keywords:
        "ombor inventarizatsiyasi, ombor auditi, inventarizatsiya O‘zbekistonda, logistika, mahsulot hisoboti, ombor nazorati",
    },
    en: {
      title: "Inventory and warehouse audit across all Uzbekistan",
      description:
        "Professional warehouse inventory and audit in Uzbekistan. Accurate results, reliable service, and fair prices.",
      keywords:
        "warehouse inventory, warehouse audit, inventory in Uzbekistan, logistics, stock control, warehouse management",
    },
  };

  const t = meta[locale as keyof typeof meta] || meta["ru"];

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    icons: {
      icon: [
        { url: "https://www.inventory.uz/inventory.ico", type: "image/x-icon" },
        { url: "https://www.inventory.uz/inventory.png", type: "image/png" },
      ],
      shortcut: { url: "https://www.inventory.uz/inventory.ico" },
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
    <html lang={locale} key={locale} suppressHydrationWarning>
      <head>
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Optimized font load (no render blocking) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
          media="print"
        />

        {/* Preload critical CSS */}
        <link rel="preload" href="/globals.css" as="style" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://inventory.uz${locale === "ru" ? "ru" : `/${locale}`}`}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
        <link rel="icon" href="/inventory.png" type="image/png" sizes="512x512" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Inventory Uzbekistan",
              url: "https://inventory.uz",
              logo: "https://inventory.uz/inventory.png",
              sameAs: [
                "https://www.facebook.com/inventory.uz",
                "https://www.instagram.com/inventory.uz",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "info@inventory.uz",
                  contactType: "customer support",
                },
              ],
            }),
          }}
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-JXJCZBD1Y8"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JXJCZBD1Y8', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Yandex Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
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
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/104589984"
              style={{ position: "absolute", left: "-9999px" }}
              alt="Yandex Metrika"
            />
          </div>
        </noscript>
      </head>

      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
