# Deployment to sca.iroshan.com

Source uploaded to https://github.com/iroshan/consult-sca. The first GitHub validation run passed. Public website access at `sca.iroshan.com` was approved by the owner. The Cloudflare CNAME was verified as pointing at `iroshan.github.io`.

## Remaining one-time repository settings

GitHub rejected the integration's API call to enable Pages with HTTP 403, “Resource not accessible by integration”. The source repository is accessible and uploads succeeded. No repository creation or extra credentials are needed now.

Open https://github.com/iroshan/consult-sca/settings/pages and:

1. Under Build and deployment, select **GitHub Actions** as the Source.
2. Set the custom domain to **sca.iroshan.com** and save it.
3. After GitHub validates DNS and issues the certificate, enable **Enforce HTTPS** when available.

The workflow publishes each push after the Pages setup is enabled. If a previous deployment failed while Pages was disabled, rerun it or dispatch the workflow. The prepared deployment workflow and `site/CNAME` use the selected hostname.

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
