import React from 'react';
import AuthSidebar from '@/components/AuthSidebar';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
            <AuthSidebar />
            <main className="flex-grow flex flex-col justify-center w-full md:pl-64">
                {children}
            </main>
        </div>
    );
}