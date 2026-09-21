'use client';

import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '../blog/blog-posts';

export function BlogPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20 pt-32 text-slate-800">
      <div className="container mx-auto px-6">
        
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-6xl">Insights</h1>
          <p className="text-xl text-slate-600">
            Thoughts, stories, and ideas from the team at Chefu Technologies.
          </p>
        </div>

        <div className="mb-16">
           <Link href={`/blog/${posts[0].slug}`} className="block">
             <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="group relative aspect-[21/9] overflow-hidden rounded-3xl"
           >
              <Image
                src={posts[0].image} 
                alt={posts[0].title} 
                fill
                priority
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8 md:w-2/3 md:p-12">
                 <div className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-cyan-300">
                    <Tag className="h-4 w-4" />
                    {posts[0].category}
                 </div>
                 <h2 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-cyan-200 md:text-4xl">
                   {posts[0].title}
                 </h2>
                 <p className="mb-6 line-clamp-2 text-lg text-slate-200">
                   {posts[0].excerpt}
                 </p>
                 <div className="flex items-center gap-6 text-sm text-slate-300">
                    <span className="flex items-center gap-2"><User className="w-4 h-4" /> {posts[0].author}</span>
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {posts[0].date}</span>
                 </div>
              </div>
             </motion.div>
           </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1).map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-cyan-400/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image} 
                  alt={post.title} 
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-grow flex-col p-6">
                 <div className="mb-2 text-xs font-bold uppercase text-cyan-700">{post.category}</div>
                 <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-700">{post.title}</h3>
                 <p className="mb-6 flex-grow text-sm text-slate-600">{post.excerpt}</p>
                 <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 transition-colors group-hover:text-slate-900">Read Article <ArrowRight className="w-3 h-3" /></span>
                 </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
}
