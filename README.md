# Consult — SCA learning website

A portable static website for UK GP consultation learning. The application entry points are `index.html` and `clinical/index.html`; no Sites platform, server-side service or build installation is required to run them.

- Guided Structure Coach: 15 consultations, 184 exchanges, 16 core/recovery sentence patterns, saved case wording and personal versions, sentence-by-sentence rehearsal, four help levels, emergency branches, full worked examples, targeted replay, cross-case transfer, spaced recall and a printable trainer sheet. Start at `/#structure/daily`.
- Original practice studio: 12 modules, 48 annotated phrases, 16 consultation cases and decision drills.
- Clinical Atlas: 57 core cases and 171 management permutations in mental health, paediatrics, older-person/palliative care, cardiovascular, respiratory, endocrine/metabolic and gastrointestinal medicine.
- UK consultation English: 50 phrases with natural/shorter versions and tone notes, 8 conversations and a glossary.
- Personal weekly plan, twelve preparation-area priorities, evidence-led feedback records linked to all guided and Atlas cases, fictional context and dated repeat tasks at `/#structure/learning`.
- Browser-local notes, self-review, recall schedules and JSON backup/import.

## Run locally

Serve the repository root with any static web server. For example, from this repository run `python -m http.server 8000`, then open `http://localhost:8000/`. No Python application code is involved; it only serves files. JavaScript is required for the interactive features.

Run checks with `node scripts/validate.cjs`. This includes coach branching, independence tracking, scheduling, sanitisation and backup compatibility.

For browser regression checks, with the official Playwright package and Chromium installed, serve this directory locally, then run `SCA_BASE_URL=http://127.0.0.1:8000 node scripts/browser-coach.cjs`. `CHROMIUM_PATH` can select an installed Chromium executable. Run `node scripts/browser-learning.cjs` against the same server to check the planning and reflection workflow. The browser scripts use an isolated profile, exercise all fifteen guided consultations and real backup import/export, and writes screenshots to the system temporary directory.

## GitHub Pages

The workflow validates each push, packages the static application files, and publishes them with GitHub's official Pages actions. In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. The older branch-based deployment suffered a GitHub startup error; this explicit workflow supplies separate build and deployment jobs with time limits. Public website access is approved for `sca.iroshan.com`. No deployment variable or extra hosting service is needed.

A GitHub Pages website is normally public even if the repository is private. Pages from a private repository depends on the account plan. Do not change repository visibility without the owner's decision.

The selected public website hostname is `sca.iroshan.com`. Its configuration is recorded in `CNAME`. Configure GitHub Pages with this exact custom domain; the same custom domain must also be saved in the repository's Pages settings.

In the existing Cloudflare `iroshan.com` zone, the intended record is:

| Type | Name | Target | Proxy | TTL |
| --- | --- | --- | --- | --- |
| CNAME | sca | iroshan.github.io | DNS only initially | Auto |

Only the `sca` hostname is in scope. Preserve existing apex, www, mail and other service records. Inspect any existing `sca` record before changing it; do not add conflicting A/AAAA and CNAME records at that exact hostname. The CNAME target is a hostname, with no `https://` prefix or repository path.

Configure the custom domain in GitHub Pages before pointing DNS at the deployment. Complete any domain-verification TXT record using the exact token GitHub provides; no verification token is included in this repository. After successful DNS validation and certificate issuance, enable **Enforce HTTPS**. All SCA routes remain beneath this hostname: `/` for the studio and `/clinical/` for the atlas, including its hash-based practice and language routes.

The owner created the public source repository and approved public website access. No private notes or learning records are included in the repository.

Official setup documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Moving your learning progress

Browser data is tied to the website origin. A GitHub or custom-domain address does not inherit data from an earlier hostname. Before switching, export the practice-studio backup from **My progress**, then separately export the Clinical Atlas backup from **My learning**. At the new address import each into its matching application. A second move from `github.io` to a custom domain also needs export/import. Backups may contain private reflections; keep them private.

No patient data, personal learning records, raw study files or account credentials are included in this repository. The site does not record microphones; listening uses available browser speech synthesis. Google Fonts is loaded by the stylesheet when available, with local font fallbacks.

## Clinical scope

This is independent educational material with fictional scenarios. Original Atlas/studio recommendations were checked on 11 November 2026; selected new coach facts were checked on 12 November 2026. Content is not automatically updated or independently clinician peer-reviewed, and does not cover every clinical condition, regimen or examination requirement. Use current official prescribing guidance, local pathways, clinical judgement and the legal framework of the relevant UK nation. Self-ratings and practice totals are not clinical grades or pass predictions.

Other specialty areas remain to be added. Official clinical links are included in the cases.
