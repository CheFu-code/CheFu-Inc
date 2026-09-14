import { Truck } from 'lucide-react';

export function ShippingPolicy() {
    return (
        <div className="min-h-screen bg-stone-50 pb-20 pt-32 text-slate-700">
            <div className="container mx-auto max-w-4xl px-6">
                <div className="mb-12 border-b border-slate-200 pb-8">
                    <div className="mb-4 flex items-center gap-3 text-cyan-700">
                        <Truck className="h-8 w-8" />
                        <span className="font-bold uppercase tracking-wider">Store Policy</span>
                    </div>

                    <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
                        No Refund, Return & Shipping Policy
                    </h1>

                    <p className="text-slate-500">
                        Last updated: September 14, 2026
                    </p>
                </div>

                <div className="prose prose-slate prose-lg max-w-none">
                    <p>
                        CHEFU TECHNOLOGIES (Pty) Ltd. (“CHEFU TECHNOLOGIES”, “we”, “us”, or “our”)
                        provides digital products and related services through our website and associated
                        channels. This policy sets out our approach to refunds, returns, shipping, order
                        fulfilment, customer support, and the limited circumstances in which we may review
                        a transaction after it has been completed.
                    </p>

                    <p>
                        Unless a specific product or transaction is governed by a separate written
                        agreement, all sales are final. We do not offer general refunds, exchanges,
                        cancellations, or returns for digital products, services, subscriptions,
                        licenses, access credentials, setup work, consulting arrangements, custom builds,
                        or any other goods or services once access has been granted, the order has been
                        processed, or the applicable service has commenced. This policy applies to all
                        customers, subscribers, visitors, and users of our website and commerce channels,
                        whether purchasing directly from us or through a client or partner arrangement.
                    </p>

                    <p>
                        We believe in clear communication and fair service delivery. However, because our
                        products and services are often delivered immediately, are customized to a
                        customer’s requirements, or involve time-sensitive digital access and technical
                        setup, we maintain a strict no-refund and no-return position for completed
                        transactions. This is intended to protect operational integrity, avoid abuse of
                        service access, and ensure that our teams are able to allocate resources efficiently
                        and responsibly.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        1. No Refunds
                    </h3>

                    <p>
                        We do not provide refunds for completed purchases, including digital files,
                        software access, subscriptions, licenses, setup services, implementation work,
                        consulting time, configuration activities, training, premium support, or any other
                        product or service delivered to you. By purchasing, you acknowledge that the
                        relevant product or service is provided immediately or in a time-bound manner and
                        that the offer is final once accepted.
                    </p>

                    <p>
                        This includes situations where the customer changes their mind after purchase,
                        where the customer no longer requires the product or service, where the customer
                        develops alternative internal requirements after placing the order, or where the
                        customer decides not to continue with a subscription or project after work has
                        started. In those cases, no refund will be due unless expressly agreed in writing
                        by CHEFU TECHNOLOGIES.
                    </p>

                    <p>
                        If a product or service is not delivered or is materially defective due to our
                        error, we may review the matter and, at our sole discretion, provide a remedy
                        where appropriate. This is limited to the specific issue and does not create a
                        general right to cancellation or refund. We may require reasonable evidence of the
                        issue, including screenshots, logs, records, or other supporting information,
                        before assessing whether a corrective remedy is warranted.
                    </p>

                    <p>
                        We are not obliged to offer a refund simply because a customer is dissatisfied
                        with a product or service, disagrees with the outcome of a project, decides to
                        use a different provider, or experiences a delay that is outside our control. In
                        all such cases, the parties remain bound by the applicable terms, service scope,
                        and commercial arrangements set out in the relevant order or agreement.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        2. No Returns
                    </h3>

                    <p>
                        We do not accept returns for completed transactions. This includes digital
                        products and services that have already been delivered, activated, accessed,
                        configured, downloaded, or otherwise made available to the customer. Where a
                        product is classified as a digital offering, the product is deemed delivered when
                        access or credentials are made available to the customer or when the relevant file,
                        document, or service is made available through our platform.
                    </p>

                    <p>
                        For physical goods, returns are only accepted if a written exception is agreed by
                        CHEFU TECHNOLOGIES in advance and only in the limited circumstances expressly
                        identified by us in writing. We do not offer a general right to return physical
                        items simply because the customer changed their mind or because they were expected
                        to arrive sooner than they did.
                    </p>

                    <p>
                        If you believe there is a material issue with a delivered item, please contact
                        us as soon as possible with relevant details so that we can assess whether a
                        limited remedy may be available under the circumstances. Any such review is at our
                        discretion and does not waive or alter the general no-return policy for completed
                        sales.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        3. Shipping
                    </h3>

                    <p>
                        Shipping is only applicable where a physical product is expressly offered and
                        confirmed in the order. Where shipping is available, delivery timelines are
                        estimates only and may vary depending on location, courier availability, customs
                        processing, stock levels, demand, and other considerations outside our reasonable
                        control.
                    </p>

                    <p>
                        We do not guarantee delivery dates or arrival times for any physical product.
                        Dispatch times may vary depending on product availability, payment clearance,
                        stock confirmation, address verification, and required support checks. We may
                        also delay dispatch where a transaction requires additional review for fraud,
                        compliance, or security reasons.
                    </p>

                    <p>
                        We are not responsible for delays caused by third-party couriers, weather,
                        strikes, customs processes, civil unrest, local regulatory conditions, acts of
                        God, force majeure events, or any other circumstances beyond our reasonable
                        control. Once a physical order is handed over to the courier, risk of loss or
                        damage may pass to the customer in accordance with the applicable shipping
                        arrangement and relevant law.
                    </p>

                    <p>
                        Customers are responsible for providing a correct and complete delivery address,
                        contact details, and any instructions required for successful delivery. We are not
                        liable for failed deliveries, missed deliveries, or additional fees caused by an
                        incorrect address, an unresponsive recipient, a refusal of delivery, or failure to
                        collect an order from a courier or pickup point.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        4. Delivery, Acceptance, and Risk
                    </h3>

                    <p>
                        You are responsible for ensuring that the delivery address and contact details are
                        accurate. If a physical order is undeliverable, returned, or refused, we may charge
                        additional costs for re-delivery, storage, handling, admin costs, or order
                        cancellation where applicable. We may also choose not to re-send a package if the
                        original order was not successfully delivered due to a customer error, refusal, or
                        abandonment.
                    </p>

                    <p>
                        When you receive a physical product, you should inspect it promptly and notify us
                        without delay if the parcel appears damaged, incomplete, or not as described. We
                        will assess the issue to determine whether a remedy is appropriate, but we do not
                        accept a general right of return or cancellation for completed orders.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        5. Digital Goods and Instant Access
                    </h3>

                    <p>
                        Our digital products are typically delivered immediately upon successful payment,
                        order confirmation, or activation. Digital access is generally a non-tangible
                        service that cannot be returned once provided. Customers may not claim a refund on
                        the basis that they no longer wish to use the service, that the use case changed,
                        or that usage was less than expected after access was granted.
                    </p>

                    <p>
                        Where we provide a digital product with a free trial, evaluation period, or limited
                        pilot access, any such terms will be stated clearly before the customer accepts the
                        offer. If no trial or evaluation period is stated, the product is considered a
                        completed purchase and is subject to this policy.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        6. Order Disputes and Support Requests
                    </h3>

                    <p>
                        If you believe an order has not been fulfilled correctly, a product is defective,
                        a service is not working as described, or a shipment has been mishandled, you should
                        contact us promptly. We may request transaction details, order numbers, invoice
                        records, logs, or supporting evidence to assess the issue fairly and efficiently.
                    </p>

                    <p>
                        We are committed to investigating valid concerns in good faith. However, any
                        assessment is limited by the scope of the relevant product, the service terms,
                        applicable law, and this policy. We may choose to remedy a genuine issue where the
                        problem is caused by a defect, technical failure, or failure of our service delivery,
                        but this process does not create an ongoing entitlement to returns, refunds, or
                        cancellations outside the specific issue being assessed.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        7. Exceptions Required by Law
                    </h3>

                    <p>
                        Where local law provides rights that cannot be excluded, limited, or waived, we
                        will comply with those rights. In such cases, any remedy available under the law
                        may apply only to the extent required by law and only to the extent that such rights
                        are not explicitly excluded by the applicable legal framework. This policy is intended
                        to be consistent with applicable consumer protections and commercial law, but no
                        provision here is intended to waive rights that cannot be validly waived under the
                        law.
                    </p>

                    <p>
                        If any provision of this policy is found to be unenforceable or contrary to
                        applicable law, the remaining provisions will remain in force to the maximum
                        extent permitted by law. Where a legal requirement compels a different outcome,
                        the law will take precedence over this document to the extent required.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        8. Amendment of Policy
                    </h3>

                    <p>
                        CHEFU TECHNOLOGIES may update this policy from time to time to reflect changes in
                        our products, services, operational requirements, legal obligations, or business
                        practices. When changes are made, the updated policy will be posted on our website
                        and the “Last updated” date will be revised accordingly.
                    </p>

                    <p>
                        Continued use of our website or continued engagement with our services after the
                        revised policy is published indicates acceptance of the updated terms, unless a
                        separate written agreement states otherwise.
                    </p>

                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900">
                        9. Contact
                    </h3>

                    <p>
                        If you need to raise a concern about a transaction, product issue, delivery
                        matter, or any other commercial matter, please contact us at{' '}
                        <a href="mailto:hello@chefu.co.za" className="text-cyan-400 hover:underline">
                            hello@chefu.co.za
                        </a>
                        .
                    </p>

                    <p>
                        We will review your inquiry in good faith and respond as promptly as reasonably
                        possible. Please include your order number, relevant dates, relevant product or
                        service details, and any supporting information that may assist our review.
                    </p>
                </div>
            </div>
        </div>
    );
}
