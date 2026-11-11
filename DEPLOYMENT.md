# Deployment to sca.iroshan.com

Source uploaded to https://github.com/iroshan/consult-sca. The first GitHub validation run passed. Public website access at `sca.iroshan.com` was approved by the owner. The Cloudflare CNAME was verified as pointing at `iroshan.github.io`.

## GitHub Pages publication

The owner enabled Pages from `main` and `/ (root)` and saved `sca.iroshan.com`. Application files are now at the repository root to match this setting. GitHub's built-in Pages build/deploy handles publication; the custom workflow validates only. The original `site/` directory was moved without dropping its content. The owner's root CNAME was preserved.

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
