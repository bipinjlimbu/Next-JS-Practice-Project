import React from 'react';

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans">

            <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tight text-indigo-400">
                        PracticeProject
                    </div>

                    <nav className="flex items-center gap-6 md:gap-8">
                        <a href="/" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Home</a>
                        <a href="#" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Products</a>
                        <a href="#" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">About</a>
                        <a href="#" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Contact</a>
                    </nav>
                </div>
            </header>

            <main className="flex-grow flex items-center justify-center px-4 py-20 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="text-center space-y-6 max-w-md relative z-10">
                    <h1 className="text-9xl font-black tracking-tighter bg-gradient-to-b from-rose-400 to-rose-700 bg-clip-text text-transparent select-none">
                        404
                    </h1>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-200">
                            Page Not Found
                        </h2>
                        <p className="text-slate-400 text-sm">
                            The page you are looking for doesn't exist or has been moved to another URL.
                        </p>
                    </div>
                    <div>
                        <a
                            href="/"
                            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-950 bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-500 rounded-lg transition-colors shadow-lg shadow-indigo-500/10"
                        >
                            Back to Home
                        </a>
                    </div>
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