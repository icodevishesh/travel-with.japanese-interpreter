import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import YouTubePlayer from "@/src/components/YouTubePlayer";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";

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
            image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770790566/massage_j9jfj7.jpg",
        },
        {
            title: t("experiences.card2.title"),
            desc: t("experiences.card2.desc"),
            image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770802865/cooking_9_11zon_ae6crx.jpg",
            rank: t("experiences.card2.rank"),
        },
        {
            title: t("experiences.card3.title"),
            desc: t("experiences.card3.desc"),
            image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770802832/mehendi_16_11zon_uyrmif.jpg",
        },
        {
            title: t("experiences.card4.title"),
            desc: t("experiences.card4.desc"),
            image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770790652/yoga_iorclm.jpg",
        },
        {
            title: t("experiences.card5.title"),
            desc: t("experiences.card5.desc"),
            image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770802935/saaree_20_11zon_rliv97.jpg",
            rank: t("experiences.card5.rank"),
        },
        {
            title: t("experiences.card6.title"),
            desc: t("experiences.card6.desc"),
            image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770874265/4_wfo0qp.webp",
        },
    ];

    return (
        <div className="w-full bg-white">
            <Navbar locale={locale} />

            {/* Hero section */}
            <section className="w-full px-4 md:px-12">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mt-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] max-w-4xl leading-[1.2] tracking-tight mb-8">
                        {t("ytVideo.title")}
                    </h2>
                    <p className="text-gray-500 max-w-3xl text-sm md:text-md leading-relaxed text-justify md:text-center">
                        {t("ytVideo.subtitle")}
                    </p>
                </div>
                {/* Video block */}
                <div className="max-w-5xl mx-auto py-6 md:py-12 relative">
                    <YouTubePlayer
                        videoId="aOJ2SXL4l4s"
                        title="Indian Tour HomeStay"
                        className="rounded-xl ring-2 ring-gray-300 shadow-2xl"
                    />
                    <p className="text-gray-500 text-sm md:text-md leading-relaxed text-center mt-6">
                        {t("ytVideo.description")}
                    </p>
                </div>

            </section>

            {/* Self Introduction section */}
            <section id="about" className="w-full relative overflow-hidden bg-white py-12 md:py-20 px-4 md:px-12">
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="bg-[#f0f9f8] text-[#12aa91] px-4 py-1.5 rounded-lg text-sm font-semibold tracking-wide flex items-center gap-2">
                        {t("selfIntro.badge")}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] my-6 tracking-tight">
                        {t("selfIntro.title")}
                    </h2>
                </div>
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
                                src="https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804244/self-intro-img1_21_11zon_i5bjgf.jpg"
                                alt="Trade show"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Overlapping Image */}
                        <div className="absolute -bottom-10 left-0 md:-left-10 w-1/2 md:w-1/2 rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white transition-transform hover:scale-105 duration-300">
                            <Image
                                src="https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804247/self-intro-img2_22_11zon_fan9zq.jpg"
                                alt="Tour group"
                                width={400}
                                height={300}
                                className="w-full h-auto object-cover"
                                sizes="(max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col items-center lg:items-start order-1 lg:order-2">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-2 tracking-tight">
                            {t("selfIntro.name")}
                        </h3>
                        <p className="text-gray-500 max-w-3xl text-sm md:text-md leading-relaxed text-justify md:text-left mb-4">
                            {t("selfIntro.subtitle")}
                        </p>

                        <span className="text-sm md:text-md text-black font-extrabold tracking-wide mb-6 flex items-center uppercase">
                            *{t("selfIntro.experience")}
                        </span>

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

                    {/* Section Header */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="bg-[#e6f6f4] text-[#12aa91] px-4 py-2 rounded-lg text-sm font-bold mb-8">
                            {t("stay.badge")}
                        </span>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] max-w-3xl leading-[1.15] tracking-tight mb-6">
                            {t("stay.title")}
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
                            {[1, 2, 3].map((i) => (
                                <li key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="shrink-0 w-10 h-10 bg-[#f0f9f8] rounded-full flex items-center justify-center">
                                        <span className="text-[#12aa91] text-2xl font-extrabold">※</span>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-600 font-medium text-start">
                                        {t(`stay.description.${i}`)}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Room Showcase */}
                    <RoomCarousel
                        rooms={[
                            {
                                image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770802986/standard-room_1_11zon_ouaxat.jpg",
                                title: t("stay.standardRoom"),
                                description: t("stay.standardRoomDesc"),
                                price: t("stay.standardRoomInfo"),
                                info: t("stay.standardRoomInfo2"),
                                info2: t("stay.standardRoomInfo3"),
                                info3: t("stay.deluxeRoomInfo4"),
                                meal: t("stay.meals"),
                                alt: "Standard Room",
                            },
                            {
                                image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803023/deeluxrrom1_10_11zon_zwhqdk.jpg",
                                title: t("stay.deluxeRoom"),
                                description: t("stay.deluxeRoomDesc"),
                                price: t("stay.deluxeRoomInfo"),
                                info: t("stay.deluxeRoomInfo2"),
                                info2: t("stay.deluxeRoomInfo3"),
                                info3: t("stay.deluxeRoomInfo4"),
                                meal: t("stay.meals"),
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
                <div className="flex flex-col max-w-7xl mx-auto text-center items-center mb-16">
                    <span className="bg-[#e6f6f4] text-[#12aa91] px-4 py-2 rounded-lg text-sm font-bold mb-6 inline-block">
                        {t("tourism.badge")}
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] max-w-5xl mx-auto leading-tight tracking-tight mb-6">
                        {t("tourism.title")}
                    </h2>
                    <p className="text-gray-500 max-w-3xl text-sm md:text-md leading-relaxed text-justify md:text-center">
                        {t("tourism.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {[
                        { title: t("tourism.north"), img: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804888/north-india_18_11zon_yd25mv.jpg" },
                        { title: t("tourism.south"), img: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804888/north-india_18_11zon_yd25mv.jpg" },
                        { title: t("tourism.east"), img: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770792790/east-india_rlbnqo.jpg" },
                        { title: t("tourism.west"), img: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804895/west-india_25_11zon_f7jk4g.jpg" },
                    ].map((region, idx) => (
                        <div key={idx} className="group relative aspect-3/2 rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src={region.img}
                                alt={region.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
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
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 mt-12">
                    <p className="text-gray-500 max-w-3xl text-sm md:text-lg text-justify md:text-center">
                        {t("tourism.info")}
                    </p>
                    <Link
                        href="#contact-form"
                        className="px-4 py-2 bg-[#12aa91] text-white rounded-lg font-semibold hover:bg-[#109882] transition-colors shadow-lg"
                    >
                        {t("tourism.button")}
                    </Link>
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
