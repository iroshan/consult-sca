# Structure Coach implementation handover

## Completed scope

The coach extends the existing static Practice Studio and is linked prominently from its home page and navigation. Start at `/#structure/daily`; overview is `/#structure`.

- Six guided consultations: new headache/serious-illness concern, high HbA1c screening result, asthma control, emotional distress after separation, a parent's concern about eczema treatment, and dizziness/falls with medicine burden and access barriers.
- 74 authored exchanges: 12 per ordinary path plus emergency branches for sudden extremely painful headache and immediate suicide risk.
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
