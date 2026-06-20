import React from 'react';

export default function ProductsLoading() {
    return (
        <div className="flex-grow max-w-6xl mx-auto px-4 py-12 md:py-16 w-full animate-pulse">

            <div className="space-y-10">
                <div className="space-y-3">
                    <div className="h-9 w-48 bg-slate-800 rounded-xl" />
                    <div className="space-y-2 max-w-md">
                        <div className="h-4 bg-slate-800 rounded" />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="p-6 border border-slate-800 rounded-xl flex flex-col justify-between space-y-4"
                        >
                            <div className="space-y-4">
                                <div className="w-full h-48 bg-slate-800 rounded-lg" />

                                <div className="flex items-center justify-between">
                                    <div className="h-5 w-20 bg-slate-800 rounded" />
                                    <div className="h-5 w-12 bg-slate-800 rounded" />
                                </div>

                                <div className="space-y-2">
                                    <div className="h-5 w-5/6 bg-slate-800 rounded" />
                                    <div className="h-5 w-1/2 bg-slate-800 rounded" />
                                </div>
                            </div>

                            <div className="pt-2">
                                <div className="h-8 bg-slate-800 rounded-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}