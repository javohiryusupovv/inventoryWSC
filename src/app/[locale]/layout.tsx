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
      title: "Инвентаризация и аудит складов в Узбекистане | Inventory.uz",
      description:
        "Профессиональная инвентаризация складов и аудит остатков в Узбекистане. Снижаем потери, повышаем точность учета и скорость работы склада. Inventory.uz — эксперт в инвентаризации.",
    },
    uz: {
      title: "O‘zbekistondagi inventarizatsiya va ombor auditi | Inventory.uz",
      description:
        "Omborlarning professional inventarizatsiyasi va qoldiqlar auditi O‘zbekistonda. Yo‘qotishlarni kamaytiramiz, hisobning aniqligi va ombor ish tezligini oshiramiz. Inventory.uz — inventarizatsiya bo‘yicha ekspert.",
    },
    en: {
      title: "Inventory and warehouse audit in Uzbekistan | Inventory.uz",
      description:
        "Professional warehouse inventory and stock audit in Uzbekistan. We reduce losses, improve accounting accuracy, and increase warehouse efficiency. Inventory.uz — the expert in inventory.",
    },
  };

  const t = meta[locale as keyof typeof meta] || meta["ru"];

  return {
    title: t.title,
    description: t.description,
    icons: {
      icon: "inventory.ico",
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
        <meta name="theme-color" content="#1f2937" />
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
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104253355', 'ym');

        ym(104253355, 'init', {
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
        {/* /Yandex.Metrika counter */}
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <CookieConsent/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
