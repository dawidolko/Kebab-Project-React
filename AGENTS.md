# AGENTS.md

Guide for agents working on the Kebab House site. Add a section per area as conventions
emerge — do not pad sections with content that is not established yet.

## What this project is

A restaurant menu and ordering front end built with React and SCSS: a browsable
menu organised by category, a shopping cart with live totals, and a responsive
layout aimed at mobile ordering.

Read [README.md](README.md) first — it documents the architecture and the
commands used day to day.

## Language

**UI copy and code comments are English.** Labels, buttons, validation messages,
page titles, empty states and error text are all English. User-supplied data is
rendered exactly as entered and never normalised.

## Comments

Comments explain **why**, not what. The code already says what it does.

- Use multi-line block comments for anything that needs explaining; avoid
  trailing one-line comments tacked onto the end of a statement.
- A comment that restates the code is deleted rather than reworded.
- Document the constraint, the trade-off or the failure mode that made the code
  look the way it does — that is the part a reader cannot recover from the code.

## Accessibility

Non-negotiable, and cheap if you keep to the existing components:

- Never remove the global `:focus-visible` outline.
- Decorative icons are `aria-hidden="true"`; a meaningful icon gets a
  visually-hidden text equivalent.
- One `<h1>` per page and no skipped heading levels.
- Every page has `<header>`, `<nav>`, `<main id="main-content">` and `<footer>`,
  with a skip link as the first focusable element.
- Every form control has an associated label; errors use `role="alert"`.
- Honour `prefers-reduced-motion`.

## Before finishing

- [ ] `npm run build` succeeds.
- [ ] Keyboard focus is visible on every interactive element.
- [ ] No secrets committed.
- [ ] Copy is English.
