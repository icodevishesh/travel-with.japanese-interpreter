"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, CircleCheck, Home } from "lucide-react";
import { use } from "react";
import LineChat from "@/src/assets/chat-chatting-line-svgrepo-com.svg";

export default function ThankYouPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);
    const t = useTranslations("thankyou");

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            {/* Minimal Header */}
            <div className="w-full py-4 px-4 md:px-12 flex justify-between items-center border-b border-gray-100">
                <Link href={`/${locale}`}>
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={120}
                        height={50}
                        className="h-18 w-auto object-contain"
                    />
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Phone size={16} className="text-[#12aa91]" />
                        <span>+91-9810079222</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={16} className="text-[#12aa91]" />
                        <span>bkvermaindo@gmail.com</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto">
                <div className="space-y-8 animate-in fade-in zoom-in duration-700">
                    {/* Success Icon */}
                    <div className="w-20 h-20 bg-[#e6f6f4] rounded-full flex items-center justify-center mx-auto mb-8">
                        <CircleCheck size={40} className="text-[#12aa91]" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-playfair text-[#1a1a1a] tracking-wide">
                        {t("title")}
                    </h1>

                    <div className="flex justify-center pt-2">
                        <a
                            href="https://line.me/ti/p/bHKluN9FQp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
                        >
                            <Image src={LineChat} alt="Line" width={24} height={24} className="w-12 h-auto rounded-full border-2 border-white" />
                            {t("line")}
                        </a>
                    </div>

                    <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed pt-4 max-w-2xl mx-auto">
                        {t("description")}
                    </p>

                    <div className="pt-6">
                        <Link
                            href={`/${locale}`}
                            className="inline-flex items-center gap-2 border-2 border-[#12aa91] text-[#12aa91] px-10 py-4 rounded-xl font-bold hover:bg-[#12aa91] hover:text-white transition-all transform hover:scale-105 shadow-md"
                        >
                            <Home size={20} />
                            {t("backHome")}
                        </Link>
                    </div>
                </div>
            </main>

            {/* Bottom contact for mobile */}
            <div className="md:hidden w-full p-8 border-t border-gray-50 bg-gray-50/50 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={14} className="text-[#12aa91]" />
                    <span>+91-9810079222</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={14} className="text-[#12aa91]" />
                    <span>bkvermaindo@gmail.com</span>
                </div>
            </div>
        </div>
    );
}
