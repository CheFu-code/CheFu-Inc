import { pageMetadata } from "../../site-metadata";
import { AppPrivacyPolicy } from "../AppPrivacyPolicy";
import { sudokuSections } from "./policy";

export const metadata = pageMetadata({
    title: "Sudoku Privacy Policy",
    description: "How Sudoku handles local saved games, progress, Sentry diagnostics and session replay, Expo updates and privacy requests.",
    path: "/privacy/sudoku",
});

export default function Page() {
    return <AppPrivacyPolicy
        appName="Sudoku"
        summary="Puzzles, saved games and progress are handled on your device. The app also uses Sentry for diagnostics and session replay, and Expo for update checks; these services receive information online."
        sections={sudokuSections}
    />;
}
