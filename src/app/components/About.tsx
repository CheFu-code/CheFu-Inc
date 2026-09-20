export function About() {
    return (
        <section className="border-t border-[#e5e1dc] bg-[#f5f1ed] py-24">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-10">
                        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">
                            About
                        </p>
                        <h2 className="max-w-3xl text-2xl font-semibold tracking-[-0.05em] text-[#111827] md:text-4xl">
                            Product-first technology for real-world problems.
                        </h2>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                        <div>
                            <p className="max-w-2xl text-base leading-7 text-[#5f5b56]">
                                Chefu Technologies builds software platforms, practical AI
                                systems, and digital products. We work at the intersection of
                                product thinking and engineering execution.
                            </p>
                            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5f5b56]">
                                We build products internally and partner with teams that need a
                                capable engineering partner from concept through launch. Music and
                                audio remain a core capability, but software and AI are the
                                foundation of the business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
