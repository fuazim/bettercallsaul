"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/app/components/motion-wrapper";

export function Hero() {
    return (
        <section className="relative min-h-[100vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/heros.jpg"
                    alt="Background Hero"
                    fill
                    // Mobile: Center position, shifted right 32 (user edit)
                    // Desktop (lg): Right aligned (100% center), shifted right 128
                    className="object-cover object-center translate-x-32 lg:object-[100%_center] lg:translate-x-128"
                    priority
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900 from-30% via-gray-900/90 to-transparent" />

            {/* Content */}
            <div className="container-custom relative z-20 pt-20">
                <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-white max-w-12xl">
                        <MotionWrapper delay={0.2}>
                            <h1 className="leading-none mb-6 bbh-hegarty-regular uppercase tracking-tight drop-shadow-lg">
                                <span className="text-5xl md:text-6xl lg:text-7xl block mb-2 text-white">Got problems?</span>
                                <span className="text-6xl md:text-7xl lg:text-9xl block text-gold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 whitespace-nowrap">
                                    Better
                                    <br />
                                    call Saul!
                                </span>
                            </h1>
                        </MotionWrapper>

                        <MotionWrapper delay={0.3}>
                            <p className="text-md md:text-lg text-white/90 mb-10 leading-relaxed max-w-4xl font-roboto font-regular">
                                Contracts gone wrong? Family drama? Business deal turning sour?{" "}
                                <span className="text-gold font-black not-italic">Relax.</span> Saul turns legal chaos into clear options, with advice that’s
                                straight-shooting, practical, and just a little smarter than the other guy.
                                <br /><br />
                                If it’s trouble… Saul can help you handle it.
                            </p>
                        </MotionWrapper>

                        <MotionWrapper delay={0.5}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bbh-hegarty-regular uppercase font-black bg-gold text-navy-dark hover:bg-yellow-400 px-10 h-14 text-lg md:text-xl tracking-wider transform hover:scale-105 transition-all rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none"
                                >
                                    <a href="#configurator">Message Saul</a>
                                </Button>
                            </div>
                        </MotionWrapper>
                    </div>

                    <div className="hidden lg:block"></div>
                </div>
            </div>
        </section>
    );
}
