# Deployment to sca.iroshan.com

Source uploaded to https://github.com/iroshan/consult-sca. The first GitHub validation run passed. Public website access at `sca.iroshan.com` was approved by the owner. The Cloudflare CNAME was verified as pointing at `iroshan.github.io`.

## GitHub Pages publication

The repository now contains an explicit **Validate and publish website** workflow. It validates the application, packages only the public static files, then publishes using GitHub's official Pages actions. Each job has a ten-minute timeout and newer runs cancel superseded ones. Application source files remain at the repository root and the owner's CNAME is preserved.

The owner has selected **GitHub Actions** as the Pages source, retained `sca.iroshan.com` and enabled **Enforce HTTPS**. On the initial implementation check, the deployment had recovered: GitHub reported `built`, both applications returned HTTPS 200 and HTTP redirected to HTTPS. The integration cannot edit Pages settings (HTTP 403); no further setting change is currently required.

Pushes to `main` trigger **Validate and publish website**. A successful publication must include both build and deploy. The staging step explicitly copies `coach.js`, `coach-data.js` and `coach.css` alongside the original static assets. Verify the latest commit's Actions result and the live coach assets after future changes; locally passing validation alone does not establish publication.

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
