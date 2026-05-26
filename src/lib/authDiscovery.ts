import { siteUrl } from "../app/site-metadata";
import {
    apiDocsUrl,
    oauthAuthorizationServerUrl,
    openIdConfigurationUrl,
} from "./agentDiscovery";

const defaultIssuer = "https://accounts.google.com";

export function getAuthorizationServerIssuer() {
    return (
        process.env.OAUTH_ISSUER ||
        process.env.OIDC_ISSUER ||
        process.env.NEXT_PUBLIC_OAUTH_ISSUER ||
        defaultIssuer
    );
}

export function getAuthorizationServerMetadata() {
    const issuer = getAuthorizationServerIssuer();

    return {
        issuer,
        authorization_endpoint:
            process.env.OAUTH_AUTHORIZATION_ENDPOINT ||
            process.env.OIDC_AUTHORIZATION_ENDPOINT ||
            "https://accounts.google.com/o/oauth2/v2/auth",
        token_endpoint:
            process.env.OAUTH_TOKEN_ENDPOINT ||
            process.env.OIDC_TOKEN_ENDPOINT ||
            "https://oauth2.googleapis.com/token",
        jwks_uri:
            process.env.OAUTH_JWKS_URI ||
            process.env.OIDC_JWKS_URI ||
            "https://www.googleapis.com/oauth2/v3/certs",
        registration_endpoint: process.env.OAUTH_REGISTRATION_ENDPOINT || undefined,
        response_types_supported: ["code"],
        subject_types_supported: ["public"],
        id_token_signing_alg_values_supported: ["RS256"],
        grant_types_supported: ["authorization_code", "refresh_token"],
        scopes_supported: [
            "openid",
            "email",
            "profile",
            "chefu:contact",
            "chefu:careers:write",
        ],
        token_endpoint_auth_methods_supported: [
            "client_secret_basic",
            "client_secret_post",
            "none",
        ],
        service_documentation: apiDocsUrl,
        protected_resources: [siteUrl],
    };
}

export function getOpenIdConfiguration() {
    return {
        ...getAuthorizationServerMetadata(),
        claims_supported: [
            "sub",
            "email",
            "email_verified",
            "name",
            "picture",
        ],
        end_session_endpoint: process.env.OIDC_END_SESSION_ENDPOINT || undefined,
    };
}

export function getProtectedResourceMetadata() {
    return {
        resource: siteUrl,
        authorization_servers: [
            getAuthorizationServerIssuer(),
            oauthAuthorizationServerUrl,
            openIdConfigurationUrl,
        ],
        scopes_supported: [
            "openid",
            "email",
            "profile",
            "chefu:contact",
            "chefu:careers:write",
        ],
        bearer_methods_supported: ["header"],
        resource_documentation: apiDocsUrl,
    };
}
