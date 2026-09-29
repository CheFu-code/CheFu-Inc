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
        href: "https://play.google.com/store/apps/details?id=co.za.chefu.infinity",
        description: "A sleek number-merging puzzle game built for fast, addictive mobile play and satisfying combo chains.",
    },
    {
        name: "Cloudence",
        category: "Cloud storage platform",
        image: "/cloudence.png",
        href: "https://cloudence.chefu.co.za?utm_source=chefu&utm_medium=product&utm_campaign=cloudence",
        description: "A secure cloud storage platform for storing, managing, and accessing your files from anywhere.",
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
