'use client';

import { Loader2, Mail, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import type {
    FieldErrors,
    UseFormHandleSubmit,
    UseFormRegister,
} from "react-hook-form";
import type { FormData } from "../../types";

export const ContactPageUI = ({
    handleSubmit,
    onSubmit,
    register,
    errors,
    isSubmitting,
}: {
    onSubmit: (data: FormData) => Promise<void>;
    handleSubmit: UseFormHandleSubmit<FormData, FormData>;
    register: UseFormRegister<FormData>;
    isSubmitting: boolean;
    errors: FieldErrors<FormData>;
}) => {
    const consultationUrl =
        process.env.NEXT_PUBLIC_CONSULTATION_URL ||
        "mailto:hello@chefu.co.za?subject=Consultation%20Request";

    return (
        <div className="min-h-screen bg-stone-50 pb-20 pt-32 text-slate-800">
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h1 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">
                        Start a Project
                    </h1>
                    <p className="text-base leading-7 text-slate-600 md:text-lg">
                        Tell us what you are building, improving, or securing. We will use your brief to understand the problem, identify the right capability, and follow up about a practical next step.
                    </p>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
                    <div className="space-y-12">
                        <div>
                            <h2 className="mb-6 text-xl font-bold text-slate-900">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-lg border border-slate-200 bg-white p-3 text-cyan-700">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Email Us</h3>
                                        <p className="text-slate-600">hello@chefu.co.za</p>
                                        <p className="text-slate-600">support@chefu.co.za</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="rounded-lg border border-slate-200 bg-white p-3 text-cyan-700">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Call Us</h3>
                                        <p className="text-slate-600">+27 60 603 1205</p>
                                        <p className="text-sm text-slate-500">
                                                    Johannesburg, South Africa · Remote-first
                                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                            <h3 className="mb-2 text-base font-bold text-slate-900">
                                Not sure what you need?
                            </h3>
                            <p className="mb-4 text-slate-600">
                                Prefer a conversation first? Book a consultation and include the product, software, AI, or audio problem you want to discuss.
                            </p>
                            <a
                                href={consultationUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="font-semibold text-cyan-700 transition-colors hover:text-cyan-600"
                            >
                                Book a consultation &rarr;
                            </a>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">
                                        Name
                                    </label>
                                    <input
                                        {...register("name", { required: "Name is required" })}
                                        id="name"
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none"
                                        placeholder="Your name"
                                        type="text"
                                    />
                                    {errors.name && (
                                        <span className="text-xs text-red-500">
                                            {errors.name.message}
                                        </span>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">
                                        Email
                                    </label>
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Invalid email",
                                            },
                                        })}
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none"
                                        placeholder="john@example.com"
                                        type="email"
                                    />
                                    {errors.email && (
                                        <span className="text-xs text-red-500">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">
                                    Company (Optional)
                                </label>
                                <input
                                    {...register("company")}
                                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none"
                                    placeholder="Your company name"
                                    type="text"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">
                                        Project Type
                                    </label>
                                    <select
                                        {...register("projectType", {
                                            required: "Please select a type",
                                        })}
                                        className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none"
                                    >
                                        <option value="">Select a type...</option>
                                        <option value="Digital Product">Digital Product</option>
                                        <option value="Audio Production">Audio Production</option>
                                        <option value="AI Solution">AI Solution</option>
                                        <option value="Software Development">
                                            Software Development
                                        </option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.projectType && (
                                        <span className="text-xs text-red-500">
                                            {errors.projectType.message}
                                        </span>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">
                                        Estimated Budget
                                    </label>
                                    <select
                                        {...register("budget")}
                                        className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none"
                                    >
                                        <option value="">Select a range...</option>
                                        <option value="< $5k">&lt; $5k</option>
                                        <option value="$5k - $20k">$5k - $20k</option>
                                        <option value="$20k - $50k">$20k - $50k</option>
                                        <option value="$50k+">$50k+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">
                                    Project Details
                                </label>
                                <textarea
                                    {...register("message", {
                                        required: "Please tell us about your project",
                                    })}
                                    rows={4}
                                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none"
                                    placeholder="Tell us about your goals, timeline, and requirements..."
                                />
                                {errors.message && (
                                    <span className="text-xs text-red-500">
                                        {errors.message.message}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-violet-600 py-4 font-bold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Request <Send className="h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
