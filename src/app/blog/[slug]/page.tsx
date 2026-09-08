import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../blog-posts";
import { siteName, siteUrl } from "../../site-metadata";

type BlogPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((item) => item.slug === slug);
    if (!post) return {};

    const url = `${siteUrl}/blog/${post.slug}`;
    return {
        title: `${post.title} | ${siteName}`,
        description: post.excerpt,
        alternates: { canonical: url },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url,
            siteName,
            type: "article",
            publishedTime: new Date(post.date).toISOString(),
            authors: [post.author],
            images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
    const { slug } = await params;
    const post = posts.find((item) => item.slug === slug);
    if (!post) notFound();

    const url = `${siteUrl}/blog/${post.slug}`;
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: [post.image],
        datePublished: new Date(post.date).toISOString(),
        author: { "@type": "Person", name: post.author },
        publisher: { "@type": "Organization", name: siteName, url: siteUrl },
        mainEntityOfPage: url,
    };

    return (
        <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-slate-200">
            <article className="mx-auto max-w-3xl">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
                />
                <Link href="/blog" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                    Back to insights
                </Link>
                <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-cyan-300">{post.category}</p>
                <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-6xl">{post.title}</h1>
                <p className="mt-6 text-xl leading-8 text-slate-400">{post.excerpt}</p>
                <div className="mt-6 text-sm text-slate-500">{post.author} · {post.date}</div>
                <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
                    <Image src={post.image} alt={post.title} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
                </div>
                <div className="prose prose-invert mt-10 max-w-none prose-lg">
                    {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
            </article>
        </main>
    );
}
