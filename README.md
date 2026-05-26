# CheFu Inc. Website

CheFu Inc. is a modern marketing website built with Next.js App Router, React, TypeScript, and Tailwind CSS v4.
It showcases company services across software development, AI solutions, and music production.

## Tech Stack

- React 19
- Next.js 15 App Router
- TypeScript 5
- Tailwind CSS 4 (`@tailwindcss/postcss`)
- Radix UI primitives + custom UI components
- MUI and Emotion (available in dependencies)

## Project Structure

```text
.
|- public/
|- src/
|  |- app/
|  |  |- about/page.tsx
|  |  |- components/
|  |  |- services/
|  |  |- layout.tsx
|  |  \- page.tsx
|  \- styles/
|- next.config.ts
|- postcss.config.mjs
|- tailwind.config.js
\- package.json
```

## Routing

Routes are defined with the Next.js App Router under `src/app`.

- `/` - Home
- `/about` - About
- `/services` - Services overview
- `/services/music` - Music services
- `/services/software` - Software services
- `/services/ai` - AI services
- `/portfolio` - Portfolio
- `/contact` - Contact
- `/careers` - Careers
- `/blog` - Blog/Insights
- `/faq` - FAQ
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `*` - Not Found

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm

### Install Dependencies

Using npm:

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Lint

```bash
npm run lint
```

## Styling

Global style entry is `src/styles/index.css`, which imports:

- `src/styles/fonts.css`
- `src/styles/tailwind.css`
- `src/styles/theme.css`

## Notes

- This project currently has no test script configured in `package.json`.
- Next.js writes production build artifacts to `.next/`.

## Careers Confirmation Emails (Resend HTTP API + Firebase Functions)

When a new document is added to `membershipApplications`, a Cloud Function sends a confirmation email to the applicant using the Resend HTTP API. This matches the email strategy used in CheFu Academy Web instead of relying on the Resend SDK package.

### Files Added

- `firebase.json`
- `functions/package.json`
- `functions/tsconfig.json`
- `functions/src/index.ts`
- `functions/src/emailUtils.ts`
- `functions/src/resendEmail.ts`

### Setup

1. Install Firebase Functions dependencies:

```bash
npm --prefix functions install
```

2. Set required secrets (server-side, not frontend `.env`):

```bash
firebase functions:secrets:set RESEND_API_KEY
firebase functions:secrets:set RESEND_FROM_EMAIL
```

Use a verified Resend sender for `RESEND_FROM_EMAIL` (for example: `Careers careers@yourdomain.com` or `Careers <careers@yourdomain.com>`).

3. Optional: configure a Resend template ID in `functions/.env` to send through Resend templates:

```bash
MEMBERSHIP_APPLICATION_TEMPLATE_ID=re_...
MEMBERSHIP_APPLICATION_FROM=Careers <careers@yourdomain.com>
MEMBERSHIP_APPLICATION_APP_NAME=CheFu Inc
MEMBERSHIP_APPLICATION_APP_URL=https://chefuinc.com
MEMBERSHIP_APPLICATION_SUPPORT_EMAIL=hello@chefuinc.com
```

If no `MEMBERSHIP_APPLICATION_TEMPLATE_ID` is configured, the function still sends the existing inline HTML/text confirmation through Resend's HTTP API.

4. Deploy functions:

```bash
firebase deploy --only functions
```

### Behavior

- Trigger: Firestore `onDocumentCreated` for `membershipApplications/{applicationId}`
- Sends: "We received your CheFu Inc application" to the applicant email
- Updates document fields:
  - `confirmationEmailStatus`: `sent` or `failed`
  - `confirmationEmailId`
  - `confirmationEmailError`
  - `confirmationEmailUpdatedAt`
