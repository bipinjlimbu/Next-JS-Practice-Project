import React from 'react';

export default function NotFound() {
    return (
        <div className="flex-grow flex items-center justify-center px-4 py-20 relative overflow-hidden">
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
        </div>
    );
}