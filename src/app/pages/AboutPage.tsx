import Link from "next/link";
import { BusinessPartners } from "../components/BusinessPartners";
import { companyProducts } from "../products/product-data";

const capabilities = [
    {
        title: "Software development",
        description: "Web and mobile applications, backend services, and cloud systems built around the people and processes they need to support.",
        href: "/services/software",
    },
    {
        title: "AI systems & automation",
        description: "AI applications, connected workflows, and tools that help teams find information and reduce repetitive work.",
        href: "/services/ai",
    },
    {
        title: "Music & audio production",
        description: "Recording, beat production, mixing, mastering, and sound design for artists, brands, and digital experiences.",
        href: "/services/music",
    },
];

const principles = [
    {
        title: "Start with the problem",
        description: "Understand the people, the need, and the constraints before choosing a technology or defining a solution.",
    },
    {
        title: "Make it useful",
        description: "Give clarity, usability, and practical outcomes as much attention as the technology behind them.",
    },
    {
        title: "Build responsibly",
        description: "Consider privacy, access, and the information a product handles as part of its design and development.",
    },
    {
        title: "Keep improving",
        description: "Use testing, feedback, and what happens after launch to guide the next improvement.",
    },
];

const process = [
    {
        title: "Understand the goal",
        description: "Discuss your users, existing work, priorities, and budget so the project starts with a shared direction.",
    },
    {
        title: "Define the work",
        description: "Agree on the scope, deliverables, responsibilities, and milestones before moving into implementation.",
    },
    {
        title: "Build and review",
        description: "Develop the solution in stages, with testing and opportunities to review progress along the way.",
    },
    {
        title: "Launch and plan ahead",
        description: "Prepare for delivery and discuss the maintenance or further development the product will need.",
    },
];

const productSummaries: Record<string, string> = {
    Quantum: "A workspace for AI conversations and organized threads.",
    Infinity: "A number-merging puzzle game for Android.",
    Cloudence: "A platform for storing, organizing, and accessing files.",
    LiftWise: "Workout planning, exercise guidance, and progress tracking.",
    Muzalo: "Offline music playback, playlists, and lyrics for local songs.",
    Sudoku: "Offline puzzles with difficulty levels, pencil notes, and themes.",
};

export function AboutPage() {
    return (
        <main className="min-h-screen bg-[#f7f5f3] px-5 pb-16 pt-28 text-[#111827] md:px-6 md:pb-20 md:pt-32">
            <div className="mx-auto max-w-6xl">
                <header className="max-w-3xl">
                    <h1 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl md:text-5xl">
                        Technology built for real life.
                    </h1>
                    <p className="mt-5 text-base leading-7 text-[#5f5b56] md:text-lg md:leading-8">
                        Chefu Technologies is a South African technology company building
                        software, practical AI systems, and digital products. Music and
                        audio production bring a creative dimension to our work.
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7">
                        Based in Malamulele, Limpopo, we develop our own products and
                        work with founders, teams, and artists to turn ideas into
                        experiences people can use.
                    </p>
                </header>

                <section aria-labelledby="about-company" className="mt-10 grid gap-6 border-t border-[#e5e1dc] pt-8 md:mt-16 md:pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                    <div>
                        <h2 id="about-company" className="text-2xl font-semibold tracking-[-0.05em] md:text-3xl">
                            One company. Connected disciplines.
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7">
                            Product thinking connects the way we approach software,
                            intelligence, and sound.
                        </p>
                    </div>
                    <div className="space-y-4 text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7">
                        <p>
                            A digital product needs more than working code. It needs a
                            clear purpose, an understandable interface, and a reliable
                            way to support the people using it. That is the perspective
                            we bring to our own applications and to client projects.
                        </p>
                        <p>
                            Software and AI form the foundation of our business. Our
                            audio work extends that focus into music, games, apps, and
                            media where sound is part of the experience. Each discipline
                            has its own tools, but all require thoughtful design,
                            careful execution, and attention to detail.
                        </p>
                        <p>
                            Building our own products keeps us involved in the decisions
                            that follow an idea: what to include, how to make it usable,
                            and what to improve as a product develops. We bring that
                            same attention to the work we discuss with clients.
                        </p>
                    </div>
                </section>

                <section aria-labelledby="about-capabilities" className="mt-10 md:mt-16">
                    <h2 id="about-capabilities" className="mb-5 text-2xl font-semibold tracking-[-0.05em] md:mb-6 md:text-3xl">
                        What we bring to the work
                    </h2>
                    <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
                        {capabilities.map((capability) => (
                            <article key={capability.title} className="flex flex-col rounded-xl border border-[#e5e1dc] bg-white p-4 sm:p-6">
                                <h3 className="text-base font-semibold tracking-[-0.02em] sm:text-lg">{capability.title}</h3>
                                <p className="mb-3 mt-2 text-sm leading-6 text-[#5f5b56]">{capability.description}</p>
                                <Link href={capability.href} className="mt-auto inline-flex min-h-11 items-center self-start text-sm font-medium text-[#1f3c5b] underline underline-offset-4 hover:text-[#111827]">
                                    Explore this service
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>

                <section aria-labelledby="about-products" className="mt-10 rounded-2xl border border-[#e5e1dc] bg-[#f5f1ed] p-4 sm:p-6 md:mt-16 md:p-8">
                    <div className="mb-6 max-w-2xl">
                        <h2 id="about-products" className="text-2xl font-semibold tracking-[-0.05em] md:text-3xl">Ideas we are building ourselves</h2>
                        <p className="mt-3 text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7">
                            Our products cover AI conversations, file storage, fitness,
                            music, and puzzle games. They reflect the different ways
                            technology can support work and everyday life.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                        {companyProducts.map((product) => (
                            <a key={product.name} href={product.href} target="_blank" rel="noopener noreferrer" className="min-w-0 rounded-xl border border-[#e5e1dc] bg-white p-3 transition-colors hover:border-[#1f3c5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3c5b] sm:p-5">
                                <h3 className="text-base font-semibold tracking-[-0.02em] sm:text-lg">{product.name}</h3>
                                <p className="mt-2 text-sm leading-5 text-[#5f5b56] sm:leading-6">{productSummaries[product.name] ?? product.description}</p>
                                <span className="mt-3 inline-block text-xs font-medium text-[#1f3c5b] underline underline-offset-4">Visit product<span className="sr-only"> (opens in a new tab)</span></span>
                            </a>
                        ))}
                    </div>
                    <Link href="/products" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-[#1f3c5b] underline underline-offset-4 hover:text-[#111827]">See all product details</Link>
                </section>

                <section aria-labelledby="about-principles" className="mt-10 md:mt-16">
                    <h2 id="about-principles" className="mb-5 text-2xl font-semibold tracking-[-0.05em] md:mb-6 md:text-3xl">What guides our decisions</h2>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {principles.map((principle) => (
                            <article key={principle.title} className="min-w-0 rounded-xl border border-[#e5e1dc] bg-white p-3 sm:p-5">
                                <h3 className="text-base font-semibold tracking-[-0.02em] sm:text-lg">{principle.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-[#5f5b56]">{principle.description}</p>
                            </article>
                        ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-x-5 text-sm font-medium text-[#1f3c5b]">
                        <Link href="/security" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-[#111827]">Our security practices</Link>
                        <Link href="/privacy" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-[#111827]">How we handle personal information</Link>
                    </div>
                </section>

                <section aria-labelledby="about-process" className="mt-10 border-t border-[#e5e1dc] pt-8 md:mt-16 md:pt-12">
                    <div className="mb-5 max-w-2xl md:mb-6">
                        <h2 id="about-process" className="text-2xl font-semibold tracking-[-0.05em] md:text-3xl">How we approach a project</h2>
                        <p className="mt-3 text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7">
                            Clear expectations matter from the first conversation. The
                            scope and delivery arrangements depend on the project; this
                            is the approach that guides that discussion.
                        </p>
                    </div>
                    <ol className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                        {process.map((step, index) => (
                            <li key={step.title} className="min-w-0 rounded-xl border border-[#e5e1dc] bg-white p-3 sm:p-5">
                                <p aria-hidden="true" className="mb-3 text-xs font-medium tracking-[0.18em] text-[#6b7280]">{String(index + 1).padStart(2, "0")}</p>
                                <h3 className="text-base font-semibold tracking-[-0.02em]">{step.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-[#5f5b56]">{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                <section aria-labelledby="about-partnerships" className="mt-10 md:mt-16">
                    <h2 id="about-partnerships" className="mb-5 text-2xl font-semibold tracking-[-0.05em] md:mb-6 md:text-3xl">Our partnerships</h2>
                    <BusinessPartners />
                    <Link href="/contact" className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-[#1f3c5b] underline underline-offset-4 hover:text-[#111827]">Discuss your HP or Lenovo requirements</Link>
                </section>

                <section aria-labelledby="about-location" className="mt-10 grid gap-6 border-t border-[#e5e1dc] pt-8 md:mt-16 md:pt-12 lg:grid-cols-2 lg:gap-12">
                    <div>
                        <h2 id="about-location" className="text-2xl font-semibold tracking-[-0.05em] md:text-3xl">Rooted in South Africa. Open to collaboration.</h2>
                        <p className="mt-4 text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7">
                            Our base is Malamulele, Limpopo, with a remote-first
                            approach to collaboration. We work with people who have
                            a problem to solve, a product to build, or a creative idea
                            to develop.
                        </p>
                        <p className="mt-4 text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7">
                            Interested in contributing? Our Careers page explains
                            the departments, roles, and application process.
                        </p>
                        <Link href="/careers" className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-[#1f3c5b] underline underline-offset-4 hover:text-[#111827]">Explore careers</Link>
                    </div>
                    <div className="rounded-xl border border-[#e5e1dc] bg-white p-4 sm:p-6">
                        <h3 className="text-base font-semibold">Company details</h3>
                        <dl className="mt-4 space-y-4 text-sm leading-6">
                            <div>
                                <dt className="text-xs text-[#6b7280]">Registered company</dt>
                                <dd className="mt-1">CHEFU TECHNOLOGIES (Pty) Ltd.</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-[#6b7280]">Registration number</dt>
                                <dd className="mt-1">2026/139936/07</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-[#6b7280]">Location</dt>
                                <dd className="mt-1">Malamulele, Limpopo, South Africa</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-[#6b7280]">General enquiries</dt>
                                <dd><a href="mailto:hello@chefu.co.za" className="inline-flex min-h-11 items-center break-all font-medium text-[#1f3c5b] underline underline-offset-4 hover:text-[#111827]">hello@chefu.co.za</a></dd>
                            </div>
                        </dl>
                    </div>
                </section>

                <section aria-labelledby="about-contact" className="mt-10 rounded-2xl border border-[#e5e1dc] bg-[#f5f1ed] p-5 sm:p-8 md:mt-16">
                    <h2 id="about-contact" className="text-2xl font-semibold tracking-[-0.05em] md:text-3xl">Have something in mind?</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7">
                        Tell us what you want to build, who it is for, and what a
                        useful outcome would look like. We can start there.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                        <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-[#f7f5f3] transition-colors hover:bg-[#1f2937]">Start a conversation</Link>
                        <Link href="/faq" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#e5e1dc] bg-white px-5 py-3 text-sm font-medium transition-colors hover:border-[#d1d5db]">Read common questions</Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
