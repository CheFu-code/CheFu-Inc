import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Neon Synth VST',
    category: 'Audio Software',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1080', // Techy abstract
    description: 'An AI-powered synthesizer plugin that generates infinite unique patches based on mood.',
  },
  {
    id: 2,
    title: 'HealthPulse AI',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1080', // Medical tech
    description: 'Predictive analytics platform for healthcare providers using deep learning models.',
  },
  {
    id: 3,
    title: 'UrbanFlow',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1080', // Mobile app usage
    description: 'A smart city navigation app integrating real-time traffic data and public transit.',
  },
  {
    id: 4,
    title: 'Echo Chambers',
    category: 'Music Production',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1080', // Music Studio
    description: 'Award-winning sound design and mixing for the immersive VR game "Echoes".',
  },
];

export function Portfolio() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Selected Works
            </h2>
            <p className="text-slate-400 text-lg">
              A glimpse into the innovative solutions we've crafted for our partners.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="hidden md:inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors mt-4 md:mt-0"
          >
            View all projects <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden aspect-video bg-slate-800"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <Link
            to="/portfolio"
            className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
          >
            View all projects <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
