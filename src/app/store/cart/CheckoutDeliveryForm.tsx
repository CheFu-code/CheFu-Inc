"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { deliveryErrors, southAfricanProvinces, type DeliveryDetails } from "../../../lib/store-checkout";

const inputClass = "min-h-11 w-full min-w-0 rounded-lg border border-[#d9d3cf] bg-white px-3 py-2 text-base text-[#111827] outline-none focus:border-[#1f3c5b] focus:ring-2 focus:ring-[#1f3c5b]/15 disabled:opacity-60 sm:text-sm";

function Field({ name, label, error, full = false, children }: {
    name: string; label: string; error?: string; full?: boolean; children: ReactNode;
}) {
    return (
        <div className={`min-w-0 ${full ? "col-span-2" : ""}`}>
            <label htmlFor={`checkout-${name}`} className="mb-1.5 block text-xs font-medium text-[#374151] sm:text-sm">{label}</label>
            {children}
            {error && <p id={`checkout-${name}-error`} className="mt-1 text-xs leading-5 text-red-700">{error}</p>}
        </div>
    );
}

export function CheckoutDeliveryForm({ details, onChange, onContinue, onBack }: {
    details: DeliveryDetails;
    onChange: (details: DeliveryDetails) => void;
    onContinue: () => void;
    onBack: () => void;
}) {
    const [errors, setErrors] = useState<ReturnType<typeof deliveryErrors>>({});
    const field = (name: keyof DeliveryDetails) => ({
        id: `checkout-${name}`,
        name,
        value: details[name],
        className: inputClass,
        "aria-invalid": Boolean(errors[name]),
        "aria-describedby": errors[name] ? `checkout-${name}-error` : undefined,
        onChange: (event: { target: { value: string } }) => {
            onChange({ ...details, [name]: event.target.value });
            if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
        },
    });
    const submit = (event: FormEvent) => {
        event.preventDefault();
        const nextErrors = deliveryErrors(details);
        setErrors(nextErrors);
        const firstError = Object.keys(nextErrors)[0];
        if (firstError) document.getElementById(`checkout-${firstError}`)?.focus();
        else onContinue();
    };

    return (
        <section className="rounded-2xl border border-[#e5e1dc] bg-white p-4 sm:p-6">
            <h2 className="text-lg font-semibold tracking-[-0.03em]">Contact & delivery</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f5b56]">Where should we send your order? Delivery is currently within South Africa.</p>
            <form noValidate onSubmit={submit} className="mt-5">
                <fieldset className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-4">
                    <legend className="sr-only">Contact and delivery details</legend>
                    <Field name="firstName" label="First name" error={errors.firstName}>
                        <input {...field("firstName")} autoComplete="given-name" required maxLength={80} />
                    </Field>
                    <Field name="lastName" label="Last name" error={errors.lastName}>
                        <input {...field("lastName")} autoComplete="family-name" required maxLength={80} />
                    </Field>
                    <Field name="email" label="Email address" error={errors.email} full>
                        <input {...field("email")} type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" />
                    </Field>
                    <Field name="phone" label="Contact number" error={errors.phone} full>
                        <input {...field("phone")} type="tel" autoComplete="tel" required maxLength={25} placeholder="+27 60 123 4567" />
                    </Field>
                    <Field name="addressLine1" label="Street address" error={errors.addressLine1} full>
                        <input {...field("addressLine1")} autoComplete="shipping address-line1" required maxLength={180} placeholder="Street number and name" />
                    </Field>
                    <Field name="addressLine2" label="Apartment, building or suburb (optional)" full>
                        <input {...field("addressLine2")} autoComplete="shipping address-line2" maxLength={180} />
                    </Field>
                    <Field name="city" label="Town / city" error={errors.city}>
                        <input {...field("city")} autoComplete="shipping address-level2" required maxLength={100} />
                    </Field>
                    <Field name="postalCode" label="Postal code" error={errors.postalCode}>
                        <input {...field("postalCode")} autoComplete="shipping postal-code" inputMode="numeric" required maxLength={4} placeholder="0000" />
                    </Field>
                    <Field name="province" label="Province" error={errors.province} full>
                        <select {...field("province")} autoComplete="shipping address-level1" required>
                            <option value="">Select a province</option>
                            {southAfricanProvinces.map((province) => <option key={province}>{province}</option>)}
                        </select>
                    </Field>
                </fieldset>
                <details className="mt-4">
                    <summary className="min-h-11 cursor-pointer py-3 text-sm text-[#5f5b56]">Add delivery instructions (optional)</summary>
                    <Field name="notes" label="Delivery instructions">
                        <textarea {...field("notes")} rows={3} maxLength={500} placeholder="Anything the courier should know?" />
                    </Field>
                </details>
                <p className="mt-3 text-xs leading-5 text-[#6b7280]">These details are used to process and deliver your order. <Link href="/privacy" className="text-[#1f3c5b] underline underline-offset-4">Privacy Policy</Link></p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <button type="button" onClick={onBack} className="min-h-11 text-sm font-medium text-[#5f5b56] underline underline-offset-4">Back to cart</button>
                    <button type="submit" className="min-h-11 rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-white hover:bg-[#1f2937]">Review order</button>
                </div>
            </form>
        </section>
    );
}
