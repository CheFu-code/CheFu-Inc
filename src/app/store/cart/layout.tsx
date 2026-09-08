import type { Metadata } from "next";
import type { ReactNode } from "react";
import { noIndexMetadata } from "../../site-metadata";

export const metadata: Metadata = noIndexMetadata;

export default function CartLayout({ children }: { children: ReactNode }) {
    return children;
}
