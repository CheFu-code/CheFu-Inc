import { redirect } from "next/navigation";
import { accountAppUrl } from "../../lib/account-app";
import { noIndexMetadata } from "../site-metadata";

export const metadata = noIndexMetadata;

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
    redirect(accountAppUrl("/account", await searchParams));
}
