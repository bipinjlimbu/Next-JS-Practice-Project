import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import wait from '@/lib/wait';
import { products } from '@/data/products';

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        notFound();
    }

    await wait(2000);

    return (
        <div className="flex-grow max-w-3xl mx-auto px-4 py-16 md:py-24 w-full relative overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[130px] rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-8">
                <div>
                    <Link
                        href="/products"
                        className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                    >
                        &larr; Back to all products
                    </Link>
                </div>

                <div className="p-8 md:p-12 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 px-2 py-0.5 border border-indigo-900/50 rounded">
                                {product.category}
                            </span>
                            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-100 pt-1">
                                {product.name}
                            </h1>
                        </div>
                        <div className="text-2xl font-black text-indigo-400 sm:text-right">
                            {product.price}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-slate-300">Product Overview</h3>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 py-3 px-6 text-sm font-medium text-slate-950 bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-500/5">
                            Add to Cart
                        </button>
                        <button className="flex-1 py-3 px-6 text-sm font-medium text-slate-300 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}