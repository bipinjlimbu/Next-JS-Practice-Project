import React from 'react';

export default function Home() {
  return (
    <div className="flex-grow flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center space-y-4 max-w-2xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-slate-400 bg-clip-text text-transparent">
          Practice Project Next.js
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-md mx-auto">
          A clean canvas for experimenting with components, routing, and modern frontend layouts.
        </p>
      </div>
    </div>
  );
}