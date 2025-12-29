"use client";

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
        question: "Apakah konsultasi ini menggantikan pengacara di pengadilan?",
        answer:
            "Tidak. Layanan konsultasi kami fokus pada edukasi, analisis masalah, dan rekomendasi langkah. Jika kasus Anda membutuhkan pendampingan di pengadilan, kami akan merekomendasikan pengacara litigasi yang tepat dan bisa menjadi jembatan komunikasi.",
    },
    {
        question: "Apakah semua kasus pasti bisa ditangani?",
        answer:
            "Tidak semua kasus bisa kami tangani. Pada tahap screening awal, kami akan mengevaluasi apakah masalah Anda sesuai dengan bidang keahlian kami. Jika tidak, kami akan jujur menginformasikan dan mengarahkan Anda ke pihak yang lebih tepat.",
    },
    {
        question: "Bagaimana jika saya hanya ingin tanya sebentar?",
        answer:
            "Anda bisa memilih Paket Konsultasi Singkat (30-45 menit) yang cocok untuk pertanyaan spesifik. Alternatifnya, hubungi kami via WhatsApp untuk diskusi awal gratis dan kami bantu tentukan apakah Anda membutuhkan konsultasi formal.",
    },
    {
        question: "Apakah data dan cerita saya dijamin kerahasiaannya?",
        answer:
            "Tentu saja. Kami menjunjung tinggi kerahasiaan klien. Semua informasi yang Anda sampaikan hanya digunakan untuk keperluan konsultasi dan tidak akan dibagikan ke pihak ketiga tanpa izin Anda.",
    },
    {
        question: "Apakah bisa meeting di luar jam kerja?",
        answer:
            "Untuk paket Pendampingan dan kebutuhan khusus, kami bisa mengatur jadwal di luar jam kerja reguler. Silakan diskusikan saat penjadwalan untuk melihat ketersediaan.",
    },
    {
        question: "Bagaimana cara pembayaran?",
        answer:
            "Pembayaran dilakukan sebelum sesi konsultasi dimulai. Kami menerima transfer bank dan e-wallet. Detail pembayaran akan dikirimkan setelah konfirmasi jadwal.",
    },
];

export function FAQ() {
    return (
        <section id="faq" className="section-padding bg-gray-soft">
            <div className="container-custom">
                <MotionWrapper>
                    <SectionHeader
                        title="Pertanyaan yang Sering Diajukan"
                        subtitle="Temukan jawaban atas pertanyaan umum tentang layanan konsultasi kami"
                    />
                </MotionWrapper>

                <MotionWrapper delay={0.2}>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-white rounded-lg px-6 border shadow-sm"
                                >
                                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
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
