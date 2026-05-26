import { getOpenIdConfiguration } from "../../../lib/authDiscovery";

export function GET() {
    return Response.json(getOpenIdConfiguration(), {
        headers: {
            "Cache-Control": "public, max-age=3600",
        },
    });
}
