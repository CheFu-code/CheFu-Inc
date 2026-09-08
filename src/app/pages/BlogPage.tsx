'use client';

import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '../blog/blog-posts';

export function BlogPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Insights</h1>
          <p className="text-xl text-slate-400">
            Thoughts, stories, and ideas from the team at CHEFU TECHNOLOGIES
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
           <Link href={`/blog/${posts[0].slug}`} className="block">
             <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="relative rounded-3xl overflow-hidden aspect-[21/9] group cursor-pointer"
           >
              <Image
                src={posts[0].image} 
                alt={posts[0].title} 
                fill
                priority
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                 <div className="flex items-center gap-3 text-cyan-400 mb-4 text-sm font-semibold uppercase tracking-wider">
                    <Tag className="w-4 h-4" />
                    {posts[0].category}
                 </div>
                 <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors">
                   {posts[0].title}
                 </h2>
                 <p className="text-slate-300 text-lg mb-6 line-clamp-2">
                   {posts[0].excerpt}
                 </p>
                 <div className="flex items-center gap-6 text-sm text-slate-400">
                    <span className="flex items-center gap-2"><User className="w-4 h-4" /> {posts[0].author}</span>
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {posts[0].date}</span>
                 </div>
              </div>
             </motion.div>
           </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all group cursor-pointer flex flex-col h-full"
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
              <div className="p-6 flex flex-col flex-grow">
                 <div className="text-cyan-400 text-xs font-bold uppercase mb-2">{post.category}</div>
                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                 <p className="text-slate-400 text-sm mb-6 flex-grow">{post.excerpt}</p>
                 <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 group-hover:text-white transition-colors">Read Article <ArrowRight className="w-3 h-3" /></span>
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
