interface SectionHeaderProps {
    title: string | React.ReactNode;
    subtitle?: string;
    centered?: boolean;
    className?: string;
    subtitleClassName?: string;
}

export function SectionHeader({
    title,
    subtitle,
    centered = true,
    className = "",
    subtitleClassName = "",
}: SectionHeaderProps) {
    return (
        <div className={`mb-12 md:mb-16 ${centered ? "text-center" : "text-left"} ${className}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl ${centered ? "mx-auto" : "mr-auto"} ${subtitleClassName}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}

