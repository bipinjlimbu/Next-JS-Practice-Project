import React from 'react';
import AuthNav from '@/components/AuthNav';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
            <AuthNav />
            <main className="flex-grow flex flex-col justify-center">
                {children}
            </main>
        </div>
    );
}