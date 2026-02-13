import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { Toaster } from "sonner";
import type { FormData } from "../../types";
import type {
    FieldErrors,
    UseFormHandleSubmit,
    UseFormRegister,
} from "react-hook-form";

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
    return (
        <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
            <Toaster position="top-right" theme="dark" />
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Start a Project
                    </h1>
                    <p className="text-xl text-slate-400">
                        Ready to bring your vision to life? Fill out the form below and
                        let's discuss how we can help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-cyan-400">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Visit Us</h3>
                                        <p className="text-slate-400">
                                            123 Innovation Blvd, Suite 400
                                            <br />
                                            Tech City, TC 90210
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-cyan-400">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Email Us</h3>
                                        <p className="text-slate-400">hello@chefuinc.com</p>
                                        <p className="text-slate-400">support@chefuinc.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-cyan-400">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Call Us</h3>
                                        <p className="text-slate-400">+1 (555) 123-4567</p>
                                        <p className="text-slate-500 text-sm">
                                            Mon-Fri, 9am - 6pm PST
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-violet-900/20 to-cyan-900/20 p-8 rounded-2xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-2">
                                Not sure what you need?
                            </h3>
                            <p className="text-slate-400 mb-4">
                                Schedule a free 15-minute consultation call with one of our
                                specialists.
                            </p>
                            <button className="text-cyan-400 font-semibold hover:text-white transition-colors">
                                Book a consultation &rarr;
                            </button>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-xl"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">
                                        Name
                                    </label>
                                    <input
                                        {...register("name", { required: "Name is required" })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                        placeholder="Your name"
                                        type="text"
                                    />
                                    {errors.name && (
                                        <span className="text-red-400 text-xs">
                                            {errors.name.message}
                                        </span>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">
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
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                        placeholder="john@example.com"
                                        type="email"
                                    />
                                    {errors.email && (
                                        <span className="text-red-400 text-xs">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">
                                    Company (Optional)
                                </label>
                                <input
                                    {...register("company")}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="Your company name"
                                    type="text"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">
                                        Project Type
                                    </label>
                                    <select
                                        {...register("projectType", {
                                            required: "Please select a type",
                                        })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
                                    >
                                        <option value="">Select a type...</option>
                                        <option value="Audio Production">Audio Production</option>
                                        <option value="AI Solution">AI Solution</option>
                                        <option value="Software Development">
                                            Software Development
                                        </option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.projectType && (
                                        <span className="text-red-400 text-xs">
                                            {errors.projectType.message}
                                        </span>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">
                                        Estimated Budget
                                    </label>
                                    <select
                                        {...register("budget")}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
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
                                <label className="text-sm font-medium text-slate-300">
                                    Project Details
                                </label>
                                <textarea
                                    {...register("message", {
                                        required: "Please tell us about your project",
                                    })}
                                    rows={4}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                    placeholder="Tell us about your goals, timeline, and requirements..."
                                />
                                {errors.message && (
                                    <span className="text-red-400 text-xs">
                                        {errors.message.message}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-linear-to-r from-cyan-500 to-violet-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Request <Send className="w-4 h-4" />
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
