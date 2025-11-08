import Link from "next/link";
import "../globals.css";
import { useLocale } from "next-intl";
import { Button } from "./(root)/components/ui/button";

export const metadata = {
  title: "404 - Page Not Found | Inventory Uzbekistan",
  description: "The page you are looking for might have been removed or temporarily unavailable.",
  robots: {
    index: false, // 404 sahifa indekslanmasin
  },
};

export default function NotFound() {
  const locale = useLocale();

  const texts = {
    uz: {
      title: "404 - Sahifa topilmadi",
      subtitle: "Siz izlagan sahifa o‘chirilgan bo‘lishi mumkin",
      subtitle2: "yoki vaqtincha mavjud emas.",
      button: "Bosh sahifaga qaytish",
    },
    ru: {
      title: "404 - Страница не найдена",
      subtitle: "Страница, которую вы ищете, возможно, была удалена",
      subtitle2: "или временно недоступна.",
      button: "На главную",
    },
    en: {
      title: "404 - Page Not Found",
      subtitle: "The page you are looking for might have been removed",
      subtitle2: "had its name changed or is temporarily unavailable.",
      button: "Go to Homepage",
    },
  };

  // Fallback — agar locale yo‘q bo‘lsa, ruscha ishlaydi
  const t = texts[locale as keyof typeof texts] || texts["ru"];

  console.log(t.subtitle);
  

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="text-center px-6 max-w-2xl">
        {/* Animated OOPS text */}
        <div className="mb-8 animate-bounce">
          <h2 className="text-9xl md:text-[180px] font-black text-orange-600 leading-none">
            OOPS!
          </h2>
        </div>

        {/* 404 Error Code */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 mb-2">{t.subtitle}</p>
          <p className="text-lg text-gray-600 mb-8">{t.subtitle2}</p>
        </div>

        {/* CTA Button */}
        <Link href={`/${locale}`}>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105">
            {t.button}
          </Button>
        </Link>

        {/* Decorative element */}
        <div className="mt-16 flex justify-center gap-4 opacity-20">
          <div className="w-16 h-16 bg-orange-300 rounded-full"></div>
          <div className="w-12 h-12 bg-orange-400 rounded-full"></div>
          <div className="w-16 h-16 bg-orange-300 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
