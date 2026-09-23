# Railway Project Hub Rules — MotionLab

## Identity
- Application: MotionLab
- Hub app number: App 01
- Hub slug: `motionlab`
- Repository: `https://github.com/Rishikeshsanin/animation-website`
- Railway project: `MotionLab`
- Railway project ID: `917d84ff-5ef4-4d64-9629-b731ab79d67b`
- Production environment: `production`
- Production service: `motionlab`
- Canonical Hub repository: `https://github.com/Rishikeshsanin/railway-project-hub`

## Mandatory read-first rule
Before any Railway change for MotionLab:
1. Read the canonical Railway Project Hub `README.md`, `AGENTS.md`, and `RAILWAY_HUB_RULES.md`.
2. Read this file and this repository's `AGENTS.md`.
3. Verify the exact Railway project, environment, service, source repository, domain, variables, volumes, and deployment status.
4. Operate only inside the resources registered to MotionLab.

If the canonical Hub repository is unavailable, do not create, delete, migrate, reconnect, or reconfigure Railway infrastructure. Read-only inspection is allowed.

## Allowed scope
MotionLab may modify only its own:
- Railway project and environments
- services and deployments
- app-specific variables and secrets
- domains
- volumes/databases if ever explicitly registered
- GitHub deployment connection
- app-specific monitoring

## Forbidden scope
Never:
- modify another application's Railway project, service, deployment, variables, secrets, domain, volume, database, or GitHub connection
- copy secrets from another app
- use another app's project because it has spare capacity
- create cross-app dependencies without explicit user approval and Hub documentation
- make organization-wide or shared-infrastructure changes for a MotionLab task
- delete or repurpose resources merely because they appear unused
- expose secrets in GitHub, logs, screenshots, URLs, frontend code, or chat

## Production safety
Use the sequence:
`read → identify → verify → plan → change → test → verify`.

For destructive or production-impacting actions, inspect dependencies and rollback first and obtain explicit user confirmation immediately before execution.

## Current architecture
MotionLab is frontend-only and currently requires no database, Supabase project, shared runtime, or cross-app service.

The canonical production deployment is the standalone Railway project `MotionLab`. Any duplicate MotionLab service found inside another Railway project is migration residue and must not be treated as canonical or deleted without the documented cleanup process.

## New resources
No new Railway resource may be created for MotionLab until it is documented in the canonical Hub registry with owner, purpose, environment, expected name, and isolation boundary.

## Safety priority
`Isolation > Security > Recoverability > Maintainability > Convenience`.
