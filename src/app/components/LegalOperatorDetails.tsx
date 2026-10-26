export function LegalOperatorDetails() {
    return (
        <section
            aria-labelledby="operator-details"
            className="my-8 rounded-2xl border border-slate-200 bg-white p-6"
        >
            <h2
                id="operator-details"
                className="mb-3 text-lg font-semibold text-slate-900"
            >
                Our legal identity and contact details
            </h2>
            <dl className="grid gap-x-6 gap-y-2 text-sm leading-7 sm:grid-cols-[10rem_1fr]">
                <dt className="font-semibold text-slate-900">
                    Registered operator
                </dt>
                <dd>
                    CHEFU TECHNOLOGIES (Pty) Ltd., a private company registered
                    in South Africa
                </dd>
                <dt className="font-semibold text-slate-900">
                    Registration number
                </dt>
                <dd>2026/139936/07</dd>
                <dt className="font-semibold text-slate-900">
                    Business and legal notices
                </dt>
                <dd>145 Ka-Dinga, Malamulele, Limpopo, 0982, South Africa</dd>
                <dt className="font-semibold text-slate-900">
                    Information Officer / privacy requests
                </dt>
                <dd>
                    <a
                        href="mailto:privacy@chefu.co.za"
                        className="text-cyan-700 underline"
                    >
                        privacy@chefu.co.za
                    </a>
                </dd>
                <dt className="font-semibold text-slate-900">
                    Legal enquiries
                </dt>
                <dd>
                    <a
                        href="mailto:legal@chefu.co.za"
                        className="text-cyan-700 underline"
                    >
                        legal@chefu.co.za
                    </a>
                </dd>
                <dt className="font-semibold text-slate-900">Support</dt>
                <dd>
                    <a
                        href="mailto:hello@chefu.co.za"
                        className="text-cyan-700 underline"
                    >
                        hello@chefu.co.za
                    </a>{" "}
                    ·{" "}
                    <a
                        href="tel:+27606031205"
                        className="text-cyan-700 underline"
                    >
                        +27 60 603 1205
                    </a>
                </dd>
                <dt className="font-semibold text-slate-900">Website</dt>
                <dd>
                    <a
                        href="https://chefu.co.za"
                        className="text-cyan-700 underline"
                    >
                        chefu.co.za
                    </a>
                </dd>
            </dl>
        </section>
    );
}
