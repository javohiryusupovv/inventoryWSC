import { Card, CardContent, CardHeader, CardTitle } from "@/app/[locale]/(root)/components/ui/card"
import type { Metadata } from "next"
import { useTranslations } from "next-intl"

export const metadata: Metadata = {
  title: "Privacy Policy - Inventory Uzbekistan",
  description: "Privacy policy and personal data processing rules of Inventory Uzbekistan company.",
  robots: "noindex, nofollow",
}

export default function PrivacyPage() {
  const t = useTranslations("cookies")

  return (
    <main className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t("pageTitle")}
            </h3>
            <p className="text-xl text-muted-foreground">
              {t("pageSubtitle")}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {t("effectiveDate")}
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <Card>
              <CardHeader>
                <CardTitle>{t("section1Title")}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>{t("section1Text1")}</p>
                <p>{t("section1Text2")}</p>
                <p>{t("section1Text3")}</p>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card>
              <CardHeader>
                <CardTitle>{t("section2Title")}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>{t("section2Intro")}</p>
                <ul>
                  {t.raw("section2List").map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card>
              <CardHeader>
                <CardTitle>{t("section3Title")}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>{t("section3Intro")}</p>
                <ul>
                  {t.raw("section3List").map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card>
              <CardHeader>
                <CardTitle>{t("section4Title")}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>{t("section4Text1")}</p>
                <p>{t("section4Text2")}</p>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card>
              <CardHeader>
                <CardTitle>{t("section5Title")}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <ul>
                  {t.raw("section5List").map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>{t("section5Text1")}</p>
                <p>{t("section5Text2")}</p>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card>
              <CardHeader>
                <CardTitle>{t("section6Title")}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>{t("section6Intro")}</p>
                <ul>
                  {t.raw("section6List").map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card>
              <CardHeader>
                <CardTitle>{t("section7Title")}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>{t("section7Text")}</p>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card>
              <CardHeader>
                <CardTitle>{t("section8Title")}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>{t("section8Text")}</p>
              </CardContent>
            </Card>

            {/* Section 9 */}
            <Card>
              <CardHeader>
                <CardTitle>{t("section9Title")}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>{t("section9Intro")}</p>
                <ul>
                  {t.raw("section9List").map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
