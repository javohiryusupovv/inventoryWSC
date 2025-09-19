import { Card, CardContent, CardHeader, CardTitle } from "@/app/[locale]/(root)/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Политика использования cookies - Inventory Uzbekistan",
  description: "Информация об использовании файлов cookie на сайте Inventory Uzbekistan.",
  robots: "noindex, nofollow",
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Политика использования cookies</h1>
            <p className="text-xl text-muted-foreground">Информация об использовании файлов cookie на нашем сайте</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Что такое cookies?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  Cookies (куки) — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении
                  веб-сайтов. Они помогают сайтам запоминать информацию о вашем визите, что может сделать ваше следующее
                  посещение более удобным и полезным.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Как мы используем cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>Мы используем cookies для следующих целей:</p>
                <ul>
                  <li>
                    <strong>Функциональные cookies:</strong> Обеспечивают работу основных функций сайта
                  </li>
                  <li>
                    <strong>Аналитические cookies:</strong> Помогают понять, как посетители используют сайт
                  </li>
                  <li>
                    <strong>Маркетинговые cookies:</strong> Используются для показа релевантной рекламы
                  </li>
                  <li>
                    <strong>Cookies предпочтений:</strong> Запоминают ваши настройки и предпочтения
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Управление cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  Вы можете контролировать и/или удалять cookies по своему усмотрению. Вы можете удалить все cookies,
                  которые уже находятся на вашем компьютере, и настроить большинство браузеров так, чтобы они не
                  сохранялись.
                </p>
                <p>
                  Однако, если вы это сделаете, вам, возможно, придется вручную настраивать некоторые предпочтения при
                  каждом посещении сайта, и некоторые услуги и функции могут не работать.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контакты</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>Если у вас есть вопросы о нашей политике использования cookies, свяжитесь с нами:</p>
                <ul>
                  <li>Email: info@inventory.uz</li>
                  <li>Телефон: +998 (90) 123-45-67</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
