"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const adsensePublisherId = "ca-pub-8952058057579255";

export function ConsentAwareScripts({
    analyticsEnabled,
    marketingEnabled,
}: {
    analyticsEnabled: boolean;
    marketingEnabled: boolean;
}) {
    return (
        <>
            {analyticsEnabled ? (
                <>
                    <Analytics />
                    <SpeedInsights />
                </>
            ) : null}
            {marketingEnabled ? (
                <Script
                    id="google-adsense"
                    strategy="afterInteractive"
                    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePublisherId}`}
                    crossOrigin="anonymous"
                />
            ) : null}
        </>
    );
}
