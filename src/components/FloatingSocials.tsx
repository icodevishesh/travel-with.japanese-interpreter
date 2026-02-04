"use client";

import { Instagram } from "lucide-react";
import Link from "next/link";
import LineIcon from "@/src/assets/chat-chatting-line-svgrepo-com.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const FloatingSocials = ({ locale }: { locale: string }) => {
    const t = useTranslations();

    return (
        <>
            {/* Inquire Now Button */}
            <Link
                href={`/${locale}#contact-form`}
                className="fixed bottom-6 left-6 px-6 py-3 bg-[#12aa91] text-white font-bold rounded-full shadow-lg hover:bg-[#109580] hover:scale-105 transition-all z-9999 active:scale-95"
            >
                {t("cta.inquireNow")}
            </Link>

            <div className="fixed top-72 right-1 flex flex-col gap-4 z-9999 bg-black/10 p-2 rounded-full">
                {/* Instagram Icon */}
                <Link
                    href="https://www.instagram.com/bk_indotour"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 group"
                    aria-label="Instagram"
                >
                    <Instagram size={24} />
                    <span className="absolute right-14 bg-white text-gray-800 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                        Instagram
                    </span>
                </Link>

                {/* Line Icon */}
                <Link
                    href="https://line.me/ti/p/bHKluN9FQp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 bg-[#06C755] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 group"
                    aria-label="Line"
                >
                    <Image src={LineIcon} alt="Line" width={24} height={24} className="w-12 h-12" />

                    <span className="absolute right-14 bg-white text-gray-800 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                        Line
                    </span>
                </Link>
            </div>
        </>
    );
};


export default FloatingSocials;
