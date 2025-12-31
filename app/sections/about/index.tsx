"use client";

import Image from "next/image";
import { MotionWrapper } from "@/app/components/motion-wrapper";
import { SectionHeader } from "@/app/components/section-header";

export function About() {
    return (
        <section id="about" className="section-padding bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
            <div className="container-custom">
                <MotionWrapper>
                    <SectionHeader
                        title="WHO’S BEHIND BETTER CALL Saul?"
                        subtitle="Meet the guy you call when things start getting complicated."
                        // Apply Gold Gradient to Title (h2) and Navy Dark to Subtitle (p)
                        className="[&_h2]:text-transparent [&_h2]:bg-clip-text [&_h2]:bg-gradient-to-r [&_h2]:from-yellow-400 [&_h2]:to-yellow-600 [&_p]:text-navy-dark"
                    />
                </MotionWrapper>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <MotionWrapper delay={0.2} direction="left">
                        <div className="relative">
                            {/* Rebel Style: Rounded TL/BR. w-full to fill container */}
                            <div className="aspect-square w-full overflow-hidden shadow-2xl relative rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none ">
                                <Image
                                    src="/images/who-is-saul.webp"
                                    alt="Saul"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </MotionWrapper>

                    {/* Content */}
                    <MotionWrapper delay={0.3} direction="right">
                        <div className="space-y-6">
                            {/* Updated: text-md on mobile to match Hero, text-xl on desktop */}
                            <p className="text-md md:text-xl text-white/90 leading-relaxed">
                                <strong className="text-gold">Saul</strong> is an experienced legal consultant who’s helped clients navigate all kinds of issues from family matters and civil disputes to business conflicts and employment problems.
                            </p>

                            <p className="text-md md:text-xl text-white/90 leading-relaxed">
                                If it’s legal trouble, Saul knows the terrain.
                            </p>

                            <p className="text-md md:text-xl text-white/90 leading-relaxed">
                                With a human, straight-talking, and solution-focused approach, Saul believes one thing:
                                everyone deserves clear legal guidance without fear-mongering, without confusing jargon, and without the drama.
                            </p>

                            {/* Quote Box - Rebel Style */}
                            <div className="bg-navy-dark p-6 border-l-4 border-gold shadow-sm backdrop-blur-sm rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none">
                                <p className="text-2xl font-bold text-white italic bbh-hegarty-regular">
                                    “Let us handle the complicated stuff. Your job? Call Saul.”
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4 pt-4">
                                {[
                                    { number: "500+", label: "Clients Helped" },
                                    { number: "10+", label: "Years of Experience" },
                                    { number: "95%", label: "Satisfaction Rate" },
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        // Use bg-black for solid black background
                                        className="text-center p-4 bg-black shadow-sm border border-white/10 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none"
                                    >
                                        <div className="text-3xl font-bold text-gold">{stat.number}</div>
                                        <div className="text-sm text-white/80">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    );
}
