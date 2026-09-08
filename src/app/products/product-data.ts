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
        name: "Flow Mail",
        category: "Communication platform",
        image: "/flow-dashboard.png",
        href: "https://flow.chefu.co.za",
        description: "A focused mail workspace for sending, receiving, organizing, and managing product communication.",
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
