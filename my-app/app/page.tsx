import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans">

      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-indigo-400">
            PracticeProject
          </div>

          <nav className="flex items-center gap-6 md:gap-8">
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Home</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Products</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">About</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="text-center space-y-4 max-w-2xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-slate-400 bg-clip-text text-transparent">
            Practice Project Next.js
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-md mx-auto">
            A clean canvas for experimenting with components, routing, and modern frontend layouts.
          </p>
        </div>
      </main>

      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} PracticeProject. Built for practice.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <a href="#" className="hover:underline hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:underline hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}