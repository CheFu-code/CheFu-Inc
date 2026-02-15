import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "The Future of AI in Music Mastering",
    excerpt: "How neural networks are learning to listen like professional audio engineers, and what this means for the industry.",
    date: "Oct 12, 2025",
    author: "Sarah Jenkins",
    category: "AI & Audio",
    image: "https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGJsb2clMjBoZWFkZXIlMjBkaWdpdGFsJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcwOTg3NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Optimizing React for Real-Time Audio Visualizers",
    excerpt: "A deep dive into WebAudio API and Canvas optimization techniques for high-performance browser-based visuals.",
    date: "Sep 28, 2025",
    author: "Alex Chen",
    category: "Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1080"
  },
  {
    id: 3,
    title: "Why We Switched to Rust for Our Core Audio Engine",
    excerpt: "Performance benchmarks and safety guarantees that made Rust the obvious choice for our new VST framework.",
    date: "Sep 15, 2025",
    author: "Marcus Thorne",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1080"
  },
  {
    id: 4,
    title: "Designing for Voice: UX Patterns for AI Assistants",
    excerpt: "Voice interfaces are becoming ubiquitous. Here are the key principles for designing natural, human-like conversations.",
    date: "Aug 30, 2025",
    author: "Elena Rodriguez",
    category: "Design",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1080"
  }
];

export function BlogPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Insights</h1>
          <p className="text-xl text-slate-400">
            Thoughts, stories, and ideas from the team at CheFu Inc.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="relative rounded-3xl overflow-hidden aspect-[21/9] group cursor-pointer"
           >
              <img 
                src={posts[0].image} 
                alt={posts[0].title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all group cursor-pointer flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
          ))}
        </div>
        
      </div>
    </div>
  );
}
