"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MotionWrapper, MotionStagger, MotionChild } from "@/app/components/motion-wrapper";
import { SectionHeader } from "@/app/components/section-header";
import { cn } from "@/lib/utils";

const services = [
    {
        icon: (
            <svg id="fi_3121540" enableBackground="new 0 0 512 512" height="100%" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <g><path d="m106 391c58.872 0 105-32.944 105-75v-15h-33.68l-45.582-159.525c16.595-2.968 30.055-6.246 42.319-9.269 20.729-5.096 39.628-9.402 66.943-10.657v307.423l-124.57 83.028h279.111l-124.541-83.027v-307.424c27.316 1.254 46.214 5.561 66.943 10.657 12.264 3.023 25.724 6.301 42.319 9.269l-45.582 159.525h-33.68v15c0 42.056 46.128 75 105 75s106-32.944 106-75v-15h-34.68l-43.685-152.88c21.357 1.732 47.33 2.88 78.365 2.88v-30c-89.971 0-128.471-27.7-161.562-52.134-23.15-17.106-45.192-34.345-79.438-38.059v-30.807h-30v30.807c-34.246 3.713-56.288 20.953-79.438 38.059-33.091 24.434-71.591 52.134-161.562 52.134v30c31.027 0 56.999-1.146 78.353-2.878l-43.673 152.878h-34.68v15c0 42.056 47.128 75 106 75zm340.109-90h-80.219l40.107-140.367zm-340.114-140.389 40.114 140.389h-80.22z"></path></g>
            </svg>
        ),
        title: "Civil Law & Disputes",
        description: "Debt issues, broken agreements, contract disputes, and civil conflicts of all shapes and sizes. If it turns into a dispute Saul helps you keep it under control.",
        gridClass: "md:col-span-1 md:row-span-2",
        colorClass: "bg-red-700 text-white",
        iconWrapperClass: "bg-white text-navy-dark",
        descriptionClass: "text-white/90",
    },
    {
        icon: (
            <svg id="fi_4568811" enableBackground="new 0 0 512 512" height="100%" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <g><g id="Family_1_"><g><path d="m256 129.8-53-53c-17.5-17.5-17.5-46.1 0-63.6 14.3-14.4 36-17 53-7.9 17-9.1 38.7-6.5 53 7.9 17.5 17.5 17.5 46.1 0 63.6z"></path></g><g><path d="m60 212c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z"></path></g><g><path d="m452 212c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z"></path></g><g><path d="m512 512h-151v-213.4l-123.9-57.7c-22.4-10.8-32.2-37.5-22-59.8 9.5-20.1 34.2-33.1 59.5-22.2l195.9 91c25.6 12.8 41.6 38.6 41.6 67.1v195z"></path></g><g><path d="m256 422c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z"></path></g><g><path d="m331 512h-150v-15c0-41.4 33.6-75 75-75s75 33.6 75 75z"></path></g></g><path d="m182.7 184.6-137.8 63.8c-3 2.7-44.9 18-44.9 68.6v195h151v-213.4l69.8-32.7c-29.5-16.2-44.6-49.6-38.1-81.3z"></path></g>
            </svg>
        ),
        title: "Family Law",
        description: "Marriage, divorce, custody, support, and prenuptial agreements. Real-life family problems need real-world legal clarity not chaos.",
        gridClass: "md:col-span-2",
        colorClass: "bg-red-700 text-white",
        iconWrapperClass: "bg-white text-navy-dark",
        descriptionClass: "text-white/90",
    },
    {
        icon: (
            <svg id="fi_9511955" enableBackground="new 0 0 511.856 511.856" height="100%" viewBox="0 0 511.856 511.856" width="100%" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g><path d="m460.442 481.856v-367.829h-47.635v367.829h-30v-481.856l-253.828 71.168v101.95h108.429v308.738h-30v-278.738h-125.993v278.738h-61.503v30h472.033v-30zm-165.991-171.019v-60.341h30v60.341zm30 49.861v60.341h-30v-60.341zm-30-160.063v-60.341h30v60.341zm-165.04 49.861h30v60.341h-30zm0 110.202h30v60.341h-30z"></path></g></svg>
        ),
        title: "Business & Corporate Law",
        description: "Partnership agreements, business contracts, company legality, MoUs, and due diligence. From boardrooms to back-office deals Saul makes the fine print make sense.",
        gridClass: "md:col-span-1",
        colorClass: "bg-black text-white",
        iconWrapperClass: "bg-white text-navy-dark border-2 border-navy-dark",
        descriptionClass: "text-white/90",
    },
    {
        icon: (
            <svg id="fi_3685999" height="100%" viewBox="0 0 8.4666664 8.4666672" width="100%" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="layer1" transform="translate(0 761.333)"><path id="path1578" d="m4.2333333-760.80423c-.873627 0-1.587536.71391-1.587536 1.58753s.713909 1.58733 1.587536 1.58733c.8736261 0 1.587535-.71371 1.587535-1.58733s-.7139089-1.58753-1.587535-1.58753zm-.5293086 3.70417c-1.3146496 0-2.3811081 1.06665-2.3811081 2.38129v1.32287h5.8208336v-1.32287c0-1.31464-1.0666545-2.38129-2.381304-2.38129-.1720806.00006-.2983309.16176-.2566464.32871l.4927855 1.97133-.7652518.76525-.7654466-.76525.4929792-1.97133c.041704-.16703-.08468-.32878-.2568414-.32871z"></path></g></svg>
        ),
        title: "Employment Law",
        description: "Termination issues, workplace disputes, employment contracts, and employee rights. When work gets complicated, Saul helps you understand where you stand.",
        gridClass: "md:col-span-1",
        colorClass: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
        iconWrapperClass: "bg-white text-navy-dark",
        descriptionClass: "text-white",
    },
    {
        icon: (
            <svg id="fi_9116417" enableBackground="new 0 0 512 512" height="100%" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g><path d="m376.347 379.07c-21.623 21.633-51.014 34.662-81.503 36.34-7.364 5.468-25.603 16.257-54.91 16.257-12.434 0-21.363-3.937-26.539-11.7-4.717-7.075-4.498-14.476-4.53-20.414-8.718-.33-19.583 8.647-22.591 11.654-5.857 5.858-15.355 5.858-21.213 0s-5.858-15.355 0-21.213c2.094-2.094 21.085-20.46 42.74-20.46 12.434 0 21.363 3.937 26.539 11.7 4.717 7.075 4.498 14.476 4.529 20.415 12.539.455 26.03-3.079 34.455-7.896 1.653-30.729 14.403-59.391 36.335-81.331l73.809-73.824v-97.198c0-8.284-6.716-15-15-15h-96.4c-8.284 0-15-6.716-15-15v-96.4c0-8.284-6.716-15-15-15h-227.068c-8.284 0-15 6.716-15 15v482c0 8.284 6.716 15 15 15h353.467c8.284 0 15-6.716 15-15v-125.052c-4.498 4.5-7.12 7.122-7.12 7.122zm-297.08-218.403h64.267c19.881.738 19.866 29.269 0 30h-64.267c-19.881-.738-19.866-29.27 0-30zm0 64.266h224.933c19.881.738 19.866 29.269 0 30h-224.933c-19.881-.738-19.866-29.269 0-30zm-15 79.267c0-8.284 6.716-15 15-15h160.667c19.881.738 19.866 29.269 0 30h-160.667c-8.285 0-15-6.716-15-15z"></path><path d="m287.066 96.4h81.4c2.282 0 4.524.174 6.716.503l-88.62-88.619c.329 2.192.503 4.434.503 6.716v81.4z"></path><path d="m505.559 183.166c-4.085-4.088-9.746-6.433-15.531-6.433-1.446 0-2.833.575-3.855 1.598l-155.304 155.305c-13.941 13.947-23.003 31.476-26.319 50.508 19.011-3.385 36.855-12.553 50.577-26.28 0 0 155.276-155.314 155.276-155.315 1.022-1.022 1.597-2.411 1.597-3.857 0-5.772-2.348-11.431-6.441-15.526z"></path></g></svg>
        ),
        title: "Contract Review & Drafting",
        description: "Lease agreements, sales contracts, partnership deals, and more. Saul makes sure what you sign protects you not traps you.",
        gridClass: "md:col-span-2",
        colorClass: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
        iconWrapperClass: "bg-white text-navy-dark",
        descriptionClass: "text-white",
    },
    {
        icon: (
            <svg id="fi_9033109" height="100%" viewBox="0 0 60 60" width="100%" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="m23.5 13.35v-8.09l-12.17 12.07h8.19c2.19 0 3.98-1.79 3.98-3.98z"></path><path d="m21.81 41.87c-.06 0-.2.09-.31.26-.15.25-.21.62-.25.95-.11.82-.09 1.5.06 2.07.4-.57.7-1.21.83-1.89.09-.46.09-.83-.02-1.08-.07-.19-.23-.31-.31-.31z"></path><path d="m11.17 54c0 .55.45 1 1 1h35.66c.55 0 1-.45 1-1v-48c0-.55-.45-1-1-1h-22.33v8.35c0 3.3-2.68 5.98-5.98 5.98h-8.35zm18.94-5.56c-.28.36-.71.58-1.19.62-.56.04-1.16-.17-1.58-.57-.37-.35-.58-.75-.76-1.11-.06-.11-.12-.23-.18-.34-.08-.13-.16-.21-.21-.26-.09.09-.23.3-.32.44-.15.23-.31.46-.49.66-.88.97-2.38 1.26-3.66.7-.24-.11-.48-.24-.69-.4-.8.53-1.7.91-2.65 1.08-.06.01-.12.01-.18.01-.47 0-.9-.34-.98-.82-.1-.54.27-1.06.81-1.16.61-.11 1.19-.34 1.72-.67-.11-.21-.2-.44-.27-.67-.29-.89-.35-1.92-.19-3.13.07-.53.18-1.14.52-1.71.44-.74 1.16-1.2 1.92-1.23.96-.04 1.86.57 2.26 1.53.26.64.31 1.37.13 2.24-.23 1.16-.77 2.23-1.53 3.13.46.17 1.02.08 1.3-.23.11-.13.21-.28.3-.42.34-.51.84-1.28 1.82-1.36.8-.07 1.58.4 2.1 1.25.09.15.17.3.24.45.12.24.24.46.36.57.36-.27.86-.28 1.23 0 .44.34.51.97.17 1.4zm-.25-33.19h11.95c.55 0 1 .45 1 1s-.45 1-1 1h-11.95c-.55 0-1-.45-1-1s.45-1 1-1zm-11.66 8.36h23.61c.55 0 1 .45 1 1s-.45 1-1 1h-23.61c-.55 0-1-.45-1-1s.44-1 1-1zm0 8.36h23.61c.55 0 1 .45 1 1s-.45 1-1 1h-23.61c-.55 0-1-.45-1-1s.44-1 1-1z"></path></svg>
        ),
        title: "Preventive Legal Consultation",
        description: "Check the risks before you make a big decision. A quick talk now can save you a whole lot of trouble later.",
        gridClass: "md:col-span-1",
        colorClass: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
        iconWrapperClass: "bg-white text-navy-dark",
        descriptionClass: "text-white",
    },
];

export function Services() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Mouse Drag State for "Swipe" on Desktop
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemWidth = scrollRef.current.clientWidth;
            // Simple active index calculation for w-full items
            const index = Math.round(scrollLeft / itemWidth);
            setActiveIndex(Math.min(Math.max(0, index), services.length - 1));
        }
    };

    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.clientWidth;
            scrollRef.current.scrollTo({
                left: index * (itemWidth + 16), // 16 is gap-4
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
        const walk = (x - startX) * 1.5; // Drag multiplier
        scrollRef.current.scrollLeft = startScrollLeft - walk;
    };

    return (
        <section id="layanan" className="section-padding bg-white relative overflow-hidden">
            {/* Background Image - Stick to Left */}
            <div className="absolute left-0 bottom-0 top-0 w-full md:w-1/3 lg:w-1/4 z-0 pointer-events-none select-none">
                <Image
                    src="/images/service-saul.jpg"
                    alt="Saul Services"
                    fill
                    className="object-cover object-left"
                    priority
                />
                {/* Gradient mask to blend into white background on the right */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white"></div>
            </div>

            <div className="container-custom relative z-10 w-full overflow-hidden">
                <MotionWrapper>
                    <SectionHeader
                        title="LEGAL AREAS WE COVER"
                        subtitle="Clear guidance. Real options. Straight answers no legal maze."
                        className="[&_h2]:text-transparent [&_h2]:bg-clip-text [&_h2]:bg-gradient-to-r [&_h2]:from-yellow-400 [&_h2]:to-yellow-600 [&_p]:text-navy-dark"
                    />
                </MotionWrapper>

                {/* DESKTOP BENTO GRID */}
                <MotionStagger className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {services.map((service, index) => (
                        <MotionChild key={index} className={service.gridClass}>
                            <Card className={cn(
                                "h-full transition-transform duration-300 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none overflow-hidden border-0",
                                service.colorClass
                            )}>
                                <CardContent className="p-8 flex flex-col items-start h-full">
                                    <div className={cn(
                                        "w-16 h-16 rounded-tl-2xl rounded-br-2xl flex items-center justify-center p-3 mb-6 shrink-0",
                                        service.iconWrapperClass
                                    )}>
                                        {service.icon}
                                    </div>
                                    <h3 className={cn("text-2xl font-bold mb-4 bbh-hegarty-regular uppercase", service.colorClass.includes("bg-white") ? "text-navy-dark" : "text-white")}>
                                        {service.title}
                                    </h3>
                                    <p className={cn("leading-relaxed text-lg font-medium", service.descriptionClass)}>
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </MotionChild>
                    ))}
                </MotionStagger>

                {/* MOBILE SLIDER (Carousel) */}
                <div className="md:hidden flex flex-col gap-6">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        onMouseDown={onMouseDown}
                        onMouseLeave={onMouseLeave}
                        onMouseUp={onMouseUp}
                        onMouseMove={onMouseMove}
                        className={cn(
                            "flex overflow-x-auto gap-4 pb-4 no-scrollbar items-stretch cursor-grab active:cursor-grabbing",
                            isDragging ? "snap-none" : "snap-x snap-mandatory"
                        )}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {services.map((service, index) => (
                            <div key={index} className="snap-center shrink-0 w-full flex h-auto">
                                <Card className={cn(
                                    "h-full w-full rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none overflow-hidden border-0",
                                    service.colorClass
                                )}>
                                    <CardContent className="p-8 flex flex-col items-start h-full justify-between">
                                        <div>
                                            <div className={cn(
                                                "w-14 h-14 rounded-tl-xl rounded-br-xl flex items-center justify-center p-3 mb-5 shrink-0",
                                                service.iconWrapperClass
                                            )}>
                                                {service.icon}
                                            </div>
                                            <h3 className={cn("text-xl font-bold mb-3 bbh-hegarty-regular uppercase", service.colorClass.includes("bg-white") ? "text-navy-dark" : "text-white")}>
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className={cn("leading-relaxed text-base font-medium", service.descriptionClass)}>
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Dots Pagination */}
                    <div className="flex justify-center gap-2">
                        {services.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className={cn(
                                    "h-3 w-3 rounded-full transition-all duration-300",
                                    activeIndex === index ? "bg-red-700" : "bg-gray-300 hover:bg-red-400"
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
