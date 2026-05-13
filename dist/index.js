import { App } from "@octokit/app";
import { Octokit } from "@octokit/core";
import { enterpriseCloud } from "@octokit/plugin-enterprise-cloud";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
const HydratedOctokit = Octokit.plugin(enterpriseCloud, restEndpointMethods, paginateRest);
const app = new App({
    appId: "my-id",
    privateKey: "private-key",
    Octokit: HydratedOctokit,
});
export const externalGroup = await app.octokit.request("GET /orgs/{org}/teams/{team_slug}/external-groups", {
    org: '',
    team_slug: "",
});
