"use client";

import { MotionWrapper, MotionStagger, MotionChild } from "@/app/components/motion-wrapper";
import { SectionHeader } from "@/app/components/section-header";

const reasons = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Mengurangi Risiko Salah Langkah",
        description: "Langkah hukum yang salah bisa berakibat fatal. Konsultasi membantu Anda mengambil keputusan yang tepat dari awal.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: "Memahami Posisi dengan Lebih Tenang",
        description: "Ketika Anda tahu hak dan kewajiban Anda, Anda bisa menghadapi masalah dengan kepala lebih dingin.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Membedakan Urgensi Masalah",
        description: "Tidak semua masalah harus diselesaikan hari ini. Kami bantu Anda melihat mana yang butuh tindakan cepat dan mana yang bisa dikelola pelan-pelan.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: "Solusi Bisa Lebih Sederhana",
        description: "Bisa jadi Anda belum perlu proses panjang di pengadilan. Cukup konsultasi dan dokumen yang tepat sudah bisa menyelesaikan masalah.",
    },
];

export function WhyConsult() {
    return (
        <section className="section-padding bg-gray-soft">
            <div className="container-custom">
                <MotionWrapper>
                    <SectionHeader
                        title="Kenapa Konsultasi Lebih Dulu Itu Penting?"
                        subtitle="Memahami masalah sebelum bertindak adalah langkah paling bijak yang bisa Anda ambil"
                    />
                </MotionWrapper>

                <MotionStagger className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {reasons.map((reason, index) => (
                        <MotionChild key={index}>
                            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center text-gold">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        {reason.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </MotionChild>
                    ))}
                </MotionStagger>
            </div>
        </section>
    );
}
