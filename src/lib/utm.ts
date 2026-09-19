export function withUtm(
    url: string,
    source: string,
    medium: string,
    campaign?: string,
) {
    const safeUrl = new URL(
        url,
        typeof window !== "undefined" ? window.location.origin : "https://chefu.co.za",
    );

    safeUrl.searchParams.set("utm_source", source);
    safeUrl.searchParams.set("utm_medium", medium);

    if (campaign) {
        safeUrl.searchParams.set("utm_campaign", campaign);
    }

    return safeUrl.toString();
}
