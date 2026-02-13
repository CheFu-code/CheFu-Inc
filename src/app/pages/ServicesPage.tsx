import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Music, Brain, Code, ArrowRight, Mic2, Layers, Smartphone, Server, Radio, ArrowUpRight } from 'lucide-react';

const serviceDetails = [
  {
    id: 'music',
    title: 'Audio & Music Production',
    link: '/services/music',
    icon: Music,
    description: 'Sonic branding and professional audio engineering for artists and businesses.',
    items: [
      { title: 'Beat Production', desc: 'Custom instrumentals tailored to your genre and style.', icon: Layers },
      { title: 'Mixing & Mastering', desc: 'Industry-standard polishing to make your tracks radio-ready.', icon: Mic2 },
      { title: 'Sound Design', desc: 'Creating unique soundscapes for games, films, and apps.', icon: Radio },
    ]
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    link: '/services/ai',
    icon: Brain,
    description: 'Harnessing the power of neural networks to solve complex problems.',
    items: [
      { title: 'Predictive Analytics', desc: 'Forecasting trends using historical data and ML models.', icon: Server },
      { title: 'NLP Solutions', desc: 'Chatbots and voice assistants that understand human context.', icon: Smartphone },
      { title: 'Computer Vision', desc: 'Image recognition systems for security and automation.', icon: Layers },
    ]
  },
  {
    id: 'software',
    title: 'Software Development',
    link: '/services/software',
    icon: Code,
    description: 'Full-cycle development from concept to deployment.',
    items: [
      { title: 'Web Applications', desc: 'Responsive, scalable React and Next.js applications.', icon: GlobeIcon },
      { title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences.', icon: Smartphone },
      { title: 'Cloud Systems', desc: 'Robust backend architectures on AWS and Azure.', icon: Server },
    ]
  }
];

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}


export function ServicesPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-400">
            Comprehensive solutions designed to elevate your brand and streamline your operations.
          </p>
        </div>

        <div className="space-y-32">
          {serviceDetails.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-start`}>
              
              {/* Info Side */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                </div>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid gap-6">
                  {service.items.map((item) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors"
                    >
                      <div className="mt-1">
                        <item.icon className="w-6 h-6 text-violet-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10 flex flex-wrap gap-4">
                   <Link 
                      to={service.link}
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-slate-950 font-bold hover:bg-cyan-50 transition-colors"
                   >
                      Explore {service.title} <ArrowRight className="w-4 h-4 ml-2" />
                   </Link>
                </div>
              </div>

              {/* Visual Side (Abstract/Decorative) */}
              <div className="flex-1 w-full">
                <Link to={service.link} className="block relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 opacity-50" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity">
                      <service.icon className="w-64 h-64 text-white" />
                   </div>
                   {/* Add a generic tech image overlay */}
                   <img 
                      src={
                        index === 0 ? "https://images.unsplash.com/photo-1745848413113-4f39bdad5769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHJlY29yZGluZyUyMGVxdWlwbWVudCUyMGRhcmt8ZW58MXx8fHwxNzcwOTg3MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                        index === 1 ? "https://images.unsplash.com/photo-1761123044903-1671e0edc3f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGNvZGUlMjBkaWdpdGFsJTIwc2NyZWVuJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzA5ODcwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                        "https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcwOTg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      }
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      View Details <ArrowUpRight className="w-3 h-3" />
                   </div>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
