import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import wait from '@/lib/wait';
import FetchFakeStoreAPI from '@/components/FetchFakeStoreAPI';

export default async function ProductsPage() {
    await wait(2000);

    const products: ProductsType[] | null = await FetchFakeStoreAPI('/products');
    if (!products) return notFound();

    return (
        <div className="flex-grow max-w-6xl mx-auto px-4 py-12 md:py-16 w-full relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="space-y-10 relative z-10">
                <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                        Our Products
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base max-w-md">
                        Explore our curated selection of high-performance workspace essentials.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group flex flex-col justify-between p-6 bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 rounded-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="space-y-4">
                                <div className="w-full h-48 bg-slate-950 rounded-lg overflow-hidden border border-slate-800/60 flex items-center justify-center p-4">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="max-h-full max-w-full object-contain mix-blend-screen opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                    />
                                </div>

                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 px-2 py-0.5 border border-indigo-900/50 rounded max-w-[150px] truncate">
                                        {product.category}
                                    </span>
                                    <span className="text-base font-bold text-slate-100 whitespace-nowrap">
                                        ${product.price}
                                    </span>
                                </div>

                                <h3 className="text-base font-bold text-slate-200 group-hover:text-indigo-400 transition-colors line-clamp-2 min-h-[3rem]">
                                    {product.title}
                                </h3>
                            </div>

                            <div className="pt-6">
                                <Link
                                    href={`/products/${product.id}`}
                                    className="block w-full text-center py-2 px-4 text-xs font-medium text-slate-300 bg-slate-800/50 hover:bg-indigo-500 hover:text-slate-950 border border-slate-700/60 hover:border-indigo-400 rounded-lg transition-all"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}