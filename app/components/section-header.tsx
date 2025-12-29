interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

export function SectionHeader({
    title,
    subtitle,
    centered = true,
    className = "",
}: SectionHeaderProps) {
    return (
        <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
