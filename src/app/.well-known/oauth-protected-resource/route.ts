import { getProtectedResourceMetadata } from "../../../lib/authDiscovery";

export function GET() {
    return Response.json(getProtectedResourceMetadata(), {
        headers: {
            "Cache-Control": "public, max-age=3600",
        },
    });
}
