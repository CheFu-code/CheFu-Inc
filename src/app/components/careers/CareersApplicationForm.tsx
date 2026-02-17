import type {
    FieldErrors,
    UseFormHandleSubmit,
    UseFormRegister,
} from "react-hook-form";
import { Link } from "react-router-dom";
import {
    countries,
    departments,
    fieldClassName,
    roles,
    type JoinUsFormData,
} from "./careersData";
import { FieldLabel } from "./FieldLabel";

export function CareersApplicationForm({
    handleSubmit,
    onSubmit,
    register,
    errors,
    isSubmitting,
    selectedCountry,
    provinceOptions,
    isSouthAfrica,
}: {
    handleSubmit: UseFormHandleSubmit<JoinUsFormData, JoinUsFormData>;
    onSubmit: (data: JoinUsFormData) => Promise<void>;
    register: UseFormRegister<JoinUsFormData>;
    errors: FieldErrors<JoinUsFormData>;
    isSubmitting: boolean;
    selectedCountry: string;
    provinceOptions: readonly string[];
    isSouthAfrica: boolean;
}) {
    return (
        <section className="max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Application Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div>
                    <h3 className="text-lg text-white font-medium mb-4">Basic Info</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <FieldLabel label="Full Name">
                            <input
                                {...register("fullName", {
                                    required: "Full name is required",
                                })}
                                className={fieldClassName}
                                placeholder="Enter your full name"
                            />
                            {errors.fullName && (
                                <p className="text-sm text-red-400">{errors.fullName.message}</p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Email">
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                className={fieldClassName}
                                placeholder="you@example.com"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-400">{errors.email.message}</p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Phone (optional)">
                            <input
                                {...register("phone")}
                                className={fieldClassName}
                                placeholder="+1 000 000 0000"
                            />
                        </FieldLabel>
                        <FieldLabel label="Country">
                            <select
                                {...register("country", {
                                    required: "Country is required",
                                })}
                                className={fieldClassName}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select country
                                </option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                            {errors.country && (
                                <p className="text-sm text-red-400">{errors.country.message}</p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Province / State">
                            <select
                                {...register("province", {
                                    required: "Province/State is required",
                                })}
                                className={fieldClassName}
                                defaultValue=""
                                disabled={!selectedCountry}
                            >
                                <option value="" disabled>
                                    {selectedCountry
                                        ? "Select province/state"
                                        : "Select country first"}
                                </option>
                                {provinceOptions.map((province) => (
                                    <option key={province} value={province}>
                                        {province}
                                    </option>
                                ))}
                            </select>
                            {errors.province && (
                                <p className="text-sm text-red-400">{errors.province.message}</p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="City">
                            <input
                                {...register("city", {
                                    required: "City is required",
                                })}
                                className={fieldClassName}
                                placeholder="Enter your city"
                            />
                            {errors.city && (
                                <p className="text-sm text-red-400">{errors.city.message}</p>
                            )}
                        </FieldLabel>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg text-white font-medium mb-4">Professional Info</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <FieldLabel label="Department">
                            <select
                                {...register("department", {
                                    required: "Please choose a department",
                                })}
                                className={fieldClassName}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select department
                                </option>
                                {departments.map((department) => (
                                    <option key={department} value={department}>
                                        {department}
                                    </option>
                                ))}
                            </select>
                            {errors.department && (
                                <p className="text-sm text-red-400">{errors.department.message}</p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Role Applying For">
                            <select
                                {...register("roleApplyingFor", {
                                    required: "Please choose a role",
                                })}
                                className={fieldClassName}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select a role
                                </option>
                                {roles.map((role) => (
                                    <option key={role} value={role}>
                                        {role}
                                    </option>
                                ))}
                            </select>
                            {errors.roleApplyingFor && (
                                <p className="text-sm text-red-400">
                                    {errors.roleApplyingFor.message}
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Experience Level">
                            <select
                                {...register("experienceLevel", {
                                    required: "Please select your experience level",
                                })}
                                className={fieldClassName}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select level
                                </option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                            {errors.experienceLevel && (
                                <p className="text-sm text-red-400">
                                    {errors.experienceLevel.message}
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Years of Experience">
                            <input
                                {...register("yearsOfExperience", {
                                    required: "Years of experience is required",
                                })}
                                className={fieldClassName}
                                placeholder="e.g. 3"
                            />
                            {errors.yearsOfExperience && (
                                <p className="text-sm text-red-400">
                                    {errors.yearsOfExperience.message}
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Preferred Work Mode">
                            <select
                                {...register("preferredWorkMode", {
                                    required: "Please choose a work mode",
                                })}
                                className={fieldClassName}
                                defaultValue=""
                                disabled={!isSouthAfrica}
                            >
                                <option value="" disabled>
                                    {isSouthAfrica
                                        ? "Select work mode"
                                        : "Remote only for non-South Africa"}
                                </option>
                                <option value="Remote">Remote</option>
                                {isSouthAfrica && <option value="Hybrid">Hybrid</option>}
                                {isSouthAfrica && <option value="On-site">On-site</option>}
                            </select>
                            {errors.preferredWorkMode && (
                                <p className="text-sm text-red-400">
                                    {errors.preferredWorkMode.message}
                                </p>
                            )}
                            {!isSouthAfrica && (
                                <p className="text-xs text-amber-300">
                                    Work mode is locked to Remote when country is not South
                                    Africa.
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Earliest Start Date">
                            <input
                                type="date"
                                {...register("earliestStartDate", {
                                    required: "Please provide a start date",
                                })}
                                className={fieldClassName}
                            />
                            {errors.earliestStartDate && (
                                <p className="text-sm text-red-400">
                                    {errors.earliestStartDate.message}
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Highest Education">
                            <select
                                {...register("highestEducation", {
                                    required: "Please choose education level",
                                })}
                                className={fieldClassName}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select education
                                </option>
                                <option value="High School">High School</option>
                                <option value="Diploma/Certificate">
                                    Diploma/Certificate
                                </option>
                                <option value="Bachelor's">Bachelor&apos;s</option>
                                <option value="Master's">Master&apos;s</option>
                                <option value="PhD">PhD</option>
                                <option value="Self-Taught">Self-Taught</option>
                            </select>
                            {errors.highestEducation && (
                                <p className="text-sm text-red-400">
                                    {errors.highestEducation.message}
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Work Authorization">
                            <select
                                {...register("workAuthorization", {
                                    required: "Please choose work authorization status",
                                })}
                                className={fieldClassName}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select one
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="Need Sponsorship">
                                    Need Sponsorship
                                </option>
                            </select>
                            {errors.workAuthorization && (
                                <p className="text-sm text-red-400">
                                    {errors.workAuthorization.message}
                                </p>
                            )}
                        </FieldLabel>
                    </div>
                    <div className="grid gap-4 mt-4">
                        <FieldLabel label="Skills">
                            <textarea
                                {...register("skills", {
                                    required: "Please share your skills",
                                })}
                                className={`${fieldClassName} min-h-24`}
                                placeholder="Engineering, production, writing, marketing, or creative skills"
                            />
                            {errors.skills && (
                                <p className="text-sm text-red-400">{errors.skills.message}</p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Portfolio / GitHub link (optional)">
                            <input
                                {...register("portfolioLink")}
                                className={fieldClassName}
                                placeholder="https://github.com/yourname"
                            />
                        </FieldLabel>
                        <FieldLabel label="Music Portfolio link (optional)">
                            <input
                                {...register("musicPortfolioLink")}
                                className={fieldClassName}
                                placeholder="https://soundcloud.com/yourname"
                            />
                        </FieldLabel>
                        <FieldLabel label="LinkedIn Profile (optional)">
                            <input
                                {...register("linkedInLink")}
                                className={fieldClassName}
                                placeholder="https://linkedin.com/in/yourname"
                            />
                        </FieldLabel>
                        <p className="text-xs text-slate-400">
                            Share only what applies to you. Leave optional links blank if
                            not relevant.
                        </p>
                        <FieldLabel label="CV Upload (optional)">
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                {...register("cvFile")}
                                className="block w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-500/15 file:px-3 file:py-2 file:text-cyan-300 hover:file:bg-cyan-500/25"
                            />
                        </FieldLabel>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg text-white font-medium mb-4">Short Questions</h3>
                    <div className="space-y-4">
                        <FieldLabel label="Why do you want to join CheFu Inc?">
                            <textarea
                                {...register("whyJoin", {
                                    required: "This field is required",
                                })}
                                className={`${fieldClassName} min-h-24`}
                            />
                            {errors.whyJoin && (
                                <p className="text-sm text-red-400">{errors.whyJoin.message}</p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="What makes you different?">
                            <textarea
                                {...register("whatMakesYouDifferent", {
                                    required: "This field is required",
                                })}
                                className={`${fieldClassName} min-h-24`}
                            />
                            {errors.whatMakesYouDifferent && (
                                <p className="text-sm text-red-400">
                                    {errors.whatMakesYouDifferent.message}
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="How many hours per week can you commit?">
                            <input
                                {...register("hoursPerWeek", {
                                    required: "This field is required",
                                })}
                                className={fieldClassName}
                                placeholder="e.g. 10-15 hours"
                            />
                            {errors.hoursPerWeek && (
                                <p className="text-sm text-red-400">{errors.hoursPerWeek.message}</p>
                            )}
                        </FieldLabel>
                    </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                    <label className="flex items-start gap-3 text-sm text-slate-300">
                        <input
                            type="checkbox"
                            {...register("acceptTerms", {
                                required: "You must agree before submitting",
                            })}
                            className="mt-1 h-4 w-4 accent-cyan-400"
                        />
                        <span>
                            I agree to the{" "}
                            <Link to="/terms" className="text-cyan-300 hover:text-cyan-200">
                                Terms
                            </Link>{" "}
                            and{" "}
                            <Link
                                to="/privacy"
                                className="text-cyan-300 hover:text-cyan-200"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </span>
                    </label>
                    {errors.acceptTerms && (
                        <p className="mt-2 text-sm text-red-400">{errors.acceptTerms.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>

                {Object.keys(errors).length > 0 && (
                    <p className="text-sm text-red-400">
                        Please complete all required fields before submitting.
                    </p>
                )}

                <input
                    type="text"
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                    {...register("website")}
                    className="hidden"
                />
            </form>
        </section>
    );
}
