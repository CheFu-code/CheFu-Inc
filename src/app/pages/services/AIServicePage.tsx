import { motion } from 'motion/react';
import { Brain, Sparkles, Bot, LineChart, FileCode2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AIServicePage() {
  return (
    <div className="pt-20 bg-slate-950 min-h-screen">
      {/* Hero */}
      <div className="relative min-h-[70vh] flex flex-col justify-center px-6">
         <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-slate-950/80 z-10" />
             <img 
                src="https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbiUyMDNkJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcwOTg4MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Neural Network"
                className="w-full h-full object-cover"
             />
         </div>

         <div className="container mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-medium text-sm mb-6">
                  <Sparkles className="w-4 h-4" /> AI-First Solutions
               </div>
               <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Intelligent Systems for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Complex Problems</span>
               </h1>
               <p className="text-xl text-slate-400 mb-8 max-w-lg">
                  Harness the power of Machine Learning, NLP, and Computer Vision to automate workflows and gain predictive insights.
               </p>
               <div className="flex flex-wrap gap-4">
                  <Link 
                     to="/contact?service=AI%20Solution"
                     className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-violet-900/20 transition-all"
                  >
                     Consult with an Expert
                  </Link>
                  <Link 
                     to="/portfolio"
                     className="px-8 py-4 bg-slate-900 text-white border border-slate-700 font-medium rounded-lg hover:bg-slate-800 transition-colors"
                  >
                     View Case Studies
                  </Link>
               </div>
            </motion.div>
            
            {/* Abstract Graphic Representation */}
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative hidden lg:block"
            >
               <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-600 rounded-full blur-[100px] opacity-20 animate-pulse" />
                  <div className="relative z-10 grid grid-cols-2 gap-4">
                     {[
                        { icon: Bot, title: "Chatbots", desc: "Natural Language Processing" },
                        { icon: LineChart, title: "Analytics", desc: "Predictive Models" },
                        { icon: Brain, title: "Deep Learning", desc: "Neural Networks" },
                        { icon: FileCode2, title: "Automation", desc: "Intelligent Workflows" },
                     ].map((item, i) => (
                        <div key={i} className="bg-slate-900/80 backdrop-blur p-6 rounded-2xl border border-slate-700 shadow-xl">
                           <item.icon className="w-8 h-8 text-violet-400 mb-3" />
                           <h3 className="text-white font-bold">{item.title}</h3>
                           <p className="text-xs text-slate-400">{item.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
         </div>
      </div>

      {/* Industries */}
      <div className="py-24 bg-slate-900">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-16">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {['Healthcare', 'Finance', 'E-Commerce', 'Entertainment'].map((ind, i) => (
                  <div key={i} className="p-8 bg-slate-950 rounded-xl text-center border border-slate-800 hover:border-violet-500 transition-colors cursor-default group">
                     <h3 className="text-xl font-bold text-slate-300 group-hover:text-white">{ind}</h3>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
