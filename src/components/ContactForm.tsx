"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import InstagramQr from "@/src/assets/insta-qr.jpeg";
import LineQr from "@/src/assets/line-qr.jpeg";

import { useRouter } from "@/src/i18n/routing";

const ContactForm = () => {
    const t = useTranslations("contactForm");
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = t("errors.name");
        }

        if (!formData.email.trim()) {
            newErrors.email = t("errors.emailRequired");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t("errors.email");
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            try {
                const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                if (res.ok) {
                    setFormData({ name: "", email: "", phone: "", message: "" });
                    router.push("/thank-you");
                } else {
                    const data = await res.json();
                    alert(data.error || "Failed to send message");
                    setLoading(false);
                }
            } catch (err) {
                console.error(err);
                alert("Something went wrong. Please try again.");
                setLoading(false);
            }
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-16">
                <span className="bg-[#e6f6f4] text-[#12aa91] px-4 py-1.5 rounded-lg text-sm font-bold mb-6">
                    {t("badge")}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] max-w-4xl leading-tight tracking-tight mb-6">
                    {t("title")}
                </h2>
                <p className="text-gray-500 max-w-3xl text-sm md:text-md leading-relaxed text-justify md:text-center">
                    {t("subtitle")}
                </p>
            </div>

            {/* Contact Info Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-[#f0f9f8] flex items-center justify-center text-[#12aa91] mb-6 group-hover:bg-[#12aa91] group-hover:text-white transition-all duration-300">
                        <MapPin size={28} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{t("office.label")}</h4>
                    <p className="text-gray-500 font-medium text-xs md:text-sm">{t("office.value")}</p>
                </div>

                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-[#f0f9f8] flex items-center justify-center text-[#12aa91] mb-6 group-hover:bg-[#12aa91] group-hover:text-white transition-all duration-300">
                        <Mail size={28} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{t("email.label")}</h4>
                    <p className="text-gray-500 font-medium text-xs md:text-sm">{t("email.value")}</p>
                </div>

                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-[#f0f9f8] flex items-center justify-center text-[#12aa91] mb-6 group-hover:bg-[#12aa91] group-hover:text-white transition-all duration-300">
                        <Phone size={28} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{t("hotline.label")}</h4>
                    <div className="text-gray-500 font-medium space-y-1 text-xs md:text-sm flex flex-col items-center">
                        <a href="tel:+819019175629" className="hover:text-[#12aa91] transition-colors">{t("hotline.value1")}</a>
                        <a href="tel:+818057869994" className="hover:text-[#12aa91] transition-colors">{t("hotline.value2")}</a>
                        <a href="tel:+919810079222" className="hover:text-[#12aa91] transition-colors">{t("hotline.value3")}</a>
                    </div>

                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                {/* QR Section */}
                <div>
                    <h2 className="text-xl md:text-2xl font-playfair font-medium text-gray-900 mb-4 italic">{t("fields.qr")}</h2>
                    <div className="flex md:flex-col flex-row justify-center items-center text-center gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <span className="hidden md:flex items-center gap-2 text-gray-500 font-medium text-xs md:text-sm">{t("fields.follow")}</span>
                            <Image src={InstagramQr} alt="Instagram QR" className="md:w-64 md:h-64 w-28 h-28" />
                        </div>
                        <Image src={LineQr} alt="Line QR" className="md:w-64 md:h-64 w-28 h-28" />
                    </div>
                </div>


                {/* Form Section */}
                <div id="contact-form" className="max-w-4xl mx-auto bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-12">
                    <form className="space-y-9" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">{t("fields.name")}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t("fields.namePlaceholder")}
                                    className={`w-full px-6 py-4 rounded-xl bg-gray-50 border ${errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-100 focus:ring-[#12aa91]/20"} focus:outline-none focus:ring-2 focus:border-[#12aa91] transition-all text-black`}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                            </div>
                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">{t("fields.email")}</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t("fields.emailPlaceholder")}
                                    className={`w-full px-6 py-4 rounded-xl bg-gray-50 border ${errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-100 focus:ring-[#12aa91]/20"} focus:outline-none focus:ring-2 focus:border-[#12aa91] transition-all text-black`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">{t("fields.phone")}</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder={t("fields.phonePlaceholder")}
                                className={`w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:border-[#12aa91] transition-all text-black`}
                            />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">{t("fields.message")}</label>
                            <textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t("fields.messagePlaceholder")}
                                className={`w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:border-[#12aa91] transition-all resize-none text-black`}
                            ></textarea>
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full md:w-auto px-12 py-2 bg-[#12aa91] text-white font-bold rounded-xl hover:bg-[#0f8e7a] transform hover:-translate-y-1 transition-all shadow-[0_10px_20px_rgba(18,170,145,0.2)]"
                                disabled={loading}
                            >
                                {loading ? t("fields.loading") : t("fields.send")}
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default ContactForm;
