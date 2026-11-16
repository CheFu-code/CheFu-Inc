import type { TermsSection } from "../AppTermsOfService";
import { commonTermsSections } from "../shared-sections";

export const shopYethuTerms: TermsSection[] = [
    {
        id: "marketplace-service",
        title: "ShopYethu marketplace",
        content: <>
            <p>ShopYethu is a marketplace app operated by CHEFU TECHNOLOGIES (Pty) Ltd. It lets people browse participating stores and products, and lets approved sellers manage stores, listings and orders. Unless a listing clearly says otherwise, the seller—not the marketplace operator—is responsible for the goods, product information, stock, pricing and fulfilment.</p>
            <p>We provide the marketplace tools and review seller applications. Approval is not a guarantee of a seller's identity, product quality, safety, legality, availability or performance, and does not make us the seller or manufacturer. We may review reports and take proportionate action on listings or seller access, but cannot promise that every issue will be detected before a transaction.</p>
        </>,
    },
    {
        id: "accounts-and-eligibility",
        title: "Accounts and eligibility",
        content: <>
            <p>Account features require sign-in. Provide accurate information, protect your sign-in credentials and tell us promptly if you suspect someone else has used your account. You are responsible for activity carried out through your account, subject to applicable law and any security failure for which we are responsible.</p>
            <p>Seller applications are intended for applicants operating in South Africa and require the information requested in the app. Submitting an application does not guarantee approval. Staff may approve, request more information, reject or suspend seller access, with the status or reason shown in the app where available.</p>
            <p>If you cannot legally agree to these terms yourself, a parent or legal guardian must authorise your use where required by law. ShopYethu does not currently verify age or parental permission in the app.</p>
        </>,
    },
    {
        id: "seller-listings-and-content",
        title: "Seller listings, products and content",
        content: <>
            <p>Sellers must provide accurate and current store and product details, prices, stock and fulfilment information, and must have the rights and authority needed to offer the products and photos they submit. Sellers are responsible for updating or unpublishing information that is no longer accurate or available.</p>
            <p>Do not list unlawful, unsafe, counterfeit or prohibited goods, infringe another person's rights, mislead buyers or submit private information without authority. We may restrict or remove content or seller access when reasonably needed to address a report, breach, safety concern or legal requirement. Where practicable, we will communicate the reason and any available next step.</p>
            <p>You keep rights you own in listing content. You give us permission to host, process and display that content as needed to operate ShopYethu, show listings and use the providers described in the Privacy Policy. Published listing details and product photos may be visible to marketplace users; uploaded photos are delivered through image URLs that may be accessible to anyone with the URL.</p>
        </>,
    },
    {
        id: "orders-and-fulfilment",
        title: "Orders and fulfilment",
        content: <>
            <p>An order is associated with one seller's store. When you submit it, the app sends the selected items, quantities, contact details, fulfilment choice and any address entered to the marketplace backend and the relevant seller for processing. The app records order status; a status such as “placed” does not mean the seller has accepted or completed the order. Check the order status and any seller communication shown in the app.</p>
            <p>Prices, stock, seller status and fulfilment are rechecked when an order is submitted, but availability can change. If an order cannot be fulfilled or a detail is wrong, use the available order/reporting flow and avoid sending passwords or payment credentials in a report.</p>
            <p>Orders are disabled by default on the backend. At present, marketplace online payments and delivery are not available. If collection orders are enabled, payment is arranged directly with the seller at collection; the app does not collect card details or mark an order paid unless the configured collection process records that status. Do not treat this as an online payment service.</p>
        </>,
    },
    {
        id: "reports-and-marketplace-conduct",
        title: "Reports and marketplace conduct",
        content: <>
            <p>You can submit a report about a listing or order through the app. Staff can review the report and may contact you or take marketplace action. Reports are for staff follow-up and do not guarantee a particular outcome, resolution time or recovery of money or goods.</p>
            <p>Use ShopYethu lawfully and do not impersonate others, misuse another account, submit knowingly false reports, interfere with service operation or attempt to access information or systems you are not authorised to use.</p>
        </>,
    },
    ...commonTermsSections("ShopYethu"),
];
