# RevuPulse

## Project Overview
RevuPulse is a SaaS tool that uses an AI agent to pull customer reviews from a single platform (starting with Google Reviews or Amazon), and generate a weekly report containing:
- Sentiment analysis
- Top 5 recurring complaints
- Top 5 strengths

## Current Phase: Landing Page Only (Validation)
We are currently in the demand validation phase — **we are not building the actual product yet**.

The only goal for this phase is to build a Landing Page to collect emails from interested users (waitlist), not to build any agent, review-platform integration, or actual analysis logic.

Do not start building any feature beyond the Landing Page scope (such as pulling reviews, sentiment analysis, dashboards, complex databases) unless explicitly requested by the user to move to the next phase.

## Tech Stack
- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Required Quality Standards

### Clean, Maintainable Code
- Clear naming, no unnecessary complexity, no premature abstractions.
- No comments explaining "what" the code does; only when there's a non-obvious reason (WHY).

### Secrets
- Never hardcode API keys or secrets directly in the code.
- Use `.env.local` for any sensitive environment variables, and never commit it to git.

### .gitignore
Must include at least the following from the start:
```
node_modules
.env*
.next
```

### Commit Messages
Follow the **Conventional Commits** standard, e.g.:
- `feat: add waitlist signup form`
- `fix: correct email validation regex`
- `chore: update gitignore`
- `docs: update README`

## Installed Skills (Global)

When a task needs any of the following, use the matching skill directly from its full path below without waiting for an explicit request to mention the path:

- **ui-ux-pro-max** — design database (colors, fonts, UI patterns). Path: `C:\Users\belal\.claude\skills\ui-ux-pro-max\scripts\search.py` (invoke with: `python [path] "query" --domain [style|color|icons|...]`)
- **taste-skill (design-taste-frontend)** — controls design boldness/motion/density via dials (DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY). Path: `C:\Users\belal\.claude\skills\taste-skill\`
- **copywriting** — rewrites marketing copy to be more specific and impactful instead of generic. Path: `C:\Users\belal\.claude\skills\copywriting\`
- **cro** (sometimes referred to as "page-cro") — conversion rate optimization at the CTA and microcopy level. Path: `C:\Users\belal\.claude\skills\cro\`

Important note: because Claude Code's automatic discovery of globally installed skills is limited, don't wait for an explicit mention of a skill's name or path in every request — if the requested task relates to any of the domains above (design, colors, marketing copy, conversion), assume the matching skill from this list should be used automatically, and state that explicitly in your response.
