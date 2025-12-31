"use client";

import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionWrapper } from "@/app/components/motion-wrapper";
import { SectionHeader } from "@/app/components/section-header";

const faqs = [
    {
        question: "Does this consultation replace a lawyer in court?",
        answer: "No. This consultation is meant to help you understand your legal position, your options, and the smartest next step. If you need court representation, we will advise you accordingly.",
    },
    {
        question: "Can every case be handled?",
        answer: "Not always. Some cases require specific expertise, jurisdiction limits, or formal representation. If your case is outside the scope of consultation, we will let you know honestly and upfront.",
    },
    {
        question: "What if I just want to ask something quick?",
        answer: "That is exactly what the Quick Consultation is for. A short session with straight answers, without unnecessary small talk.",
    },
    {
        question: "Is my data and story kept confidential?",
        answer: "Yes. Everything you share is treated as confidential. Your privacy and your trust are important.",
    },
    {
        question: "Can we schedule outside normal business hours?",
        answer: "In many cases, yes. Let us know your availability and urgency, and we will do our best to arrange it.",
    },
    {
        question: "How do I pay?",
        answer: "Payment is made securely after your consultation booking is confirmed. Full payment details will be shared when you schedule your session.",
    },
];

export function FAQ() {
    return (
        <section id="faq" className="section-padding !pb-[200px] md:pb-24 lg:pb-32 bg-gray-soft relative overflow-hidden">
            {/* Background Image Right Bottom */}
            {/* Background Image Right Bottom */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[250px] h-[250px] md:right-0 md:left-auto md:translate-x-0 md:w-[400px] md:h-[400px] z-30 pointer-events-none select-none">
                <Image
                    src="/images/saul-packages.png"
                    alt="Saul FAQ"
                    fill
                    className="object-contain object-bottom"
                    unoptimized
                />
            </div>
            <div className="container-custom relative z-10">
                <MotionWrapper>
                    <SectionHeader
                        title="FREQUENTLY ASKED QUESTIONS"
                        subtitle="Clear answers to your most common questions."
                        className="[&_h2]:text-transparent [&_h2]:bg-clip-text [&_h2]:bg-gradient-to-r [&_h2]:from-yellow-400 [&_h2]:to-yellow-600"
                    />
                </MotionWrapper>

                <MotionWrapper delay={0.2}>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full space-y-6">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-gradient-to-br from-black to-zinc-900 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none border-0 overflow-hidden shadow-lg"
                                >
                                    <AccordionTrigger className="text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:no-underline py-6 px-8 text-lg">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-white pb-8 px-8 leading-relaxed text-base font-medium">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}
