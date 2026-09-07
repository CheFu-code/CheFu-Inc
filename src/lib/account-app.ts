const ACCOUNT_APP_URL =
    process.env.NEXT_PUBLIC_CHEFU_ACCOUNT_URL || "https://myaccount.chefu.co.za";

export function accountAppUrl(
    path: "/account" | "/login" | "/register" | "/logout",
    params?: Record<string, string | string[] | undefined>,
) {
    const url = new URL(path, ACCOUNT_APP_URL);

    const allowedParams = new Set(["app", "returnTo", "next"]);

    for (const [key, value] of Object.entries(params || {})) {
        if (!allowedParams.has(key)) continue;

        if (Array.isArray(value)) {
            for (const item of value) {
                if (item) url.searchParams.append(key, item);
            }
            continue;
        }

        if (value) url.searchParams.set(key, value);
    }

    return url.toString();
}
