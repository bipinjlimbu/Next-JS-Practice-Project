import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 font-sans min-h-screen flex flex-col">
        <main className="flex-grow flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}