import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1765408217331-6d73ee0fc260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGF1ZGlvJTIwd2F2ZSUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA5ODU2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Abstract Sound Wave"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-medium text-cyan-300 tracking-wide uppercase">
              Innovation meets Imagination
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight">
            Engineering Sound. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
              Building Intelligence.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We blend high-fidelity audio production with cutting-edge AI and software development to create immersive digital experiences for the future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-cyan-50 transition-colors flex items-center gap-2 group"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 rounded-full border border-slate-700 text-white font-medium hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              <PlayCircle className="w-4 h-4 text-cyan-400" />
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
