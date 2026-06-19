import React from 'react';
import wait from '@/lib/wait';

export default async function ContactPage() {
    await wait(2000);
    return (
        <div className="flex-grow max-w-5xl mx-auto px-4 py-12 md:py-16 w-full relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[130px] rounded-full pointer-events-none" />

            <div className="grid md:grid-cols-5 gap-12 relative z-10">

                <div className="md:col-span-2 space-y-6">
                    <div className="space-y-3">
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            Get in Touch
                        </h1>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Have questions about the workspace, architecture, or components? Drop a message.
                        </p>
                    </div>

                    <div className="space-y-4 pt-4 text-sm text-slate-400">
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Email</span>
                            <span className="text-slate-200 mt-0.5">hello@practiceproject.dev</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Location</span>
                            <span className="text-slate-200 mt-0.5">Remote / Global</span>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3 p-6 md:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl">
                    <form className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="text-xs font-medium text-slate-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg text-slate-100 placeholder-slate-600 outline-none transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-xs font-medium text-slate-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg text-slate-100 placeholder-slate-600 outline-none transition-colors"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="subject" className="text-xs font-medium text-slate-300">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg text-slate-100 placeholder-slate-600 outline-none transition-colors"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="message" className="text-xs font-medium text-slate-300">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg text-slate-100 placeholder-slate-600 outline-none transition-colors resize-none"
                                placeholder="Your message details..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2.5 px-4 text-sm font-medium text-slate-950 bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-500 rounded-lg transition-colors shadow-lg shadow-indigo-500/5"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}