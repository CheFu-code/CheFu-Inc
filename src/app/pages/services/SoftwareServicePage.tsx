import React from 'react';
import { motion } from 'motion/react';
import { Code, Smartphone, Layout, Server, Database, GitBranch, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const processSteps = [
  { step: "01", title: "Discovery", desc: "We sit down to understand your business goals, target audience, and technical requirements." },
  { step: "02", title: "Architecture", desc: "Designing a scalable system blueprint, choosing the right stack (React, Node, Python, etc.)." },
  { step: "03", title: "Development", desc: "Agile sprints with regular check-ins. You see the progress as we build." },
  { step: "04", title: "Testing & QA", desc: "Rigorous automated and manual testing to ensure a bug-free launch." },
  { step: "05", title: "Deployment", desc: "Setting up CI/CD pipelines and launching to cloud infrastructure (AWS/Vercel)." },
];

export function SoftwareServicePage() {
  return (
    <div className="pt-20 bg-slate-950 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
         <div className="absolute inset-0 opacity-20">
            {/* Abstract grid pattern or code image */}
            <img 
               src="https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHVpJTIwZGVzaWduJTIwc2NyZWVufGVufDF8fHx8MTc3MDk4ODE5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
               alt="Code Background"
               className="w-full h-full object-cover"
            />
         </div>
         <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="mb-6 p-4 rounded-full bg-slate-800/50 backdrop-blur border border-slate-700"
            >
               <Code className="w-8 h-8 text-cyan-400" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
               Build Scalable Digital Products
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mb-8">
               From MVP to Enterprise. We engineer robust web and mobile applications that drive business growth.
            </p>
            <Link 
               to="/contact?service=Software%20Development"
               className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-cyan-50 transition-colors flex items-center gap-2"
            >
               Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
         </div>
      </div>

      {/* Tech Stack & Capabilities */}
      <div className="container mx-auto px-6 py-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
               <h2 className="text-3xl font-bold text-white mb-6">Full-Cycle Development</h2>
               <p className="text-slate-400 mb-6 text-lg">
                  We don't just write code; we build solutions. Our team handles everything from the initial UI/UX design to the backend infrastructure and database management.
               </p>
               <ul className="space-y-4">
                  {[
                     { icon: Layout, text: "Frontend: React, Next.js, Tailwind CSS" },
                     { icon: Server, text: "Backend: Node.js, Python, Go" },
                     { icon: Database, text: "Database: PostgreSQL, MongoDB, Redis" },
                     { icon: Smartphone, text: "Mobile: React Native, iOS, Android" },
                     { icon: GitBranch, text: "DevOps: Docker, Kubernetes, AWS" },
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-300">
                        <item.icon className="w-5 h-5 text-cyan-500" />
                        <span className="font-medium">{item.text}</span>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
               <img 
                  src="https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnQlMjB3aGl0ZWJvYXJkJTIwbWVldGluZ3xlbnwxfHx8fDE3NzA5ODgxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Team Whiteboarding" 
                  className="w-full h-auto"
               />
            </div>
         </div>

         {/* Process */}
         <div>
            <h2 className="text-3xl font-bold text-white text-center mb-16">Our Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
               {processSteps.map((step, i) => (
                  <div key={i} className="relative p-6 bg-slate-900 rounded-xl border border-slate-800 hover:bg-slate-800 transition-colors">
                     <div className="text-4xl font-black text-slate-800 mb-4 select-none absolute top-4 right-4 opacity-50">{step.step}</div>
                     <h3 className="text-lg font-bold text-white mb-2 relative z-10">{step.title}</h3>
                     <p className="text-sm text-slate-400 relative z-10">{step.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
