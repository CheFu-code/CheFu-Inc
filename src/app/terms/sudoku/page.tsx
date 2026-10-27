import { pageMetadata } from "../../site-metadata";
import { AppTermsOfService } from "../AppTermsOfService";
import { sudokuTerms } from "./terms";

export const metadata = pageMetadata({
    title: "Sudoku Terms of Service",
    description: "Terms for playing Sudoku, including local progress, hints, device storage, automatic updates, online diagnostics and consumer rights.",
    path: "/terms/sudoku",
});

export default function Page() {
    return <AppTermsOfService
        appName="Sudoku"
        summary="These terms explain how you may use our puzzle game, how local saves and progress work, and the limitations of hints, updates and online services."
        importantPoints="Your saved games and progress are stored on your device without an account or cloud recovery service from us. Clearing storage can remove them. Puzzle hints and difficulty ratings can contain errors. Sentry diagnostics and session replay start automatically when the app starts; read the Privacy Policy before use, particularly on a child's device."
        sections={sudokuTerms}
    />;
}
