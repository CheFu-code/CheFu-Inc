import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
      <p className="text-slate-400 max-w-md mb-8">
        The signal you are looking for has been lost in the noise. It seems this page does not exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 transition-colors flex items-center gap-2"
      >
        <Home className="w-4 h-4" /> Return Home
      </Link>
      
      {/* Abstract bg element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
