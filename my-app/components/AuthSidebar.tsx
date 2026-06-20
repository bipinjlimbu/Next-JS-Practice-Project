import React from 'react';

export default function AuthSidebar() {
    return (
        <aside className="fixed inset-y-0 left-0 w-64 border-r border-slate-900 bg-slate-950 flex flex-col justify-between p-6 z-40 hidden md:flex">
            <div className="space-y-8">
                <div className="h-14 flex items-center border-b border-slate-900 pb-2">
                    <a
                        href="/"
                        className="text-sm font-black tracking-wider text-slate-100 hover:text-indigo-400 transition-colors uppercase"
                    >
                        PracticeProject
                    </a>
                </div>

                <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-2 px-3">
                        Navigation
                    </span>
                    <a
                        href="/"
                        className="text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 px-3 py-2 rounded-lg transition-colors"
                    >
                        Home Overview
                    </a>
                    <a
                        href="/products"
                        className="text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 px-3 py-2 rounded-lg transition-colors"
                    >
                        Browse Products
                    </a>
                    <a
                        href="/about"
                        className="text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 px-3 py-2 rounded-lg transition-colors"
                    >
                        Our Mission
                    </a>
                    <a
                        href="/contact"
                        className="text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 px-3 py-2 rounded-lg transition-colors"
                    >
                        Get Help
                    </a>
                </div>
            </div>

            <div className="border-t border-slate-900 pt-4 flex flex-col gap-2">
                <a
                    href="/login"
                    className="text-xs font-semibold text-center text-slate-950 bg-indigo-400 hover:bg-indigo-300 py-2 rounded-lg transition-colors"
                >
                    Sign In
                </a>
                <a
                    href="/register"
                    className="text-xs font-semibold text-center text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-850 py-2 rounded-lg transition-colors"
                >
                    Create Account
                </a>
            </div>
        </aside>
    );
}