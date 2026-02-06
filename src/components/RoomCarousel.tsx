"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface RoomItem {
    image: StaticImageData;
    title: string;
    description: string;
    price: string;
    info: string;
    info2: string;
    info3: string;
    meal: string;
    alt: string;
}

interface RoomCarouselProps {
    rooms: RoomItem[];
    autoplayInterval?: number;
}

const RoomCarousel = ({ rooms, autoplayInterval = 5000 }: RoomCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [visibleItems, setVisibleItems] = useState(2);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    useEffect(() => {
        const updateVisibleItems = () => {
            if (window.innerWidth >= 768) {
                setVisibleItems(2);
            } else {
                setVisibleItems(1);
            }
        };

        updateVisibleItems();
        window.addEventListener("resize", updateVisibleItems);
        return () => window.removeEventListener("resize", updateVisibleItems);
    }, []);

    const maxIndex = Math.max(0, rooms.length - visibleItems);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, autoplayInterval);

        return () => clearInterval(interval);
    }, [nextSlide, autoplayInterval, isPaused]);

    return (
        <div
            className="relative max-w-7xl mx-auto px-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Navigation Arrows - Desktop */}
            <div className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 z-20">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 bg-white shadow-xl flex items-center justify-center text-gray-400 hover:text-[#12aa91] hover:scale-110 transition-all rounded-sm"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>
            <div className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 z-20">
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 bg-white shadow-xl flex items-center justify-center text-[#12aa91] hover:scale-110 transition-all border border-gray-100 rounded-sm"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                    {rooms.map((room, index) => (
                        <div key={index} className="w-full md:w-1/2 shrink-0 px-4">
                            <div
                                className="group cursor-pointer"
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            >
                                <div className={`relative aspect-9/16 md:aspect-4/3 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 ${expandedIndex === index ? '-translate-y-2' : 'group-hover:-translate-y-2'}`}>
                                    <Image
                                        src={room.image}
                                        alt={room.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Expanding Label */}
                                    <div className={`absolute bottom-6 left-6 right-6 bg-white rounded-lg p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 overflow-hidden ${expandedIndex === index ? 'max-h-[250px]' : 'max-h-[85px] group-hover:max-h-[250px]'}`}>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex flex-col">
                                                <div className="w-12 h-1 bg-[#12aa91] mb-2 rounded-full"></div>
                                                <h4 className="text-base md:text-lg font-bold text-[#1a1a1a] leading-tight">
                                                    {room.title}
                                                </h4>
                                            </div>
                                            <Link href="#contact-form">
                                                <div className={`w-10 h-10 rounded-full bg-[#12aa91] flex items-center justify-center text-white transition-transform shrink-0 ${expandedIndex === index ? 'rotate-45' : 'group-hover:rotate-45'}`}>
                                                    <ArrowUpRight size={20} />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={`transition-opacity duration-300 delay-100 ${expandedIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                            <p className="text-sm text-gray-500 leading-relaxed font-sans italic">
                                                {room.description}
                                            </p>
                                            <p className="text-sm text-gray-500 leading-relaxed font-sans italic">
                                                - {room.price}
                                            </p>
                                            <p className="text-sm text-gray-500 leading-relaxed font-sans italic">
                                                - {room.info}
                                            </p>
                                            <p className="text-sm text-gray-500 leading-relaxed font-sans italic">
                                                - {room.info2}
                                            </p>
                                            <p className="text-sm text-gray-500 leading-relaxed font-sans italic">
                                                - {room.info3}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation Arrows (Below carousel) */}
            <div className="lg:hidden flex justify-center gap-4 mt-8">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 z-20"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#12aa91] z-20"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default RoomCarousel;
