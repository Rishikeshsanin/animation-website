# Railway Project Hub Rules — MotionLab

## Identity
- Application: MotionLab
- Hub app number: App 01
- Hub slug: `motionlab`
- Repository: `https://github.com/Rishikeshsanin/animation-website`
- Status: **archived**
- Active Railway project: **none**
- Canonical Hub repository: `https://github.com/Rishikeshsanin/railway-project-hub`

## Historical Railway identity
Former project:
- name: `MotionLab`
- project ID: `917d84ff-5ef4-4d64-9629-b731ab79d67b`
- environment ID: `bca2ecae-b4dd-4047-87da-428b96be0270`

Former service:
- name: `motionlab`
- service ID: `048331c3-43df-4bbb-a1a5-1cea4adcfc5d`
- former generated domain: `motionlab-production-2310.up.railway.app`

These are historical identifiers only.

The former project container was emptied and renamed to **Railway Project Hub**. Therefore project ID `917d84ff-5ef4-4d64-9629-b731ab79d67b` must never be treated as a MotionLab application project again unless the Hub records a future lifecycle change.

## Mandatory read-first rule
Before any Railway restore/change for MotionLab:
1. Read the canonical Railway Project Hub `README.md`, `AGENTS.md`, and `RAILWAY_HUB_RULES.md`.
2. Read this file and this repository's `AGENTS.md`.
3. Verify App 01's current status in `registry/apps.json`.
4. Verify live Railway state read-only.
5. Stop if declared and observed state disagree.

## Restore rule
MotionLab currently has no active Railway runtime.

A future Railway restore must:
- use the preserved source/archive,
- create a **new isolated MotionLab Railway project**,
- keep ReturnReview and all other applications out of scope,
- never use the governance-only Railway Project Hub as an app runtime,
- verify new project/environment/service/domain IDs,
- update the Hub registry and changelog only after live verification.

## Forbidden scope
Never:
- modify another application's Railway project or resources
- deploy MotionLab inside Railway Project Hub
- infer current ownership from a historical project/service name or ID
- reuse another app's credentials or persistence
- create cross-app dependencies without explicit approval and Hub documentation
- expose secrets in GitHub, logs, screenshots, URLs, frontend code, or chat

## Archive / recovery
- Preserved source commit: `85e64bd1dd67148893290c5862a1187567b7e54e`
- Archive branch: `archive/pre-railway-retirement-2026-09-23`
- Hub backup path: `backups/motionlab/2026-09-23/`

## Safety priority
`Isolation > Security > Recoverability > Maintainability > Convenience`.
