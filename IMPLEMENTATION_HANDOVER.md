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
