import { Octokit } from "@octokit/core";
import { enterpriseCloud } from "@octokit/plugin-enterprise-cloud";

const MyOctokit = Octokit.plugin(enterpriseCloud);
const octokit = new MyOctokit({ auth: "secret123" });

octokit.scim.listProvisionedIdentities({
  filter: 'userName eq "Octocat"',
});
