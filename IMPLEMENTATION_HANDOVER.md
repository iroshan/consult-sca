# Structure Coach implementation handover

Current implementation: 15 guided consultations / 184 exchanges, all twelve preparation areas linked, a personal plan/reflection log, reusable patterns plus saved case wording and personal versions. The chronological checkpoints below explain the progression.

## Completed scope

The coach extends the existing static Practice Studio and is linked prominently from its home page and navigation. Start at `/#structure/daily`; overview is `/#structure`.

- Initial six guided consultations: new headache/serious-illness concern, high HbA1c screening result, asthma control, emotional distress after separation, a parent's concern about eczema treatment, and dizziness/falls with medicine burden and access barriers.
- Initial 74 authored exchanges: 12 per ordinary path plus emergency branches for sudden extremely painful headache and immediate suicide risk.
- 16 reusable sentence patterns: 12 core sequences and four recovery sequences, each with natural wording, a shorter alternative, purpose and delivery guidance.
- Six-stage map: Open → Understand → Focus → Explain → Plan → Close. Stage order remains flexible; time-critical findings change the plan.
- Four support levels. “Let me try” hides decision choices as well as wording prompts; help can be requested. Support use, a decision retry or a self-reported essential gap affects the saved recall record.
- Choose the next action, speak or type, reveal model feedback, check essential actions, retry and replay one exchange, or transfer the skill to another patient.
- Full annotated worked examples, supplied earlier case facts for targeted replay, optional browser speech playback with written fallback, saved sentences and saved-only filtering.
- Spaced retrieval: example needed returns in about ten minutes; cue-supported recall in one day; independent recall initially three days, extending up to thirty. These are teaching defaults, not a validated mastery test.
- Daily guided practice resumes unfinished work, then selects supported/gap exchanges with an appropriate suggested help level. Reflection autosaves. Stage coverage and cross-case use are visible.
- Optional three-minute reading and twelve-minute consultation timers, mixed-case selection and a printable trainer review sheet. Timers never hide work or force navigation.
- Progress remains inside the existing `consult-studio-v1` state and version-1 backup format. Older backups remain valid. Imports sanitise coach fields and merge runs/results by timestamp. Reset and export include the coach.

## Files

`coach-data.js`: authored teaching content, official links and exam timing metadata.
`coach.js`: rendering, practice states, support tracking, review scheduling, sanitisation and merge.
`coach.css`: responsive and print styles.
`app.js` / `index.html`: studio integration.
`.github/workflows/pages.yml`: includes the three coach assets in the public static package.
`scripts/validate-coach.cjs`: deterministic state/content/backup regression checks, included by the normal validator.
`scripts/browser-coach.cjs`: real Chromium UI regression checks; requires Playwright and a local static server (see README).

## Validation and deployment

Run `node scripts/validate.cjs`. Existing 46-case Atlas/138-variation and studio checks pass alongside coach tests for content integrity, routes, all ordinary paths, emergency paths, support-aware recall, scheduling, sanitisation, escaping, timers and backup merge/import.

Chromium UI regression covers all six ordinary paths, a complete emergency branch, independently recalled versus model-supported attempts, spoken/typed practice, reload persistence, cross-case transfer, saved-sentence filtering, retrieval, real JSON download/import into a fresh browser profile and 390px layouts. A mobile trainer-sheet overflow was found and fixed. Screenshots are generated in the system temporary directory, not published.

All 15 distinct official guidance/exam links returned HTTP 200 during this run. Selected new clinical facts were checked against official NICE, NHS and RCGP material. This is not independent clinician peer review; the cases do not replace a complete clinical assessment or prescribing reference. Audio voice availability varies by browser and has a written fallback.

The pre-coach deployment recovered before this implementation: Pages source is GitHub Actions, custom domain is sca.iroshan.com, HTTPS enforcement is enabled, and both applications returned HTTPS 200 with HTTP redirects. For the latest publication, check `git log -1`, the matching Actions run, and the live `coach.js` / `coach-data.js` content; do not infer publication from local checks alone.

## Checkpoints and future continuation

Checkpoint 1 is `b7c6ed8` (one complete consultation and engine). The subsequent commit updating this handover contains the six-case course and final regression coverage. Use `git log --oneline -5` for exact current references; no hard-coded self-referential commit hash is needed.

Future work can add further cases/permutations and more nuanced decision alternatives, refine the lesson pacing from learner/trainer feedback, and expand condition-specific treatment discussions after current official guidance checks. Before any new edits, inspect git status and fetch the remote to preserve concurrent user changes. Keep recommendations and exam-format facts date-stamped and retain clear self-review limits.

No background continuation is assumed; the owner will request the next session manually. No private source documents, credentials or patient data are included.

## Follow-up checkpoint: personal planning and reflection

Added `coach-learning.js` and a `/#structure/learning` route (Plan & reflect), linked from the daily session and coach navigation. It provides an optional exam date, personal weekly goal and study intentions, twelve RCGP preparation-area priorities, an evidence-led learning/mock-review log across three domains, a sentence to rehearse, repeat dates and completion tracking. Records distinguish self, peer and trainer feedback. No examiner score or readiness prediction is generated. A transcript alone cannot establish non-verbal behaviour.

The learning state is sanitised and merged inside the existing coach/studio backup. Deleted record IDs prevent old backups reviving removed notes; up to 100 recent records are retained. All review/reference links published in the product are official. The reference workbook was inspected read-only; no private records, example entries, branding or raw workbook content were copied into the repository.

Validation: `scripts/validate-learning.cjs` checks UK dates/DST, sanitisation, evidence records, repeat tasks, deletion merge and old/new backup compatibility. `scripts/browser-learning.cjs` exercises actual plan/coverage inputs, domain feedback, daily focus, JSON download/import, deletion persistence, escaping and mobile layout. Both pass; the existing six-case Chromium regression also passes with the new module loaded.


## Follow-up checkpoint: twelve guided cases

Added six complete guided consultations (anxiety, a long-term benzodiazepine running out, fever in a three-year-old, constipation with overflow/impaction, gradual memory changes and a DNACPR/advance-care discussion). The coach now has twelve consultations and 148 exchanges, including four emergency branches. All new cases link to the appropriate existing Atlas case and official guidance. More specific next-action alternatives address common errors. The urgent replay context excludes the ordinary-path answer at the branch point.

All twelve ordinary paths passed the Chromium UI regression. Deterministic tests now verify every emergency path and that related Atlas/studio targets exist. Planning/reflection browser tests were repeated with the expanded catalogue. A retired NHS diazepam subpage was replaced with the current medicine page; the official GMC CPR page was accessible through the research tool but returned a bot/access 403 to the direct link checker. Other new links returned 200. No universal medicine regimens, CPR survival percentages or readiness grades were added.


## Follow-up checkpoint: breadth and sentence rehearsal

Added menopause/HRT discussion, a results consultation through a professional interpreter, and a professional pharmacist–GP conversation about a prescribing discrepancy and confirmed error. The coach now contains fifteen consultations and 184 exchanges. All twelve revision areas link to at least one relevant guided case; this is activity coverage, not evidence of competence across the blueprint.

The professional case uses the colleague’s role and custom exchange titles rather than treating a pharmacist as the patient. Selected clinical/professional facts were checked against current NICE, NHS and GMC pages, including current menopause review advice. No universal anticoagulant dose or unverified HRT regimen is supplied.

Added optional sentence-by-sentence rehearsal with listen buttons and pause cues. Saving from case feedback now keeps that case’s actual wording, rather than only the generic core pattern. Personal versions autosave, are escaped on display, merge by timestamp, survive the existing JSON backup and can be compared with the model during a case-specific recall drill. Core patterns retain their separate saved filter.

Validation for the fifteen-case checkpoint: all fifteen ordinary consultation paths passed Chromium UI checks, including the professional role label, sentence-by-sentence rehearsal, case-specific sentence saving, personal wording, case-specific recall and real backup import/export. All four emergency paths and linked Atlas/studio IDs pass deterministic checks. The official BNF and some GMC pages return bot/access 403 to a direct HTTP checker; they remain official references, and relevant GMC content was checked through the research tool. Other new official clinical links returned 200.

## Follow-up checkpoint: cardiovascular Atlas area

Added a fourth Atlas area with three complete cases: raised blood pressure, confirmed atrial fibrillation, and current/recent chest pain of possible cardiac origin. Each has assessment, priorities, a worked management plan, five patient-facing discussion examples, three changed circumstances, pitfalls, safety/follow-up and a recall prompt. Atlas totals are now 49 cases / 147 variations. The coach’s preparation view links relevant areas to this new material.

Current UK NICE recommendations were checked for out-of-office BP confirmation, severe-BP pathways, AF stroke/bleeding assessment and anticoagulation, and possible-ACS referral/initial care. No universal BP target, DOAC dose or unsupported rapid outpatient BP-lowering plan was added. Seven new official guideline/patient links returned HTTP 200.

Validation: the normal validator renders all 294 Atlas case sections and verifies the new area’s routes and imported notes/bookmarks. `scripts/browser-cardiovascular.cjs` passed all six tabs for each new case, bookmark persistence after reload and mobile discussion layouts. Other completed checkpoints remain intact.

## Follow-up checkpoint: respiratory Atlas area

Added adult asthma and COPD management/discussion cases with three variations each. Atlas totals are now 51 cases / 153 variations across five areas. The guided asthma case links directly to the new adult asthma management case.

The new material distinguishes chronic review from acute severity, age-/device-specific asthma pathways, AIR/MART versus SABA-only asthma care, technique and treatment barriers, COPD rehabilitation and oxygen assessment, and exacerbation/rescue-pack decisions. Selected recommendations were checked against NG245, NG115 and NG114 and NHS information. The COPD oral steroid example is explicitly for appropriate exacerbations, not routine stable care; other prescribing decisions remain patient-/product-specific.

All 306 Atlas sections and respiratory route/backup checks pass. `scripts/browser-respiratory.cjs` passed all six tabs of both cases, bookmark reload persistence and mobile discussion layouts. All five respiratory official links returned HTTP 200. A mobile screenshot was inspected for readable patient-facing explanations.

## Follow-up checkpoint: endocrine/metabolic Atlas area

Added confirmed type 2 diabetes, primary hypothyroidism and possible new type 1/DKA cases, each with three variations and worked patient-facing discussions. Atlas totals are now 54 cases / 162 variations across six areas. The two guided high-HbA1c/result cases link to management after confirmation, with a label making that diagnostic distinction explicit.

The type 2 case uses the current NG28 pathways, including the February 2026 medicine update and September 2026 renal-range clarification. The official current medicine visual summary was downloaded/read outside the repository: it recommends modified-release metformin plus an SGLT-2 inhibitor for the no-relevant-comorbidity group, with sequential medicine introduction and subgroup-specific exceptions. The case does not extrapolate that plan to frailty, CKD or suspected insulin deficiency. MHRA SGLT-2/DKA warnings and restart criteria were checked. Thyroid dosing/monitoring and administration facts were checked against NG145 and current NHS medicine information; type 1 urgency was checked against NHS/NICE sources.

Validation: all 324 Atlas sections and new routes/imported notes/bookmarks pass the normal validator. `scripts/browser-endocrine.cjs` passed all six tabs for each new case, bookmark reload persistence and mobile discussion layouts. Ten new endocrine/safety reference URLs returned HTTP 200. Raw official PDF/text used for checking remains in the temporary workspace and is not published as private study material.

## Follow-up checkpoint: gastrointestinal Atlas area

Added IBS-pattern symptoms, rectal bleeding/FIT and dyspepsia/H pylori discussions with three variations each. The Atlas now has 57 cases / 171 variations across seven areas. Worked phrases explain a positive assessment-led IBS diagnosis, restricted-diet concerns, test preparation, low FIT with continuing concern and results/referral ownership. The About page derives its published area names from the catalogue.

Selected facts were checked against current NICE CG61, NG20, NG12, HTG690, CG184 and HTG320 and current NHS patient pages. Calprotectin is conditional on the appropriate IBD/IBS differential, no suspected cancer and a local pathway; no universal numerical cut-off is supplied. Symptomatic FIT uses at least 10 micrograms Hb/g, with explicit action for persistent concern despite low or absent FIT. H pylori preparation includes the 2-week PPI washout when safe and actual test instructions, without a universal antibiotic regimen. The current NHS indigestion URL was corrected during link verification.

Validation: the full validator passes all 342 Atlas case sections, GI routes and imported notes/bookmarks. `scripts/browser-gastrointestinal.cjs` passed six tabs of all three cases, bookmark reload persistence and 390px discussion layouts. The correct NHS indigestion page and official HTG320 recommendations returned HTTP 200; the web research service returned access 403 for HTG320, so its recommendations were read through the normal verified HTTPS client. The preceding endocrine deployment (033d853) completed successfully in Actions run 43326551722. Check the matching newer run and live assets after this commit.

Next manageable unit: link all published Atlas cases to the personal feedback/repeat log, preserving existing guided-case records and old backups, then add focused management speaking practice if feasible.

## Follow-up checkpoint: Atlas-linked feedback and repeat tasks

The personal reflection form now selects all 57 Atlas cases as well as the 15 guided consultations, grouped by area. Each Atlas case links to a case-selection handoff that retains existing draft text. Saved records include optional fictional context and return to the correct application; guided-case IDs and old backups remain compatible. The daily session shows the first due action, saved sentence and case link. The Atlas homepage now derives its specialty count rather than showing the obsolete three-area description.

`coach-data.js` carries only a small generated title/route index for the picker. After catalogue additions, run `node scripts/sync-learning-cases.cjs --write`; the normal validator rejects index drift. No private source text or learning records are embedded.

Validation: the full validator passes. Learning-specific checks cover every published case target, unknown-ID rejection, context limits/escaping, retained draft text, linked records and old/new backup compatibility. Both `browser-learning.cjs` and `browser-learning-atlas.cjs` pass; the latter follows the actual Atlas handoff, due-task return link, real JSON download/import and mobile record layout. GI checkpoint 915df0d deployed successfully in Actions run 43328313477.

Next: add further complete guided cases for management/test discussions, with exact UK sentences and clinically meaningful alternative responses; run the full guided-case browser regression for the expanded course.

## Follow-up checkpoint: seventeen guided consultations and alternative management paths

Added a persistent rectal bleeding/low-FIT consultation and an uncomplicated dyspepsia/H pylori consultation, each with twelve ordinary exchanges and case-specific decision distractors, exact UK models, shorter wording, sentence beginnings and essential self-review criteria. Totals: 17 guided cases / 211 exchanges. A fifth emergency branch handles severe ongoing bleeding with faintness. Dyspepsia also has a separate two-exchange informed-choice path for an appropriate empirical PPI trial when testing is not wanted now, including its own prescribing checks, four-week review, warning symptoms and understanding check.

The case-facts replay now follows the authored graph rather than slicing the array: a branch uses the alternative patient answer and excludes skipped ordinary-path replies, including at later branch exchanges. Ordinary worked examples keep alternative endings separate and link to their practice entry points. Existing saved run/result and backup structures remain unchanged.

Clinical checks: current CG184 recommendations were read through verified HTTPS for the two-week PPI washout, test-and-treat and four-week empirical PPI option. Current NG12 recommendations were checked for continued clinical concern despite low/unreturned FIT and current upper-GI referral criteria. Individual prescriptions, actual test instructions, referral pathways and realistic dates still require the appropriate clinical/local checks; no universal antibiotic course or national administrative referral target was invented.

Validation: the full validator passes all ordinary and alternative paths, every node’s reachability, branch-specific replay facts, route/link integrity and saved-progress/backup compatibility. The full Chromium coach regression passed all 17 ordinary consultations, support use, targeted replay, transfer, case-specific sentence notes, real JSON backup round-trip and mobile views. `scripts/browser-coach-branches.cjs` also passes all five emergency paths, the complete two-exchange shared-choice path, branch-specific facts, completion after reload, worked-example handoff and mobile layout. Atlas-linked reflection checkpoint f20f051 deployed successfully in Actions run 43328737200; verified live HTTPS catalogue and learning-log JS match the committed files.

Next manageable improvement: provide explicit stage-by-stage sentence sequences and “what to do with the answer” teaching, with links into short targeted case practice rather than another long list to read.

## Follow-up checkpoint: learn the six stages explicitly

Added `/#structure/stages` and six `/#structure/stage/<id>` lessons, accessible from the coach navigation and overview. They teach 19 short connected sentence sequences, natural/shorter UK wording, purpose and pause cues, six transitions and twelve changed-patient-answer drills. Each stage explains what to do with the answer, includes a common shortcut to avoid and links directly to relevant exchanges in two different cases. The aim is flexible response and transfer, not a rigid script.

The lessons reuse the four saved support levels. Reducing help hides prior revealed responses, and changed-answer examples can be revealed and hidden for immediate retry. Browser en-GB speech playback has text fallback. Stage reading is not recorded as a clinical grade or as independent case performance. Case reviews, saved wording and JSON backup remain in the existing coach system; the route warns that starting a targeted exchange replaces its active draft while retaining completed reviews.

Validation: the full validator covers all six stage routes/levels, content and target integrity, prompt reduction and answer reveal/hide. `scripts/browser-coach-stages.cjs` passes all six lessons, 19 sequences, four levels, changed-answer retry, correct text/en-GB playback dispatch using a speech stub, unavailable-audio fallback, targeted case handoff, saved help preference and 390px layouts. This does not claim an audible voice was tested on every device. The new two-case content checkpoint e153dab deployed successfully in Actions run 43329745387.

Next manageable unit: expand the Atlas with musculoskeletal cases after direct checks of current NICE/NHS guidance; regenerate the learning picker and validate new case routes, backup and mobile views.

## Follow-up checkpoint: musculoskeletal Atlas area

Added low back pain/sciatica, recurrent gout and knee osteoarthritis, with assessment, management/reasoning, five discussion exchanges, three changed circumstances, safety/review and recall in each. Atlas totals: 60 cases / 180 variations across eight areas. The generated learning-log picker includes all 60 cases.

Current NG59, NG219 and NG226 recommendations were read directly over verified HTTPS, with NHS back-pain/gout/OA/septic-arthritis information. Important current detail: NG59 removed the older standalone psychological-therapy/combined-programme recommendations in July 2026 and amended the manual-therapy wording; the new case uses the current exercise-inclusive recommendation rather than reproduce removed text. The cases distinguish back pain from sciatica, avoid unsupported medicine escalation, recognise neurological compression and septic-joint urgency, explain gout’s treat-to-target monitoring and major-CVD ULT choice, and use OA function/quality of life rather than automatic BMI/age referral exclusions. No universal renal-risk drug regimen is supplied.

Validation: the full validator passes 360 Atlas sections, new area routes and imported notes/bookmarks. `browser-musculoskeletal.cjs` passes all six tabs of three cases, bookmarks after reload and mobile discussion layouts. `browser-learning-atlas.cjs` passes the updated 60-case picker and cross-application reflection/backup workflow. Official link-check results and deployment are recorded with the next publication check.

Next: make Atlas discussion models easier to rehearse aloud before revealing, add shorter alternatives to new examples and browser listening with text fallback, preserving existing notes and backups.

## Follow-up checkpoint: Atlas spoken discussion rehearsal

Every case’s Discussion tab now has native keyboard-accessible per-reply reveal/hide, a hide/show-all control, explicit speak–compare–retry instructions, slower/normal browser listening and written fallback. Added thirty authored shorter alternatives across the GI/MSK cases, preserving the fuller explanation and why it helps. Existing personal discussion notes remain in the same fields/storage/backup. Hiding text is not recorded as independence or assessed performance.

Audio cancels when hiding replies or changing route/support level, to avoid a previous model continuing during unaided practice. The older language module now handles unavailable speech properties defensively. Stage support/reveal buttons regain focus after rerendering, improving keyboard continuity.

Validation: full content/routes/progress validation and the stage browser regression pass. `browser-atlas-discussion.cjs` passes native reveal/retry with and without shorter wording, exact text/en-GB/speed dispatch via a speech stub, unavailable-audio fallback in both Atlas discussion and language pages, note persistence, actual Atlas JSON export/import and mobile layouts. It does not verify audible output on all devices. All eight MSK official URLs returned HTTP 200. Content checkpoint 58d7365 deployed successfully in Actions run 43331188102.

Next manageable content unit: deepen selected original mental-health case discussions with natural and shorter replies to common patient questions after current official guidance checks. Continue preserving IDs and notes.

## Follow-up checkpoint: deeper mental-health discussion examples

Expanded depression, GAD, panic, insomnia/low mood and benzodiazepine-dependence discussions from one to five exchanges each. Twenty additional fuller responses and twenty-five new shorter versions bring the Atlas to 55 shorter alternatives across eleven cases. They address treatment preference, onset/review, direct suicide questions, diazepam requests, real physical symptoms, avoidance, machinery/alcohol safety, physical dependence without stigma, verification and individual withdrawal review. IDs, saved notes and backup structures are preserved.

Current NG222, CG113 and NG215 recommendations and NHS insomnia information were read over verified HTTPS. Depression’s usual initial antidepressant review (within 2 weeks; within 1 week for age 18–25 or particular suicide concern) is explicitly distinguished from GAD’s under-30 SSRI/SNRI review within 1 week plus weekly suicidal-thinking/self-harm monitoring for the first month. The GAD follow-up text also includes its regular treatment review schedule. No universal taper, medicine supply promise or fixed prescribing regimen was added. Immediate danger remains a separate urgent/emergency pathway, with explicit 999 examples where appropriate.

Validation: full content/routes/persistence checks pass. The discussion Chromium regression now exercises all eleven expanded cases plus speech/text fallback, hiding/revealing, saved personal wording, actual Atlas backup round-trip and mobile layouts. The prior rehearsal checkpoint 439918b deployed successfully in Actions run 43331783336.

Next manageable unit: improve recording of help used when an unfinished independent attempt is interrupted by opening the same case’s full worked model or saved exact sentence; then perform final deployment and live-asset verification.
