import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Neon Synth VST',
    category: 'Audio Software',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1080',
    description: 'An AI-powered synthesizer plugin that generates infinite unique patches based on mood.',
    tags: ['C++', 'JUCE', 'Machine Learning'],
    link: '#'
  },
  {
    id: 2,
    title: 'HealthPulse AI',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1080',
    description: 'Predictive analytics platform for healthcare providers using deep learning models.',
    tags: ['Python', 'PyTorch', 'React'],
    link: '#'
  },
  {
    id: 3,
    title: 'UrbanFlow',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1080',
    description: 'A smart city navigation app integrating real-time traffic data and public transit.',
    tags: ['React Native', 'Node.js', 'Google Maps API'],
    link: '#'
  },
  {
    id: 4,
    title: 'Echo Chambers',
    category: 'Music Production',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1080',
    description: 'Award-winning sound design and mixing for the immersive VR game "Echoes".',
    tags: ['Pro Tools', 'Dolby Atmos', 'Sound Design'],
    link: '#'
  },
  {
    id: 5,
    title: 'CryptoVault',
    category: 'Web3 Security',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1080',
    description: 'Secure wallet management system for institutional crypto investors.',
    tags: ['Solidity', 'Web3.js', 'React'],
    link: '#'
  },
  {
    id: 6,
    title: 'BeatMarket',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1080',
    description: 'A marketplace for producers to sell beats with automated licensing contracts.',
    tags: ['Next.js', 'Stripe API', 'PostgreSQL'],
    link: '#'
  }
];

export function PortfolioPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Work</h1>
          <p className="text-xl text-slate-400">
            A showcase of our best projects across music, AI, and software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase text-cyan-400 mb-1 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-800 text-xs rounded-full text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
