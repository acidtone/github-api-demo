import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: process.env.TOKEN });

export default async (req, res) => {

  const response = await octokit.request('GET /gists?per_page=100', {
    org: "octokit",
    type: "private",
  });

  return response.data;
}