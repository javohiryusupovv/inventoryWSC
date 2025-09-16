import type { Metadata } from "next";
import "./globals.css";
import NavbarLayout from "@/components/Navbar/NavbarLayout";
import FooterPage from "@/components/Footer/FooterPage";

export const metadata: Metadata = {
  title: "Inventory Uzbekistan - Инвентаризация и аудит складов",
  description:
    "Профессиональная инвентаризация и аудит складов по всему Узбекистану. Точная проверка, низкие цены, гарантия результата.",
  generator: "v0.app",
  keywords: [
    "инвентаризация складов",
    "аудит складов",
    "Узбекистан",
    "складская логистика",
    "управление запасами",
    "оптимизация складов",
  ],
  authors: [{ name: "Inventory Uzbekistan" }],
  openGraph: {
    title: "Inventory Uzbekistan - Инвентаризация и аудит складов",
    description:
      "Профессиональная инвентаризация и аудит складов по всему Узбекистану. Точная проверка, низкие цены, гарантия результата.",
    url: "https://inventory.uz",
    siteName: "Inventory Uzbekistan",
    locale: "ru_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inventory Uzbekistan - Инвентаризация и аудит складов",
    description:
      "Профессиональная инвентаризация и аудит складов по всему Узбекистану. Точная проверка, низкие цены, гарантия результата.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://inventory.uz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
      </head>
      <body>
        <NavbarLayout/>
        {children}
        <FooterPage/>
      </body>
    </html>
  );
}
