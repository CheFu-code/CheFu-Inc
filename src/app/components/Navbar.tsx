import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/portfolio' },
    { name: 'Insights', href: '/blog' },
  ];

  return (
    <nav
      className={twMerge(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled || isMobileMenuOpen ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-violet-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-mono text-lg">C</span>
          </div>
          CheFu <span className="text-cyan-400">Inc.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-cyan-400",
                location.pathname === link.href ? "text-cyan-400" : "text-slate-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => navigate('/contact')}
            className="px-5 py-2 rounded-full bg-white text-slate-950 font-semibold hover:bg-cyan-400 transition-colors text-sm cursor-pointer"
          >
            Start a Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={clsx(
                    "text-lg font-medium hover:text-cyan-400",
                    location.pathname === link.href ? "text-cyan-400" : "text-slate-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-slate-800 my-2" />
               <Link to="/careers" className="text-slate-400 hover:text-cyan-400">Careers</Link>
               <Link to="/faq" className="text-slate-400 hover:text-cyan-400">FAQ</Link>
              <Link
                to="/contact"
                className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-center"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
