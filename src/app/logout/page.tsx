import { redirect } from "next/navigation";
import { accountAppUrl } from "../../lib/account-app";

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
    redirect(accountAppUrl("/logout", await searchParams));
}
