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
        image: "/infinity-logo.png",
        href: "https://infinity.chefu.co.za",
        description: "A sleek number-merging puzzle game built for fast, addictive mobile play and satisfying combo chains.",
    },
    {
        name: "CheFu Academy",
        category: "Learning platform",
        image: "/chefuAcademy.png",
        href: "https://academy.chefu.co.za",
        description: "A learning platform for courses, videos, quizzes, flashcards, downloads, and developer SDK access.",
    },
    {
        name: "Muzalo",
        category: "Music platform",
        image: "/muzalo-logo.svg",
        imageFit: "contain",
        href: "https://muzalo.chefu.co.za",
        description: "A music experience for discovering, organizing, and interacting with CHEFU audio products and releases.",
    },
];
