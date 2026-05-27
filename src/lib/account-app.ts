const ACCOUNT_APP_URL =
    process.env.NEXT_PUBLIC_CHEFU_ACCOUNT_URL || "https://myaccount.chefuinc.com";

export function accountAppUrl(
    path: "/account" | "/login" | "/register" | "/logout",
    params?: Record<string, string | string[] | undefined>,
) {
    const url = new URL(path, ACCOUNT_APP_URL);

    for (const [key, value] of Object.entries(params || {})) {
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
