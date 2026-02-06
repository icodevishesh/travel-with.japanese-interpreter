import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "../../app/globals.css";

import { Footer } from "../../components/Footer";
import FloatingSocials from "../../components/FloatingSocials";
import { routing } from "../../i18n/routing";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
});

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "meta" });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.india-tour-homestay.com";
    const canonical = `${baseUrl}/${locale}`;

    return {
        title: t("title"),
        description: t("description"),
        alternates: {
            canonical: canonical,
            languages: {
                en: `${baseUrl}/en`,
                ja: `${baseUrl}/ja`,
            },
        },
        openGraph: {
            title: t("title"),
            description: t("description"),
            url: canonical,
            siteName: "Japanese Interpreter & Guide Service",
            locale: locale === "ja" ? "ja_JP" : "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: t("title"),
            description: t("description"),
        },
    };
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) notFound();

    // Enable static rendering
    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${inter.className} ${playfair.variable} antialiased`}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                    <Footer />
                    <FloatingSocials locale={locale} />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}