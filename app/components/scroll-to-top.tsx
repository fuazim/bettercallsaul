"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Visibility logic
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Progress logic
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setProgress(Number(scroll));
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Circle configuration
    const size = 56;
    const strokeWidth = 4;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - progress * circumference;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center justify-center pointer-events-none" // pointer-events-none on wrapper, auto on button
                >
                    <div className="relative flex items-center justify-center">
                        {/* Progress Circle SVG */}
                        <svg
                            className="absolute -rotate-90 transform"
                            width={size}
                            height={size}
                        >
                            {/* Background Track */}
                            <circle
                                stroke="rgba(255, 255, 255, 0.1)"
                                cx={center}
                                cy={center}
                                r={radius}
                                strokeWidth={strokeWidth}
                                fill="transparent"
                            />
                            {/* Progress Fill */}
                            <circle
                                stroke="#FFD700" // Gold color
                                cx={center}
                                cy={center}
                                r={radius}
                                strokeWidth={strokeWidth}
                                fill="transparent"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                className="transition-all duration-100 ease-out"
                            />
                        </svg>

                        {/* Button */}
                        <Button
                            onClick={scrollToTop}
                            size="icon"
                            className="bg-navy-dark text-gold hover:bg-navy-light rounded-full h-10 w-10 shadow-lg pointer-events-auto flex items-center justify-center z-10"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="h-5 w-5 font-bold" strokeWidth={3} />
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
