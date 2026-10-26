# App policy review — 27 October 2026

This accompanies `/privacy/muzalo`, `/privacy/liftwise`, `/terms/muzalo` and `/terms/liftwise`. It records the evidence and work still needed for international distribution. The expanded pages are not a certification of legal compliance or a guarantee against claims. Have a lawyer experienced in the intended markets review the documents together with the actual app flows before relying on them for an international children's launch.

## Confirmed business instructions

- Both apps are intended for international distribution and children may use them.
- A parent or guardian must authorise children's online/account features.
- The business owner heads the company and is the public Information Officer contact through `privacy@chefu.co.za`. Registration has not been confirmed; the pages do not claim it is complete.
- The business and legal-notices address was confirmed; the latest address entered in the operator component is `145 Ka-Dinga, Malamulele, Limpopo, 0982, South Africa`.
- The privacy inbox handles app-data deletion requests. Our SSO offers shared-sign-in deletion at `https://myaccount.chefu.co.za/account?section=security`.
- Retention is based on the actual service purpose, with deletion or de-identification when no longer needed or a verified request is handled, except relevant records needed for a specific legal obligation or claim. No fixed deletion SLA or provider retention setting was supplied.

## Evidence used for the notices

| Area | Implementation reviewed | Consequence for the text |
| --- | --- | --- |
| Muzalo local library | `muzalo/tools/db.ts`, `syncFolder.ts`, `store/usePlayerStore.ts` | Audio indexing, playlists, listening counts, lyrics and playback state stay locally; no hosted library backup is represented. |
| Muzalo external requests | `muzalo/tools/fetchLyrics.ts`, `downloadManager.ts` | LRCLIB receives artist/title; download hosts receive file requests. Folder deletion differs from app-storage deletion. |
| LiftWise account | `liftwise/src/lib/chefu-session.ts`, `chefu-auth.ts`, `onboarding-profile.ts` | Our SSO supplies identity/profile information. Mobile credentials use secure storage; web sessions use local storage. |
| LiftWise records | `liftwise/src/lib/api.ts`, `workout-journal.ts`, `query-persistence.ts` and backend LiftWise services | Synced history differs from device drafts, caches and queued completions. Workout deletion preserves completed-session snapshots. |
| Cover images | Backend `liftwise.service.ts` and `common/cloudinary-storage.service.ts` | Selected covers are uploaded to Cloudinary using ordinary delivery URLs, not authenticated image delivery. |
| Diagnostics | `liftwise/src/app/_layout.tsx` | Production Sentry has `sendDefaultPii: true`, logs, 10% normal-session replay sampling and error-triggered replay. There is no app consent gate or opt-out in that initialisation. |
| AI Coach | Backend `liftwise-catalog.service.ts` | Optional Gemini calls use catalogue exercise descriptions, not the user's workout history or profile. |
| Shared-account deletion | Backend `auth-security.routes.ts`, including `clearAccountDeletionDocuments` | Removes shared authentication and security records but does not recursively erase LiftWise records and covers. The notice distinguishes those actions. |

## Operational and legal gaps to resolve

1. **Parental authorisation before collection.** Neither app currently verifies parental permission. Determine the actual audience and jurisdictions, design appropriate age/parent handling, and prevent collection or third-party disclosure that needs authorisation until it is obtained. A policy statement or a child pressing an acceptance button is not the verification process. Muzalo's external lyrics requests also need assessment; local-only playback and online disclosure are different activities.

2. **Children's diagnostics and privacy defaults.** Review Sentry personal-information collection, replay, feedback and logs before international children's use. Decide which diagnostics are necessary, what consent or another lawful basis applies, and which collection should be disabled or gated. Do not rely on replay masking as proof of anonymisation. Do not label an email request as an existing in-app opt-out. Review whether publicly retrievable cover images are appropriate for children and whether delivery needs authentication.

3. **Health and fitness data.** Establish whether the data and intended use trigger special-category or sensitive-data conditions in each market. Document the actual ground for each processing purpose. Contract or legitimate interests alone may not satisfy an additional condition for health information or children's information. Justify the necessity of required onboarding fields, including gender, and shared-profile reuse; making a field mandatory in code does not establish its legal necessity.

4. **Retention and deletion execution.** Set and implement schedules for workouts, histories, covers, support reports, account tombstones, logs, replays, backups and local queues. Check the actual Sentry retention settings and provider deletion processes. Assign someone to process verified deletion requests across Firestore, Cloudinary, Sentry and correspondence. A possible future legal need is not a retention schedule. Do not promise automatic cross-service erasure until it exists.

5. **Providers and transfers.** Inspect the actual processing agreements, subprocessors, configured storage regions and transfer mechanisms. Public provider privacy pages do not establish that signed contractual safeguards exist. Children's or sensitive data can have extra international-transfer conditions. Assess whether an EU/UK representative, a DPO or other regional contact is legally required and supply actual details where required.

6. **Information Officer and access requests.** Confirm the company head's officer status and complete the Regulator registration process as required. Check PAIA-manual and related publication duties. Keep a documented, proportionate identity-verification, access, correction, objection and complaint process with the deadlines applicable to the requester.

7. **Terms presentation and records.** Review how terms and material risks are presented before agreement or relevant activity. The website now displays important limitations prominently, but the mobile flows have not been changed to collect and retain evidence of agreement or parental authorisation. A footer link alone is not assumed sufficient. Review exercise notices and international consumer protections without relying on a blanket injury waiver.

8. **Security and incident handling.** Validate access restrictions, public cover-image choices, local-device storage, credential handling, provider contracts and incident response. The public pages intentionally make no claim of a security audit, universal encryption at rest, breach immunity or a notification process already exercised.

9. **Regional disclosures.** International availability does not automatically trigger every country's statute, but audience, targeting, monitoring, age and business thresholds matter. Assess applicable US state privacy and consumer-health laws as well as federal children's rules, EU/EEA, UK and South African requirements. Do not publish a claim of universal compliance or invent regional representatives, opt-out tools or retention periods.

## Official sources consulted

- [POPIA — government-published Act](https://www.dcs.gov.za/wp-content/uploads/POPIA-Act-5.pdf): lawful grounds, notices, retention, security, rights, children and international transfers (sections 11, 14, 18–24, 34–35 and 72).
- [Information Regulator — officer registration and duties](https://inforegulator.org.za/portal-posts/): the head's default role and the separate registration requirement.
- [Information Regulator — contacts and complaints](https://inforegulator.org.za/contact-us/): public complaints channel used in the privacy notices.
- [Consumer Protection Act — government-published Act](https://www.gov.za/sites/default/files/32186_467.pdf): plain language, unfair terms, prominent risk/limitation notices and prohibited exclusions (sections 22 and 48–51). The applicable amended law must be checked for the final legal review.
- [Electronic Communications and Transactions Act — official legislation page](https://www.gov.za/documents/electronic-communications-and-transactions-act): supplier disclosures and transaction obligations where applicable, including section 43.
- [GDPR — EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/ojv): assess territorial scope, lawful grounds, children's consent, sensitive information, notices, rights, representatives and transfers. These are conditions to assess, not confirmed compliance findings.
- [FTC — current COPPA FAQs](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions) and [compliance plan](https://www.ftc.gov/business-guidance/resources/childrens-online-privacy-protection-rule-six-step-compliance-plan-your-business): evaluate coverage, notice, verifiable parental consent, minimisation, retention and security for covered US children's collection.
- [ICO — introduction to the Children's Code](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/introduction-to-the-childrens-code): assess services likely to be used by UK children, including services operated outside the UK.

## Scope of this change

The work expands public notices and terms, adds formal operator/contact details, readable data-flow tables and prominent pre-use information, and preserves the distinction between actual features and legal requirements. It does not register an officer, sign provider contracts, appoint regional representatives, implement age assurance, change diagnostics collection or add a cross-service deletion workflow.
