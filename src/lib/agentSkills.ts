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
        name: "CHEFU TECHNOLOGIES Company Profile",
        type: "knowledge",
        description:
            "Understand CHEFU TECHNOLOGIES services, product areas, company positioning, and key routes.",
        content: `# CHEFU TECHNOLOGIES Company Profile

Use this skill when an agent needs to understand CHEFU TECHNOLOGIES as a company.

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
        name: "CHEFU TECHNOLOGIES Project Intake",
        type: "workflow",
        description:
            "Guide agents collecting project requirements before sending users to CHEFU TECHNOLOGIES contact channels.",
        content: `# CHEFU TECHNOLOGIES Project Intake

Use this skill when a user wants to start a project with CHEFU TECHNOLOGIES

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
        name: "CHEFU TECHNOLOGIES Agent Discovery",
        type: "discovery",
        description:
            "Discover CHEFU TECHNOLOGIES machine-readable metadata, API catalog, OAuth metadata, and MCP server card.",
        content: `# CHEFU TECHNOLOGIES Agent Discovery

Use this skill when an agent needs machine-readable discovery resources for CHEFU TECHNOLOGIES

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
