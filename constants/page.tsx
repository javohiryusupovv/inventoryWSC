import { StaticImageData } from "next/image";
import Imgs from "../public/cr7.webp";

interface NewsItem {
  id: number;
  image: StaticImageData;
  date: string;
  author: string;
  title: string;
  description: string;
  tags: string[];
  slug: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    image: Imgs,
    date: "15.01.2024",
    author: "Алексей Петров",
    title: "Тренды автоматизации складов в 2024 году",
    description:
      "Обзор ключевых технологий и решений, которые изменят складскую логистику в ближайшие годы. Анализ внедрения роботизации и искусственного интеллекта в управление запасами.",
    tags: ["автоматизация", "технологии"],
    slug: "uzbekiston-inventory",
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
    slug: "audit-sklad-uzbekistan",
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
    slug: "uzbekistan-inventory-sklad",
  },
  {
    id: 4,
    image: Imgs,
    date: "15.01.2024",
    author: "Алексей Петров",
    title: "Тренды автоматизации складов в 2024 году",
    description:
      "Обзор ключевых технологий и решений, которые изменят складскую логистику в ближайшие годы. Анализ внедрения роботизации и искусственного интеллекта в управление запасами.",
    tags: ["автоматизация", "технологии"],
    slug: "warehouse-systems",
  },
  {
    id: 5,
    image: Imgs,
    date: "10.01.2024",
    author: "Мария Иванова",
    title: "Лучшие практики управления запасами",
    description:
      "Проверенные методы оптимизации складских запасов, снижения издержек и повышения эффективности операций для современного бизнеса в условиях высокой конкуренции.",
    tags: ["управление", "запасы"],
    slug: "wsc-haqida",
  },
  {
    id: 6,
    image: Imgs,
    date: "08.01.2024",
    author: "Сергей Морозов",
    title: "Холодовая цепь в логистике Узбекистана",
    description:
      "Развитие инфраструктуры холодовой цепи для сохранения качества скоропортящихся товаров. Современные решения для фармацевтики и продуктов питания в условиях жаркого климата.",
    tags: ["холодовая цепь", "логистика"],
    slug: "inventory-bu-nima",
  },
];





export const metadataContent = {
  uz: {
    title: "CLAMO – Litsenziyalash va Akkreditatsiyalash Markazi",
    description:
      "CLAMO — litsenziyalash va akkreditatsiyalash bo‘yicha xizmatlar ko‘rsatadigan davlat muassasasi. Ta'lim, sog‘liqni saqlash va boshqa sohalarda yuridik shaxslarni rasmiy ro‘yxatdan o‘tkazish va sifatini baholashga doir barcha jarayonlarni yengil va shaffof tarzda amalga oshiring.",
    ogDescription:
      "Davlat litsenziya va akkreditatsiya jarayonlarini raqamlashtirish va soddalashtirishga yo‘naltirilgan platforma. CLAMO orqali muassasangizni tez, qulay va shaffof tarzda ro‘yxatdan o‘tkazing.",
    twitterDescription:
      "Litsenziya va akkreditatsiyani CLAMO orqali tez, oson va ishonchli tarzda oling.",
  },
  ru: {
    title: "CLAMO – Центр лицензирования и аккредитации",
    description:
      "CLAMO — государственное учреждение, предоставляющее услуги по лицензированию и аккредитации. Упростите и сделайте прозрачными процессы регистрации и оценки качества юридических лиц в сферах образования, здравоохранения и других.",
    ogDescription:
      "Платформа для цифровизации и упрощения государственных процессов лицензирования и аккредитации. Зарегистрируйте вашу организацию быстро и удобно с Clamo.",
    twitterDescription:
      "Получите лицензию и аккредитацию быстро, легко и надёжно с CLAMO.",
  },
  en: {
    title: "CLAMO – Licensing and Accreditation Center",
    description:
      "CLAMO is a government institution providing licensing and accreditation services. Streamline and simplify the registration and quality assessment processes for legal entities in education, healthcare, and other sectors.",
    ogDescription:
      "A platform designed to digitize and simplify state licensing and accreditation procedures. Register your organization quickly and transparently with Clamo.",
    twitterDescription:
      "Get licensed and accredited quickly, easily, and reliably with CLAMO.",
  },
};
