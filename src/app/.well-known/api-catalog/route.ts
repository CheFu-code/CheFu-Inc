import { siteUrl } from "../../site-metadata";
import {
    apiDocsUrl,
    healthUrl,
    mcpServerCardUrl,
    oauthProtectedResourceUrl,
    openApiUrl,
    openIdConfigurationUrl,
} from "../../../lib/agentDiscovery";

export function GET() {
    const body = {
        linkset: [
            {
                anchor: siteUrl,
                "service-desc": [
                    {
                        href: openApiUrl,
                        type: "application/vnd.oai.openapi+json",
                        title: "CheFu Inc OpenAPI description",
                    },
                    {
                        href: openIdConfigurationUrl,
                        type: "application/json",
                        title: "OpenID Connect discovery metadata",
                    },
                    {
                        href: oauthProtectedResourceUrl,
                        type: "application/json",
                        title: "OAuth protected resource metadata",
                    },
                    {
                        href: mcpServerCardUrl,
                        type: "application/json",
                        title: "MCP server card",
                    },
                ],
                "service-doc": [
                    {
                        href: apiDocsUrl,
                        type: "text/html",
                        title: "CheFu Inc API documentation",
                    },
                ],
                status: [
                    {
                        href: healthUrl,
                        type: "application/json",
                        title: "CheFu Inc API health",
                    },
                ],
            },
        ],
    };

    return new Response(JSON.stringify(body, null, 2), {
        headers: {
            "Cache-Control": "public, max-age=3600",
            "Content-Type": "application/linkset+json; charset=utf-8",
        },
    });
}
