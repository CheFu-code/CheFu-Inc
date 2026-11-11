'use client';

import type {
    FieldErrors,
    UseFormHandleSubmit,
    UseFormRegister,
} from "react-hook-form";
import Link from 'next/link';
import {
    CAREERS_PRIVACY_NOTICE_VERSION,
    CAREERS_TERMS_VERSION,
    countries,
    departments,
    fieldClassName,
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
    availableRoles,
    provinceRequired,
    showMusicPortfolio,
    provinceOptions,
    isSouthAfrica,
}: {
    handleSubmit: UseFormHandleSubmit<JoinUsFormData, JoinUsFormData>;
    onSubmit: (data: JoinUsFormData) => Promise<void>;
    register: UseFormRegister<JoinUsFormData>;
    errors: FieldErrors<JoinUsFormData>;
    isSubmitting: boolean;
    selectedCountry: string;
    availableRoles: readonly string[];
    provinceRequired: boolean;
    showMusicPortfolio: boolean;
    provinceOptions: readonly string[];
    isSouthAfrica: boolean;
}) {
    return (
        <section className="mx-auto max-w-5xl rounded-2xl border border-[#e5e1dc] bg-[#f7f5f3] p-4 sm:p-6 md:p-8">
            <h2 className="mb-4 text-lg font-semibold text-[#111827] sm:mb-6 sm:text-xl">Application Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                <div>
                    <h3 className="mb-3 text-sm font-semibold text-[#111827] sm:mb-4 sm:text-base">Basic Info</h3>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <FieldLabel label="Full Name" required className="col-span-2 md:col-span-1">
                            <input
                                {...register("fullName", {
                                    required: "Full name is required",
                                })}
                                className={fieldClassName}
                                placeholder="Enter your full name"
                            />
                            {errors.fullName && (
                                <p className="text-xs text-red-600 sm:text-sm">{errors.fullName.message}</p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Email" required className="col-span-2 md:col-span-1">
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                className={fieldClassName}
                                placeholder="you@example.com"
                            />
                            {errors.email && (
                                <p className="text-xs text-red-600 sm:text-sm">{errors.email.message}</p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Phone (optional)">
                            <input
                                {...register("phone")}
                                className={fieldClassName}
                                type="tel"
                                placeholder="+27 60 123 4567"
                            />
                        </FieldLabel>
                        <FieldLabel label="Country" required>
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
                                <p className="text-xs text-red-600 sm:text-sm">{errors.country.message}</p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Province / State" required={provinceRequired}>
                            <select
                                {...register("province", {
                                    required: provinceRequired
                                        ? "Province/State is required"
                                        : false,
                                })}
                                className={fieldClassName}
                                defaultValue=""
                                disabled={!selectedCountry}
                            >
                                <option value="" disabled>
                                    {selectedCountry
                                        ? provinceRequired
                                            ? "Select province/state"
                                            : "Not applicable"
                                        : "Select country first"}
                                </option>
                                {provinceOptions.map((province) => (
                                    <option key={province} value={province}>
                                        {province}
                                    </option>
                                ))}
                            </select>
                            {errors.province && (
                                <p className="text-xs text-red-600 sm:text-sm">{errors.province.message}</p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="City" required>
                            <input
                                {...register("city", {
                                    required: "City is required",
                                })}
                                className={fieldClassName}
                                placeholder="Enter your city"
                            />
                            {errors.city && (
                                <p className="text-xs text-red-600 sm:text-sm">{errors.city.message}</p>
                            )}
                        </FieldLabel>
                    </div>
                </div>

                <div>
                    <h3 className="mb-3 text-sm font-semibold text-[#111827] sm:mb-4 sm:text-base">Professional Info</h3>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <FieldLabel label="Department" required className="col-span-2 md:col-span-1">
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
                                <p className="text-xs text-red-600 sm:text-sm">{errors.department.message}</p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Role Applying For" required className="col-span-2 md:col-span-1">
                            <select
                                {...register("roleApplyingFor", {
                                    required: "Please choose a role",
                                })}
                                className={fieldClassName}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    {availableRoles.length
                                        ? "Select a role"
                                        : "Select department first"}
                                </option>
                                {availableRoles.map((role) => (
                                    <option key={role} value={role}>
                                        {role}
                                    </option>
                                ))}
                            </select>
                            {errors.roleApplyingFor && (
                                <p className="text-xs text-red-600 sm:text-sm">
                                    {errors.roleApplyingFor.message}
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Experience Level" required>
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
                                <p className="text-xs text-red-600 sm:text-sm">
                                    {errors.experienceLevel.message}
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Years of Experience" required>
                            <input
                                {...register("yearsOfExperience", {
                                    required: "Years of experience is required",
                                })}
                                className={fieldClassName}
                                inputMode="decimal"
                                placeholder="e.g. 3"
                            />
                            {errors.yearsOfExperience && (
                                <p className="text-xs text-red-600 sm:text-sm">
                                    {errors.yearsOfExperience.message}
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Work Mode" required>
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
                                <p className="text-xs text-red-600 sm:text-sm">
                                    {errors.preferredWorkMode.message}
                                </p>
                            )}
                            {!isSouthAfrica && (
                                <p className="text-xs text-[#374151]">
                                    Remote only outside South Africa.
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Start Date" required>
                            <input
                                type="date"
                                {...register("earliestStartDate", {
                                    required: "Please provide a start date",
                                })}
                                className={fieldClassName}
                            />
                            {errors.earliestStartDate && (
                                <p className="text-xs text-red-600 sm:text-sm">
                                    {errors.earliestStartDate.message}
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Highest Education" required>
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
                                <p className="text-xs text-red-600 sm:text-sm">
                                    {errors.highestEducation.message}
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="Work Authorization" required>
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
                                <p className="text-xs text-red-600 sm:text-sm">
                                    {errors.workAuthorization.message}
                                </p>
                            )}
                        </FieldLabel>
                    </div>
                    <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4">
                        <FieldLabel label="Skills" required>
                            <textarea
                                {...register("skills", {
                                    required: "Please share your skills",
                                })}
                                className={`${fieldClassName} min-h-20 resize-y sm:min-h-24`}
                                placeholder="Engineering, production, writing, marketing, or creative skills"
                            />
                            {errors.skills && (
                                <p className="text-xs text-red-600 sm:text-sm">{errors.skills.message}</p>
                            )}
                        </FieldLabel>
                        <details className="rounded-xl border border-[#e5e1dc] bg-white p-3 sm:p-4">
                            <summary className="cursor-pointer text-sm font-medium text-[#1f3c5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3c5b]">
                                Links & CV (optional)
                            </summary>
                            <div className="mt-4 grid min-w-0 gap-3 sm:gap-4">
                                <FieldLabel label="Portfolio / GitHub link (optional)">
                                    <input
                                        {...register("portfolioLink")}
                                        className={fieldClassName}
                                        placeholder="https://github.com/yourname"
                                    />
                                </FieldLabel>
                                {showMusicPortfolio && (
                                    <FieldLabel label="Music Portfolio link (optional)">
                                        <input
                                            {...register("musicPortfolioLink")}
                                            className={fieldClassName}
                                            placeholder="https://soundcloud.com/yourname"
                                        />
                                    </FieldLabel>
                                )}
                                <FieldLabel label="LinkedIn Profile (optional)">
                                    <input
                                        {...register("linkedInLink")}
                                        className={fieldClassName}
                                        placeholder="https://linkedin.com/in/yourname"
                                    />
                                </FieldLabel>
                                <p className="text-xs text-[#4b5563]">
                                    Share only what applies to you. Leave optional links blank if
                                    not relevant.
                                </p>
                                <FieldLabel label="CV Upload (optional)">
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        {...register("cvFile")}
                                        className="block w-full rounded-xl border border-[#e5e1dc] bg-white px-3 py-2 text-sm text-[#111827] file:mr-4 file:rounded-lg file:border-0 file:bg-[#f3f2ef] file:px-3 file:py-2 file:text-[#1f3c5b] hover:file:bg-[#e5e1dc]"
                                    />
                                </FieldLabel>
                            </div>
                        </details>
                    </div>
                </div>

                <div>
                    <h3 className="mb-3 text-sm font-semibold text-[#111827] sm:mb-4 sm:text-base">Short Questions</h3>
                    <div className="space-y-3 sm:space-y-4">
                        <FieldLabel label="Why do you want to join Chefu Technologies?" required>
                            <textarea
                                {...register("whyJoin", {
                                    required: "This field is required",
                                })}
                                className={`${fieldClassName} min-h-20 resize-y sm:min-h-24`}
                            />
                            {errors.whyJoin && (
                                <p className="text-xs text-red-600 sm:text-sm">{errors.whyJoin.message}</p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="What makes you different?" required>
                            <textarea
                                {...register("whatMakesYouDifferent", {
                                    required: "This field is required",
                                })}
                                className={`${fieldClassName} min-h-20 resize-y sm:min-h-24`}
                            />
                            {errors.whatMakesYouDifferent && (
                                <p className="text-xs text-red-600 sm:text-sm">
                                    {errors.whatMakesYouDifferent.message}
                                </p>
                            )}
                        </FieldLabel>
                        <FieldLabel label="How many hours per week can you commit?" required>
                            <input
                                {...register("hoursPerWeek", {
                                    required: "This field is required",
                                })}
                                className={fieldClassName}
                                placeholder="e.g. 10-15 hours"
                            />
                            {errors.hoursPerWeek && (
                                <p className="text-xs text-red-600 sm:text-sm">{errors.hoursPerWeek.message}</p>
                            )}
                        </FieldLabel>
                    </div>
                </div>

                <div className="space-y-3 rounded-xl border border-[#e5e1dc] bg-white p-3 sm:space-y-4 sm:p-4">
                    <label className="flex items-start gap-3 text-xs leading-5 text-[#374151] sm:text-sm">
                        <input
                            type="checkbox"
                            {...register("termsAccepted", {
                                required: "You must agree to the Terms before submitting",
                            })}
                            className="mt-1 h-4 w-4 shrink-0 accent-[#1f3c5b]"
                        />
                        <span>
                            <span className="mr-1 text-red-600" aria-hidden="true">
                                *
                            </span>
                            I agree to the{" "}
                            <Link href="/terms" className="text-[#1f3c5b] underline">
                                Terms of Service
                            </Link>
                            {" "}({CAREERS_TERMS_VERSION}).
                        </span>
                    </label>
                    {errors.termsAccepted && (
                        <p className="text-sm text-red-600">{errors.termsAccepted.message}</p>
                    )}
                    <label className="flex items-start gap-3 text-xs leading-5 text-[#374151] sm:text-sm">
                        <input
                            type="checkbox"
                            {...register("privacyNoticeAcknowledged", {
                                required: "Please acknowledge the applicant privacy notice",
                            })}
                            className="mt-1 h-4 w-4 shrink-0 accent-[#1f3c5b]"
                        />
                        <span>
                            <span className="mr-1 text-red-600" aria-hidden="true">
                                *
                            </span>
                            I have read the{" "}
                            <Link href="/privacy#career-applicants" className="text-[#1f3c5b] underline">
                                applicant privacy notice
                            </Link>
                            {" "}({CAREERS_PRIVACY_NOTICE_VERSION}). I understand my application
                            information will be used to assess my application and handled as
                            described there.
                        </span>
                    </label>
                    {errors.privacyNoticeAcknowledged && (
                        <p className="text-sm text-red-600">
                            {errors.privacyNoticeAcknowledged.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-[#f7f5f3] transition hover:bg-[#1f2937] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
                >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>

                {Object.keys(errors).length > 0 && (
                    <p className="text-xs text-red-600 sm:text-sm">
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
