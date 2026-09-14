import Link from 'next/link';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-50 p-6 text-center text-slate-800">
      <h1 className="mb-4 bg-gradient-to-r from-cyan-700 to-violet-600 bg-clip-text text-9xl font-bold text-transparent">404</h1>
      <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">Page Not Found</h2>
      <p className="mb-8 max-w-md text-slate-600">
        The signal you are looking for has been lost in the noise. It seems this page does not exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-bold text-white transition-colors hover:bg-slate-800"
      >
        <Home className="w-4 h-4" /> Return Home
      </Link>
      
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-[120px]" />
    </div>
  );
}
