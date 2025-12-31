"use client";

import { useRef, useState } from "react";
import { MotionWrapper } from "@/app/components/motion-wrapper";
import { SectionHeader } from "@/app/components/section-header";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        initials: "WW",
        name: "Walter White / Heisenberg",
        role: "Business Client",
        quote: "I thought the contract I signed was airtight — turns out it had more holes than I expected. Saul broke everything down clearly: the risks, the options, and the smartest way forward. Direct, precise, and very sharp.",
        image: "/images/testimonials/ww.jpg",
    },
    {
        initials: "JP",
        name: "Jesse Pinkman",
        role: "Civil Case Client",
        quote: "I was stressed and honestly pretty lost about what to do next. Saul explained my rights in simple terms and helped me understand the practical steps I could take. No judgment. Just real help.",
        image: "/images/testimonials/jp.webp",
    },
    {
        initials: "KW",
        name: "Kim Wexler",
        role: "Corporate Client",
        quote: "I needed a second opinion on a complex business agreement. Saul was meticulous, structured, and completely professional. He doesn’t just explain the law — he makes sure you understand your position clearly.",
        image: "/images/testimonials/kw.webp",
    },
    {
        initials: "GF",
        name: "Gustavo Fring",
        role: "Business Client",
        quote: "In business, risk must be managed — not ignored. Consulting with Saul helped me identify legal exposure early and prepare preventive measures. Calm. Systematic. Highly competent.",
        image: "/images/testimonials/gf.jpg",
    },
    {
        initials: "ME",
        name: "Mike Ehrmantraut",
        role: "Preventive Consultation Client",
        quote: "It’s better to prevent a problem than clean up the mess afterward. Saul helps you understand the risks, the consequences, and the safest way to move forward. Straight to the point.",
        image: "/images/testimonials/me.webp",
    },
    {
        initials: "NV",
        name: "Nacho Varga",
        role: "Dispute Client",
        quote: "I was stuck in a complicated situation and needed clear direction. Saul laid out my legal options without drama or scare tactics. Just honest, straightforward advice.",
        image: "/images/testimonials/nv.webp",
    },
];

export function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [tappedIndex, setTappedIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const cardWidth = 400; // Approx card width
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemWidth = scrollRef.current.clientWidth;
            // For closer approximation on mobile where width is about 85vw
            const child = scrollRef.current.firstElementChild;
            const childWidth = child ? child.clientWidth : itemWidth;

            const index = Math.round(scrollLeft / childWidth);
            setActiveIndex(Math.min(Math.max(0, index), testimonials.length - 1));
        }
    };

    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            const child = scrollRef.current.firstElementChild;
            const childWidth = child ? child.clientWidth : 0;
            scrollRef.current.scrollTo({
                left: index * (childWidth + 24), // 24 is gap-6
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    // Drag Handlers
    const onMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setStartScrollLeft(scrollRef.current.scrollLeft);
    };

    const onMouseLeave = () => {
        setIsDragging(false);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = startScrollLeft - walk;
    };

    return (
        <section id="testimonials" className="section-padding bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 overflow-hidden">
            <div className="container-custom mb-12">
                <MotionWrapper>
                    <div className="flex flex-col items-center text-center md:flex-row md:items-end md:text-left md:justify-between gap-8">
                        <div className="md:max-w-3xl">
                            {/* Responsive Header: Centered on mobile, Left on desktop */}
                            <SectionHeader
                                title={<>REAL STORIES FROM “CLIENTS”<br />YOU MIGHT RECOGNIZE</>}
                                subtitle="The names may be fictional. But the legal problems? Very real."
                                subtitleClassName="!text-black"
                                centered={true}
                                className="!mb-0 md:text-left [&_p]:md:mx-0 [&_p]:md:mr-auto"
                            />
                        </div>

                        {/* Navigation Buttons - Hidden on Mobile */}
                        <div className="hidden md:flex gap-4 shrink-0">
                            <button
                                onClick={() => scroll('left')}
                                className="w-14 h-14 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-navy-dark text-white hover:bg-navy-dark/80 flex items-center justify-center transition-all shadow-lg active:scale-95"
                                aria-label="Scroll Left"
                            >
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-14 h-14 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-white text-navy-dark hover:bg-gray-100 flex items-center justify-center transition-all shadow-lg active:scale-95"
                                aria-label="Scroll Right"
                            >
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </MotionWrapper>
            </div>

            {/* Slider Container - Bleeds to right on desktop, standard functionality */}
            <div className="w-full relative pl-4 md:pl-[max(2rem,calc((100vw-80rem)/2))] overflow-hidden group/slider">
                {/* Mobile Navigation Arrows (Overlay) - Custom SVG with Gradient Background */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 pointer-events-none md:hidden z-20">
                    <button
                        onClick={() => scroll('left')}
                        className="pointer-events-auto flex items-center justify-center w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-full text-white shadow-lg active:scale-95 transition-transform pr-1"
                        aria-label="Scroll Left"
                    >
                        <svg className="w-6 h-6 rotate-180" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <g id="Play"><path d="m52.713 31.16631-40.3215-26.70855a1 1 0 0 0 -1.55223.83369v53.4171a1 1 0 0 0 1.55223.83369l40.3215-26.70855a1 1 0 0 0 0-1.66738z"></path></g>
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="pointer-events-auto flex items-center justify-center w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-full text-white shadow-lg active:scale-95 transition-transform pl-1"
                        aria-label="Scroll Right"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <g id="Play"><path d="m52.713 31.16631-40.3215-26.70855a1 1 0 0 0 -1.55223.83369v53.4171a1 1 0 0 0 1.55223.83369l40.3215-26.70855a1 1 0 0 0 0-1.66738z"></path></g>
                        </svg>
                    </button>
                </div>

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                    className={cn(
                        "flex overflow-x-auto gap-6 pb-8 no-scrollbar scroll-smooth pr-4 md:pr-[max(2rem,calc((100vw-80rem)/2))] cursor-grab active:cursor-grabbing",
                        isDragging ? "snap-none" : "snap-x snap-mandatory"
                    )}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="snap-start shrink-0 w-[85vw] md:w-[400px] flex-none first:pl-2"
                            onClick={() => setTappedIndex(tappedIndex === index ? null : index)}
                        >
                            <div className="group relative h-[500px] w-full overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] shadow-xl transition-all duration-300">
                                {/* Background & Image Container */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-9xl font-bold text-white opacity-20 select-none">
                                            {testimonial.initials}
                                        </span>
                                    </div>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 md:group-hover:scale-110"
                                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                    />
                                </div>

                                {/* Content Overlay - Click to reveal on mobile, Hover on desktop */}
                                <div className={cn(
                                    "absolute inset-0 flex flex-col justify-end bg-black/70 p-8 transition-opacity duration-300",
                                    tappedIndex === index ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
                                )}>
                                    <div className="transform translate-y-4 transition-transform duration-300 hover:translate-y-0 text-white">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold text-yellow-400">
                                                {testimonial.initials} — {testimonial.role}
                                            </h3>
                                        </div>
                                        <blockquote className="italic leading-relaxed text-gray-100 mb-6 text-sm">
                                            &ldquo;{testimonial.quote}&rdquo;
                                        </blockquote>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
