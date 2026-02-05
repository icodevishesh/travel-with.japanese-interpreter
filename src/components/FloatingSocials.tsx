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

                {/* Inquiry button */}
                <Link
                    href={`/${locale}/inquiry`}
                    className="w-10 h-10 md:w-12 md:h-12 bg-[#06C755] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 group"
                    aria-label="Custom Icon"
                >
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM88 64C74.7 64 64 74.7 64 88s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm70.3 160c-11.3 0-21.9 5.1-28.9 13.9L69.3 409c-8.3 10.3-6.6 25.5 3.7 33.7s25.5 6.6 33.7-3.8l47.1-58.8 15.2 50.7c3 10.2 12.4 17.1 23 17.1l104 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-86.1 0-16.1-53.6c-4.7-15.7-19.1-26.4-35.5-26.4z" /></svg>

                    <span className="absolute right-14 bg-white text-gray-800 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                        Inquire us
                    </span>
                </Link>
            </div>
        </>
    );
};


export default FloatingSocials;
