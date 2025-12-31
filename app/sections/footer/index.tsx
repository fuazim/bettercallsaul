const footerLinks = {
    contact: [
        { label: "consultation@bettercallsaul.co", href: "mailto:consultation@bettercallsaul.co", icon: "mail" },
        { label: "+1 505 123 4567", href: "tel:+15051234567", icon: "phone" },
        { label: "Albuquerque, New Mexico", href: "#", icon: "map" },
    ],
    quickLinks: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Packages", href: "#packages" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
    ],
    legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
    ]
};

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white border-t border-gray-800">
            <div className="container-custom py-12 md:py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col items-start gap-4">
                        <div className="relative h-16 w-48">
                            <Image
                                src="/logos/better-call-saul-logo.png"
                                alt="Better Call Paul"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-white/60 leading-relaxed max-w-sm">
                            Legal problems? Better Call Saul! We provide clear, practical legal guidance to help you navigate through your toughest challenges.
                        </p>
                    </div>

                    {/* Quick Link & Legal */}
                    <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 bbh-hegarty-regular uppercase tracking-wider text-gold">Quick Links</h4>
                            <ul className="space-y-3">
                                {footerLinks.quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-white/70 hover:text-gold transition-colors text-sm"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 bbh-hegarty-regular uppercase tracking-wider text-gold">Contact</h4>
                            <ul className="space-y-4">
                                <li>
                                    <div className="flex items-center gap-3 text-white/70 group">
                                        <Mail className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                                        <a href="mailto:consultation@bettercallsaul.co" className="text-sm hover:text-gold transition-colors">
                                            consultation@bettercallsaul.co
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-3 text-white/70 group">
                                        <Phone className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                                        <a href="tel:+15051234567" className="text-sm hover:text-gold transition-colors">
                                            +1 505 123 4567
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-3 text-white/70">
                                        <MapPin className="w-5 h-5 text-gold" />
                                        <span className="text-sm">
                                            Albuquerque, New Mexico
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Disclaimer & Copyright */}
                <div className="pt-8 border-t border-gray-800">
                    <p className="text-xs text-white/30 mb-6 leading-relaxed">
                        <strong className="text-white/50">PORTFOLIO DISCLAIMER:</strong> This website is a creative portfolio project designed for demonstration purposes only. It is not an actual legal service or official site. "Better Call Saul", its characters, and related media are the intellectual property of AMC Network Entertainment LLC and Sony Pictures Television Inc. All rights belong to their respective owners.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-white/40">
                            © {currentYear} Better Call Saul. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-white/40">
                            {footerLinks.legal.map((link, index) => (
                                <a key={index} href={link.href} className="hover:text-gold transition-colors">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
