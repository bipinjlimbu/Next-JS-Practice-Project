import React from 'react';

export default function ContactLoading() {
    return (
        <div className="flex-grow max-w-5xl mx-auto px-4 py-12 md:py-16 w-full animate-pulse">
            <div className="grid md:grid-cols-5 gap-12">

                <div className="md:col-span-2 space-y-6">
                    <div className="space-y-3">
                        <div className="h-5 w-16 bg-slate-800 rounded-full" />
                        <div className="h-10 w-3/4 bg-slate-800 rounded-xl" />
                        <div className="space-y-2">
                            <div className="h-4 bg-slate-800 rounded" />
                            <div className="h-4 w-5/6 bg-slate-800 rounded" />
                        </div>
                    </div>

                    <div className="space-y-4 pt-4">
                        <div className="space-y-1">
                            <div className="h-3 w-12 bg-slate-800 rounded" />
                            <div className="h-4 w-40 bg-slate-800 rounded" />
                        </div>
                        <div className="space-y-1">
                            <div className="h-3 w-16 bg-slate-800 rounded" />
                            <div className="h-4 w-28 bg-slate-800 rounded" />
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3 p-6 md:p-8 border border-slate-800 rounded-2xl space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <div className="h-3 w-12 bg-slate-800 rounded" />
                            <div className="h-9 bg-slate-800 rounded-lg" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-3 w-12 bg-slate-800 rounded" />
                            <div className="h-9 bg-slate-800 rounded-lg" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-3 w-16 bg-slate-800 rounded" />
                        <div className="h-9 bg-slate-800 rounded-lg" />
                    </div>

                    <div className="space-y-2">
                        <div className="h-3 w-16 bg-slate-800 rounded" />
                        <div className="h-28 bg-slate-800 rounded-lg" />
                    </div>

                    <div className="h-10 bg-slate-800 rounded-lg pt-2" />
                </div>

            </div>
        </div>
    );
}