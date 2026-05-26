import {
    agentSkills,
    getAgentSkillDigest,
    getAgentSkillUrl,
} from "../../../../lib/agentSkills";

export function GET() {
    return Response.json(
        {
            $schema:
                "https://raw.githubusercontent.com/cloudflare/agent-skills-discovery-rfc/main/schema/agent-skills-index.schema.json",
            skills: agentSkills.map((skill) => ({
                name: skill.name,
                type: skill.type,
                description: skill.description,
                url: getAgentSkillUrl(skill.slug),
                sha256: getAgentSkillDigest(skill.content),
            })),
        },
        {
            headers: {
                "Cache-Control": "public, max-age=3600",
            },
        },
    );
}
