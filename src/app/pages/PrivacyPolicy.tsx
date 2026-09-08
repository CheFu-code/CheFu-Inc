import { ShieldCheck } from 'lucide-react';

export function PrivacyPolicy() {
    return (
        <div className="pt-32 pb-20 bg-slate-950 min-h-screen text-slate-300">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-12 border-b border-slate-800 pb-8">
                    <div className="flex items-center gap-3 mb-4 text-cyan-400">
                        <ShieldCheck className="w-8 h-8" />
                        <span className="font-bold uppercase tracking-wider">Legal</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Privacy Policy
                    </h1>

                    <p className="text-slate-500">
                        Last updated: August 22, 2026
                    </p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p>
                        CHEFU TECHNOLOGIES (Pty) Ltd. ("CHEFU TECHNOLOGIES",
                        "we", "us", or "our") respects your privacy and is committed to
                        protecting personal information that we process in connection
                        with our websites, applications, products, services, and other
                        digital experiences.
                    </p>

                    <p>
                        This Privacy Policy explains what personal information we may
                        collect, how we use it, how it may be shared, how we protect it,
                        how long we retain it, and the choices and rights available to
                        you.
                    </p>

                    <p>
                        This policy applies to information processed through our primary
                        website at{' '}
                        <a
                            href="https://chefu.co.za"
                            className="text-cyan-400 hover:underline"
                        >
                            www.chefu.co.za
                        </a>{' '}
                        and, where applicable, our applications, platforms, account
                        systems, forms, and other services operated by CHEFU TECHNOLOGIES.
                    </p>

                    <p>
                        Some CHEFU TECHNOLOGIES services may have their own additional privacy
                        notices or terms that explain information practices specific to
                        those services. Where such a notice applies, it should be read
                        together with this Privacy Policy.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        1. Who We Are
                    </h3>

                    <p>
                        The responsible entity for the processing described in this
                        Privacy Policy is:
                    </p>

                    <div className="border border-slate-800 rounded-xl p-6 my-6 bg-slate-900/40">
                        <p className="mb-2">
                            <strong className="text-white">
                                CHEFU TECHNOLOGIES (Pty) Ltd.
                            </strong>
                        </p>
                        <p className="mb-0">
                            Website:{' '}
                            <a
                                href="https://chefu.co.za"
                                className="text-cyan-400 hover:underline"
                            >
                                www.chefu.co.za
                            </a>
                        </p>
                    </div>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        2. Information We Collect
                    </h3>

                    <p>
                        The information we collect depends on how you interact with
                        CHEFU TECHNOLOGIES and which services you use. We do not necessarily collect
                        every category of information described below from every user.
                    </p>

                    <h4 className="text-white font-semibold mt-6 mb-3">
                        2.1 Information You Provide Directly
                    </h4>

                    <p>
                        You may provide information to us when you create an account,
                        contact us, submit a form, request a service, communicate with
                        us, or otherwise interact with our services.
                    </p>

                    <p>This may include:</p>

                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Name or display name.</li>
                        <li>Email address.</li>
                        <li>Telephone or mobile number.</li>
                        <li>Account credentials or authentication-related information.</li>
                        <li>Information contained in messages or enquiries you send us.</li>
                        <li>Information you voluntarily provide when requesting a product or service.</li>
                        <li>Information contained in files, images, or other content you choose to upload to a service that supports uploads.</li>
                        <li>Other information you voluntarily provide in connection with a CHEFU TECHNOLOGIES service.</li>
                    </ul>

                    <h4 className="text-white font-semibold mt-6 mb-3">
                        2.2 Account and Authentication Information
                    </h4>

                    <p>
                        Where a CHEFU TECHNOLOGIES service provides user accounts, we process
                        information necessary to create, authenticate, secure, and
                        maintain those accounts.
                    </p>

                    <p>
                        Depending on the authentication methods available in a
                        particular service, this may include email-based authentication,
                        authentication through supported identity providers, single
                        sign-on functionality, or passkey-based authentication.
                    </p>

                    <p>
                        Passkeys are based on public-key cryptography. CHEFU TECHNOLOGIES does not
                        receive or store the private cryptographic key material that
                        remains protected by the user's device or credential manager.
                        Authentication systems may nevertheless process information
                        necessary to identify an account, authenticate a sign-in attempt,
                        prevent abuse, and maintain account security.
                    </p>

                    <h4 className="text-white font-semibold mt-6 mb-3">
                        2.3 Information Collected Automatically
                    </h4>

                    <p>
                        When you access our websites or services, certain technical
                        information may be processed automatically. Depending on the
                        service and its configuration, this may include:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>IP address.</li>
                        <li>Browser type and version.</li>
                        <li>Operating system and device information.</li>
                        <li>Language and regional settings.</li>
                        <li>Approximate technical location derived from an IP address.</li>
                        <li>Pages, routes, or features accessed.</li>
                        <li>Referring and exit pages.</li>
                        <li>Date and time of requests.</li>
                        <li>Diagnostic, performance, and error information.</li>
                        <li>Security-related information such as authentication or abuse-prevention events.</li>
                    </ul>

                    <p>
                        This information may be used to operate our services, understand
                        technical problems, maintain security, diagnose errors, and
                        improve reliability and performance.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        3. Information We Receive From Third Parties
                    </h3>

                    <p>
                        Some CHEFU TECHNOLOGIES services may allow you to authenticate or interact
                        through third-party services. When you use such a service, we
                        may receive information that the third party makes available to
                        us in accordance with your choices and that provider's privacy
                        practices.
                    </p>

                    <p>
                        The information received may include identifiers such as an
                        email address, name, profile information, or technical account
                        identifiers, depending on the provider and permissions granted.
                    </p>

                    <p>
                        We do not receive a third party's private credentials merely
                        because you use that provider to authenticate with CHEFU TECHNOLOGIES.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        4. How We Use Personal Information
                    </h3>

                    <p>
                        We process personal information for legitimate and appropriate
                        purposes connected with operating CHEFU TECHNOLOGIES and providing requested
                        services.
                    </p>

                    <p>This may include:</p>

                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Creating and maintaining user accounts.</li>
                        <li>Authenticating users and protecting accounts.</li>
                        <li>Providing products and services requested by users.</li>
                        <li>Responding to enquiries and support requests.</li>
                        <li>Processing information submitted through our forms and applications.</li>
                        <li>Providing account-related communications.</li>
                        <li>Maintaining and improving the functionality of our websites and applications.</li>
                        <li>Detecting, preventing, and investigating fraud, abuse, attacks, and unauthorized activity.</li>
                        <li>Monitoring system reliability and diagnosing technical failures.</li>
                        <li>Maintaining the security and integrity of our infrastructure.</li>
                        <li>Complying with applicable legal and regulatory obligations.</li>
                        <li>Establishing, exercising, or defending legal rights where necessary.</li>
                    </ul>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        5. Legal Basis for Processing
                    </h3>

                    <p>
                        Where applicable, we process personal information on the basis
                        permitted by applicable data-protection law. Depending on the
                        circumstances, this may include your consent, performance of a
                        contract or steps requested before entering into a contract,
                        compliance with a legal obligation, protection of legitimate
                        interests, or another lawful basis recognized by applicable law.
                    </p>

                    <p>
                        Where we rely on consent, you may withdraw that consent where
                        permitted by law. Withdrawal does not affect processing that
                        occurred before consent was withdrawn or processing based on
                        another lawful basis.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        6. Authentication and Firebase Services
                    </h3>

                    <p>
                        Some CHEFU TECHNOLOGIES applications use services provided by Google
                        Firebase for functionality such as authentication, account
                        management, database services, application infrastructure, or
                        related features.
                    </p>

                    <p>
                        Depending on the specific CHEFU TECHNOLOGIES application, Firebase may
                        process information required to provide these functions,
                        including account identifiers, authentication information,
                        application data, and technical information.
                    </p>

                    <p>
                        We configure third-party services according to the requirements
                        of the relevant CHEFU TECHNOLOGIES service and only use the information
                        necessary for the functionality being provided.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        7. Data Stored in Cloud Services
                    </h3>

                    <p>
                        CHEFU TECHNOLOGIES may use third-party cloud infrastructure and storage
                        providers to operate its applications and services. Depending
                        on the service, information may be stored in databases,
                        application storage, or other hosted infrastructure.
                    </p>

                    <p>
                        The specific information stored depends on the application and
                        the information you choose to submit. We do not claim that every
                        CHEFU TECHNOLOGIES service uses every storage provider or stores every
                        category of information described in this policy.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        8. Images and Uploaded Content
                    </h3>

                    <p>
                        Certain CHEFU TECHNOLOGIES services may allow users or customers to upload
                        images or other files. Where such functionality is provided,
                        uploaded content may be processed and stored through third-party
                        infrastructure used by the relevant service.
                    </p>

                    <p>
                        You should not upload confidential, sensitive, or personal
                        information belonging to another person unless you have the
                        appropriate authority and lawful basis to do so.
                    </p>

                    <p>
                        We may process uploaded content only to the extent reasonably
                        necessary to provide, maintain, secure, or improve the service
                        for which the content was submitted, or where otherwise
                        permitted or required by law.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        9. Cookies and Similar Technologies
                    </h3>

                    <p>
                        Our websites and applications may use cookies, local storage,
                        session storage, and similar technologies.
                    </p>

                    <p>
                        These technologies may be necessary for functions such as
                        authentication, maintaining sessions, remembering preferences,
                        preventing abuse, maintaining security, and ensuring that
                        services operate correctly.
                    </p>

                    <p>
                        Depending on the particular service, additional technologies
                        may be used for functionality, diagnostics, performance
                        monitoring, or understanding how a service is used.
                    </p>

                    <p>
                        You can control cookies through your browser settings. Disabling
                        certain cookies or storage technologies may cause parts of a
                        service to stop functioning correctly, particularly features
                        that require authentication or session management.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        10. Communications
                    </h3>

                    <p>
                        If you contact us, submit an enquiry, create an account, request
                        support, or otherwise communicate with CHEFU TECHNOLOGIES, we may retain the
                        information contained in that communication and use it to
                        respond to you and maintain an appropriate record of the
                        interaction.
                    </p>

                    <p>
                        We may also send necessary service-related communications,
                        including account, security, transactional, or administrative
                        messages.
                    </p>

                    <p>
                        Where marketing communications are sent, we will provide an
                        appropriate means to opt out where required by applicable law.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        11. When We Share Personal Information
                    </h3>

                    <p>
                        We do not sell your personal information as a product or
                        commodity.
                    </p>

                    <p>
                        We may disclose or make personal information available where
                        reasonably necessary for the operation of our services,
                        including to:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Technology, hosting, authentication, storage, and infrastructure providers.</li>
                        <li>Service providers that process information on our behalf.</li>
                        <li>Professional advisers where reasonably necessary.</li>
                        <li>Authorities or other parties where disclosure is required by law or valid legal process.</li>
                        <li>Parties involved in protecting our rights, property, users, or services against fraud, abuse, or security threats.</li>
                        <li>A successor or transaction party in connection with a merger, acquisition, restructuring, sale of assets, or similar corporate transaction, subject to applicable law.</li>
                    </ul>

                    <p>
                        Third-party service providers are not permitted to use personal
                        information provided to them by or on behalf of CHEFU TECHNOLOGIES for
                        purposes inconsistent with the services they provide to us,
                        subject to their contractual and legal obligations.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        12. Third-Party Services
                    </h3>

                    <p>
                        Our services may rely on or integrate with third-party
                        platforms. Those providers may independently process
                        information in accordance with their own privacy policies and
                        terms.
                    </p>

                    <p>
                        Examples of infrastructure or technology that may be used by
                        particular CHEFU TECHNOLOGIES services include Firebase and Cloudinary.
                        The use of a particular provider depends on the application and
                        functionality involved.
                    </p>

                    <p>
                        We encourage users to review the privacy policies of third-party
                        services where those services are used to provide functionality
                        you access.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        13. Data Security
                    </h3>

                    <p>
                        We take reasonable technical and organizational measures
                        designed to protect personal information against unauthorized
                        access, alteration, disclosure, loss, misuse, or destruction.
                    </p>

                    <p>
                        Security measures may include access controls, authentication
                        mechanisms, encryption where appropriate, security monitoring,
                        secure development practices, infrastructure protections, and
                        measures designed to reduce unauthorized access.
                    </p>

                    <p>
                        However, no method of transmitting or storing information over
                        the internet can be guaranteed to be completely secure. We
                        therefore cannot guarantee absolute security of information.
                    </p>

                    <p>
                        You are also responsible for maintaining the confidentiality of
                        credentials and devices used to access your account and should
                        notify us if you believe your account has been compromised.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        14. Data Retention
                    </h3>

                    <p>
                        We retain personal information only for as long as reasonably
                        necessary for the purposes for which it was collected, including
                        providing services, maintaining business and transaction
                        records, resolving disputes, enforcing agreements, maintaining
                        security, and satisfying legal or regulatory requirements.
                    </p>

                    <p>
                        Retention periods may therefore differ depending on the type of
                        information, the service involved, the purpose for which the
                        information was collected, and applicable legal requirements.
                    </p>

                    <p>
                        When information is no longer required, we may delete it,
                        anonymize it, or otherwise securely dispose of it, subject to
                        technical, legal, and operational requirements.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        15. Your Privacy Rights
                    </h3>

                    <p>
                        Depending on your location and applicable law, you may have
                        rights relating to your personal information.
                    </p>

                    <p>
                        These may include the right to:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Request access to personal information we hold about you.</li>
                        <li>Request correction of inaccurate or incomplete information.</li>
                        <li>Request deletion of personal information where applicable.</li>
                        <li>Object to or request restriction of certain processing.</li>
                        <li>Withdraw consent where processing is based on consent.</li>
                        <li>Request information about how your personal information is processed.</li>
                        <li>Complain to an appropriate data-protection authority where you believe your rights have been infringed.</li>
                    </ul>

                    <p>
                        These rights are not absolute and may be subject to legal
                        limitations, exemptions, or conditions.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        16. South African Privacy Protection
                    </h3>

                    <p>
                        CHEFU TECHNOLOGIES operates in South Africa and aims to process
                        personal information in accordance with applicable South African
                        privacy and data-protection requirements, including the
                        Protection of Personal Information Act 4 of 2013 ("POPIA"),
                        where applicable.
                    </p>

                    <p>
                        We seek to process personal information lawfully and reasonably,
                        collect information for specific and legitimate purposes, avoid
                        collecting information that is unnecessary for those purposes,
                        and take reasonable measures to protect information against
                        unauthorized access or other unlawful processing.
                    </p>

                    <p>
                        If you wish to exercise a privacy right or raise a concern about
                        our handling of personal information, please contact us using
                        the details provided below.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        17. International Processing
                    </h3>

                    <p>
                        Some technology and infrastructure providers used to operate
                        online services may process or store information in countries
                        outside South Africa.
                    </p>

                    <p>
                        Where personal information is transferred or made accessible
                        across borders, we seek to do so in accordance with applicable
                        data-protection requirements and appropriate safeguards.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        18. Children's Privacy
                    </h3>

                    <p>
                        Our services are not intentionally designed to collect personal
                        information from children in circumstances where such collection
                        is prohibited by applicable law.
                    </p>

                    <p>
                        If you believe that a child has provided personal information to
                        us in circumstances where it should not have been collected,
                        please contact us so that we can investigate and take
                        appropriate action.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        19. Links to Other Websites
                    </h3>

                    <p>
                        Our websites or applications may contain links to websites,
                        applications, or services operated by third parties.
                    </p>

                    <p>
                        We are not responsible for the privacy practices, content, or
                        security of third-party websites. Once you leave a CHEFU TECHNOLOGIES
                        service, the privacy policy of the destination service may
                        apply.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        20. Business and Service Transactions
                    </h3>

                    <p>
                        Where you request a product or service from CHEFU TECHNOLOGIES, we may process
                        information necessary to administer the relationship, provide
                        the requested service, communicate with you, maintain relevant
                        records, and meet applicable legal or contractual obligations.
                    </p>

                    <p>
                        Where a particular service involves payment processing, the
                        payment provider may independently process payment and
                        transaction information under its own terms and privacy policy.
                        CHEFU TECHNOLOGIES does not need to receive or store payment-card credentials
                        merely to facilitate a transaction through an external payment
                        provider.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        21. Changes to This Privacy Policy
                    </h3>

                    <p>
                        We may update this Privacy Policy from time to time to reflect
                        changes in our services, technology, legal requirements, or
                        information practices.
                    </p>

                    <p>
                        When we make changes, we will update the "Last updated" date at
                        the top of this policy. Where required by applicable law, we
                        will provide additional notice or obtain consent before changes
                        take effect.
                    </p>

                    <p>
                        Your continued use of a CHEFU TECHNOLOGIES service after an updated policy
                        becomes effective may be subject to the updated policy to the
                        extent permitted by applicable law.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        22. Contact Us
                    </h3>

                    <p>
                        If you have questions about this Privacy Policy, want to request
                        access to or correction of your personal information, wish to
                        exercise an applicable privacy right, or have a concern about
                        how your information is handled, please contact CHEFU
                        TECHNOLOGIES.
                    </p>

                    <p>
                        Privacy enquiries:{' '}
                        <a
                            href="mailto:privacy@chefu.co.za"
                            className="text-cyan-400 hover:underline"
                        >
                            privacy@chefu.co.za
                        </a>
                    </p>

                    <p>
                        We may need to verify your identity before fulfilling certain
                        requests concerning personal information in order to protect
                        your account and prevent unauthorized disclosure.
                    </p>

                    <h3 className="text-white font-bold mt-10 mb-4 text-xl">
                        23. Effective Date
                    </h3>

                    <p>
                        This Privacy Policy is effective from August 22, 2026.
                    </p>
                </div>
            </div>
        </div>
    );
}