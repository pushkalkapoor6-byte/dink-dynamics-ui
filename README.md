# Dink Dynamics · UI mockup

Clickable UI mockup of the Dink Dynamics pickleball academy platform, operated by Momentum Sports. This is **Phase 0** of the build plan: the internal team reviews it before any production code is written.

**Everything here is sample data.** Names, prices, levels, GSTIN and figures are placeholders until Momentum Sports confirms them. Nothing is saved; refreshing the page resets it.

## Roles and screens

| Role | Screens |
| --- | --- |
| Player | Home, Book (group and private), My sessions, Session detail, Progress, Payments, Profile |
| Parent | Home, Child's progress, Payments, Consent and safety |
| New player | 4-step sign-up (OTP, profile, experience, waiver and trial) |
| Coach | Today, Attendance, Session log, My players, Player profile, Schedule, Earnings |
| Head Coach | Overview, Batches, Assessments, Programme, Coach quality, At-risk players |
| Venue Manager | Desk and court board, Record payment, Walk-in sign-up, Daily cash-up |
| Super Admin | Dashboard, Finance, Pricing and policies, Staff, Venues, Communications, Audit log |

## How to review

1. Open the live link (GitHub Pages) on a phone and on a laptop.
2. Pick a role from the start page and click through.
3. Give feedback per screen using the role and the screen name shown in the top bar, for example "Coach · Session log".

## Run locally

No build step. Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Files

- `index.html` · entry page
- `styles.css` · design tokens (swap brand colours here) and components
- `data.js` · all sample data
- `core.js` · router, app shell, icons, charts
- `screens-player.js`, `screens-coach.js`, `screens-admin.js` · screens by role

## Next

After internal feedback, Phase 1 builds the production app (Next.js + Supabase) for one venue.
