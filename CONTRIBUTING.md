### Contributing Guide

Thank you for your interest in contributing! This project aims to help job-seekers share a modern, minimal professional infographic.

## Local Setup
- Prereqs: Node 18+, pnpm
- Commands:
  - `pnpm install`
  - `pnpm dev`
  - `pnpm build && pnpm start`

## Branching & Commits
- Create feature branches from `main` using prefixes:
  - `feat/short-description`
  - `fix/short-description`
  - `docs/short-description`
  - `chore/short-description`
- Use Conventional Commits:
  - `feat: add strengths grid`
  - `fix: correct manifest icon path`
  - `docs: expand README with troubleshooting`

## Pull Requests
- Keep PRs focused and small; describe user-facing changes.
- Include screenshots or short clips when UI changes.
- Ensure `pnpm build` and `pnpm lint` pass locally.
- Link related issues (e.g., `Closes #123`).

## Code Style & Quality
- TypeScript strict mode; avoid `any`.
- Functional React components with Hooks.
- Tailwind CSS utility classes only; prefer shadcn/ui primitives.
- Accessibility: keyboard navigation and focus styles.

## Testing (optional but encouraged)
- Add/maintain basic Playwright tests for modals, dialogs, and keyboard navigation.

## Reporting Issues
- Use GitHub Issues with the provided templates (`Bug Report`, `Feature Request`).

## Conduct
- By participating, you agree to abide by our `CODE_OF_CONDUCT.md`.


