# Deployment to sca.iroshan.com

Source uploaded to https://github.com/iroshan/consult-sca. The first GitHub validation run passed. Public website access at `sca.iroshan.com` was approved by the owner. The Cloudflare CNAME was verified as pointing at `iroshan.github.io`.

## GitHub Pages publication

The repository now contains an explicit **Validate and publish website** workflow. It validates the application, packages only the public static files, then publishes using GitHub's official Pages actions. Each job has a ten-minute timeout and newer runs cancel superseded ones. Application source files remain at the repository root and the owner's CNAME is preserved.

**Required one-time setting:** in https://github.com/iroshan/consult-sca/settings/pages, change **Build and deployment → Source** from **Deploy from a branch** to **GitHub Actions**. Keep the custom domain `sca.iroshan.com`. The integration cannot edit this setting (HTTP 403). The previous generated branch deployment failed before starting any jobs with GitHub's message: “An unexpected error has occurred and we've been automatically notified.” Switching publication uses the explicit workflow instead.

Once the source is changed, run or re-run **Validate and publish website** from the Actions tab. A successful run must include both build and deploy; a locally passing validation alone does not establish a live deployment.

GitHub reports the custom-domain certificate approved. HTTPS enforcement still needs to be enabled in the Pages settings once GitHub makes that option available. The integration cannot change Pages settings (HTTP 403), so the owner may need to enable that switch.

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
