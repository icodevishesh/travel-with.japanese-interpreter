import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Inter, Geist, Geist_Mono, Playfair_Display } from "next/font/google";
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

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Japanese Interpreter",
    description: "Japanese language support for travel, cultural experiences, and homestay in India.",
};

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
            <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                    <Footer />
                    <FloatingSocials locale={locale} />
                </NextIntlClientProvider>

            </body>
        </html>
    );
}