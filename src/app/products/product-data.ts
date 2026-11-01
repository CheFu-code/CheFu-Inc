export type CompanyProduct = {
    name: string;
    category: string;
    image: string;
    imageFit?: "contain";
    href: string;
    description: string;
};

export const companyProducts: CompanyProduct[] = [
    {
        name: "Quantum",
        category: "AI workspace",
        image: "/quantum-logo.svg",
        imageFit: "contain",
        href: "https://quantum.chefu.co.za",
        description: "An intelligent workspace for focused conversations, organized threads, and faster answers.",
    },
    {
        name: "Infinity",
        category: "Android game",
        image: "/infinity-logo.webp",
        href: "https://play.google.com/store/apps/details?id=co.za.chefu.infinity",
        description: "A sleek number-merging puzzle game built for fast, addictive mobile play and satisfying combo chains.",
    },
    {
        name: "Cloudence",
        category: "Cloud storage platform",
        image: "/cloudence.webp",
        href: "https://cloudence.chefu.co.za?utm_source=chefu&utm_medium=product&utm_campaign=cloudence",
        description: "A secure cloud storage platform for storing, managing, and accessing your files from anywhere.",
    },
    {
        name: "LiftWise",
        category: "AI Fitness and workout app",
        image: "/icon.webp",
        imageFit: "contain",
        href: "https://play.google.com/store/apps/details?id=co.za.chefu.liftwise",
        description: "A focused fitness companion for planning workouts, tracking progress, following exercise guidance, and building consistent training habits.",
    },
    {
        name: "Muzalo",
        category: "Offline music player",
        image: "/muzalo.webp",
        imageFit: "contain",
        href: "https://play.google.com/store/apps/details?id=co.za.chefu.muzalo",
        description: "An offline music player for organizing local songs, managing playlists, editing lyrics, and enjoying synced lyrics with full playback controls.",
    },
    {
        name: "Sudoku",
        category: "Offline puzzle game",
        image: "/sudoku.webp",
        imageFit: "contain",
        href: "https://play.google.com/store/apps/details?id=co.za.chefu.sudoku",
        description: "A calm, offline-first Sudoku game with five difficulty levels, pencil notes, fast modes, themes, timers, and undo support.",
    },
];
