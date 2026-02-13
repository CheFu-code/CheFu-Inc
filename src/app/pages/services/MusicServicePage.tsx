import React from 'react';
import { motion } from 'motion/react';
import { Mic2, Headphones, Layers, Volume2, Calendar, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricing = [
  {
    title: "Basic Mix",
    price: "$150",
    features: ["Standard 2-track mix", "Vocal tuning (Melodyne)", "Mastering included", "2 revisions"],
    recommended: false,
  },
  {
    title: "Full Production",
    price: "$500",
    features: ["Custom beat production", "Full session mix (stems)", "Advanced vocal production", "Unlimited revisions"],
    recommended: true,
  },
  {
    title: "Album Package",
    price: "Custom",
    features: ["Full EP/Album production", "Dedicated engineer", "Sonic branding consultation", "Priority scheduling"],
    recommended: false,
  },
];

export function MusicServicePage() {
  return (
    <div className="pt-20 bg-slate-950 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1675292310383-0f4ef53fa3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBtaXhpbmclMjBjb25zb2xlJTIwbmVvbiUyMGxpZ2h0c3xlbnwxfHx8fDE3NzA5ODgxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Studio Mixing Console" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Sonic Perfection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Industry-standard mixing, mastering, and production for artists who demand the best.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/contact?service=Audio%20Production" 
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full transition-colors inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" /> Book a Session
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {[
            { icon: Mic2, title: "Recording", desc: "State-of-the-art vocal booth and microphone locker including Neumann U87 and Manley Ref C." },
            { icon: Layers, title: "Mixing", desc: "Hybrid analog/digital workflow ensuring warmth, punch, and clarity for every stem." },
            { icon: Volume2, title: "Mastering", desc: "Final polish to ensure your tracks translate perfectly across all streaming platforms." },
            { icon: Radio, title: "Sound Design", desc: "Custom foley and synthesis for games, films, and immersive experiences." },
            { icon: Headphones, title: "Beat Production", desc: "Genre-bending instrumentals tailored to your unique artist identity." },
          ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors"
             >
               <item.icon className="w-10 h-10 text-cyan-400 mb-4" />
               <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
               <p className="text-slate-400">{item.desc}</p>
             </motion.div>
          ))}
        </div>

        {/* Pricing / Packages */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Production Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-2xl border ${plan.recommended ? 'bg-slate-800 border-cyan-500 shadow-xl shadow-cyan-900/20' : 'bg-slate-900 border-slate-800'} flex flex-col`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/contact?service=Audio%20Production&package=${plan.title}`}
                  className={`w-full py-3 rounded-lg font-bold text-center transition-colors ${plan.recommended ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400' : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'}`}
                >
                  Choose {plan.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
