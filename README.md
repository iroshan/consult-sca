# Consult — SCA learning website

A portable static website for UK GP consultation learning. All application files are in `site/`; no Sites platform, server-side service or build installation is required to run them.

- Original practice studio: 12 modules, 48 annotated phrases, 16 consultation cases and decision drills.
- Clinical Atlas: 46 core cases and 138 management permutations in mental health, paediatrics, and older-person/palliative care.
- UK consultation English: 50 phrases with natural/shorter versions and tone notes, 8 conversations and a glossary.
- Browser-local notes, self-review, recall schedules and JSON backup/import.

## Run locally

Serve `site/` with any static web server. For example, from this repository run `python -m http.server 8000 --directory site`, then open `http://localhost:8000/`. No Python application code is involved; it only serves files. JavaScript is required for the interactive features.

Run checks with `node scripts/validate.cjs`.

## GitHub Pages

The workflow validates each push and then deploys the static `site/` directory. The owner has approved public website access. GitHub Pages must first be enabled once in the repository settings with **GitHub Actions** as its source. The connected integration could upload source and workflows but GitHub rejected its attempt to enable Pages (HTTP 403). The repository owner must complete that one-time settings step. Afterward, pushes to `main` or manual workflow runs publish the site.

A GitHub Pages website is normally public even if the repository is private. Pages from a private repository depends on the account plan. Do not change repository visibility without the owner's decision.

The selected public website hostname is `sca.iroshan.com`. Its configuration is recorded in `site/CNAME`. Configure GitHub Pages with this exact custom domain; a CNAME file alone does not configure an Actions deployment's repository settings.

In the existing Cloudflare `iroshan.com` zone, the intended record is:

| Type | Name | Target | Proxy | TTL |
| --- | --- | --- | --- | --- |
| CNAME | sca | iroshan.github.io | DNS only initially | Auto |

Only the `sca` hostname is in scope. Preserve existing apex, www, mail and other service records. Inspect any existing `sca` record before changing it; do not add conflicting A/AAAA and CNAME records at that exact hostname. The CNAME target is a hostname, with no `https://` prefix or repository path.

Configure the custom domain in GitHub Pages before pointing DNS at the deployment. Complete any domain-verification TXT record using the exact token GitHub provides; no verification token is included in this repository. After successful DNS validation and certificate issuance, enable **Enforce HTTPS**. All SCA routes remain beneath this hostname: `/` for the studio and `/clinical/` for the atlas, including its hash-based practice and language routes.

Source-repository visibility is separate from website visibility. The owner approved public website access; a private source repository is the starting configuration. GitHub Pages from a private repository depends on the account plan. If a public source repository is required, obtain that separate choice before changing visibility.

Official setup documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Moving your learning progress

Browser data is tied to the website origin. A GitHub or custom-domain address does not inherit data from an earlier hostname. Before switching, export the practice-studio backup from **My progress**, then separately export the Clinical Atlas backup from **My learning**. At the new address import each into its matching application. A second move from `github.io` to a custom domain also needs export/import. Backups may contain private reflections; keep them private.

No patient data, personal learning records, raw study files or account credentials are included in this repository. The site does not record microphones; listening uses available browser speech synthesis. Google Fonts is loaded by the stylesheet when available, with local font fallbacks.

## Clinical scope

This is independent educational material with fictional scenarios. Selected recommendations were checked on 11 November 2026. Content is not automatically updated or independently clinician peer-reviewed, and does not cover every clinical condition, regimen or examination requirement. Use current official prescribing guidance, local pathways, clinical judgement and the legal framework of the relevant UK nation. Self-ratings and practice totals are not clinical grades or pass predictions.

Other specialty areas remain to be added. Official clinical links are included in the cases.
