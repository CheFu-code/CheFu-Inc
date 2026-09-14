import { Cookie } from 'lucide-react';

export function CookiePolicy() {
    return (
        <div className="min-h-screen bg-stone-50 pb-20 pt-32 text-slate-700">
            <div className="container mx-auto max-w-4xl px-6">
                <div className="mb-12 border-b border-slate-200 pb-8">
                    <div className="mb-4 flex items-center gap-3 text-cyan-700">
                        <Cookie className="h-8 w-8" />
                        <span className="font-bold uppercase tracking-wider">Legal</span>
                    </div>

                    <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
                        Cookie Policy
                    </h1>

                    <p className="text-slate-500">
                        Last updated: August 22, 2026
                    </p>
                </div>

                <div className="prose prose-slate prose-lg max-w-none">
                    <p>
                        CHEFU TECHNOLOGIES (Pty) Ltd. ("CHEFU TECHNOLOGIES", "we", "us",
                        or "our") uses cookies and similar technologies to operate and
                        improve our websites, applications, and related digital services.
                    </p>

                    <p>
                        This Cookie Policy explains what cookies are, which cookies we use,
                        why we use them, and how you can manage or disable them where your
                        browser or device allows that option.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        1. What Are Cookies?
                    </h3>

                    <p>
                        Cookies are small text files that are stored on your device when you
                        visit a website or use an application. They are commonly used to help
                        remember preferences, maintain sessions, improve performance, and
                        enable website functionality.
                    </p>

                    <p>
                        We may also use similar technologies such as local storage, session
                        storage, and related browser storage features to support product
                        functionality and maintain a better user experience.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        2. What Cookies We Use
                    </h3>

                    <p>
                        The cookies used by CHEFU TECHNOLOGIES may depend on the specific
                        website or service you access. In general, we may use the following
                        categories of cookies:
                    </p>

                    <ul className="mb-6 list-disc space-y-2 pl-6">
                        <li>
                            Necessary cookies: required for security, authentication, session
                            continuity, and core functionality.
                        </li>
                        <li>
                            Preference cookies: remember choices such as interface settings,
                            language preferences, or recent actions.
                        </li>
                        <li>
                            Security cookies: support fraud prevention, abuse detection, and
                            account protection.
                        </li>
                        <li>
                            Performance and diagnostics cookies: help us understand whether a
                            feature is functioning correctly and identify technical issues.
                        </li>
                        <li>
                            Third-party cookies: used where a service relies on an external
                            provider such as an authentication or cloud platform.
                        </li>
                    </ul>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        3. Why We Use Cookies
                    </h3>

                    <p>
                        We use cookies and similar technologies to:
                    </p>

                    <ul className="mb-6 list-disc space-y-2 pl-6">
                        <li>Keep you signed in or maintain your session as needed.</li>
                        <li>Protect the security and integrity of login and account flows.</li>
                        <li>Remember preferences and reduce repeated actions.</li>
                        <li>Improve reliability, performance, and user experience.</li>
                        <li>Diagnose errors and maintain service quality.</li>
                        <li>Support lawful business operations and compliance requirements.</li>
                    </ul>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        4. Third-Party Cookies
                    </h3>

                    <p>
                        Some CHEFU TECHNOLOGIES services may rely on third-party infrastructure
                        and tools, including authentication, hosting, analytics, or cloud
                        providers. Those third parties may place cookies on your device as part
                        of the services they provide to us or to you directly.
                    </p>

                    <p>
                        We do not control the cookie policies of those third-party providers.
                        Where relevant, we encourage you to review the privacy and cookie
                        policies of the services you interact with.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        5. Managing Cookies
                    </h3>

                    <p>
                        Most browsers allow you to manage or disable cookies through their
                        settings. You may also be able to delete previously stored cookies and
                        configure your browser to block or warn before new cookies are set.
                    </p>

                    <p>
                        Please note that disabling some cookies may affect website
                        functionality, including authentication, account access, session
                        continuity, and parts of the experience that depend on browser storage.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        6. Consent and Your Choices
                    </h3>

                    <p>
                        Where local law requires it, we will obtain consent before placing
                        non-essential cookies on your device or where a service depends on a
                        cookie category that requires explicit permission.
                    </p>

                    <p>
                        If you decide to withdraw consent or change your preferences, you may
                        need to update your browser settings or revisit the relevant service
                        experience to reapply or remove cookie preferences as available.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        7. Updates to This Policy
                    </h3>

                    <p>
                        We may update this Cookie Policy from time to time to reflect changes
                        in our services, technology, or legal requirements. When we do, we will
                        revise the "Last updated" date at the top of this notice.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        8. Contact Us
                    </h3>

                    <p>
                        If you have questions about our use of cookies or related data
                        practices, please contact us at:{' '}
                        <a href="mailto:privacy@chefu.co.za" className="text-cyan-400 hover:underline">
                            privacy@chefu.co.za
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
