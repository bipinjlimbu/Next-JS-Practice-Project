"use client"; // Error boundaries must be Client Components

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ProductRouteError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Single Product Error Boundary:", error);
    }, [error]);

    return (
        <div className="flex-grow flex items-center justify-center px-4 py-16 md:py-24 w-full relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 blur-[130px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-md w-full text-center space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-950/40 border border-red-900/50 text-red-400 font-mono text-lg select-none">
                    ⚠️
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-bold tracking-tight text-slate-200">
                        Failed to load product
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        We encountered a data stream issue while trying to fetch this item's specific metrics.
                    </p>
                </div>

                <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl text-left">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500 block mb-1">Diagnostic Info</span>
                    <p className="text-xs font-mono text-red-400/90 break-all bg-slate-950/60 p-2.5 rounded border border-slate-850">
                        {error.message || "ERR_PRODUCT_STREAM_FAILURE"}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                        onClick={() => reset()}
                        className="w-full sm:flex-1 inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-slate-950 bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-500 rounded-lg transition-colors shadow-lg shadow-indigo-500/5"
                    >
                        Retry Loading
                    </button>
                    <Link
                        href="/products"
                        className="w-full sm:flex-1 inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-850 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors"
                    >
                        Return to Store
                    </Link>
                </div>
            </div>
        </div>
    );
}