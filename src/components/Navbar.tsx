"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ChevronDown, Instagram } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./switcher";

export function Navbar({ locale }: { locale: string }) {
    const t = useTranslations("nav");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full flex flex-col font-['Inter',sans-serif] sticky top-0 z-50 shadow-sm">
            {/* Top Bar */}
            <div className="relative w-full bg-[#12aa91] text-white py-2 px-4 md:px-12 flex justify-between items-center text-xs md:text-sm overflow-hidden">
                {/* Diagonal Stripes Overlay */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)',
                        backgroundSize: '20px 20px'
                    }}
                ></div>

                <div className="relative z-10 flex items-center gap-4 md:gap-6">
                    <a href="tel:+919810079222" className="hidden md:flex items-center gap-2 hover:underline">
                        <Phone size={14} className="text-white" />
                        <span className="hidden sm:inline">+91-9810079222</span>
                        <span className="sm:hidden text-[10px]">+91-9810079222</span>
                    </a>

                    <div className="flex items-center gap-2">
                        <Mail size={14} className="text-white" />
                        <a href="mailto:bkvermaindo@gmail.com" className="hidden sm:inline cursor-pointer hover:underline">info@japanese-interpreter.com</a>
                        <a href="mailto:bkvermaindo@gmail.com" className="sm:hidden text-[10px] cursor-pointer hover:underline">info@japanese-interpreter.com</a>
                    </div>
                </div>
                <div className="relative z-10 flex items-center gap-4 md:gap-6">
                    <LanguageSwitcher locale={locale} />
                </div>
            </div>

            {/* Main Bar */}
            <div className="w-full bg-white border-b py-2 px-4 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href={`/${locale}`} className="flex flex-col items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={100}
                        height={40}
                        className="h-10 md:h-15 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4 text-[#4a4a4a] text-sm font-medium">
                    {/* <Link href={`/${locale}`} className="text-[#12aa91] hover:text-[#0e8a75] transition-colors">
                        {t("home")}
                    </Link> */}
                    <Link href={`/${locale}#about`} className="hover:text-[#12aa91] transition-colors whitespace-nowrap">
                        {t("selfIntroduction")}
                    </Link>
                    <Link href={`/${locale}#homestay`} className="block px-4 py-2 hover:text-[#12aa91]">{t("homestay")}</Link>
                    <Link href={`/${locale}#experiences`} className="block px-4 py-2 hover:text-[#12aa91]">{t("culturalExperiences")}</Link>
                    <Link href={`/${locale}#tours`} className="hover:text-[#12aa91] transition-colors whitespace-nowrap">
                        {t("optionalTours")}
                    </Link>
                    <Link href={`/${locale}#testimonials`} className="hover:text-[#12aa91] transition-colors whitespace-nowrap">
                        {t("customerTestimonials")}
                    </Link>
                    <Link href={`/${locale}#contact-form`} className="hover:text-[#12aa91] transition-colors whitespace-nowrap">
                        {t("inquiry")}
                    </Link>
                </div>

                {/* Mobile Menu Icon (Hamburger) */}
                <button
                    className="lg:hidden text-gray-600 p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Navigation Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col gap-4 shadow-inner">
                    {/* <Link href={`/${locale}`} className="text-[#12aa91] font-medium" onClick={() => setIsMenuOpen(false)}>
                        {t("home")}
                    </Link> */}
                    <Link href={`/${locale}#about`} className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
                        {t("selfIntroduction")}
                    </Link>
                    <Link href={`/${locale}#homestay`} className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
                        {t("homestay")}
                    </Link>
                    <Link href={`/${locale}#experiences`} className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
                        {t("culturalExperiences")}
                    </Link>
                    <Link href={`/${locale}#tours`} className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
                        {t("optionalTours")}
                    </Link>
                    <Link href={`/${locale}#testimonials`} className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
                        {t("customerTestimonials")}
                    </Link>
                    <Link href={`/${locale}#contact-form`} className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
                        {t("inquiry")}
                    </Link>
                </div>
            )}
        </nav>
    );
}
