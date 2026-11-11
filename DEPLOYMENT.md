# Deployment to sca.iroshan.com

Prepared locally; no GitHub repository or DNS mutation has succeeded yet.

## Repository

The connected GitHub account is `iroshan`. Creation of `iroshan/consult-sca` was rejected by the connected integration with HTTP 403, “Resource not accessible by integration”. Create an empty repository in that account, then grant the existing GitHub connection access if it uses selected repositories. No password or token should be sent in chat.

Once the repository is available, from this checkout:

```sh
git remote add origin https://github.com/iroshan/consult-sca.git
git push -u origin main
```

If `origin` already exists, inspect it rather than adding it again. If the repository is not empty, inspect and reconcile its history; do not force-push over existing work.

The workflow validates the complete site on each push. The repository variable `ENABLE_PAGES` gates publishing; it is deliberately absent until Pages is configured. Use Settings → Pages → Source: GitHub Actions. Set the custom domain to `sca.iroshan.com`. Set `ENABLE_PAGES=true` under Settings → Secrets and variables → Actions → Variables, then run the workflow or push a change. Confirm the deployment succeeds.

If GitHub reports that Pages from a private repository is unavailable on the account plan, choose a supported plan or explicitly decide whether the source repository may be public. Public website access does not automatically mean the source repository was approved for public access.

## Cloudflare DNS and TLS

In the existing `iroshan.com` zone, create the exact `sca` record when the GitHub Pages domain is configured:

- Type: CNAME
- Name: sca
- Target: iroshan.github.io
- Proxy status: DNS only initially
- TTL: Auto

Review an existing record at `sca` if one exists. Preserve all other records and services. Do not use an apex A-record setup for this subdomain, and do not put a URL or repository path in the CNAME target.

Use the exact TXT token supplied by GitHub if verifying domain ownership. Wait for GitHub's domain check and certificate issuance; enable Enforce HTTPS when available. Verify the root, `/clinical/`, and the language route `/clinical/#language` in a browser before considering the migration complete.

## Remembering progress

Both applications use browser localStorage rather than cookies. This is local to the browser profile and hostname; it is not an account and is not shared with other visitors. No login or SQLite service is required for the static deployment. A shared login/database would need an additional backend and authentication design.

Export each application's backup from the previous address before moving. Import the studio backup under My progress and the atlas backup under My learning at the new address. Progress from the old hostname will not appear automatically. Keep exports private if they contain personal reflections.
