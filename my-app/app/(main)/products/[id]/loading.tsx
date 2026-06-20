import React from 'react';

export default function ProductDetailLoading() {
    return (
        <div className="flex-grow max-w-3xl mx-auto px-4 py-16 md:py-24 w-full animate-pulse">

            <div className="space-y-8">
                <div className="h-4 w-32 bg-slate-800 rounded" />

                <div className="p-8 md:p-12 border border-slate-800 rounded-2xl space-y-6">
                    <div className="w-full h-64 md:h-80 bg-slate-800 rounded-xl" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                        <div className="space-y-3 w-full sm:w-2/3">
                            <div className="h-4 w-16 bg-slate-800 rounded" />
                            <div className="h-8 w-3/4 bg-slate-800 rounded-lg" />
                        </div>
                        <div className="h-8 w-16 bg-slate-800 rounded-lg" />
                    </div>

                    <div className="space-y-4">
                        <div className="h-4 w-28 bg-slate-800 rounded" />
                        <div className="space-y-2">
                            <div className="h-3.5 bg-slate-800 rounded" />
                            <div className="h-3.5 bg-slate-800 rounded" />
                            <div className="h-3.5 w-4/5 bg-slate-800 rounded" />
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-4">
                        <div className="h-11 flex-1 bg-slate-800 rounded-xl" />
                        <div className="h-11 flex-1 bg-slate-800 rounded-xl" />
                    </div>
                </div>
            </div>

        </div>
    );
}