import { Card, CardContent, CardHeader, CardTitle } from "@/app/[locale]/(root)/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Политика конфиденциальности - Inventory Uzbekistan",
  description: "Политика конфиденциальности и обработки персональных данных компании Inventory Uzbekistan.",
  robots: "noindex, nofollow",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Политика конфиденциальности
            </h1>
            <p className="text-xl text-muted-foreground">
              Информация о сборе, обработке и защите персональных данных
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Дата вступления в силу: 01.09.2025
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Общие положения</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  Настоящая Политика конфиденциальности (далее — «Политика») регулирует порядок обработки и защиты
                  персональных данных пользователей сайта{" "}
                  <a href="https://www.inventory.uz" className="text-primary underline">
                    https://www.inventory.uz
                  </a>{" "}
                  (далее — «Сайт»).
                </p>
                <p>
                  Оператором персональных данных является ООО «WS Consulting» (далее — «Оператор»).
                </p>
                <p>
                  Политика разработана в соответствии с Законом Республики Узбекистан «О персональных данных» №ЗРУ-547 от
                  2 июля 2019 года, а также иными применимыми нормативными актами.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Персональные данные</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>Под персональными данными понимается любая информация, относящаяся к идентифицированному или идентифицируемому пользователю, включая:</p>
                <ul>
                  <li>фамилия, имя, отчество;</li>
                  <li>контактный телефон, адрес электронной почты;</li>
                  <li>данные компании (для представителей юр. лиц);</li>
                  <li>данные, которые пользователь вводит в формы на Сайте;</li>
                  <li>технические данные: IP-адрес, cookies, сведения о браузере и устройстве.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Цели обработки</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>Персональные данные обрабатываются исключительно для:</p>
                <ul>
                  <li>предоставления услуг по инвентаризации и аудиту складов;</li>
                  <li>связи с пользователями, включая ответы на запросы и рассылки при согласии;</li>
                  <li>выполнения обязательств по договорам;</li>
                  <li>соблюдения требований законодательства Республики Узбекистан;</li>
                  <li>анализа посещаемости и улучшения работы Сайта.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Правовые основания</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  Основанием для обработки персональных данных является согласие пользователя, выраженное при заполнении
                  форм на Сайте или при использовании Сайта.
                </p>
                <p>
                  Обработка также может осуществляться для выполнения требований законодательства Республики Узбекистан.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Передача и хранение данных</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <ul>
                  <li>
                    Персональные данные могут передаваться партнёрам и подрядчикам — строго для исполнения договорных
                    обязательств;
                  </li>
                  <li>государственным органам — в случаях, предусмотренных законом;</li>
                  <li>сторонним сервисам (например, хостинг-провайдеры, аналитические системы).</li>
                </ul>
                <p>
                  Трансграничная передача данных возможна в страны, обеспечивающие надлежащую защиту персональных данных
                  (например, если используются серверы или сервисы Google, Amazon и др.).
                </p>
                <p>
                  Данные хранятся до достижения целей обработки, но не дольше, чем это необходимо.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Права пользователя</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>Пользователь имеет право:</p>
                <ul>
                  <li>получать информацию об обработке своих данных;</li>
                  <li>требовать исправления, блокирования или удаления данных;</li>
                  <li>отозвать согласие на обработку;</li>
                  <li>подать жалобу в уполномоченный государственный орган Республики Узбекистан.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Меры защиты</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  Оператор принимает необходимые организационные и технические меры для защиты персональных данных от
                  несанкционированного доступа, изменения, уничтожения или распространения.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Изменения Политики</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  Оператор оставляет за собой право обновлять настоящую Политику. Новая редакция вступает в силу с
                  момента её размещения на Сайте.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Контакты</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>По вопросам, связанным с обработкой персональных данных, вы можете связаться с нами:</p>
                <ul>
                  <li>Email: info@inventory.uz</li>
                  <li>Телефон: +998 (91) 644-07-02</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
