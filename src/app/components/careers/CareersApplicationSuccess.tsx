export function CareersApplicationSuccess({
    applicationId,
    submittedEmail,
}: {
    applicationId: string;
    submittedEmail: string;
}) {
    return (
        <section className="max-w-5xl mx-auto mt-8 rounded-2xl border border-emerald-600/30 bg-emerald-500/10 p-6">
            <h3 className="text-xl font-semibold text-emerald-300">
                Application received
            </h3>
            <p className="mt-2 text-slate-200">
                Thank you for applying. A confirmation email will be sent to{" "}
                <span className="font-medium">{submittedEmail || "your inbox"}</span>{" "}
                once your application is queued by our team.
            </p>
            <p className="mt-1 text-sm text-emerald-200/90">
                Tracking reference: <span className="font-semibold">{applicationId}</span>
            </p>
        </section>
    );
}
