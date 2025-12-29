"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { MotionWrapper } from "@/app/components/motion-wrapper";
import { SectionHeader } from "@/app/components/section-header";

const packageOptions = [
    { id: "singkat", label: "Konsultasi Singkat", duration: "30-45 menit", price: "Rp 250.000" },
    { id: "mendalam", label: "Konsultasi Mendalam", duration: "60-90 menit", price: "Rp 500.000" },
    { id: "pendampingan", label: "Pendampingan Berkala", duration: "4 jam/bulan", price: "Rp 2.500.000/bulan" },
];

const legalFields = [
    { id: "perdata", label: "Perdata / Sengketa" },
    { id: "keluarga", label: "Keluarga" },
    { id: "bisnis", label: "Bisnis & Perusahaan" },
    { id: "ketenagakerjaan", label: "Ketenagakerjaan" },
    { id: "kontrak", label: "Kontrak / Perjanjian" },
    { id: "lainnya", label: "Lainnya" },
];

const urgencyOptions = [
    { id: "tidak-mendesak", label: "Tidak terlalu mendesak" },
    { id: "7-hari", label: "Perlu bantuan dalam 7 hari" },
    { id: "secepatnya", label: "Perlu bantuan secepatnya" },
];

const consultPreferences = [
    { id: "chat", label: "Chat" },
    { id: "video", label: "Video Call" },
    { id: "tatap-muka", label: "Tatap Muka (jika tersedia)" },
];

export function Configurator() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        package: "",
        legalFields: [] as string[],
        otherField: "",
        summary: "",
        hasDocuments: "",
        urgency: "",
        name: "",
        email: "",
        whatsapp: "",
        preference: "",
    });

    const updateFormData = (field: string, value: string | string[]) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const toggleLegalField = (fieldId: string) => {
        setFormData((prev) => ({
            ...prev,
            legalFields: prev.legalFields.includes(fieldId)
                ? prev.legalFields.filter((f) => f !== fieldId)
                : [...prev.legalFields, fieldId],
        }));
    };

    const getSelectedPackage = () => packageOptions.find((p) => p.id === formData.package);
    const getSelectedLegalFields = () =>
        formData.legalFields.map((id) => legalFields.find((f) => f.id === id)?.label).join(", ");
    const getUrgency = () => urgencyOptions.find((u) => u.id === formData.urgency)?.label;

    const isStepValid = (step: number) => {
        switch (step) {
            case 1:
                return formData.package !== "";
            case 2:
                return formData.legalFields.length > 0;
            case 3:
                return formData.summary !== "" && formData.hasDocuments !== "" && formData.urgency !== "";
            case 4:
                return formData.name !== "" && formData.email !== "" && formData.whatsapp !== "" && formData.preference !== "";
            default:
                return false;
        }
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        alert("Terima kasih! Form konsultasi Anda telah dikirim. Kami akan menghubungi Anda segera.");
    };

    return (
        <section id="konfigurator" className="section-padding bg-gradient-navy">
            <div className="container-custom">
                <MotionWrapper>
                    <SectionHeader
                        title="Bantu Kami Pahami Kasus Anda"
                        subtitle="Pilih jenis layanan, bidang hukum, dan jelaskan singkat kebutuhan Anda. Kami akan menghubungi Anda dengan rekomendasi langkah terbaik."
                        className="text-white [&_h2]:text-white [&_p]:text-white/80"
                    />
                </MotionWrapper>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <MotionWrapper delay={0.2}>
                            <Card className="shadow-2xl">
                                <CardHeader>
                                    {/* Step indicator */}
                                    <div className="flex items-center justify-between mb-4">
                                        {[1, 2, 3, 4].map((step) => (
                                            <div key={step} className="flex items-center">
                                                <button
                                                    onClick={() => step < currentStep && setCurrentStep(step)}
                                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${step === currentStep
                                                            ? "bg-gold text-navy-dark"
                                                            : step < currentStep
                                                                ? "bg-primary text-primary-foreground cursor-pointer"
                                                                : "bg-muted text-muted-foreground"
                                                        }`}
                                                >
                                                    {step < currentStep ? (
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    ) : (
                                                        step
                                                    )}
                                                </button>
                                                {step < 4 && (
                                                    <div
                                                        className={`hidden sm:block w-12 md:w-20 h-1 mx-2 rounded ${step < currentStep ? "bg-primary" : "bg-muted"
                                                            }`}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <CardTitle className="text-xl">
                                        {currentStep === 1 && "Langkah 1: Pilih Paket Konsultasi"}
                                        {currentStep === 2 && "Langkah 2: Pilih Bidang Hukum"}
                                        {currentStep === 3 && "Langkah 3: Detail Kasus Singkat"}
                                        {currentStep === 4 && "Langkah 4: Data Kontak"}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Step 1: Package Selection */}
                                    {currentStep === 1 && (
                                        <RadioGroup
                                            value={formData.package}
                                            onValueChange={(value) => updateFormData("package", value)}
                                            className="space-y-4"
                                        >
                                            {packageOptions.map((pkg) => (
                                                <div key={pkg.id} className="flex items-center space-x-3">
                                                    <RadioGroupItem value={pkg.id} id={pkg.id} />
                                                    <Label
                                                        htmlFor={pkg.id}
                                                        className="flex-1 flex items-center justify-between cursor-pointer p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                                                    >
                                                        <div>
                                                            <div className="font-semibold">{pkg.label}</div>
                                                            <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                                                        </div>
                                                        <div className="text-primary font-semibold">{pkg.price}</div>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    )}

                                    {/* Step 2: Legal Fields */}
                                    {currentStep === 2 && (
                                        <div className="space-y-4">
                                            <p className="text-sm text-muted-foreground">
                                                Pilih satu atau lebih bidang hukum yang relevan dengan kasus Anda.
                                            </p>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {legalFields.map((field) => (
                                                    <div key={field.id} className="flex items-center space-x-3">
                                                        <Checkbox
                                                            id={field.id}
                                                            checked={formData.legalFields.includes(field.id)}
                                                            onCheckedChange={() => toggleLegalField(field.id)}
                                                        />
                                                        <Label
                                                            htmlFor={field.id}
                                                            className="cursor-pointer"
                                                        >
                                                            {field.label}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                            {formData.legalFields.includes("lainnya") && (
                                                <div className="mt-4">
                                                    <Label htmlFor="otherField">Jelaskan bidang hukum lainnya</Label>
                                                    <Input
                                                        id="otherField"
                                                        placeholder="Misalnya: Hukum Waris, Pidana, dll."
                                                        value={formData.otherField}
                                                        onChange={(e) => updateFormData("otherField", e.target.value)}
                                                        className="mt-2"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Step 3: Case Details */}
                                    {currentStep === 3 && (
                                        <div className="space-y-6">
                                            <div>
                                                <Label htmlFor="summary">Ringkasan Masalah</Label>
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    Ceritakan singkat masalah Anda dengan bahasa sehari-hari. Tidak perlu menggunakan istilah hukum.
                                                </p>
                                                <Textarea
                                                    id="summary"
                                                    placeholder="Contoh: Saya memiliki hutang ke teman yang belum dibayar sejak 2 tahun lalu, dan sekarang dia meminta saya ke pengadilan..."
                                                    value={formData.summary}
                                                    onChange={(e) => updateFormData("summary", e.target.value)}
                                                    rows={4}
                                                />
                                            </div>

                                            <div>
                                                <Label>Apakah sudah ada dokumen terkait?</Label>
                                                <RadioGroup
                                                    value={formData.hasDocuments}
                                                    onValueChange={(value) => updateFormData("hasDocuments", value)}
                                                    className="flex gap-4 mt-2"
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="ya" id="doc-ya" />
                                                        <Label htmlFor="doc-ya">Ya</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="tidak" id="doc-tidak" />
                                                        <Label htmlFor="doc-tidak">Tidak</Label>
                                                    </div>
                                                </RadioGroup>
                                            </div>

                                            <div>
                                                <Label>Tingkat Urgensi</Label>
                                                <RadioGroup
                                                    value={formData.urgency}
                                                    onValueChange={(value) => updateFormData("urgency", value)}
                                                    className="space-y-2 mt-2"
                                                >
                                                    {urgencyOptions.map((option) => (
                                                        <div key={option.id} className="flex items-center space-x-2">
                                                            <RadioGroupItem value={option.id} id={option.id} />
                                                            <Label htmlFor={option.id}>{option.label}</Label>
                                                        </div>
                                                    ))}
                                                </RadioGroup>
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 4: Contact Info */}
                                    {currentStep === 4 && (
                                        <div className="space-y-4">
                                            <div>
                                                <Label htmlFor="name">Nama Lengkap</Label>
                                                <Input
                                                    id="name"
                                                    placeholder="Nama Anda"
                                                    value={formData.name}
                                                    onChange={(e) => updateFormData("name", e.target.value)}
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="email">Email</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="email@contoh.com"
                                                    value={formData.email}
                                                    onChange={(e) => updateFormData("email", e.target.value)}
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="whatsapp">Nomor WhatsApp</Label>
                                                <Input
                                                    id="whatsapp"
                                                    placeholder="08xxxxxxxxxx"
                                                    value={formData.whatsapp}
                                                    onChange={(e) => updateFormData("whatsapp", e.target.value)}
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div>
                                                <Label>Preferensi Konsultasi</Label>
                                                <RadioGroup
                                                    value={formData.preference}
                                                    onValueChange={(value) => updateFormData("preference", value)}
                                                    className="space-y-2 mt-2"
                                                >
                                                    {consultPreferences.map((pref) => (
                                                        <div key={pref.id} className="flex items-center space-x-2">
                                                            <RadioGroupItem value={pref.id} id={pref.id} />
                                                            <Label htmlFor={pref.id}>{pref.label}</Label>
                                                        </div>
                                                    ))}
                                                </RadioGroup>
                                            </div>
                                        </div>
                                    )}

                                    {/* Navigation Buttons */}
                                    <div className="flex justify-between pt-4 border-t">
                                        {currentStep > 1 ? (
                                            <Button
                                                variant="outline"
                                                onClick={() => setCurrentStep((prev) => prev - 1)}
                                            >
                                                Kembali
                                            </Button>
                                        ) : (
                                            <div />
                                        )}

                                        {currentStep < 4 ? (
                                            <Button
                                                onClick={() => setCurrentStep((prev) => prev + 1)}
                                                disabled={!isStepValid(currentStep)}
                                                className="bg-primary hover:bg-primary/90"
                                            >
                                                Lanjutkan
                                            </Button>
                                        ) : (
                                            <Button
                                                onClick={handleSubmit}
                                                disabled={!isStepValid(4)}
                                                className="bg-gold text-navy-dark hover:bg-gold-light"
                                            >
                                                Kirim Form Konsultasi
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </MotionWrapper>
                    </div>

                    {/* Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <MotionWrapper delay={0.3} direction="right">
                            <Card className="sticky top-24 shadow-xl">
                                <CardHeader>
                                    <CardTitle className="text-lg">Ringkasan Permintaan</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <div className="text-sm text-muted-foreground">Paket</div>
                                        <div className="font-medium">
                                            {getSelectedPackage()?.label || "Belum dipilih"}
                                        </div>
                                        {getSelectedPackage() && (
                                            <div className="text-sm text-gold">{getSelectedPackage()?.price}</div>
                                        )}
                                    </div>

                                    <div>
                                        <div className="text-sm text-muted-foreground">Bidang Hukum</div>
                                        <div className="font-medium">
                                            {getSelectedLegalFields() || "Belum dipilih"}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-sm text-muted-foreground">Urgensi</div>
                                        <div className="font-medium">{getUrgency() || "Belum dipilih"}</div>
                                    </div>

                                    <div className="border-t pt-4">
                                        <div className="text-sm text-muted-foreground">Estimasi Biaya</div>
                                        <div className="font-semibold text-primary">
                                            {getSelectedPackage()?.price || "-"}
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-2">
                                            Detail biaya akan dikonfirmasi setelah kami meninjau kasus Anda.
                                        </p>
                                    </div>

                                    <div className="pt-4">
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="w-full border-gold text-gold hover:bg-gold hover:text-navy-dark"
                                        >
                                            <a
                                                href="https://wa.me/6281234567890"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <svg
                                                    className="w-4 h-4 mr-2"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                </svg>
                                                Konsultasi via WhatsApp
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </MotionWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}
