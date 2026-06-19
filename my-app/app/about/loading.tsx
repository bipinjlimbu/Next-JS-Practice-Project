import React from 'react';

export default function AboutLoading() {
    return (
        <div className="flex-grow max-w-4xl mx-auto px-4 py-16 md:py-24 w-full animate-pulse">

            <div className="space-y-12">
                <div className="space-y-4">
                    <div className="h-6 w-24 bg-slate-800 rounded-full" />
                    <div className="h-12 w-2/3 bg-slate-800 rounded-xl" />
                    <div className="space-y-2 max-w-2xl">
                        <div className="h-4 bg-slate-800 rounded" />
                        <div className="h-4 w-5/6 bg-slate-800 rounded" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-6">
                    <div className="p-6 border border-slate-800 rounded-xl space-y-4">
                        <div className="h-5 w-1/3 bg-slate-800 rounded" />
                        <div className="space-y-2">
                            <div className="h-3 bg-slate-800 rounded" />
                            <div className="h-3 w-5/6 bg-slate-800 rounded" />
                        </div>
                    </div>

                    <div className="p-6 border border-slate-800 rounded-xl space-y-4">
                        <div className="h-5 w-1/3 bg-slate-800 rounded" />
                        <div className="space-y-2">
                            <div className="h-3 bg-slate-800 rounded" />
                            <div className="h-3 w-5/6 bg-slate-800 rounded" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 space-y-4">
                    <div className="h-6 w-1/4 bg-slate-800 rounded" />
                    <div className="space-y-2 max-w-3xl">
                        <div className="h-3 bg-slate-800 rounded" />
                        <div className="h-3 bg-slate-800 rounded" />
                        <div className="h-3 w-2/3 bg-slate-800 rounded" />
                    </div>
                </div>
            </div>

        </div>
    );
}