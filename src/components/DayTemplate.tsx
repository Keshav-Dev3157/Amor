'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

interface DayTemplateProps {
    dayNumber: number;
    title: string;
    emoji: string;
    color: string;
    children?: React.ReactNode;
}

export default function DayTemplate({ dayNumber, title, emoji, color, children }: DayTemplateProps) {
    return (
        <PageTransition>
            <div className="relative min-h-screen pb-20 overflow-x-hidden bg-background text-foreground">

                {/* Navigation */}
                <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none">
                    <Link
                        href="/"
                        className="p-3 glass rounded-full text-gray-700 hover:text-red-500 transition-colors pointer-events-auto"
                    >
                        <ArrowLeft />
                    </Link>
                    <div className="p-3 glass rounded-full text-red-500 font-bold pointer-events-auto">
                        Day {dayNumber}
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="h-[70vh] flex flex-col items-center justify-center text-center px-6">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-8xl mb-6 filter drop-shadow-xl"
                        style={{ color }}
                    >
                        {emoji}
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-pacifico mb-6"
                        style={{ color }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        {title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="flex items-center gap-2 text-gray-400 font-medium bg-white/50 px-4 py-2 rounded-full border border-gray-100"
                    >
                        <Clock size={16} />
                        <span className="text-sm uppercase tracking-widest">Coming Soon</span>
                    </motion.div>
                </section>

                {/* Content Placeholder */}
                <section className="max-w-3xl mx-auto px-6 py-20">
                    <div className="glass p-12 rounded-3xl text-center">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Hang tight!</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            I&apos;m still putting the finishing touches on this special experience for you.
                            Each day will bring a new story and a new memory.
                        </p>
                        <div className="w-16 h-1 bg-gray-200 mx-auto rounded-full" style={{ backgroundColor: color + '44' }} />
                    </div>

                    {children}
                </section>
            </div>
        </PageTransition>
    );
}

export function ScrollReveal({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
