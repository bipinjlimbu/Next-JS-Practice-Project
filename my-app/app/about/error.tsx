"use client";

import React, { useEffect } from 'react';

export default function AboutError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Caught route runtime error:", error);
    }, [error]);

    return (
        <div className="flex-grow flex items-center justify-center px-4 py-20 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="text-center space-y-6 max-w-md relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-950/50 border border-red-800/40 text-red-400 text-xl font-bold select-none mx-auto">
                    !
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-200">
                        Something went wrong
                    </h2>
                    <p className="text-slate-400 text-sm">
                        An unexpected error occurred while compiling the information on this page.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                        onClick={() => reset()} // Attempts to re-render the segment
                        className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-950 bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-500 rounded-lg transition-colors shadow-lg shadow-indigo-500/10"
                    >
                        Try Again
                    </button>
                    <a
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                    >
                        Go Home
                    </a>
                </div>
            </div>
        </div>
    );
}