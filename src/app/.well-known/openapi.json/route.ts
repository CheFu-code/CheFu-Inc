import { siteName, siteUrl } from "../../site-metadata";
import {
    apiCatalogPath,
    healthPath,
    mcpServerCardPath,
    oauthAuthorizationServerPath,
    oauthProtectedResourcePath,
    openIdConfigurationPath,
} from "../../../lib/agentDiscovery";

export function GET() {
    const body = {
        openapi: "3.1.0",
        info: {
            title: `${siteName} Discovery API`,
            version: "1.0.0",
            description:
                "Machine-readable discovery endpoints for CheFu Inc agents and automated clients.",
        },
        servers: [{ url: siteUrl }],
        paths: {
            [healthPath]: {
                get: {
                    operationId: "getHealth",
                    summary: "Read site health status",
                    responses: {
                        "200": {
                            description: "Health status",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            status: { type: "string" },
                                            service: { type: "string" },
                                            url: { type: "string", format: "uri" },
                                            checkedAt: {
                                                type: "string",
                                                format: "date-time",
                                            },
                                        },
                                        required: ["status", "service", "url", "checkedAt"],
                                    },
                                },
                            },
                        },
                    },
                },
            },
            [apiCatalogPath]: {
                get: {
                    operationId: "getApiCatalog",
                    summary: "Read the RFC 9727 API catalog",
                    responses: {
                        "200": {
                            description: "API catalog linkset",
                            content: {
                                "application/linkset+json": {
                                    schema: { type: "object" },
                                },
                            },
                        },
                    },
                },
            },
            [openIdConfigurationPath]: {
                get: {
                    operationId: "getOpenIdConfiguration",
                    summary: "Read OpenID Connect discovery metadata",
                    responses: { "200": { description: "OIDC metadata" } },
                },
            },
            [oauthAuthorizationServerPath]: {
                get: {
                    operationId: "getOAuthAuthorizationServer",
                    summary: "Read OAuth authorization server metadata",
                    responses: { "200": { description: "OAuth metadata" } },
                },
            },
            [oauthProtectedResourcePath]: {
                get: {
                    operationId: "getOAuthProtectedResource",
                    summary: "Read OAuth protected resource metadata",
                    responses: { "200": { description: "Protected resource metadata" } },
                },
            },
            [mcpServerCardPath]: {
                get: {
                    operationId: "getMcpServerCard",
                    summary: "Read MCP server card",
                    responses: { "200": { description: "MCP server card" } },
                },
            },
        },
        components: {
            securitySchemes: {
                OAuth2: {
                    type: "oauth2",
                    flows: {
                        authorizationCode: {
                            authorizationUrl:
                                "https://accounts.google.com/o/oauth2/v2/auth",
                            tokenUrl: "https://oauth2.googleapis.com/token",
                            scopes: {
                                openid: "OpenID Connect identity",
                                email: "User email address",
                                profile: "User profile",
                                "chefu:contact": "Submit contact requests",
                                "chefu:careers:write": "Submit careers applications",
                            },
                        },
                    },
                },
            },
        },
    };

    return Response.json(body, {
        headers: {
            "Cache-Control": "public, max-age=3600",
            "Content-Type": "application/vnd.oai.openapi+json; charset=utf-8",
        },
    });
}
