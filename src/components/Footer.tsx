import { useTranslations } from "next-intl";
import Link from "next/link";
import {
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

export function Footer() {
    const t = useTranslations("footer");

    return (
        <footer className="text-white">

            <div className="bg-[#1d231f] max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12 px-6 md:px-12 lg:px-24">
                {/* Self Introduction section */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-lg font-bold tracking-tight text-white">{t("selfIntro.title")}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        {t("selfIntro.desc")}
                    </p>
                </div>

                {/* Page links section */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-lg font-bold tracking-tight text-white">{t("page.title")}</h2>
                    <nav className="flex flex-col gap-3">
                        <Link href="https://www.japanese-interpreter.com/" target="_blank" className="text-gray-400 hover:text-[#12aa91] transition-colors text-sm">{t("page.links.website")}</Link>
                        <Link href="#about" className="text-gray-400 hover:text-[#12aa91] transition-colors text-sm">{t("page.links.profile")}</Link>
                        <Link href="#homestay" className="text-gray-400 hover:text-[#12aa91] transition-colors text-sm">{t("page.links.homestay")}</Link>
                        <Link href="#culturalExperiences" className="text-gray-400 hover:text-[#12aa91] transition-colors text-sm">{t("page.links.culturalExperiences")}</Link>
                        <Link href="#tours" className="text-gray-400 hover:text-[#12aa91] transition-colors text-sm">{t("page.links.tours")}</Link>
                        <Link href="#testimonials" className="text-gray-400 hover:text-[#12aa91] transition-colors text-sm">{t("page.links.testimonials")}</Link>
                    </nav>
                </div>

                {/* Contact section */}
                <div className="flex flex-col gap-6">
                    <h3 className="text-lg font-bold tracking-tight text-white">{t("contact.title")}</h3>
                    <div className="flex flex-col gap-6">
                        <a href="tel:+919810079222" className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-[#292e2b] flex items-center justify-center text-[#12aa91] group-hover:bg-[#12aa91] group-hover:text-white transition-all">
                                <Phone size={18} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{t("contact.phoneLabel")}</span>
                                <span className="text-sm font-semibold text-gray-200">+91-9810079222</span>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-[#292e2b] flex items-center justify-center text-[#12aa91] group-hover:bg-[#12aa91] group-hover:text-white transition-all">
                                <Mail size={18} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{t("contact.emailLabel")}</span>
                                <Link href="mailto:bkvermaindo@gmail.com" target="_blank">
                                    <span className="text-sm font-semibold text-gray-200">bkvermaindo@gmail.com</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-[#292e2b] flex items-center justify-center text-[#12aa91] group-hover:bg-[#12aa91] group-hover:text-white transition-all">
                                <MapPin size={18} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{t("contact.officeLabel")}</span>
                                <span className="text-sm font-semibold text-gray-200">{t("contact.officeValue")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Address */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-lg font-bold tracking-tight text-white">
                        {t("address.value")}</h4>
                    <a
                        href="https://maps.app.goo.gl/iFwMNLJQJaWp6xXF7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-sm leading-relaxed max-w-xs hover:underline transition-colors cursor-pointer"
                    >
                        {t("address.title")}
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full py-4 bg-black border-t border-[#1e211e] text-center">
                <p className="text-[10px] md:text-xs text-gray-200 tracking-wide">
                    {t("copyright")}
                </p>
            </div>
        </footer>
    );
}
