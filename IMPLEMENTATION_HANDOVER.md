# Structure Coach implementation handover

Current implementation: **17 guided consultations / 211 exchanges**, six stage lessons (19 sentence sequences, six filled-in examples and twelve changed-answer drills), four support levels, five emergency paths and a two-exchange shared-choice branch. The Atlas has **60 cases / 180 variations across eight areas**, spoken discussion rehearsal, 252 one-exchange drills and 135 shorter alternatives across twenty-seven cases. All twelve preparation groups are linked; this is activity coverage, not competence. Personal plans/reflections, due repeat tasks, saved case wording and own versions use browser-local version-1 progress and backups.

Resume at https://sca.iroshan.com/#structure/daily or /#structure/stages. The canonical checkout is /workspace/github/consult-sca. Inspect git status, fetch and compare the remote before edits. The exact checkpoint containing this file is given by `git log -1 --oneline`; chronological notes below record prior content/deployment hashes. No automatic quota monitoring or background continuation is assumed.

Current validation commands: `node scripts/validate.cjs`; browser scripts use a local static server and `SCA_BASE_URL`. Relevant regressions are `browser-coach.cjs`, `browser-coach-branches.cjs`, `browser-coach-stages.cjs`, `browser-coach-help.cjs`, `browser-learning.cjs`, `browser-learning-atlas.cjs`, `browser-atlas-discussion.cjs` and each new specialty script. All run in isolated profiles. Update the generated picker with `node scripts/sync-learning-cases.cjs --write` after adding Atlas cases.

Next content priorities: all 21 mental-health discussion sets are now expanded; continue other clinical areas one guidance-checked batch at a time, and deepen remaining shorter versions as needed. Check current official guidance before changing management; keep case IDs stable. Review feedback and learner pacing before adding more interface options. Publication uses the existing Pages workflow and custom domain; the final deployment/live-asset result is recorded at the end. The older sections below are historical checkpoints.

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

The learning state is sanitised and merged inside the existing coach/studio backup. Deleted record IDs prevent old backups reviving removed notes; up to 100 recent records are retained. All review/reference links published in the product are official. Only original educational wording and official public references are published.

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

## Follow-up checkpoint: honest model exposure and filled-in stage examples

Each stage’s Teach me view now includes a relevant case’s actual patient question, fuller/shorter response, reasoning and supplied prior facts, with listening and targeted practice. Other help levels hide that full example. The daily recommendation links to the relevant stage lesson.

An unfinished case attempt now records full-model support when that exact response is opened in its ordinary worked example, saved case wording, revealed case-specific recall or a filled-in stage example. Unrelated case models, alternatives not rendered in the ordinary worked path, prior study before a new attempt and feedback after the attempt do not retrospectively change the rating. The attempt’s draft is retained; a fresh retry can still be independent. Existing progress/backup schema is unchanged. This tracks explicit site model exposure, not outside help or automatic clinical performance.

Validation: the complete validator passes. The full 17-case Chromium regression, six-stage regression and new `browser-coach-help.cjs` all pass, including actual navigation, supported rating after a model detour, retained draft, independent fresh retry, saved/filled model exposure and reload. The earlier mental-health checkpoint ca563d9 deployed successfully in Actions run 43332296870.

## Publication and final continuation checkpoint

Code checkpoint 26382436668b7a21855cc3b2bb20df237e194db8 passed the full content validator and the 17-case, stage and help-exposure Chromium regressions, then deployed successfully in Actions run 43333010575. A final presentation pass adds clearer headings and spacing between short stage sequences, plus a Stop audio control. The stage browser regression passes after that pass.

The Pages artifact now includes `/build.json` with the deployed Git commit and build timestamp, so later sessions can identify the live version without guessing from cached page text. It contains no user learning data. The next publication check should compare its commit with `git rev-parse HEAD`, inspect the matching Actions run, and compare the live app/catalogue asset hashes.

Continue with the remaining original mental-health discussion sets (for example minority stress, perinatal concerns, psychosis and advanced-illness distress), then further uncovered clinical areas. Work in manageable guidance-checked batches; update per-case dates, preserve IDs and regenerate the Atlas picker after adding cases. Keep JSON exports separate for Studio/Coach and Atlas. Speech and free-text attempts use worked examples/self-review, not automatic clinical grading. No usage-limit exhaustion or automatic restart is claimed.

### Verified live publication

Functional/presentation code checkpoint **48b98d7d63db281dedfb8e3bb7def738d1e184a8** deployed successfully in Actions run **43333374950**. `/build.json` returned that exact commit. All fourteen served HTML/JS/CSS assets checked over certificate-verified HTTPS returned 200 and SHA-256 matched this checkout. HTTP redirected to HTTPS successfully. The worktree and origin/main were clean/aligned before this documentation-only record. The commit containing this record changes no application code; use `git log -1` and live `/build.json` to identify it after deployment.

Browser verification was performed against the local static site in isolated Chromium profiles. Direct public-page Chromium testing earlier encountered the managed environment proxy certificate trust issue; this was not treated as a site TLS failure. The live publication was verified through normal certificate-verified HTTPS and exact asset hashes. Browser speech tests verify dispatched wording/language/rate and text fallback, not the audible quality of every platform voice. No independent clinician peer review or pass prediction is claimed.

## Continued checkpoint: context, trauma and work discussions (13 November 2026)

Deepened five original cases (minority stress/rejection, distress in advanced illness, relationship breakdown, PTSD and workplace bullying) to five fuller/shorter exchanges each. The Atlas now has 80 shorter alternatives across sixteen cases. Focus is on safe contact, honest confidentiality, asking directly about safety, symptom relief, patient-led support, fit-note boundaries, treatment access and named follow-up. IDs, notes and backup fields remain unchanged.

Current NG222, NG116, CG138, NG142 and GOV.UK fit-note guidance were read over verified HTTPS. PTSD management now states the actual adult timing/non-combat distinctions for EMDR and distinguishes established-PTSD medicine choices from preventive drug treatment. It does not force detailed retelling or exclude treatment solely for substance misuse. Advanced-illness discussions retain symptom relief and individual care-plan coordination while assessing urgent danger. The GMC confidentiality root returned access 403 to the direct checker; no new unverified GMC recommendation was substituted.

Full validator and the expanded Atlas discussion browser regression pass, including spoken rehearsal, shorter replies, fallback, real backup round-trip and mobile layouts. The starting checkout and origin/main were clean and aligned; prior publication 4c054b7 was successful.

Next: perinatal, young-person and eating-disorder discussion sets, after checking CG192, NG134 and NG69.

## Continued checkpoint: perinatal and adolescent discussions

Expanded antenatal depression, postnatal depression, postpartum psychosis, adolescent anxiety/depression and eating-disorder discussions to five fuller/shorter exchanges each. There are now 105 shorter alternatives across twenty-one cases. The wording explains pregnancy-specific risk decisions, prompt review after stopping medicine, unwanted thoughts versus intent, honest safeguarding, accessible support, immediate postpartum escalation, hearing a young person privately and physical eating-disorder risk across weights.

Current CG192, NG134 and NG69 recommendations were read over verified HTTPS. The case text preserves the immediate assessment/within-four-hours-of-referral rule for sudden suspected postpartum psychosis and emergency action for immediate danger. Adolescent antidepressant treatment is distinguished from adult pathways, including prior child/adolescent psychiatrist assessment and individually documented close monitoring (for example weekly contact for the first four weeks). The eating-disorder case now explicitly calls for assessment today in the supplied faint/rapid-weight-loss scenario and immediate age-appropriate specialist referral after suspicion, without waiting for a BMI threshold or delaying acute medical care. No restart dose, universal nutrition regimen or safeguarding outcome is promised.

The full validator and expanded discussion Chromium regression pass, including playback text/fallback, mobile views and real notes/backup round-trip. Previous content checkpoint f3a568c deployed successfully in Actions run 43521975803.

Next: complete the remaining six mental-health discussion sets (psychosis, relapse, mania, opioids, gambling and alcohol) using current official recommendations.

## Continued checkpoint: all twenty-one mental-health discussions deepened

The remaining six original mental-health cases (first psychosis, schizophrenia relapse, possible mania, opioid review, gambling-related harms and alcohol withdrawal) now each have five fuller/shorter exchanges. All 21 mental-health cases have five authored exchanges. The Atlas contains 252 discussion exchanges in total, with 135 shorter alternatives across twenty-seven cases.

Current CG178, CG185, NG248, CG100 and NG215 recommendations were read over verified HTTPS. New wording covers non-confrontational response, direct safety questions, early-intervention/urgent handover, specialist first-antipsychotic advice, individual restart review, medicine harms, safe supported withdrawal and real follow-up ownership. Gambling content now distinguishes group/individual CBT, immediate post-episode suicide risk and specialist naltrexone eligibility/checks, including current opioid use. NHS co-codamol advice was checked for excess-dose advice even if well and emergency breathing symptoms. No universal restart, taper, detoxification or drug regimen is supplied.

The complete validator and expanded discussion browser regression pass, covering all 21 mental-health cases plus GI/MSK rehearsal, listening/fallback, saved notes, real backup round-trip and mobile layouts. Next unit: make the large discussion collection easier to practise one exchange at a time with saved personal wording and delayed retrieval, preserving existing Atlas backups.

## Continued checkpoint: one-exchange discussion coach

Added `/clinical/#discussion` and permanent-ID drill routes for all **252** authored exchanges across 60 Atlas cases. The actual total was counted from the catalogue; an earlier handover-only estimate of 200 was corrected. The bank supports concern/condition/medicine search, area/saved/due filters, a 12-row initial view and incremental browsing. Next-exchange selection prioritises due cards then new work and another case. The daily Structure Coach links here.

Each drill shows the fictional context, accepts a written or self-confirmed spoken attempt, then gives the full/shorter wording and reasoning. Full-wording help, explicit meaning/action self-check, hidden-wording retry, personal versions, a saved collection and dated UK-time recall are supported. Full models opened on the related Atlas case mark an unfinished matching attempt as supported. Feedback after an attempt is not retroactively counted as help. Personal and previous wording are hidden during unaided retrieval. No recordings, generated patients, automatic clinical marking or reminders are introduced.

`data.dialogue` is additive in the existing version-1 Atlas export/import. Drafts survive navigation/reload; timestamp merges preserve newer runs/notes/cards, including intentionally cleared personal text. Old backups do not erase drill records. Atlas imports now allow bounded valid files up to 20 MB and accept only actual published language-note IDs. Source discussion IDs must remain stable when wording changes; do not regenerate them after reordering.

Validation: the full validator includes `validate-discussion.cjs` for all 252 routes, guards, model exposure, retry, spacing, sanitisation, merge and old/new/extensive imports. `browser-discussion-coach.cjs` passes actual search/filter, independent/supported rating, cross-case next, personal wording concealment, typed draft reload, exact speech dispatch/fallback, real JSON import/export (including an extensive valid file), legacy preservation and mobile views. Existing Atlas discussion and cross-application learning browser regressions also pass. The previous mental-health content checkpoint b16f4ec deployed successfully in Actions run 43523176143.

Next: verify this publication and live new asset; then extend the next medical area or remaining patient-facing shorter examples without changing existing IDs.
