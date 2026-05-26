import { createHash } from "node:crypto";
import { siteName, siteUrl } from "../app/site-metadata";

export type AgentSkill = {
    slug: string;
    name: string;
    type: string;
    description: string;
    content: string;
};

export const agentSkills: AgentSkill[] = [
    {
        slug: "company-profile",
        name: "CheFu Inc Company Profile",
        type: "knowledge",
        description:
            "Understand CheFu Inc services, product areas, company positioning, and key routes.",
        content: `# CheFu Inc Company Profile

Use this skill when an agent needs to understand CheFu Inc as a company.

## Company

${siteName} builds software platforms, AI systems, and audio/media production experiences.

## Services

- Software development for web apps, mobile products, dashboards, SaaS, and internal tools.
- AI solutions for automation, intelligent workflows, predictive systems, and user-facing assistants.
- Music and audio production including beat production, sound design, mixing, mastering, and sonic branding.

## Useful URLs

- ${siteUrl}/
- ${siteUrl}/services
- ${siteUrl}/portfolio
- ${siteUrl}/contact
- ${siteUrl}/careers
`,
    },
    {
        slug: "project-intake",
        name: "CheFu Inc Project Intake",
        type: "workflow",
        description:
            "Guide agents collecting project requirements before sending users to CheFu Inc contact channels.",
        content: `# CheFu Inc Project Intake

Use this skill when a user wants to start a project with CheFu Inc.

## Collect

- Contact name and email.
- Service area: software, AI, audio/music, or mixed.
- Project goals and success criteria.
- Preferred timeline.
- Budget range if available.
- Relevant links or files.

## Next Step

Send the user to ${siteUrl}/contact with a concise summary of the project details.
`,
    },
    {
        slug: "agent-discovery",
        name: "CheFu Inc Agent Discovery",
        type: "discovery",
        description:
            "Discover CheFu Inc machine-readable metadata, API catalog, OAuth metadata, and MCP server card.",
        content: `# CheFu Inc Agent Discovery

Use this skill when an agent needs machine-readable discovery resources for CheFu Inc.

## Resources

- API catalog: ${siteUrl}/.well-known/api-catalog
- OpenAPI description: ${siteUrl}/.well-known/openapi.json
- API documentation: ${siteUrl}/docs/api
- OAuth authorization server metadata: ${siteUrl}/.well-known/oauth-authorization-server
- OpenID configuration: ${siteUrl}/.well-known/openid-configuration
- OAuth protected resource metadata: ${siteUrl}/.well-known/oauth-protected-resource
- MCP server card: ${siteUrl}/.well-known/mcp/server-card.json
- Health endpoint: ${siteUrl}/api/health
`,
    },
];

export function getAgentSkillUrl(slug: string) {
    return `${siteUrl}/.well-known/agent-skills/${slug}/SKILL.md`;
}

export function getAgentSkillDigest(content: string) {
    return `sha256-${createHash("sha256").update(content).digest("hex")}`;
}

export function getAgentSkill(slug: string) {
    return agentSkills.find((skill) => skill.slug === slug) ?? null;
}
