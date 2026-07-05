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
