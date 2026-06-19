import React from 'react';

export default function About() {
    return (
        <div className="flex-grow max-w-4xl mx-auto px-4 py-16 md:py-24 w-full relative overflow-hidden">
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="space-y-12 relative z-10">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                        About PracticeProject
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                        This environment is built as a clean web workspace designed to master full-stack routing, state architecture, and UI fluidity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-6">
                    <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2">
                        <h3 className="text-lg font-semibold text-slate-200">The Objective</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            To isolate frontend logic away from configuration noise, experimenting freely with semantic components and robust structure.
                        </p>
                    </div>

                    <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2">
                        <h3 className="text-lg font-semibold text-slate-200">The Core Stack</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Leveraging Next.js App Router mechanics alongside utility-first styling patterns to ensure rapid, predictable styling loops.
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 space-y-4">
                    <h2 className="text-xl font-bold text-slate-200">Our Workflow Philosophy</h2>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                        Clean codebases demand a complete removal of arbitrary constraints. By focusing exclusively on lightweight, functional interfaces, components remain reusable, fast to test, and effortless to expand into comprehensive systems.
                    </p>
                </div>
            </div>
        </div>
    );
}