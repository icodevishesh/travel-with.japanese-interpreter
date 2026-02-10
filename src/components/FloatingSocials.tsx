"use client";

import { Instagram, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import LineIcon from "@/src/assets/chat-chatting-line-svgrepo-com.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import formIcon from "@/src/assets/form.png"

const FloatingSocials = ({ locale }: { locale: string }) => {
    const t = useTranslations();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 md:bottom-50 right-1 z-9999 flex flex-col-reverse items-end gap-3 p-1">
            {/* Mobile Toggle Button (Arrow) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 z-50 hover:bg-black"
                aria-label={isOpen ? "Close menu" : "Open socials"}
            >
                {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}

                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                )}
            </button>

            {/* Icons Container (Drops up on mobile) */}
            <div
                className={`flex flex-col gap-4 transition-all duration-500 ease-in-out md:bg-black/10 md:backdrop-blur-xs rounded-full p-0 md:p-1.5
                    ${isOpen
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 translate-y-10 scale-0 pointer-events-none md:opacity-100 md:translate-y-0 md:scale-100 md:pointer-events-auto"
                    }`}
            >
                {/* Inquiry button */}
                <Link
                    href="#contact-form"
                    className="w-10 h-10 md:w-12 md:h-12 bg-[#06C755] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 group relative"
                    aria-label="Inquiry"
                >
                    <Image src={formIcon} alt="Form" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="absolute right-14 bg-white text-gray-800 px-2 py-1 rounded text-xs opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-gray-100">
                        Inquire us
                    </span>
                </Link>

                {/* Instagram Icon */}
                <Link
                    href="https://www.instagram.com/bk_indotour"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 group relative"
                    aria-label="Instagram"
                >
                    <Instagram size={20} className="md:w-6 md:h-6" />
                    <span className="absolute right-14 bg-white text-gray-800 px-2 py-1 rounded text-xs opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-gray-100">
                        Instagram
                    </span>
                </Link>

                {/* Line Icon */}
                <Link
                    href="https://line.me/ti/p/bHKluN9FQp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 bg-[#06C755] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 group relative"
                    aria-label="Line"
                >
                    <Image src={LineIcon} alt="Line" width={24} height={24} className="w-10 h-10 md:w-12 md:h-12 shrink-0 p-2" />
                    <span className="absolute right-14 bg-white text-gray-800 px-2 py-1 rounded text-xs opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-gray-100">
                        Line
                    </span>
                </Link>
            </div>
        </div>
    );
};


export default FloatingSocials;
