"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import ReikoImage from "@/src/assets/reiko.jpeg";
import KazuyoImage from "@/src/assets/kazuyo.jpeg";
import NorikoImage from "@/src/assets/noriko.jpeg";

export default function TestimonialsCarousel() {
    const t = useTranslations("testimonials");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Get items from translations
    const items = [
        {
            name: t("items.0.name"),
            text: t("items.0.text"),
            image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770790463/reiko_j0uynt.jpg", // Reiko
        },
        {
            name: t("items.1.name"),
            text: t("items.1.text"),
            image:"https://res.cloudinary.com/dtdvglgx4/image/upload/v1770790463/kazuyo_ntfuxc.jpg", // Kazuyo
        },
        {
            name: t("items.2.name"),
            text: t("items.2.text"),
            image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770790463/noriko_jobwg8.jpg", // Noriko
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const currentItem = items[currentIndex];

    return (
        <div className="flex flex-col lg:flex-row items-start gap-16 max-w-7xl mx-auto px-4">
            {/* Left Content */}
            <div className="lg:w-1/3 flex flex-col items-start text-left">
                <span className="bg-[#e6f6f4] text-[#12aa91] px-4 py-2 rounded-lg text-sm font-bold mb-8">
                    {t("badge")}
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight tracking-tight mb-10">
                    {t("title")}
                </h2>
                <p className="text-gray-500 max-w-3xl text-sm md:text-md leading-relaxed text-justify md:text-left">
                    {t("description")}
                </p>
            </div>

            {/* Right Slideshow Area */}
            <div
                className="lg:w-2/3 w-full relative group overflow-visible"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Navigation Arrows (Visible only on hover) */}
                <div className={`absolute -left-6 top-[180px] -translate-y-1/2 z-30 transition-all duration-300 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 bg-white shadow-xl flex items-center justify-center text-gray-800 hover:text-[#12aa91] rounded-lg transition-all"
                    >
                        <ChevronLeft size={24} />
                    </button>
                </div>
                <div className={`absolute -right-6 top-[180px] -translate-y-1/2 z-30 transition-all duration-300 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 bg-white shadow-xl flex items-center justify-center text-gray-800 hover:text-[#12aa91] rounded-lg transition-all"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Slides Container Wrapper */}
                <div className="overflow-hidden py-0 md:py-10 px-0 md:px-4 -mx-4">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {items.map((item, index) => (
                            <div key={index} className="w-full shrink-0 px-4">
                                <div className="relative">
                                    {/* The White Card */}
                                    <div className="bg-white rounded-xl p-8 md:p-16 shadow-[0_15px_50px_rgba(0,0,0,0.08)] relative border-b-4 border-[#12aa91] aspect-9/16 md:aspect-auto flex flex-col justify-center max-w-sm mx-auto md:max-w-none transition-all duration-300">
                                        {/* Quote Icon Badge */}
                                        <div className="absolute top-0 right-0 size-20 md:size-24 bg-[#12aa91] rounded-bl-[40px] rounded-tr-xl flex items-center justify-center">
                                            <Quote className="text-white fill-white opacity-40 size-10 md:size-12" />
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-1 mb-6">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} size={20} className="fill-[#FCD601] text-[#FCD601]" />
                                            ))}
                                        </div>

                                        {/* Testimonial Text */}
                                        <div className="flex-1 flex flex-col justify-center">
                                            <p className="text-gray-600 text-sm md:text-xl leading-relaxed font-medium mb-8 md:pr-12 text-left">
                                                {item.text}
                                            </p>
                                        </div>

                                        {/* Speech Bubble Tail - pointing down */}
                                        <div className="absolute -bottom-10 left-12 md:left-26 w-0 h-0 border-l-30 border-l-transparent border-r-30 border-r-transparent border-t-40 border-t-[#12aa91]"></div>
                                    </div>

                                    {/* User Info below bubble */}
                                    <div className="mt-12 md:mt-4 flex items-center gap-4 ml-18 md:ml-40">
                                        <div className="relative size-20 md:size-24 shrink-0 rounded-full overflow-hidden border-2 border-[#12aa91] p-0.5 md:p-1 bg-white shadow-lg aspect-square">
                                            <div className="size-full rounded-full overflow-hidden relative">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover rounded-full"
                                                />
                                            </div>
                                        </div>
                                        <span className="text-xl font-bold text-[#1a1a1a] shrink-0">{item.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
