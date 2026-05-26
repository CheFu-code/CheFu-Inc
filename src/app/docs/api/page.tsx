import { pageMetadata, siteName } from "../../site-metadata";
import {
    agentSkillsIndexPath,
    apiCatalogPath,
    healthPath,
    mcpServerCardPath,
    oauthAuthorizationServerPath,
    oauthProtectedResourcePath,
    openApiPath,
    openIdConfigurationPath,
} from "../../../lib/agentDiscovery";

export const metadata = pageMetadata({
    title: `API Documentation | ${siteName}`,
    description:
        "Machine-readable discovery resources for CheFu Inc agents and automated clients.",
    path: "/docs/api",
});

const endpoints = [
    {
        path: apiCatalogPath,
        label: "API catalog",
        type: "application/linkset+json",
    },
    {
        path: openApiPath,
        label: "OpenAPI description",
        type: "application/vnd.oai.openapi+json",
    },
    { path: healthPath, label: "Health status", type: "application/json" },
    {
        path: openIdConfigurationPath,
        label: "OpenID Connect discovery",
        type: "application/json",
    },
    {
        path: oauthAuthorizationServerPath,
        label: "OAuth authorization server metadata",
        type: "application/json",
    },
    {
        path: oauthProtectedResourcePath,
        label: "OAuth protected resource metadata",
        type: "application/json",
    },
    {
        path: mcpServerCardPath,
        label: "MCP server card",
        type: "application/json",
    },
    {
        path: agentSkillsIndexPath,
        label: "Agent skills index",
        type: "application/json",
    },
];

export default function Page() {
    return (
        <div className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-slate-200">
            <main className="mx-auto max-w-4xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    Agent Discovery
                </p>
                <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                    CheFu Inc API Documentation
                </h1>
                <p className="mb-10 max-w-2xl text-lg leading-8 text-slate-400">
                    These endpoints help agents and automated clients discover CheFu
                    Inc metadata, authentication configuration, service descriptions,
                    and browser-exposed tools.
                </p>

                <div className="overflow-hidden rounded-xl border border-slate-800">
                    <table className="w-full border-collapse text-left text-sm">
                        <thead className="bg-slate-900 text-slate-300">
                            <tr>
                                <th className="px-4 py-3 font-semibold">Endpoint</th>
                                <th className="px-4 py-3 font-semibold">Purpose</th>
                                <th className="px-4 py-3 font-semibold">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {endpoints.map((endpoint) => (
                                <tr
                                    key={endpoint.path}
                                    className="border-t border-slate-800"
                                >
                                    <td className="px-4 py-3 font-mono text-cyan-300">
                                        {endpoint.path}
                                    </td>
                                    <td className="px-4 py-3 text-slate-300">
                                        {endpoint.label}
                                    </td>
                                    <td className="px-4 py-3 text-slate-400">
                                        {endpoint.type}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
