export function CareersHeroSection() {
    return (
        <div className="mx-auto mb-16 max-w-5xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#d1d5db] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f3c5b]">
                Join CHEFU
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight text-[#111827] md:text-4xl">
                Build with purpose, ownership, and momentum.
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#374151]">
                We are a creative technology company building across software, AI,
                and music production. We work with people who care about solving real
                problems, shipping with quality, and learning quickly in a fast-moving
                environment.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-[#374151]">
                {[
                    "Remote-friendly",
                    "Product + creative work",
                    "Rolling applications",
                ].map((item) => (
                    <span
                        key={item}
                        className="rounded-full border border-[#e5e1dc] bg-white px-3 py-1.5"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
