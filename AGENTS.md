# MotionLab Agent Safety Contract

This repository is the application scope for **MotionLab**, which is currently archived from Railway.

## Identity
- Application: MotionLab
- Railway Hub app number: App 01
- Railway Hub slug: `motionlab`
- Repository: `https://github.com/Rishikeshsanin/animation-website`
- Railway status: **archived / no active application project**
- Canonical Hub: `https://github.com/Rishikeshsanin/railway-project-hub`

## Mandatory rules
1. Before any Railway write or restore, read `RAILWAY_HUB_RULES.md` and the canonical Railway Project Hub documentation.
2. Verify the current Hub registry and live Railway state; do not rely on historical project IDs.
3. Treat every other application as a separate customer and out of scope.
4. Never deploy MotionLab into the governance-only `Railway Project Hub` project.
5. A Railway restore requires a **new isolated MotionLab application project** unless the Hub explicitly documents a deliberate alternative.
6. Never modify another repository, Railway project, environment, service, deployment, variable, secret, domain, database, volume, or app data.
7. Never copy credentials between applications.
8. Prefer read-only inspection before writes and reversible changes before destructive changes.
9. Never expose or commit secrets.
10. Stop on any registry/live-state mismatch until it is reconciled.
11. Verify deployment health and application behavior after a future restore.
12. Destructive or production-impacting operations require explicit confirmation immediately before execution.

## Archive state
- Preserved source commit: `85e64bd1dd67148893290c5862a1187567b7e54e`
- Archive branch: `archive/pre-railway-retirement-2026-09-23`
- Restore metadata: `railway-project-hub/backups/motionlab/2026-09-23/`

The former MotionLab Railway project ID was repurposed as the governance-only Railway Project Hub after MotionLab's service was removed. It is **not** an active MotionLab resource.
