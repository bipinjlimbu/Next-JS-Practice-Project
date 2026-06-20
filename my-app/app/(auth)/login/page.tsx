import React from 'react';

export default function LoginPage() {
    return (
        <div className="flex-grow flex items-center justify-center px-4 py-16 md:py-24 w-full relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[130px] rounded-full pointer-events-none" />

            <div className="w-full max-w-md p-6 md:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl relative z-10 space-y-6">

                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                        Welcome Back
                    </h1>
                    <p className="text-slate-400 text-xs">
                        Enter your credentials to access your workspace account
                    </p>
                </div>

                <form className="space-y-4">
                    <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-medium text-slate-300">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg text-slate-100 placeholder-slate-600 outline-none transition-colors"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="text-xs font-medium text-slate-300">Password</label>
                            <a href="#" className="text-[11px] text-indigo-400 hover:underline">Forgot password?</a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            required
                            className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg text-slate-100 placeholder-slate-600 outline-none transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-indigo-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-indigo-500"
                        />
                        <label htmlFor="remember" className="ml-2 text-xs text-slate-400 select-none cursor-pointer">
                            Remember this device
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 px-4 text-sm font-medium text-slate-950 bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-500 rounded-lg transition-colors shadow-lg shadow-indigo-500/5"
                    >
                        Sign In
                    </button>
                </form>

                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-slate-800"></div>
                    <span className="flex-shrink mx-3 text-[10px] uppercase font-bold tracking-wider text-slate-500">Or continue with</span>
                    <div className="flex-grow border-t border-slate-800"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 py-2 px-4 bg-slate-950 border border-slate-800 hover:bg-slate-900 rounded-lg text-xs font-medium text-slate-300 transition-colors">
                        Google
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2 px-4 bg-slate-950 border border-slate-800 hover:bg-slate-900 rounded-lg text-xs font-medium text-slate-300 transition-colors">
                        GitHub
                    </button>
                </div>

                <p className="text-center text-xs text-slate-400">
                    Don't have an account?{' '}
                    <a href="/register" className="text-indigo-400 font-medium hover:underline">
                        Sign up
                    </a>
                </p>

            </div>
        </div>
    );
}