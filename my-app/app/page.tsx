import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans">

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-indigo-600">
            PracticeProject
          </div>

          <nav className="flex items-center gap-6 md:gap-8">
            <a href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors">Home</a>
            <a href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors">Products</a>
            <a href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors">About</a>
            <a href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="text-center space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 bg-clip-text text-transparent">
            Practice Project Next.js
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-md mx-auto">
            A clean canvas for experimenting with components, routing, and modern frontend layouts.
          </p>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} PracticeProject. Built for practice.
          </p>
          <div className="flex gap-4 text-xs text-slate-400">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}