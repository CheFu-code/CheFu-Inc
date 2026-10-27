# Sudoku policy review — 27 October 2026

This accompanies `/privacy/sudoku` and `/terms/sudoku`. Reviewed the actual Sudoku implementation rather than relying on its old PRIVACY.md, which incorrectly claimed that no information was collected or transmitted and listed the original developer's email. That document now summarises the hosted notice and uses our privacy contact.

## Evidence for the public text

| Source in the Sudoku repository | Behaviour reflected in the documents |
| --- | --- |
| `src/app/_layout.tsx` | Sentry starts at module load, with `sendDefaultPii: true`, logging, 0.1 ordinary replay sampling, 1.0 error-associated replay sampling and feedback integration. No separate diagnostics switch, consent gate, age check or production-only guard. |
| Installed `@sentry/react-native/dist/js/replay/mobilereplay.js` | Default text/image/vector masking; replay is unsupported in Expo Go and non-mobile environments. The notice does not promise complete masking or universal platform support. |
| `app.json`, Android manifest and installed Expo downloader | Update checks on launch; platform/runtime/update headers and a generated EAS installation identifier. Updates and assets can be cached. |
| `src/data/index.ts`, `data/kv/MmkvKeyValueStore.ts`, local game/stat repositories and `state/gameSerialization.ts` | Bundled puzzles and SQLite-backed local saves, board/notes, time, mistakes, hints, undo/redo, played IDs, best times, achievements and unlocked difficulties. No account, cloud game sync or remote solver. |
| `src/state/persist.ts` and `persist.web.ts` | Native settings use an in-memory Map; web settings use localStorage. Durable native game records use a separate store. The policy does not promise durable native preferences. |
| Settings `AppVersionInfo.tsx`, `InfoSection.tsx` and `SettingsScreen.tsx` | Tap-to-write app/build/OS clipboard details; no clipboard read. Settings opens external links and reports link-opening exceptions to Sentry. |
| Android `allowBackup=true` | Clearing/uninstalling cannot be represented as guaranteed deletion of backups or automatic erasure of already-sent provider records. |

The existing company retention/contact instructions are used. The repository's all-ages description and the established parental-permission approach are reflected without inventing a completed verification process, minimum age or fixed Sentry retention period. Sudoku has no account to delete; requests about online records go to the privacy inbox.

## Operational work still needed

1. Assess automatic diagnostics, available personal-information context and replay against the intended audience and regional law before a children's release. A truthful policy does not establish a lawful basis or verified parental consent. Review minimisation and age/consent controls where required.
2. Confirm actual Sentry retention, access, regions, processing agreements and deletion processes, plus the relevant Expo records and transfer safeguards. The ingestion hostname is not proof of all processing locations. No provider dashboard settings were verified or changed.
3. The Android manifest declares microphone, legacy storage and overlay permissions despite no reviewed gameplay feature using them. Audit unnecessary permissions and align app-store disclosures with the final build. Permission configuration was not changed by this document task.
4. Verify Settings links after publishing the company site. Privacy and terms now point to `https://www.chefu.co.za/privacy/sudoku` and `https://www.chefu.co.za/terms/sudoku`. The existing About destination remains separate.
5. Review terms presentation, acceptance and parental authorisation in the actual distribution flow. No agreement-recording or consent UI was added.

## Additional primary references

- [FTC COPPA FAQs](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions): the current page identifies the 2025 amendment and directs readers to the revised rule. Assess notice, consent, exceptions and retention for covered children's collection.
- [Sentry React Native data collection](https://docs.sentry.io/platforms/react-native/data-management/data-collected/) and installed SDK code: distinguish technical reporting, available PII context and replay defaults.
- [Expo client installation identifiers](https://docs.expo.dev/eas/observe/reference/client-id/): generated pseudonymous installation IDs are shared with EAS client libraries including expo-updates and may survive through backup restore.
- [Expo SDK 56 reference](https://docs.expo.dev/versions/v56.0.0/): read as required by Sudoku's AGENTS.md before changing its link component. The repository currently installs SDK 57 packages; existing API usage was checked locally.

This change adds public documents and discovery metadata, updates Settings links and corrects repository privacy documentation. It does not alter gameplay, native permissions, diagnostics or update behaviour. It is not a certification of international legal compliance; review the documents and actual app flows together before relying on them for distribution.
