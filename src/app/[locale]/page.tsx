import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import YouTubePlayer from "@/src/components/YouTubePlayer";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";

import StoryImage from "@/src/assets/self-intro-img1.jpg";
import TourImage from "@/src/assets/self-intro-img2.jpg";
import DeluxeRoomImage from "@/src/assets/deeluxrrom1.jpeg";
import StandardRoomImage from "@/src/assets/standardroom.jpg";
import AyurvedicMassageImage from "@/src/assets/massage.jpg";
import IndianCookingImage from "@/src/assets/cooking.png";
import HennaArtImage from "@/src/assets/mehendi.png";
import YogaImage from "@/src/assets/yoga.jpg";
import NorthIndiaImage from "@/src/assets/north-india.jpg";
import SouthIndiaImage from "@/src/assets/south-india.png";
import EastIndiaImage from "@/src/assets/east-india.jpg";
import WestIndiaImage from "@/src/assets/west-india.jpg";
import SareeImage from "@/src/assets/saaree.png";

import ExperiencesCarousel from "@/src/components/ExperiencesCarousel";
import TestimonialsCarousel from "@/src/components/TestimonialsCarousel";
import ContactForm from "@/src/components/ContactForm";
import RoomCarousel from "@/src/components/RoomCarousel";

export default async function Home({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

    const experienceItems = [
        {
            title: t("experiences.card1.title"),
            desc: t("experiences.card1.desc"),
            image: AyurvedicMassageImage,
        },
        {
            title: t("experiences.card2.title"),
            desc: t("experiences.card2.desc"),
            image: IndianCookingImage,
            rank: t("experiences.card2.rank"),
        },
        {
            title: t("experiences.card3.title"),
            desc: t("experiences.card3.desc"),
            image: HennaArtImage,
        },
        {
            title: t("experiences.card4.title"),
            desc: t("experiences.card4.desc"),
            image: YogaImage,
        },
        {
            title: t("experiences.card5.title"),
            desc: t("experiences.card5.desc"),
            image: SareeImage,
        },
    ];

    return (
        <div className="w-full bg-white">
            <Navbar locale={locale} />

            {/* Hero section */}
            <section className="w-full px-4 md:px-12">
                <h1 className="md:hidden text-center text-xl font-extrabold text-[#1a1a1a] mt-6 tracking-tight">
                    {t("hero.ctaTitle")}
                </h1>
                {/* Video block */}
                <div className="max-w-5xl mx-auto py-6 md:py-12 relative">
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10">
                        <span className="md:text-4xl hidden md:block text-white font-semibold text-center">{t("hero.ctaTitle")}</span>
                    </div>
                    <YouTubePlayer
                        videoId="aOJ2SXL4l4s"
                        title="Indian Tour HomeStay"
                        className="rounded-xl ring-2 ring-gray-300 shadow-2xl"
                    />
                </div>
            </section>

            {/* Self Introduction section */}
            <section id="about" className="w-full relative overflow-hidden bg-white py-12 md:py-20 px-4 md:px-12">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    {/* Left: Images */}
                    <div className="relative order-2 lg:order-1 mt-10 lg:mt-0">
                        {/* Dot Pattern Overlay */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 opacity-10 hidden md:block"
                            style={{ backgroundImage: 'radial-gradient(#12aa91 2px, transparent 2px)', backgroundSize: '16px 16px' }}
                        ></div>

                        {/* Main Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
                            <Image
                                src={StoryImage}
                                alt="Trade show"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Overlapping Image */}
                        <div className="absolute -bottom-10 left-0 md:-left-10 w-1/2 md:w-1/2 rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white transition-transform hover:scale-105 duration-300">
                            <Image
                                src={TourImage}
                                alt="Tour group"
                                width={400}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col items-center lg:items-start order-1 lg:order-2">
                        <span className="bg-[#f0f9f8] text-[#12aa91] px-4 py-1.5 rounded-lg text-sm font-semibold tracking-wide flex items-center gap-2">
                            {t("selfIntro.badge")}
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mt-6 mb-6 tracking-tight">
                            {t("selfIntro.title")}
                        </h2>

                        <ul className="space-y-4 w-full">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <div className="shrink-0 mt-1 relative w-6 h-6 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                        <BadgeCheck className="text-amber-500 h-6 w-6" />
                                    </div>
                                    <p className="text-md md:text-lg text-black font-medium">
                                        {t(`selfIntro.item${i}`)}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Stay section */}
            <section id="homestay" className="w-full bg-[#f9fafb] py-12 md:py-24 px-4 md:px-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* CTA Banner */}
                    <div className="max-w-6xl mx-auto mb-18 bg-[#12aa91] rounded-xl p-6 md:p-12 relative overflow-hidden group">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                            <h3 className="text-2xl md:text-4xl text-center md:text-left font-extrabold text-white leading-tight">
                                {t("stay.ctaTitle")}
                            </h3>

                            <Link
                                href="#contact-form"
                                className="bg-white text-black px-6 py-2 md:px-12 md:py-4 rounded-xl font-bold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg whitespace-nowrap">
                                {t("stay.ctaButton")}
                            </Link>
                        </div>
                    </div>

                    {/* Section Header */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="bg-[#e6f6f4] text-[#12aa91] px-4 py-2 rounded-lg text-sm font-bold mb-8">
                            {t("stay.badge")}
                        </span>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] max-w-3xl leading-[1.15] tracking-tight">
                            {t("stay.title")}
                        </h2>
                    </div>

                    {/* Room Showcase */}
                    <RoomCarousel
                        rooms={[
                            {
                                image: StandardRoomImage,
                                title: t("stay.standardRoom"),
                                description: t("stay.standardRoomDesc"),
                                price: t("stay.standardRoomInfo"),
                                alt: "Standard Room",
                            },
                            {
                                image: DeluxeRoomImage,
                                title: t("stay.deluxeRoom"),
                                description: t("stay.deluxeRoomDesc"),
                                price: t("stay.deluxeRoomInfo"),
                                alt: "Deluxe Room",
                            },
                        ]}
                    />
                </div>
            </section>

            {/* Cultural Experiences section */}
            <section id="experiences" className="w-full bg-white py-12 md:py-24 px-4 md:px-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="bg-[#e6f6f4] text-[#12aa91] px-4 py-2 rounded-lg text-sm font-bold mb-8">
                            {t("experiences.badge")}
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] max-w-4xl leading-[1.2] tracking-tight mb-8">
                            {t("experiences.title")}
                        </h2>
                        <p className="text-gray-500 max-w-3xl text-sm md:text-md leading-relaxed text-justify md:text-center">
                            {t("experiences.description")}
                        </p>
                    </div>

                    {/* Experiences Showcase */}
                    <div className="relative mt-8">
                        <ExperiencesCarousel items={experienceItems} />
                    </div>
                </div>
            </section>

            {/* Tourism section */}
            <section id="tours" className="w-full bg-[#f9fafb] py-12 md:py-24 px-4 md:px-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <span className="bg-[#e6f6f4] text-[#12aa91] px-4 py-2 rounded-lg text-sm font-bold mb-8 inline-block">
                        {t("tourism.badge")}
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] max-w-5xl mx-auto leading-tight tracking-tight mt-6">
                        {t("tourism.title")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {[
                        { title: t("tourism.north"), img: NorthIndiaImage },
                        { title: t("tourism.south"), img: SouthIndiaImage },
                        { title: t("tourism.east"), img: EastIndiaImage },
                        { title: t("tourism.west"), img: WestIndiaImage },
                    ].map((region, idx) => (
                        <div key={idx} className="group relative aspect-3/2 rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src={region.img}
                                alt={region.title}
                                fill
                                className="object-cover"
                            />
                            {/* Overlay with title matching design */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end justify-start p-6">
                                <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight text-start">
                                    {region.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials section */}
            <section id="testimonials" className="w-full bg-[#f8fbfa] py-12 md:py-24 px-4 md:px-12 relative overflow-hidden">
                <TestimonialsCarousel />
            </section>

            {/* Contact section */}
            <section id="contact" className="w-full bg-white py-12 md:py-24 px-4 md:px-12 relative overflow-hidden">
                <ContactForm />
            </section>

        </div>
    );
}
