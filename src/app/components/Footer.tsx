import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* CTA Section */}
        <div className="bg-linear-to-r from-violet-900/50 to-cyan-900/50 rounded-3xl p-10 md:p-16 text-center mb-20 border border-slate-800 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Innovate?</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
              Whether you need a custom software solution, an AI integration, or professional audio production, we're here to help you build the future.
            </p>
            <Link to="/contact" className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 transition-colors shadow-lg shadow-cyan-900/20 inline-block">
              Get in Touch
            </Link>
          </div>
          {/* Decorative blur */}
          <div className="absolute top-0 left-0 w-full h-full bg-slate-950/20 z-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-900 pb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-linear-to-tr from-cyan-500 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-mono text-lg">C</span>
              </div>
              CheFu <span className="text-cyan-400">Inc.</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6">
              Blending creativity and advanced technology to build innovative digital solutions and high-quality audio experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
               <a href="#" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-cyan-400 transition-colors">Careers / Jobs</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors">Insights / Blog</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-cyan-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
             <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">Music Production</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">AI Solutions</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">Mobile Apps</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>123 Innovation Blvd,<br />Tech City, TC 90210</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>hello@chefuinc.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} CheFu Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
