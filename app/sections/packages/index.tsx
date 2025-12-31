"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { MotionWrapper, MotionStagger, MotionChild } from "@/app/components/motion-wrapper";
import { Zap, Scale, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
    {
        icon: Zap,
        name: "Quick Consultation",
        price: "$35",
        priceNote: "per session",
        description: "Perfect for simple questions and quick legal checks.",
        features: [
            "30 to 45 minute session (online)",
            "WhatsApp Call or Zoom",
            "Suitable for specific questions",
            "Includes a short summary of key points",
            "Basic next step recommendations",
        ],
        cta: "Choose This Plan",
        popular: false,
        theme: {
            card: "bg-gradient-to-br from-gray-900 via-gray-950 to-black border-gray-800",
            hexColor: "#111827", // gray-900 (Black theme)
            priceColor: "text-gold",
            button: "bg-white text-gray-900 hover:bg-gray-100",
            badge: null
        }
    },
    {
        icon: Scale,
        name: "In Depth Consultation",
        price: "$99",
        priceNote: "per session",
        description: "Full discussion for more complex legal issues.",
        features: [
            "60 to 90 minute session",
            "Review of basic documents (up to 10 pages)",
            "Written next step recommendations",
            "Short follow up via chat (7 days)",
            "Priority scheduling",
        ],
        cta: "Choose This Plan",
        popular: true,
        theme: {
            card: "bg-gradient-to-br from-yellow-500 to-amber-600 border-amber-400",
            hexColor: "#d97706", // amber-600 (Yellow theme)
            priceColor: "text-white",
            button: "bg-white text-amber-700 hover:bg-gray-50",
            badge: "bg-white text-amber-700"
        }
    },
    {
        icon: ShieldCheck,
        name: "Ongoing Legal Support",
        price: "$499",
        priceNote: "per month",
        description: "Ideal for business owners or long term legal needs.",
        features: [
            "Up to 4 hours of consultation per month",
            "Review and drafting of simple documents",
            "Priority response and scheduling",
            "Chat support for quick questions",
            "Great for professionals and entrepreneurs",
        ],
        cta: "Choose This Plan",
        popular: false,
        theme: {
            card: "bg-gradient-to-br from-gray-900 via-gray-950 to-black border-gray-800",
            hexColor: "#111827", // gray-900 (Black theme)
            priceColor: "text-gold",
            button: "bg-white text-gray-900 hover:bg-gray-100",
            badge: null
        }
    },
];

export function Packages() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemWidth = scrollRef.current.clientWidth;
            const index = Math.round(scrollLeft / itemWidth);
            setActiveIndex(Math.min(Math.max(0, index), packages.length - 1));
        }
    };

    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.clientWidth;
            scrollRef.current.scrollTo({
                left: index * (itemWidth + 16), // 16 matches gap-4
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    const onMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setStartScrollLeft(scrollRef.current.scrollLeft);
    };

    const onMouseLeave = () => {
        setIsDragging(false);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = startScrollLeft - walk;
    };

    const handleSelectPackage = (packageName: string) => {
        // Dispatch event for Process section
        const event = new CustomEvent("packageSelected", { detail: { package: packageName } });
        window.dispatchEvent(event);

        // Scroll to process section
        const processSection = document.getElementById("process");
        if (processSection) {
            processSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="packages" className="section-padding bg-gradient-to-br from-black to-zinc-900 relative overflow-hidden">

            <div className="container-custom">
                <MotionWrapper>
                    <div className="mb-20 md:mb-32 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                            CONSULTATION PACKAGES
                        </h2>
                        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
                            Pick the plan that fits your situation. Every session includes clear and practical guidance.
                        </p>
                    </div>
                </MotionWrapper>

                <MotionStagger className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {packages.map((pkg, index) => (
                        <MotionChild key={index} className={pkg.popular ? "md:-mt-12 md:mb-0 z-10" : "flex h-full"}>
                            <Card
                                className={`h-full relative flex flex-col border-2 shadow-xl rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none overflow-hidden ${pkg.theme.card} ${pkg.popular ? "md:scale-110 transform transition-transform" : ""}`}
                            >
                                {pkg.popular && pkg.theme.badge && (
                                    <div className="absolute top-0 right-0 z-10">
                                        <div className={`${pkg.theme.badge} text-sm font-bold px-6 py-2 rounded-bl-3xl shadow-lg`}>
                                            Most Popular
                                        </div>
                                    </div>
                                )}
                                <CardHeader className="text-center pb-2 pt-10">
                                    <div className="mx-auto mb-4 bg-white w-16 h-16 rounded-xl flex items-center justify-center p-3 shadow-lg">
                                        <pkg.icon
                                            size={32}
                                            color={pkg.theme.hexColor}
                                            strokeWidth={2.5}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                                    <p className="text-sm text-white/80 mt-1 font-medium">{pkg.description}</p>
                                </CardHeader>
                                <CardContent className="text-center flex-grow">
                                    <div className="mb-6">
                                        <span className={`text-4xl font-bold ${pkg.theme.priceColor}`}>{pkg.price}</span>
                                        <span className="text-white/70 text-sm ml-1">{pkg.priceNote}</span>
                                    </div>
                                    <ul className="space-y-3 text-left">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <svg
                                                    className="w-5 h-5 text-white/90 flex-shrink-0 mt-0.5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="text-white/90 text-sm font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="mt-auto pt-6">
                                    <Button
                                        onClick={() => handleSelectPackage(pkg.name)}
                                        className={`w-full font-bold h-12 text-lg rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-none rounded-bl-none ${pkg.theme.button}`}
                                    >
                                        {pkg.cta}
                                    </Button>
                                </CardFooter>
                            </Card>
                        </MotionChild>
                    ))}
                </MotionStagger>

                {/* MOBILE SWIPE VIEW */}
                <div className="md:hidden flex flex-col gap-6">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        onMouseDown={onMouseDown}
                        onMouseLeave={onMouseLeave}
                        onMouseUp={onMouseUp}
                        onMouseMove={onMouseMove}
                        className={cn(
                            "flex overflow-x-auto gap-4 pb-4 no-scrollbar items-stretch cursor-grab active:cursor-grabbing",
                            isDragging ? "snap-none" : "snap-x snap-mandatory"
                        )}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {packages.map((pkg, index) => (
                            <div key={index} className="snap-center shrink-0 w-full flex h-auto">
                                <Card
                                    className={`w-full relative flex flex-col border-2 shadow-xl rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none overflow-hidden ${pkg.theme.card}`}
                                >
                                    {pkg.popular && pkg.theme.badge && (
                                        <div className="absolute top-0 right-0 z-10">
                                            <div className={`${pkg.theme.badge} text-sm font-bold px-6 py-2 rounded-bl-3xl shadow-lg`}>
                                                Most Popular
                                            </div>
                                        </div>
                                    )}
                                    <CardHeader className="text-center pb-2 pt-10">
                                        <div className="mx-auto mb-4 bg-white w-16 h-16 rounded-xl flex items-center justify-center p-3 shadow-lg">
                                            <pkg.icon
                                                size={32}
                                                color={pkg.theme.hexColor}
                                                strokeWidth={2.5}
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                                        <p className="text-sm text-white/80 mt-1 font-medium">{pkg.description}</p>
                                    </CardHeader>
                                    <CardContent className="text-center flex-grow">
                                        <div className="mb-6">
                                            <span className={`text-4xl font-bold ${pkg.theme.priceColor}`}>{pkg.price}</span>
                                            <span className="text-white/70 text-sm ml-1">{pkg.priceNote}</span>
                                        </div>
                                        <ul className="space-y-3 text-left">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <svg
                                                        className="w-5 h-5 text-white/90 flex-shrink-0 mt-0.5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span className="text-white/90 text-sm font-medium">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="mt-auto pt-6">
                                        <Button
                                            onClick={() => handleSelectPackage(pkg.name)}
                                            className={`w-full font-bold h-12 text-lg rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-none rounded-bl-none ${pkg.theme.button}`}
                                        >
                                            {pkg.cta}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2">
                        {packages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className={cn(
                                    "h-3 w-3 rounded-full transition-all duration-300",
                                    activeIndex === index ? "bg-yellow-500" : "bg-gray-600 hover:bg-yellow-400"
                                )}
                                aria-label={`Go to package ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <MotionWrapper delay={0.4}>
                    <p className="text-center text-gray-500 mt-12 text-sm">
                        * Prices may vary depending on case complexity. Contact us for a custom quote.
                    </p>
                </MotionWrapper>
            </div>
        </section>
    );
}
