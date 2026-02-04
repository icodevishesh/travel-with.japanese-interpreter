"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ locale }: { locale: string }) {
    const pathname = usePathname();
    const otherLocale = locale === "ja" ? "en" : "ja";

    const newPath = pathname.replace(/^\/(ja|en)/, `/${otherLocale}`);

    return (
        <Link
            href={newPath}
            className="flex items-center gap-2 text-sm font-bold rounded-sm px-4 py-1.5 bg-[#0e8a75] hover:bg-[#0c7866] hover:text-white transition-all duration-300"
        >
            {otherLocale === "ja" ? (
                <>
                    <svg className="w-5 h-auto shadow-xs" viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
                        <path d="m0 0h3v2H0" fill="#fff" />
                        <circle cx="1.5" cy="1" r=".6" fill="#bc002d" />
                    </svg>
                    <span>JA</span>
                </>
            ) : (
                <>
                    <svg className="w-5 h-auto shadow-xs" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                        <clipPath id="s">
                            <path d="M0,0 v30 h60 v-30 z" />
                        </clipPath>
                        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#s)" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                    </svg>
                    <span>EN</span>
                </>
            )}
        </Link>
    );
}
