import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Briefcase, Coffee, Zap, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  { icon: Zap, title: "Cutting-Edge Tech", desc: "Work with the latest AI models, audio engines, and web frameworks." },
  { icon: Clock, title: "Flexible Hours", desc: "We value output over hours. Work when you are most creative." },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive insurance and mental health support." },
  { icon: Coffee, title: "Creative Environment", desc: "Office studio access and jam sessions every Friday." },
];

const openPositions = [
  {
    id: 1,
    title: "Senior AI Research Scientist",
    department: "Artificial Intelligence",
    location: "Remote / Tech City",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Audio Software Engineer (C++)",
    department: "Engineering",
    location: "Tech City",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Product Designer (UI/UX)",
    department: "Design",
    location: "Remote",
    type: "Contract",
  },
  {
    id: 4,
    title: "Frontend Developer (React)",
    department: "Engineering",
    location: "Tech City",
    type: "Full-time",
  },
];

export function CareersPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase mb-4 block">Join the Team</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Build the Future of Sound & Code
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            At CheFu Inc, we are looking for visionaries who aren't afraid to break things to make them better. Join a team where art meets algorithm.
          </p>
        </div>

        {/* Culture / Image */}
        <div className="mb-24 relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1632813822486-d72529dddbdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGFydHVwJTIwb2ZmaWNlJTIwY3VsdHVyZSUyMGhhcHB5JTIwdGVhbSUyMHdvcmtpbmd8ZW58MXx8fHwxNzcwOTg3NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="CheFu Culture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-10 md:p-16">
            <h2 className="text-3xl font-bold text-white mb-4">Culture First</h2>
            <p className="text-slate-200 max-w-xl">
              We believe that great work comes from happy people. We foster an inclusive, experimental, and fun environment where your ideas matter more than your job title.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900 rounded-xl border border-slate-800"
            >
              <item.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer"
              >
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{job.title}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-slate-400">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPinIcon className="w-4 h-4" /> {job.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                   <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">
                      {job.type}
                   </span>
                   <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Don't see your role?</p>
            <Link to="/contact" className="text-cyan-400 font-semibold hover:text-white transition-colors">
              Send us your resume anyway &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function MapPinIcon(props: any) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
