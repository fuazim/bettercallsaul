"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/app/components/motion-wrapper";
import { Mail, Clock } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="relative section-padding overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <Image
                    src="/images/saul-contact.jpg"
                    alt="Background Contact"
                    fill
                    className="object-cover object-center translate-x-32 md:translate-x-128"
                    priority
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900 from-30% via-gray-900/90 to-black/60" />

            <div className="container-custom relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    <MotionWrapper>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bbh-hegarty-regular uppercase text-white drop-shadow-lg">
                            READY FOR CLEARER LEGAL DIRECTION
                        </h2>
                    </MotionWrapper>

                    <MotionWrapper delay={0.1}>
                        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
                            Tell Saul briefly what is going on, and he will help guide you toward the most realistic next step.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper delay={0.2}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Button
                                asChild
                                size="lg"
                                className="bbh-hegarty-regular uppercase font-black bg-gold text-navy-dark hover:bg-yellow-400 px-10 h-14 text-lg md:text-xl tracking-wider transform hover:scale-105 transition-all rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none"
                            >
                                <a href="#configurator">Consultation Form</a>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="bbh-hegarty-regular uppercase font-black border-2 border-white text-white hover:bg-white hover:text-navy-dark px-10 h-14 text-lg md:text-xl tracking-wider transform hover:scale-105 transition-all rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none bg-transparent"
                            >
                                <a
                                    href="https://wa.me/15051234567"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Chat on WhatsApp
                                </a>
                            </Button>
                        </div>
                    </MotionWrapper>

                    <MotionWrapper delay={0.3}>
                        <div className="grid sm:grid-cols-3 gap-8 pt-10 border-t border-white/20">
                            <div>
                                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10 group hover:bg-gold/20 transition-colors duration-300">
                                    <Mail className="w-7 h-7 text-gold" />
                                </div>
                                <div className="text-sm text-white/60 mb-1 font-medium tracking-wide uppercase">Email</div>
                                <div className="font-bold text-lg text-white">consultation@bettercallsaul.co</div>
                            </div>

                            <div>
                                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10 group hover:bg-gold/20 transition-colors duration-300">
                                    <svg
                                        className="w-7 h-7 text-gold"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div className="text-sm text-white/60 mb-1 font-medium tracking-wide uppercase">WhatsApp</div>
                                <div className="font-bold text-lg text-white">+1 505 123 4567</div>
                            </div>

                            <div>
                                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10 group hover:bg-gold/20 transition-colors duration-300">
                                    <Clock className="w-7 h-7 text-gold" />
                                </div>
                                <div className="text-sm text-white/60 mb-1 font-medium tracking-wide uppercase">Office Hours</div>
                                <div className="font-bold text-lg text-white">Monday to Friday, 9.00 AM to 6.00 PM</div>
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    );
}
