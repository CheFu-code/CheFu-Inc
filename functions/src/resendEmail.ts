type ResendTemplate = {
    id: string;
    variables: Record<string, string>;
};

export type ResendEmailPayload = {
    from: string;
    to: string[];
    subject: string;
    html?: string;
    text?: string;
    template?: ResendTemplate;
};

type ResendEmailResponse = {
    id?: string;
    data?: {
        id?: string;
    };
};

export async function sendResendEmail(apiKey: string, payload: ResendEmailPayload) {
    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(
            `Resend request failed: ${response.status} ${errorBody.slice(0, 500)}`,
        );
    }

    const result = (await response.json().catch(() => null)) as ResendEmailResponse | null;

    return {
        id: result?.id ?? result?.data?.id ?? null,
    };
}
