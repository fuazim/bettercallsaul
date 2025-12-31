"use client";

import { FaWhatsapp } from "react-icons/fa";

import { useState, useEffect } from "react";
import { MotionWrapper, MotionChild, MotionStagger } from "@/app/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Check, ChevronRight, AlertCircle, ShieldAlert, MessageSquare } from "lucide-react";

const steps = [
    { number: 1, title: "Select Package" },
    { number: 2, title: "Legal Area" },
    { number: 3, title: "Case Details" },
    { number: 4, title: "Contact" },
];

const packages = [
    {
        id: "quick",
        name: "Quick Consultation",
        duration: "30 to 45 minutes (online)",
        price: "35 USD per session",
        description: "Best for simple questions, quick checks, or basic risk review.",
    },
    {
        id: "depth",
        name: "In Depth Consultation",
        duration: "60 to 90 minutes",
        price: "99 USD per session",
        description: "Ideal for more complex issues, including review of basic documents and written recommendations.",
    },
    {
        id: "ongoing",
        name: "Ongoing Legal Support",
        duration: "Up to 4 hours per month",
        price: "499 USD per month",
        description: "For business owners or long term legal needs with priority support.",
    },
];

const legalAreas = [
    "Civil Law and Disputes",
    "Family Law",
    "Business and Corporate Law",
    "Employment Law",
    "Contract Review and Drafting",
    "Preventive Legal Consultation",
    "Other",
];

const urgencyLevels = [
    "Not urgent",
    "Within 7 days",
    "As soon as possible",
];

export function Process() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        package: "",
        legalArea: "",
        otherLegalArea: "",
        caseSummary: "",
        hasDocuments: "",
        urgency: "",
        fullName: "",
        email: "",
        whatsapp: "",
        consultationMethod: "",
    });

    useEffect(() => {
        const handlePackageSelect = (e: any) => {
            if (e.detail?.package) {
                setFormData(prev => ({ ...prev, package: e.detail.package }));
                setCurrentStep(1);
            }
        };

        window.addEventListener("packageSelected", handlePackageSelect);
        return () => window.removeEventListener("packageSelected", handlePackageSelect);
    }, []);

    const handleNext = () => {
        if (currentStep < 5) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const updateData = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <section id="process" className="section-padding bg-white min-h-screen">
            <div className="container-custom">
                <MotionWrapper>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 uppercase">
                            HELP US UNDERSTAND YOUR CASE
                        </h2>
                        <p className="text-lg text-gray-900 max-w-3xl mx-auto font-medium">
                            Choose your service, legal area, and briefly explain your situation. Saul will review your request and recommend the best next step. No legal maze. No confusing jargon.
                        </p>
                    </div>
                </MotionWrapper>

                <div className="max-w-4xl mx-auto">
                    {/* Rebel Steps Indicator */}
                    <div className="flex justify-between mb-12 relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2 rounded-full hidden md:block" />
                        {steps.map((s) => (
                            <div key={s.number} className={cn(
                                "flex flex-col items-center gap-2 bg-white px-2 md:px-4 z-10 transition-colors",
                                currentStep >= s.number ? "text-navy-dark" : "text-gray-400"
                            )}>
                                <div className={cn(
                                    "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg border-2 transition-all duration-300 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none shadow-sm",
                                    currentStep >= s.number
                                        ? "bg-gold text-navy-dark border-gold"
                                        : "bg-white border-gray-300 text-gray-300"
                                )}>
                                    {currentStep > s.number ? <Check size={20} /> : s.number}
                                </div>
                                <span className="text-xs md:text-sm font-bold uppercase tracking-wider hidden md:block">{s.title}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-6 md:p-10 shadow-xl rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none relative overflow-hidden text-white">
                        {/* Decorative Corner Accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/20 to-transparent pointer-events-none" />

                        {/* STEP 1 */}
                        {currentStep === 1 && (
                            <MotionWrapper>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="text-gold">STEP 1</span> — SELECT A CONSULTATION PACKAGE
                                </h3>
                                <div className="grid gap-4">
                                    {packages.map((pkg) => (
                                        <div
                                            key={pkg.id}
                                            onClick={() => updateData("package", pkg.name)}
                                            className={cn(
                                                "cursor-pointer p-6 border-2 transition-all hover:scale-[1.01] rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none group",
                                                formData.package === pkg.name
                                                    ? "border-gold bg-white/10 shadow-md"
                                                    : "border-white/10 bg-white/5 hover:border-gold/50"
                                            )}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-bold text-lg text-white group-hover:text-gold transition-colors">{pkg.name}</h4>
                                                {formData.package === pkg.name && <Check className="text-gold" />}
                                            </div>
                                            <div className="text-sm font-bold text-gray-400 mb-1">{pkg.duration}</div>
                                            <div className="text-lg font-bold text-white mb-2">{pkg.price}</div>
                                            <p className="text-gray-300 text-sm">{pkg.description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <Button onClick={handleNext} disabled={!formData.package} className="bg-gold text-navy-dark hover:bg-yellow-500 font-bold px-8 h-12 text-lg rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none">
                                        Continue <ChevronRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </MotionWrapper>
                        )}

                        {/* STEP 2 */}
                        {currentStep === 2 && (
                            <MotionWrapper>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="text-gold">STEP 2</span> — SELECT LEGAL AREA
                                </h3>
                                <p className="text-gray-300 mb-6 font-medium">Which Legal Area Do You Need Help With?</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {legalAreas.map((area) => (
                                        <div
                                            key={area}
                                            onClick={() => updateData("legalArea", area)}
                                            className={cn(
                                                "cursor-pointer p-4 border-2 transition-all font-bold text-white rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none flex items-center gap-3",
                                                formData.legalArea === area
                                                    ? "border-gold bg-gold/20"
                                                    : "border-white/10 bg-white/5 hover:border-gold"
                                            )}
                                        >
                                            <div className={cn(
                                                "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                                                formData.legalArea === area ? "border-gold" : "border-gray-300"
                                            )}>
                                                {formData.legalArea === area && <div className="w-2 h-2 rounded-full bg-gold" />}
                                            </div>
                                            {area}
                                        </div>
                                    ))}
                                </div>
                                {formData.legalArea === "Other" && (
                                    <div className="mt-4">
                                        <Label htmlFor="other" className="text-white font-bold">Please describe</Label>
                                        <Input
                                            id="other"
                                            value={formData.otherLegalArea}
                                            onChange={(e) => updateData("otherLegalArea", e.target.value)}
                                            className="mt-2 border-gray-700 bg-white/5 text-white focus:border-gold rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none"
                                        />
                                    </div>
                                )}
                                <div className="mt-8 flex justify-between">
                                    <Button variant="ghost" onClick={handleBack} className="text-gray-400 hover:text-white">Back</Button>
                                    <Button onClick={handleNext} disabled={!formData.legalArea} className="bg-gold text-navy-dark hover:bg-yellow-500 font-bold px-8 h-12 text-lg rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none">
                                        Continue <ChevronRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </MotionWrapper>
                        )}

                        {/* STEP 3 */}
                        {currentStep === 3 && (
                            <MotionWrapper>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="text-gold">STEP 3</span> — TELL US ABOUT YOUR CASE
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <Label className="text-lg font-bold text-white mb-2 block">Briefly Explain Your Situation</Label>
                                        <Textarea
                                            placeholder="Case Summary..."
                                            className="min-h-[120px] border-gray-700 bg-white/5 text-white focus:border-gold rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none text-base"
                                            value={formData.caseSummary}
                                            onChange={(e) => updateData("caseSummary", e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <Label className="text-lg font-bold text-white mb-3 block">Do you have supporting documents?</Label>
                                        <div className="flex gap-4">
                                            {["Yes", "No"].map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => updateData("hasDocuments", opt)}
                                                    className={cn(
                                                        "cursor-pointer px-6 py-3 border-2 font-bold rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none min-w-[100px] text-center transition-all",
                                                        formData.hasDocuments === opt
                                                            ? "bg-gold text-navy-dark border-gold"
                                                            : "bg-white/5 text-gray-400 border-white/10 hover:border-gold"
                                                    )}
                                                >
                                                    {opt}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="text-lg font-bold text-white mb-3 block">Urgency Level</Label>
                                        <div className="grid md:grid-cols-3 gap-3">
                                            {urgencyLevels.map((lvl) => (
                                                <div
                                                    key={lvl}
                                                    onClick={() => updateData("urgency", lvl)}
                                                    className={cn(
                                                        "cursor-pointer px-4 py-3 border-2 font-bold rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none text-center transition-all text-sm",
                                                        formData.urgency === lvl
                                                            ? "bg-gold text-navy-dark border-gold"
                                                            : "bg-white/5 text-gray-400 border-white/10 hover:border-gold"
                                                    )}
                                                >
                                                    {lvl}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-between">
                                    <Button variant="ghost" onClick={handleBack} className="text-gray-400 hover:text-white">Back</Button>
                                    <Button onClick={handleNext} disabled={!formData.caseSummary || !formData.hasDocuments || !formData.urgency} className="bg-gold text-navy-dark hover:bg-yellow-500 font-bold px-8 h-12 text-lg rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none">
                                        Continue <ChevronRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </MotionWrapper>
                        )}

                        {/* STEP 4 */}
                        {currentStep === 4 && (
                            <MotionWrapper>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="text-gold">STEP 4</span> — CONTACT DETAILS
                                </h3>
                                <p className="text-gray-300 mb-6 font-medium">How Can We Reach You?</p>

                                <div className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="font-bold text-white">Full Name</Label>
                                            <Input id="name" value={formData.fullName} onChange={(e) => updateData("fullName", e.target.value)} className="border-gray-700 bg-white/5 text-white focus:border-gold h-12 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="font-bold text-white">Email</Label>
                                            <Input id="email" type="email" value={formData.email} onChange={(e) => updateData("email", e.target.value)} className="border-gray-700 bg-white/5 text-white focus:border-gold h-12 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="whatsapp" className="font-bold text-white">WhatsApp Number</Label>
                                        <Input id="whatsapp" value={formData.whatsapp} onChange={(e) => updateData("whatsapp", e.target.value)} className="border-gray-700 bg-white/5 text-white focus:border-gold h-12 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none" />
                                    </div>

                                    <div className="space-y-2 pt-2">
                                        <Label className="font-bold text-white block mb-2">Preferred Consultation Method</Label>
                                        <div className="flex flex-wrap gap-3">
                                            {["Chat", "Voice Call", "Video Call"].map((method) => (
                                                <div
                                                    key={method}
                                                    onClick={() => updateData("consultationMethod", method)}
                                                    className={cn(
                                                        "cursor-pointer px-5 py-2 border-2 font-bold rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none transition-all text-sm",
                                                        formData.consultationMethod === method
                                                            ? "bg-gold text-navy-dark border-gold"
                                                            : "bg-white/5 text-gray-400 border-white/10 hover:border-gold"
                                                    )}
                                                >
                                                    {method}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-between">
                                    <Button variant="ghost" onClick={handleBack} className="text-gray-400 hover:text-white">Back</Button>
                                    <Button onClick={handleNext} disabled={!formData.fullName || !formData.email || !formData.whatsapp || !formData.consultationMethod} className="bg-gold text-navy-dark hover:bg-yellow-500 font-bold w-full md:w-auto px-8 h-12 text-lg rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none shadow-lg">
                                        Submit Consultation Request
                                    </Button>
                                </div>
                            </MotionWrapper>
                        )}

                        {/* SUMMARY VIEW (State 5) */}
                        {currentStep === 5 && (
                            <MotionWrapper>
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                        <Check size={32} strokeWidth={3} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">YOUR REQUEST SUMMARY</h3>
                                    <p className="text-gray-400">Thank you. We have received your details.</p>
                                </div>

                                <div className="bg-white/5 border-2 border-dashed border-gray-700 p-6 rounded-tl-[2rem] rounded-br-[2rem] mb-8 space-y-4">
                                    <div className="flex justify-between border-b border-gray-700 pb-2">
                                        <span className="text-gray-400 font-medium">Package</span>
                                        <span className="text-white font-bold text-right">{formData.package}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-700 pb-2">
                                        <span className="text-gray-400 font-medium">Legal Area</span>
                                        <span className="text-white font-bold text-right">{formData.legalArea === "Other" ? formData.otherLegalArea : formData.legalArea}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-700 pb-2">
                                        <span className="text-gray-400 font-medium">Urgency Level</span>
                                        <span className="text-white font-bold text-right">{formData.urgency}</span>
                                    </div>
                                    <div className="flex justify-between pt-2">
                                        <span className="text-gray-400 font-medium">Estimated Cost</span>
                                        <span className="text-gold font-bold text-xl text-right">
                                            {packages.find(p => p.name === formData.package)?.price.split(' ')[0]} USD
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                                        <p className="text-sm text-amber-200 font-medium">
                                            Final cost may vary depending on the complexity of your case. We will confirm details after reviewing your request.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 text-center">
                                    <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-14 text-lg rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none flex items-center justify-center gap-2 shadow-lg">
                                        <FaWhatsapp className="w-6 h-6" />
                                        Consult via WhatsApp
                                    </Button>

                                    <div className="md:flex items-center justify-center gap-2 text-gray-400 text-sm mt-6">
                                        <ShieldAlert className="w-4 h-4 inline md:block" />
                                        <span>Your information is confidential. Tell Saul what happened. He will guide you from there.</span>
                                    </div>

                                    <p className="text-white/60 font-serif italic mt-8 text-lg">
                                        "If it sounds like trouble, better tell Saul."
                                    </p>
                                </div>
                            </MotionWrapper>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
