import { siteName, siteUrl } from "../../site-metadata";
import { checkRateLimit } from "../../../lib/rate-limit";

const tools = [
    {
        name: "get_company_profile",
        description: "Return a concise CheFu Inc company profile.",
        inputSchema: {
            type: "object",
            properties: {},
            additionalProperties: false,
        },
    },
    {
        name: "get_service_url",
        description:
            "Return the best CheFu Inc URL for a requested service area.",
        inputSchema: {
            type: "object",
            properties: {
                service: {
                    type: "string",
                    enum: ["software", "ai", "music", "portfolio", "contact", "careers"],
                },
            },
            required: ["service"],
            additionalProperties: false,
        },
    },
];

function jsonRpc(id: unknown, result: unknown) {
    return Response.json({ jsonrpc: "2.0", id, result });
}

function jsonRpcError(id: unknown, code: number, message: string) {
    return Response.json({ jsonrpc: "2.0", id, error: { code, message } });
}

export function GET() {
    return Response.json({
        name: `${siteName} Agent Tools`,
        version: "1.0.0",
        protocol: "mcp",
        transport: "streamable-http",
        tools,
    });
}

export async function POST(request: Request) {
    const rateLimit = checkRateLimit(request, {
        keyPrefix: "chefu-inc-mcp",
        limit: 120,
        windowMs: 60_000,
    });

    if (rateLimit.limited) {
        return Response.json(
            {
                jsonrpc: "2.0",
                id: null,
                error: { code: -32000, message: "Rate limit exceeded." },
            },
            { headers: rateLimit.headers, status: 429 },
        );
    }

    const body = await request.json().catch(() => null);
    const id = body?.id ?? null;
    const method = body?.method;

    if (method === "initialize") {
        return jsonRpc(id, {
            protocolVersion: "2025-03-26",
            serverInfo: {
                name: `${siteName} Agent Tools`,
                version: "1.0.0",
            },
            capabilities: {
                tools: {},
            },
        });
    }

    if (method === "tools/list") {
        return jsonRpc(id, { tools });
    }

    if (method === "tools/call") {
        const toolName = body?.params?.name;
        const args = body?.params?.arguments ?? {};

        if (toolName === "get_company_profile") {
            return jsonRpc(id, {
                content: [
                    {
                        type: "text",
                        text:
                            "CheFu Inc builds software platforms, practical AI systems, and high-fidelity music/audio production experiences.",
                    },
                ],
            });
        }

        if (toolName === "get_service_url") {
            const servicePath: Record<string, string> = {
                software: "/services/software",
                ai: "/services/ai",
                music: "/services/music",
                portfolio: "/portfolio",
                contact: "/contact",
                careers: "/careers",
            };
            const path = servicePath[String(args.service)] ?? "/services";
            return jsonRpc(id, {
                content: [
                    {
                        type: "text",
                        text: new URL(path, siteUrl).toString(),
                    },
                ],
            });
        }

        return jsonRpcError(id, -32601, "Tool not found");
    }

    return jsonRpcError(id, -32601, "Method not found");
}
