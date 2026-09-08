export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    image: string;
    content: string[];
};

export const posts: BlogPost[] = [
    {
        slug: "the-future-of-ai-in-music-mastering",
        title: "The Future of AI in Music Mastering",
        excerpt: "How neural networks are learning to listen like professional audio engineers, and what this means for the industry.",
        date: "Oct 12, 2025",
        author: "Sarah Jenkins",
        category: "AI & Audio",
        image: "https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGJsb2clMjBoZWFkZXIlMjBkaWdpdGFsJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcwOTg3NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        content: [
            "AI-assisted mastering is changing how producers evaluate loudness, dynamics, and translation across listening environments.",
            "The strongest workflows keep engineers in control while using machine learning to surface patterns, compare references, and reduce repetitive tasks.",
        ],
    },
    {
        slug: "optimizing-react-for-real-time-audio-visualizers",
        title: "Optimizing React for Real-Time Audio Visualizers",
        excerpt: "A deep dive into WebAudio API and Canvas optimization techniques for high-performance browser-based visuals.",
        date: "Sep 28, 2025",
        author: "Alex Chen",
        category: "Development",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1080",
        content: [
            "Real-time visualizers need a clear boundary between React state and the animation loop. Keep high-frequency drawing work on Canvas and use React for controls and composition.",
            "Stable dimensions, selective rendering, and measured device-pixel-ratio limits help visual experiences remain responsive on both desktop and mobile hardware.",
        ],
    },
    {
        slug: "why-we-switched-to-rust-for-our-core-audio-engine",
        title: "Why We Switched to Rust for Our Core Audio Engine",
        excerpt: "Performance benchmarks and safety guarantees that made Rust the obvious choice for our new VST framework.",
        date: "Sep 15, 2025",
        author: "Marcus Thorne",
        category: "Engineering",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1080",
        content: [
            "Audio engines benefit from predictable performance and strong control over memory. Rust gives the team those properties while retaining a productive modern toolchain.",
            "The migration is most valuable when it is guided by profiling and clear module boundaries rather than by language preference alone.",
        ],
    },
    {
        slug: "designing-for-voice-ux-patterns-for-ai-assistants",
        title: "Designing for Voice: UX Patterns for AI Assistants",
        excerpt: "Voice interfaces are becoming ubiquitous. Here are the key principles for designing natural, human-like conversations.",
        date: "Aug 30, 2025",
        author: "Elena Rodriguez",
        category: "Design",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1080",
        content: [
            "Voice interfaces work best when users can understand what the system heard, what it is doing, and how to recover from an incorrect interpretation.",
            "Good conversational design uses concise prompts, visible state, and a clear path back to conventional controls when speech is not the right input method.",
        ],
    },
];
