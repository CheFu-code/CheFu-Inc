import React from 'react';
import { motion } from 'motion/react';
import { Music, Brain, Code, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Music Production',
    link: '/services/music',
    icon: Music,
    description: 'From beat production to mixing and mastering, we engineer sonic landscapes that resonate.',
    features: ['Beat Production', 'Mixing & Mastering', 'Sound Design & Foley'],
    image: 'https://images.unsplash.com/photo-1598847873329-ed1608fb858b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHByb2R1Y3Rpb24lMjBtaXhpbmclMjBjb25zb2xlfGVufDF8fHx8MTc3MDk4NTYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'AI Solutions',
    link: '/services/ai',
    icon: Brain,
    description: 'Leverage the power of machine learning and voice technology to automate and innovate.',
    features: ['AI-Powered Apps', 'Machine Learning Systems', 'Voice Technology'],
    image: 'https://images.unsplash.com/photo-1750365919971-7dd273e7b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnJhaW4lMjBuZXR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzA5ODU2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Software Development',
    link: '/services/software',
    icon: Code,
    description: 'Scalable web and mobile applications built with modern frameworks and robust architecture.',
    features: ['Web Applications', 'Mobile App Development', 'Custom Systems'],
    image: 'https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcwOTg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Services() {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Expertise
          </h2>
          <p className="text-slate-400 text-lg">
            We don't just build; we craft. Explore our core service areas designed to push boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-lg bg-slate-950/80 backdrop-blur flex items-center justify-center border border-slate-700">
                  <service.icon className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-400 transition-colors mt-auto"
                >
                  Learn more <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
