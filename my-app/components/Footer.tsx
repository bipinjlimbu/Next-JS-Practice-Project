import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} PracticeProject. Built for practice.
                </p>
                <div className="flex gap-4 text-xs text-slate-500">
                    <a href="/privacy" className="hover:underline hover:text-slate-400 transition-colors">Privacy Policy</a>
                    <a href="/terms" className="hover:underline hover:text-slate-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}