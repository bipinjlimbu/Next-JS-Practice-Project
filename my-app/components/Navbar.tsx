import React from 'react';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="text-xl font-bold tracking-tight text-indigo-400">
                    <a href="/">PracticeProject</a>
                </div>

                <nav className="flex items-center gap-6 md:gap-8">
                    <a href="/" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Home</a>
                    <a href="/products" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Products</a>
                    <a href="/about" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">About</a>
                    <a href="/contact" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Contact</a>
                </nav>

                <div className="flex items-center gap-4">
                    <a href="/login" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">
                        Sign In
                    </a>
                    <a href="/register" className="py-1 px-4 text-sm font-medium text-slate-950 bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-500 rounded-lg transition-all shadow-lg shadow-indigo-500/5">
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
    );
}