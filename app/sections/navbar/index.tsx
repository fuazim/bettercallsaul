"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Translated Nav Items
const navItems = [
    { label: "About", href: "#tentang" },
    { label: "Services", href: "#layanan" },
    { label: "Packages", href: "#paket" },
    { label: "Process", href: "#proses" },
    { label: "Testimonials", href: "#testimoni" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#kontak" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-gray-900 backdrop-blur-md shadow-lg border-b border-gray-800"
                    : "bg-transparent"
                }`}
        >
            <div className="container-custom">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo - Adjusted to object-left for visual alignment with Hero text */}
                    <a href="#" className="flex-shrink-0">
                        <div className="relative h-12 w-40 md:h-16 md:w-60">
                            <Image
                                src="/logos/better-call-saul-logo.png"
                                alt="Better Call Paul"
                                fill
                                className="object-contain object-left" // Added object-left
                                priority
                            />
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium transition-colors hover:text-gold text-white/90"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button - Updated to match Hero style (Rebel Styling) */}
                    <div className="hidden lg:block">
                        <Button
                            asChild
                            // Scaled down slightly for Navbar (h-12 vs h-14, text-md vs text-xl) but kept style
                            className="bbh-hegarty-regular uppercase font-black bg-gold text-navy-dark hover:bg-yellow-400 px-6 h-12 text-md tracking-wider transform hover:scale-105 transition-all rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none shadow-lg shadow-gold/10"
                        >
                            <a href="#konfigurator">Book Consultation</a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 transition-colors text-white"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-gray-900 border-b border-gray-800 shadow-lg"
                    >
                        <div className="container-custom py-4 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-white hover:text-gold transition-colors py-2"
                                >
                                    {item.label}
                                </a>
                            ))}
                            {/* Mobile Menu Button Style Updated */}
                            <Button asChild className="w-full mt-4 bg-gold text-navy-dark bbh-hegarty-regular uppercase font-black tracking-wider rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none">
                                <a href="#konfigurator">Book Consultation</a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
