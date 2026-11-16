import type { PrivacySection } from "../AppPrivacyPolicy";
import { privacyContactSections } from "../shared-sections";

export const shopYethuSections: PrivacySection[] = [
    {
        id: "marketplace-data-overview",
        title: "Information ShopYethu handles",
        content: <>
            <p>ShopYethu is a marketplace operated by CHEFU TECHNOLOGIES (Pty) Ltd. The information we handle depends on whether you browse, place an order, apply to sell, manage a store or contact staff. We use it to provide and protect those features, administer the marketplace and meet legal obligations.</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-sm">
                    <caption className="sr-only">ShopYethu information sources and uses</caption>
                    <thead><tr><th scope="col">Source</th><th scope="col">Information</th><th scope="col">Purpose</th></tr></thead>
                    <tbody>
                        <tr><th scope="row">Account sign-in</th><td>Account identifier, email, name and profile image where available; authentication tokens</td><td>Sign in, secure requests and associate marketplace records with your account</td></tr>
                        <tr><th scope="row">Seller application</th><td>Business type and trading name, contact name and phone number, account email, operating area, product categories and description, and optional collection area and hours</td><td>Review the application, manage seller access and operate the marketplace</td></tr>
                        <tr><th scope="row">Store and product listings</th><td>Store details, product names and descriptions, category, price, stock, fulfilment options and selected product photos</td><td>Display and manage listings, inventory and seller orders</td></tr>
                        <tr><th scope="row">Basket and orders</th><td>Selected products and quantities, order totals, fulfilment choice, contact details, any address entered, order status and history</td><td>Place, administer and fulfil orders and resolve related issues</td></tr>
                        <tr><th scope="row">Reports</th><td>Your account identifier, the listing or order reference and the message you submit</td><td>Let staff review marketplace concerns and follow up</td></tr>
                        <tr><th scope="row">Area search</th><td>Location text submitted for suggestions and the selected Google Places identifier</td><td>Help applicants select a South African operating area and show its label</td></tr>
                    </tbody>
                </table>
            </div>
            <p>The seller application asks the applicant to acknowledge their phone number; it does not verify the number by SMS or one-time password. The current app does not collect company registration documents through an upload flow.</p>
        </>,
    },
    {
        id: "accounts-and-device-storage",
        title: "Accounts and information stored on your device",
        content: <>
            <p>ShopYethu uses an account sign-in service. The app receives the account identifier and available profile information needed to authenticate you, and stores session credentials with Expo SecureStore on your device.</p>
            <p>The app also stores an encrypted, account-scoped basket, seller-application drafts, selected marketplace data and unfinished save or order attempts on the device so you can resume some actions. These device copies are not the same as server records. Signing out or changing accounts clears protected account data in the app, but does not delete information already sent to our servers.</p>
            <p>Browsing does not require sign-in. Account-linked actions such as applying to sell, placing orders and submitting reports require sign-in. Seller-application drafts remain on that device and are not submitted to our servers until you submit the application.</p>
        </>,
    },
    {
        id: "seller-applications-listings-and-photos",
        title: "Seller applications, stores, listings and photos",
        content: <>
            <p>If you apply to sell, we use the details you enter to assess and administer the application, communicate status and decisions, and enable seller features if approved. The contact email is taken from your signed-in account. Staff can review application information and its recorded status history.</p>
            <p>Approved sellers can submit store information, product details, prices, stock, fulfilment choices and photos. Published store and product information is displayed in the marketplace. Product photos selected from your device are uploaded through our backend to Cloudinary and displayed using image URLs. Do not upload an image you do not have the right to use or do not want shown with your listing.</p>
            <p>The photo picker is used when you choose product photos; ShopYethu does not upload your entire photo library. The app does not currently provide automatic deletion of orphaned photo uploads when a photo is removed from a listing.</p>
        </>,
    },
    {
        id: "orders-and-marketplace-sharing",
        title: "Orders and who receives order information",
        content: <>
            <p>When you place an order, we process the products and quantities, totals, fulfilment choice, order contact details and any address submitted, as well as status and history needed to administer it. We share relevant order details with the seller responsible for fulfilling that order. Do not include information in a contact or address field that the seller does not need to fulfil the order.</p>
            <p>Published listings and storefront information are visible to marketplace users. Product images are served from image URLs; anyone who has a URL may be able to access that image. Choose listing photos accordingly.</p>
            <p>Orders are disabled by default on the backend. If the business enables collection orders, the seller and buyer receive the order information needed to arrange collection. The current marketplace does not process online payments or provide delivery. The app does not ask for or process payment-card details.</p>
        </>,
    },
    {
        id: "reports-and-technical-information",
        title: "Reports and technical information",
        content: <>
            <p>If you report a listing or order, staff receive the report message and the relevant listing or order reference, along with your account identifier and submission time, so they can review it. Reports are recorded for staff follow-up; the app does not promise an automatic support message or response time. Do not include passwords, payment credentials or unrelated sensitive information.</p>
            <p>Our app and backend may process technical request information such as network and device details, app version, timestamps and error information when needed to provide, secure and troubleshoot the service. The ShopYethu app code does not include an advertising or analytics SDK. This does not prevent the operating system or a service provider from processing technical information under its own terms.</p>
        </>,
    },
    {
        id: "service-providers",
        title: "Service providers and external services",
        content: <>
            <ul>
                <li><strong>Account service and ShopYethu backend:</strong> authenticate users and process account, application, store, listing, order and report records. Marketplace records are stored in backend-managed Firebase Firestore; mobile clients do not write directly to those collections.</li>
                <li><strong>Google Places:</strong> supports South African area suggestions. Google may process the search text sent for suggestions; ShopYethu saves the selected Place ID and resolves its displayed label when needed.</li>
                <li><strong>Cloudinary:</strong> stores and delivers product photos uploaded by sellers.</li>
                <li><strong>Expo:</strong> provides app infrastructure and app updates, which can involve technical app and network information needed to check and deliver a compatible update.</li>
            </ul>
            <p>These providers may process information in countries outside South Africa. Their processing is also subject to their own notices: <a href="https://policies.google.com/privacy">Google</a>, <a href="https://cloudinary.com/privacy">Cloudinary</a> and <a href="https://expo.dev/privacy">Expo</a>.</p>
            <p>We do not use the company-store Paystack integration to take marketplace payments through ShopYethu.</p>
        </>,
    },
    {
        id: "purposes-and-lawful-grounds",
        title: "Purposes, lawful grounds and choices",
        content: <>
            <p>We use information to authenticate users, provide marketplace features, assess seller applications, display listings, administer orders, investigate reports, maintain security and comply with applicable legal obligations. Depending on the information and activity, processing may be necessary to provide a feature you request, for our legitimate interests in operating a safe and reliable marketplace, to meet a legal obligation, or based on consent where consent is required.</p>
            <p>Account information is needed for account-linked features. Seller application details are needed to apply to sell. Listing photos are optional unless required to publish a product. You can choose not to provide optional information, but the associated feature may then be unavailable. A device photo permission lets you select photos; it is not permission to use your whole photo library for another purpose.</p>
            <p>ShopYethu does not currently include an age-verification flow. A parent or guardian should contact us if a child has provided information or used the marketplace and you want to discuss it.</p>
        </>,
    },
    {
        id: "retention-and-deletion",
        title: "Retention and deletion",
        content: <>
            <p>Device caches and drafts have technical expiry and storage limits, but those limits do not delete server records. We keep marketplace records for as long as needed to operate the service, administer applications and transactions, investigate reports, meet legal obligations or resolve disputes. The mobile app repository does not establish a fixed retention period for every server-side record.</p>
            <p>There is no in-app control that deletes your ShopYethu server records or account. To request access to, correction of or deletion of ShopYethu information, email <a href="mailto:privacy@chefu.co.za">privacy@chefu.co.za</a> and identify ShopYethu, your account email and the records concerned. We may need to verify your identity and may retain particular records where the law requires or permits it.</p>
            <p>Deleting a shared account is separate from deleting ShopYethu marketplace records and may affect your access to other services that use that account. Contact us before taking that step if you need help understanding the effect. Uninstalling ShopYethu removes the app from your device; it does not itself erase server records.</p>
        </>,
    },
    ...privacyContactSections("ShopYethu"),
];
