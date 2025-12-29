"use client";

import { MotionWrapper, MotionStagger, MotionChild } from "@/app/components/motion-wrapper";
import { SectionHeader } from "@/app/components/section-header";

const steps = [
    {
        number: "01",
        title: "Isi Form / Hubungi Kami",
        description:
            "Anda mengisi form konfigurator atau menghubungi kami via WhatsApp untuk menjelaskan masalah secara singkat.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Screening Awal",
        description:
            "Kami membaca ringkasan masalah Anda dan menentukan apakah kami dapat membantu serta paket apa yang sesuai.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Penentuan Paket & Jadwal",
        description:
            "Kami merekomendasikan paket layanan yang tepat dan menjadwalkan sesi konsultasi sesuai ketersediaan Anda.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Sesi Konsultasi",
        description:
            "Diskusi terarah membahas masalah Anda, penjelasan hak & opsi yang ada, serta rekomendasi langkah konkret.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
        ),
    },
    {
        number: "05",
        title: "Follow-up (Opsional)",
        description:
            "Pendampingan lanjutan sesuai paket yang Anda pilih, termasuk review dokumen atau konsultasi tambahan.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export function Process() {
    return (
        <section id="proses" className="section-padding bg-white">
            <div className="container-custom">
                <MotionWrapper>
                    <SectionHeader
                        title="Bagaimana Proses Konsultasi di Better Call Paul?"
                        subtitle="Langkah-langkah sederhana untuk mendapatkan bantuan hukum yang Anda butuhkan"
                    />
                </MotionWrapper>

                <div className="max-w-4xl mx-auto">
                    <MotionStagger className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                        {steps.map((step, index) => (
                            <MotionChild key={index}>
                                <div className="relative flex gap-6 pb-12 last:pb-0">
                                    {/* Timeline dot */}
                                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-primary rounded-full items-center justify-center text-primary-foreground font-bold text-lg z-10">
                                        {step.number}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-gray-soft rounded-xl p-6 hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="md:hidden flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                                                {step.number}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center text-gold">
                                                        {step.icon}
                                                    </div>
                                                    <h3 className="text-xl font-semibold text-foreground">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MotionChild>
                        ))}
                    </MotionStagger>
                </div>
            </div>
        </section>
    );
}
