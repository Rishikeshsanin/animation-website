# MotionLab Agent Safety Contract

This repository is the only application scope for **MotionLab**.

## Identity
- Application: MotionLab
- Railway Hub app number: App 01
- Railway Hub slug: `motionlab`
- Repository: `https://github.com/Rishikeshsanin/animation-website`
- Railway project: `MotionLab`

## Mandatory rules
1. Before any Railway write, read `RAILWAY_HUB_RULES.md` and the canonical Railway Project Hub documentation.
2. Treat every other application as a separate customer and out of scope.
3. Never modify another repository, Railway project, environment, service, deployment, variable, secret, domain, database, volume, or app data.
4. Never copy credentials between applications.
5. Do not create a new Railway project/service/resource until the Hub registry and required documentation exist first.
6. Prefer read-only inspection before writes and reversible changes before destructive changes.
7. Never expose or commit secrets.
8. Stop if scope is ambiguous or a change could affect shared/project-wide infrastructure.
9. Verify deployment health and application behavior after meaningful changes.
10. Destructive or production-impacting operations require explicit confirmation immediately before execution.

## Current architecture
MotionLab is frontend-only and its canonical deployment is the standalone Railway `MotionLab` project. It has no intended dependency on ReturnReview or any other application.
