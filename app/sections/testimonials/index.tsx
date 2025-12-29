"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MotionWrapper, MotionStagger, MotionChild } from "@/app/components/motion-wrapper";
import { SectionHeader } from "@/app/components/section-header";

const testimonials = [
    {
        initials: "AS",
        category: "Klien Keluarga",
        quote:
            "Saya sempat bingung dan takut menghadapi proses perceraian. Setelah konsultasi dengan Better Call Paul, saya jadi paham hak-hak saya dan langkah apa yang harus diambil. Penjelasannya sangat manusiawi dan tidak intimidatif.",
    },
    {
        initials: "BW",
        category: "Klien Bisnis",
        quote:
            "Kontrak kerja sama yang kami terima ternyata punya banyak celah yang merugikan. Berkat review dari tim Better Call Paul, kami bisa renegosiasi dan melindungi kepentingan perusahaan. Sangat profesional!",
    },
    {
        initials: "DR",
        category: "Klien Ketenagakerjaan",
        quote:
            "Saya di-PHK secara sepihak dan tidak tahu harus berbuat apa. Better Call Paul membantu saya memahami bahwa saya berhak atas kompensasi. Prosesnya jelas dan step-by-step.",
    },
    {
        initials: "MF",
        category: "Klien Perdata",
        quote:
            "Ada sengketa hutang-piutang yang sudah berlarut-larut. Setelah konsultasi, saya jadi tahu opsi penyelesaian yang tersedia tanpa harus langsung ke pengadilan. Hemat waktu dan biaya!",
    },
];

export function Testimonials() {
    return (
        <section id="testimoni" className="section-padding bg-white">
            <div className="container-custom">
                <MotionWrapper>
                    <SectionHeader
                        title="Cerita Singkat dari Klien Kami"
                        subtitle="Kami tidak menyebut nama lengkap, tapi inilah pengalaman nyata dari mereka yang sudah terbantu"
                    />
                </MotionWrapper>

                <MotionStagger className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <MotionChild key={index}>
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                                            {testimonial.initials}
                                        </div>
                                        <div>
                                            <div className="text-sm text-gold font-medium">
                                                {testimonial.category}
                                            </div>
                                        </div>
                                    </div>
                                    <blockquote className="text-muted-foreground leading-relaxed italic">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </blockquote>
                                    <div className="flex gap-1 mt-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-4 h-4 text-gold"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </MotionChild>
                    ))}
                </MotionStagger>
            </div>
        </section>
    );
}
