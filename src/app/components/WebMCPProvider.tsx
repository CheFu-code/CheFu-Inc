"use client";

import { useEffect } from "react";

type JsonObject = Record<string, unknown>;

type WebMCPTool = {
    name: string;
    description: string;
    inputSchema: JsonObject;
    execute: (input: JsonObject) => Promise<unknown> | unknown;
};

declare global {
    interface Navigator {
        modelContext?: {
            provideContext: (context: { tools: WebMCPTool[] }) => Promise<unknown> | unknown;
        };
    }
}

function routeForService(service: unknown) {
    const routes: Record<string, string> = {
        software: "/services/software",
        ai: "/services/ai",
        music: "/services/music",
        portfolio: "/portfolio",
        contact: "/contact",
        careers: "/careers",
    };

    return routes[String(service)] ?? "/services";
}

export function WebMCPProvider() {
    useEffect(() => {
        if (!navigator.modelContext?.provideContext) return;

        const tools: WebMCPTool[] = [
            {
                name: "chefu_get_company_profile",
                description:
                    "Get a concise profile of CheFu Inc, including services and key website routes.",
                inputSchema: {
                    type: "object",
                    properties: {},
                    additionalProperties: false,
                },
                execute: () => ({
                    name: "CheFu Inc.",
                    summary:
                        "CheFu Inc builds software platforms, practical AI systems, and high-fidelity audio/media production experiences.",
                    services: ["software development", "AI solutions", "music production"],
                    routes: {
                        services: "/services",
                        portfolio: "/portfolio",
                        contact: "/contact",
                        careers: "/careers",
                    },
                }),
            },
            {
                name: "chefu_open_service",
                description:
                    "Navigate the browser to the most relevant CheFu Inc service page.",
                inputSchema: {
                    type: "object",
                    properties: {
                        service: {
                            type: "string",
                            enum: [
                                "software",
                                "ai",
                                "music",
                                "portfolio",
                                "contact",
                                "careers",
                            ],
                        },
                    },
                    required: ["service"],
                    additionalProperties: false,
                },
                execute: ({ service }) => {
                    const path = routeForService(service);
                    window.location.assign(path);
                    return { navigatedTo: path };
                },
            },
            {
                name: "chefu_prepare_project_intake",
                description:
                    "Create a project-intake checklist before a user contacts CheFu Inc.",
                inputSchema: {
                    type: "object",
                    properties: {
                        service: {
                            type: "string",
                            description: "Software, AI, music/audio, or mixed.",
                        },
                        goal: {
                            type: "string",
                            description: "The project outcome the user wants.",
                        },
                    },
                    required: ["service", "goal"],
                    additionalProperties: false,
                },
                execute: ({ service, goal }) => ({
                    service,
                    goal,
                    nextStep: "/contact",
                    checklist: [
                        "Contact name and email",
                        "Project goals and success criteria",
                        "Timeline",
                        "Budget range",
                        "Relevant links or files",
                    ],
                }),
            },
        ];

        void navigator.modelContext.provideContext({ tools });
    }, []);

    return null;
}
