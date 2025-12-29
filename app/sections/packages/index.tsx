"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { MotionWrapper, MotionStagger, MotionChild } from "@/app/components/motion-wrapper";
import { SectionHeader } from "@/app/components/section-header";

const packages = [
    {
        icon: "⭐",
        name: "Paket Konsultasi Singkat",
        price: "Rp 250.000",
        priceNote: "per sesi",
        description: "Cocok untuk pertanyaan spesifik dan masalah sederhana",
        features: [
            "Durasi 30–45 menit (online)",
            "Platform: WhatsApp Call / Zoom",
            "Cocok untuk pertanyaan spesifik",
            "Termasuk rangkuman poin penting",
            "Rekomendasi langkah dasar",
        ],
        popular: false,
    },
    {
        icon: "🚀",
        name: "Paket Konsultasi Mendalam",
        price: "Rp 500.000",
        priceNote: "per sesi",
        description: "Analisis lengkap untuk masalah yang lebih kompleks",
        features: [
            "Durasi 60–90 menit",
            "Analisis dokumen dasar (max 10 hal)",
            "Rekomendasi langkah lanjut tertulis",
            "Follow-up singkat via chat (7 hari)",
            "Prioritas penjadwalan",
        ],
        popular: true,
    },
    {
        icon: "🏆",
        name: "Paket Pendampingan",
        price: "Rp 2.500.000",
        priceNote: "per bulan",
        description: "Pendampingan berkelanjutan untuk bisnis atau kasus kompleks",
        features: [
            "Konsultasi 4 jam/bulan",
            "Review & drafting dokumen sederhana",
            "Prioritas jadwal & respons cepat",
            "Akses konsultasi via chat",
            "Cocok untuk bisnis / pengusaha",
        ],
        popular: false,
    },
];

export function Packages() {
    return (
        <section id="paket" className="section-padding bg-gray-soft">
            <div className="container-custom">
                <MotionWrapper>
                    <SectionHeader
                        title="Paket Layanan Konsultasi"
                        subtitle="Pilih paket yang sesuai dengan kebutuhan Anda. Semua paket termasuk penjelasan yang jelas dan actionable."
                    />
                </MotionWrapper>

                <MotionStagger className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <MotionChild key={index}>
                            <Card
                                className={`h-full relative ${pkg.popular
                                        ? "border-gold border-2 shadow-xl shadow-gold/10"
                                        : "border-border/50"
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="bg-gold text-navy-dark text-sm font-semibold px-4 py-1 rounded-full">
                                            Paling Populer
                                        </span>
                                    </div>
                                )}
                                <CardHeader className="text-center pb-2 pt-8">
                                    <div className="text-4xl mb-4">{pkg.icon}</div>
                                    <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{pkg.description}</p>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                                        <span className="text-muted-foreground text-sm ml-1">{pkg.priceNote}</span>
                                    </div>
                                    <ul className="space-y-3 text-left">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <svg
                                                    className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="text-muted-foreground text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        asChild
                                        className={`w-full ${pkg.popular
                                                ? "bg-gold text-navy-dark hover:bg-gold-light"
                                                : "bg-primary hover:bg-primary/90"
                                            }`}
                                    >
                                        <a href="#konfigurator">Pilih Paket Ini</a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </MotionChild>
                    ))}
                </MotionStagger>

                <MotionWrapper delay={0.4}>
                    <p className="text-center text-muted-foreground mt-8 text-sm">
                        * Harga dapat disesuaikan tergantung kompleksitas kasus. Hubungi kami untuk penawaran khusus.
                    </p>
                </MotionWrapper>
            </div>
        </section>
    );
}
