import { siteName, siteUrl } from "../app/site-metadata";

export const apiCatalogPath = "/.well-known/api-catalog";
export const openApiPath = "/.well-known/openapi.json";
export const apiDocsPath = "/docs/api";
export const healthPath = "/api/health";
export const openIdConfigurationPath = "/.well-known/openid-configuration";
export const oauthAuthorizationServerPath =
    "/.well-known/oauth-authorization-server";
export const oauthProtectedResourcePath =
    "/.well-known/oauth-protected-resource";
export const mcpServerCardPath = "/.well-known/mcp/server-card.json";
export const agentSkillsIndexPath = "/.well-known/agent-skills/index.json";
export const mcpEndpointPath = "/api/mcp";

export const apiCatalogUrl = new URL(apiCatalogPath, siteUrl).toString();
export const openApiUrl = new URL(openApiPath, siteUrl).toString();
export const apiDocsUrl = new URL(apiDocsPath, siteUrl).toString();
export const healthUrl = new URL(healthPath, siteUrl).toString();
export const openIdConfigurationUrl = new URL(
    openIdConfigurationPath,
    siteUrl,
).toString();
export const oauthAuthorizationServerUrl = new URL(
    oauthAuthorizationServerPath,
    siteUrl,
).toString();
export const oauthProtectedResourceUrl = new URL(
    oauthProtectedResourcePath,
    siteUrl,
).toString();
export const mcpServerCardUrl = new URL(mcpServerCardPath, siteUrl).toString();
export const agentSkillsIndexUrl = new URL(
    agentSkillsIndexPath,
    siteUrl,
).toString();
export const mcpEndpointUrl = new URL(mcpEndpointPath, siteUrl).toString();

export const agentLinkHeader = [
    `<${apiCatalogPath}>; rel="api-catalog"; type="application/linkset+json"`,
    `<${openApiPath}>; rel="service-desc"; type="application/vnd.oai.openapi+json"`,
    `<${apiDocsPath}>; rel="service-doc"; type="text/html"`,
    `<${healthPath}>; rel="status"; type="application/json"`,
    `<${oauthProtectedResourcePath}>; rel="service-desc"; type="application/json"`,
    `<${mcpServerCardPath}>; rel="service-desc"; type="application/json"`,
    `<${agentSkillsIndexPath}>; rel="service-desc"; type="application/json"`,
].join(", ");

export const agentMarkdownByPath: Record<string, string> = {
    "/": `# ${siteName}

CheFu Inc. builds software platforms, practical AI systems, and high-fidelity audio and media production for ambitious teams.

## Core Services

- Software development for web applications, internal tools, dashboards, SaaS products, and mobile experiences.
- AI solutions for automation, intelligent workflows, predictive systems, and product integrations.
- Music and audio production including beat production, mixing, mastering, sound design, and sonic branding.

## Featured Routes

- [Services](/services)
- [Software Development](/services/software)
- [AI Solutions](/services/ai)
- [Music Production](/services/music)
- [Portfolio](/portfolio)
- [Contact](/contact)
- [Careers](/careers)

## Agent Discovery

- [API Catalog](${apiCatalogPath})
- [OpenAPI Description](${openApiPath})
- [API Documentation](${apiDocsPath})
- [Health Status](${healthPath})
- [OpenID Configuration](${openIdConfigurationPath})
- [OAuth Protected Resource Metadata](${oauthProtectedResourcePath})
- [MCP Server Card](${mcpServerCardPath})
- [Agent Skills Index](${agentSkillsIndexPath})
`,
    "/about": `# About ${siteName}

CheFu Inc. is a hybrid software, AI, and audio production company. The team combines product engineering, creative technology, and music production to build practical digital experiences.

## Focus

- Product strategy and software architecture.
- AI-assisted workflows and intelligent systems.
- Professional sound design, production, mixing, and mastering.
`,
    "/services": `# ${siteName} Services

CheFu Inc. provides software development, AI solutions, and music production services.

## Software Development

Custom web applications, mobile applications, cloud systems, dashboards, and internal tools.

## AI Solutions

AI-powered apps, automation systems, machine learning workflows, chatbots, voice technology, and predictive analytics.

## Music Production

Beat production, recording support, mixing, mastering, sound design, and sonic branding.
`,
    "/services/software": `# Software Development

CheFu Inc. builds scalable digital products from MVPs to production systems.

## Capabilities

- Frontend applications with React, Next.js, and Tailwind CSS.
- Backend systems, APIs, databases, and cloud infrastructure.
- Product architecture, QA, deployment, and iteration.
`,
    "/services/ai": `# AI Solutions

CheFu Inc. designs and builds intelligent systems for automation and product innovation.

## Capabilities

- AI-powered applications.
- Machine learning workflows.
- Natural language and voice technology.
- Business automation and intelligent user experiences.
`,
    "/services/music": `# Music And Audio Production

CheFu Inc. provides audio production services for artists, brands, games, apps, and digital media.

## Capabilities

- Beat production.
- Mixing and mastering.
- Sound design and foley.
- Sonic branding.
`,
    "/portfolio": `# Portfolio

CheFu Inc. showcases work across audio software, music production, educational platforms, ecommerce, mobile products, and AI-enabled systems.

Visit /portfolio in a browser for visual project cards and outbound project links.
`,
    "/contact": `# Contact ${siteName}

Use the contact page to start a software, AI, or audio production project.

Typical project details include service type, goals, budget, timeline, and contact information.
`,
    "/careers": `# Careers At ${siteName}

CheFu Inc. accepts membership and career applications through the careers page.

Applicants can submit profile details and supporting documents. Confirmation email delivery is handled by Firebase Functions and the Resend HTTP API.
`,
    "/blog": `# ${siteName} Insights

CheFu Inc. publishes ideas and articles about AI, software development, audio engineering, design, and creative technology.
`,
    "/faq": `# ${siteName} FAQ

Common topics include project timelines, independent artist collaboration, software project ownership, AI integration, and data privacy.
`,
    "/privacy": `# Privacy Policy

CheFu Inc. publishes privacy information at /privacy.
`,
    "/terms": `# Terms Of Service

CheFu Inc. publishes service terms at /terms.
`,
    [apiDocsPath]: `# ${siteName} API Documentation

This site exposes public discovery metadata for AI agents and automated clients.

## Endpoints

- GET ${apiCatalogPath}: API catalog as application/linkset+json.
- GET ${openApiPath}: OpenAPI service description.
- GET ${healthPath}: JSON health status.
- GET ${openIdConfigurationPath}: OpenID Connect discovery metadata.
- GET ${oauthAuthorizationServerPath}: OAuth 2.0 authorization server metadata.
- GET ${oauthProtectedResourcePath}: OAuth protected resource metadata.
- GET ${mcpServerCardPath}: MCP server card for agent discovery.
- GET ${agentSkillsIndexPath}: Agent skills discovery index.
`,
};

export function estimateMarkdownTokens(markdown: string) {
    const words = markdown.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words * 1.35)).toString();
}
