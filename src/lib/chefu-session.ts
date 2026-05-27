import { apiUrl, type ChefuAppId } from "./chefu-account";

export type ChefuSessionUser = {
    displayName?: string | null;
    email?: string | null;
    photoURL?: string | null;
    roles?: string[];
    uid: string;
};

type ChefuAccountMeResponse = {
    user?: ChefuSessionUser;
};

export async function getChefuAccountSession(appId: ChefuAppId = "academy") {
    const response = await fetch(apiUrl("/auth/me"), {
        credentials: "include",
        headers: {
            "x-chefu-app": appId,
        },
        cache: "no-store",
    });

    if (!response.ok) return null;

    const data = (await response.json().catch(() => null)) as
        | ChefuAccountMeResponse
        | null;

    return data?.user || null;
}
