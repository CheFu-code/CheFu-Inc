import type { SVGProps } from 'react';
import { motion } from 'motion/react';
import { Database, Cloud, Globe, Smartphone, Lock } from 'lucide-react';

const techs = [
  { name: 'React & Next.js', icon: Globe },
  { name: 'Python & PyTorch', icon: BrainIcon }, // Custom defined below if needed, or reuse lucide
  { name: 'Cloud Infrastructure', icon: Cloud },
  { name: 'Node.js & GraphQL', icon: Database },
  { name: 'React Native', icon: Smartphone },
  { name: 'Cybersecurity', icon: Lock },
];

function BrainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

export function TechStack() {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Powered by Modern Technology</h3>
          <p className="text-slate-400">Our stack allows us to build fast, scalable, and intelligent solutions.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 transition-all cursor-default"
            >
              <tech.icon className="w-8 h-8 text-cyan-400 mb-3" />
              <span className="text-sm font-semibold text-slate-300 text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
