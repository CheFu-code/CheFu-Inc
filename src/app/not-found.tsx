import { NotFoundPage } from "./pages/NotFoundPage";
import { noIndexMetadata } from "./site-metadata";

export const metadata = noIndexMetadata;

export default function NotFound() {
    return <NotFoundPage />;
}
