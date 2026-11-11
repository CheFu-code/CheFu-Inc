import Link from "next/link";
import { FAQAccordion } from "../components/FAQAccordion";
import { companyProducts } from "../products/product-data";

const faqGroups = [
    {
        id: "getting-started",
        title: "Getting started",
        items: [
            {
                q: "What does Chefu Technologies do?",
                a: "Chefu Technologies builds software platforms, practical AI systems, and digital products. We also provide music and audio production for artists, brands, games, and other digital experiences.",
                link: { href: "/services", label: "Explore our services" },
            },
            {
                q: "Where are you based?",
                a: "We are based in Malamulele, South Africa, and take a remote-first approach to collaboration. Share your location and project requirements when contacting us so we can discuss how to work together.",
            },
            {
                q: "Do you work with independent artists and founders?",
                a: "Yes. We work with independent artists, founders, growing teams, and larger organizations. The starting point is understanding your goal and whether our software, AI, or audio capabilities fit the project.",
            },
            {
                q: "How do I start a project or request a quote?",
                a: "Use the contact page to describe what you want to build, who it is for, your budget range, and your preferred timeline. Include links to an existing product or examples if you have them. You do not need a complete technical specification to begin the conversation.",
                link: { href: "/contact", label: "Discuss your project" },
            },
            {
                q: "How much does a project cost?",
                a: "Pricing depends on the scope, integrations, complexity, and deliverables. Share your requirements and budget range so we can discuss an appropriate scope. Audio package prices are shown on the Music Production page; custom requirements need a separate discussion.",
                link: { href: "/services/music", label: "View audio packages" },
            },
            {
                q: "How long will my project take?",
                a: "There is no single timeline for every project. The scope, existing systems, access to content and data, and feedback cycles all affect delivery. We discuss milestones and delivery expectations once the requirements are understood.",
            },
            {
                q: "Who owns the finished work?",
                a: "Ownership, licensing, source files, and delivery milestones depend on the written agreement for the engagement. These details should be clarified before work begins. Our own products and any third-party components may have separate terms.",
                link: { href: "/terms", label: "Read our terms" },
            },
        ],
    },
    {
        id: "software-ai",
        title: "Software & AI",
        items: [
            {
                q: "What kinds of software can you build?",
                a: "Our software services cover web and mobile applications, internal tools, backend services, and cloud systems. We can discuss an early product idea, an MVP, or an existing platform that needs further development.",
                link: { href: "/services/software", label: "Explore software development" },
            },
            {
                q: "Can you improve an existing application?",
                a: "Yes. We can assess existing applications and discuss improvements, new features, integrations, and AI capabilities. Whether to extend, modernize, or rebuild depends on the condition of the current system and your goals.",
            },
            {
                q: "What can AI do for my business?",
                a: "Potential uses include customer support assistants, searchable business knowledge, internal tools, and automated workflows. We start with the actual problem, available data, and the decisions or actions involved to determine where AI could be useful.",
                link: { href: "/services/ai", label: "Explore AI solutions" },
            },
            {
                q: "Can you connect AI to tools we already use?",
                a: "We build integrations using APIs, webhooks, databases, and other supported interfaces. What is possible depends on the tools involved, the access they provide, and your security and permission requirements.",
            },
            {
                q: "Can we arrange maintenance after launch?",
                a: "Yes, ongoing maintenance and improvements can be discussed as part of the engagement. Agree on the support scope, responsibilities, availability, and costs in writing; these depend on the product and operating environment.",
            },
        ],
    },
    {
        id: "music-audio",
        title: "Music & audio",
        items: [
            {
                q: "Which music production services do you offer?",
                a: "Our music services include recording, beat production, mixing, mastering, and sound design. We also work on audio for games, films, apps, and digital media. The Music Production page outlines the services and packages.",
                link: { href: "/services/music", label: "Explore music production" },
            },
            {
                q: "Can I request a custom beat or sound design?",
                a: "Yes. Share the intended use, style, references, deadline, and required deliverables. These details help us discuss the creative direction and the scope of the work.",
                link: { href: "/contact?service=Audio%20Production", label: "Discuss an audio project" },
            },
            {
                q: "What should I include when booking an audio project?",
                a: "Tell us which service you need, how many tracks or assets are involved, what material is already available, and your preferred deadline. Confirm the file formats, revisions, usage rights, and final deliverables before booking.",
            },
        ],
    },
    {
        id: "products-partnerships",
        title: "Products & partnerships",
        items: [
            {
                q: "Which products has Chefu Technologies built?",
                a: `Our products include ${companyProducts.map((product) => product.name).join(", ")}. They span AI workspaces, cloud storage, fitness, music playback, and puzzle games. The Products page links to each product and its available platform.`,
                link: { href: "/products", label: "Browse our products" },
            },
            {
                q: "Where can I download your apps?",
                a: "Follow the official links on the Products page. Our Android apps link to their Google Play listings, while web products link to their own websites. Availability and features depend on the individual product.",
                link: { href: "/products", label: "Find official product links" },
            },
            {
                q: "Is Chefu Technologies an HP partner?",
                a: "Yes. Chefu Technologies is an official HP Business Partner. Contact us with your HP-related requirements so we can discuss your request.",
                link: { href: "/contact", label: "Ask about HP" },
            },
        ],
    },
    {
        id: "privacy-support",
        title: "Privacy & support",
        items: [
            {
                q: "How do you approach privacy and security?",
                a: "Our documented practices cover access controls, secure configuration, data minimization, retention, and responsible product design. The Security page explains these practices, and the Privacy Policy describes how personal information is handled.",
                link: { href: "/security", label: "Read about security" },
            },
            {
                q: "Where can I find privacy information for a specific app?",
                a: "The main Privacy Policy links to separate privacy notices for Muzalo, LiftWise, Sudoku, and Infinity. Read the notice for the app you use alongside any applicable service terms.",
                link: { href: "/privacy", label: "View privacy policies" },
            },
            {
                q: "How do I get help with a product?",
                a: "Contact us with the product name, a description of the problem, and the steps that led to it. Include your app version or browser and a screenshot if useful. Do not send passwords, access tokens, or sensitive files.",
                link: { href: "/contact", label: "Contact support" },
            },
            {
                q: "How do I report a security concern?",
                a: "Email hello@chefu.co.za with the affected product or URL, a description of the concern, and relevant supporting details. Avoid including passwords, access tokens, or confidential material in the first message.",
                link: { href: "/security", label: "View reporting information" },
            },
            {
                q: "Where can I check purchase, delivery, or refund terms?",
                a: "Review the Shipping Policy, Terms of Service, and any terms supplied with the specific product or engagement before ordering. For an existing order, contact us with its reference and the issue you need help with.",
                link: { href: "/shipping", label: "Read purchase and delivery policies" },
            },
        ],
    },
    {
        id: "careers",
        title: "Careers",
        items: [
            {
                q: "How can I apply to join Chefu Technologies?",
                a: "Visit Careers and complete the application form. Choose a department and role, describe your experience and skills, and answer the short questions. Portfolio links and a CV can be added in the optional Links & CV section.",
                link: { href: "/careers", label: "View careers and apply" },
            },
            {
                q: "Can beginners or interns apply?",
                a: "The application form includes a Beginner experience level and an Intern (Open Application) role. Select the options that reflect your background and explain the skills and work you can contribute. Submitting an application does not guarantee a position.",
            },
            {
                q: "Are remote roles available?",
                a: "The application supports remote work. Applicants outside South Africa are set to Remote; applicants in South Africa can select Remote, Hybrid, or On-site. The final arrangement depends on the role and discussion with the team.",
            },
        ],
    },
];

export function FAQPage() {
    return (
        <main className="min-h-screen bg-[#f7f5f3] px-5 pb-16 pt-28 text-[#111827] md:px-6 md:pb-20 md:pt-32">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.4fr] lg:items-start lg:gap-16">
                    <aside className="min-w-0 lg:sticky lg:top-28">
                        <h1 className="text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                            Frequently asked questions
                        </h1>
                        <p className="mt-4 max-w-md text-sm leading-6 text-[#5f5b56] sm:text-base sm:leading-7">
                            Find answers about working with us, our software, AI and audio services,
                            our products, and joining the team.
                        </p>
                        <nav aria-label="FAQ topics" className="mt-5 flex flex-wrap gap-2 lg:mt-8 lg:flex-col lg:items-start">
                            {faqGroups.map((group) => (
                                <a
                                    key={group.id}
                                    href={`#${group.id}`}
                                    className="inline-flex min-h-11 items-center rounded-full border border-[#e5e1dc] bg-white px-3 py-2 text-xs font-medium text-[#1f3c5b] transition-colors hover:border-[#1f3c5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3c5b] sm:text-sm"
                                >
                                    {group.title}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    <div className="min-w-0 space-y-8 md:space-y-10">
                        {faqGroups.map((group) => (
                            <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="scroll-mt-28">
                                <h2 id={`${group.id}-heading`} className="mb-4 text-lg font-semibold tracking-[-0.03em] sm:text-xl">
                                    {group.title}
                                </h2>
                                <FAQAccordion items={group.items} />
                            </section>
                        ))}
                        <section className="rounded-2xl border border-[#e5e1dc] bg-white p-4 sm:p-6">
                            <h2 className="text-lg font-semibold tracking-[-0.03em]">Still have a question?</h2>
                            <p className="mt-2 text-sm leading-6 text-[#5f5b56]">
                                Share what you need help with, or tell us about your project, timeline, and budget range.
                            </p>
                            <Link href="/contact" className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-[#f7f5f3] transition-colors hover:bg-[#1f2937]">
                                Contact the team
                            </Link>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
