'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowLeft, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SimpleRose from '@/components/SimpleRose';
import HorizontalScrollGallery from '@/components/HorizontalScrollGallery';

gsap.registerPlugin(ScrollTrigger);


export default function RoseDay() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <PageTransition>
            <div ref={containerRef} className="relative min-h-[500vh] bg-background text-foreground overflow-hidden" style={{ zIndex: 10 }}>
                {/* Rose Animation - Behind content */}
                <SimpleRose />

                {/* Navigation */}
                <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center bg-gradient-to-b from-background to-transparent">
                    <Link
                        href="/"
                        className="p-4 glass rounded-full text-pink-soul hover:shadow-[0_0_15px_rgba(240,98,146,0.3)] transition-all pointer-events-auto"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="font-romantic text-3xl text-pink-soul opacity-80">Rose Day</div>
                </nav>

                {/* SECTION 1: The Beginning */}
                <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
                    <div className="space-y-6 z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            className="text-7xl md:text-9xl font-serif font-light text-pink-soul drop-shadow-[0_0_30px_rgba(240,98,146,0.3)]"
                        >
                            The Beginning
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="text-xl md:text-2xl text-gray-400 italic max-w-2xl mx-auto leading-relaxed"
                        >
                            {"\"Happy Rose Day! They say roses speak the language the heart doesn't know how to say. So here's mine, blooming just for you.\""}
                        </motion.p>
                    </div>

                    <div className="absolute bottom-20 flex flex-col items-center gap-4 opacity-50">
                        <span className="text-[10px] tracking-[1.2em] uppercase text-pink-soul/60 font-medium">Scroll through memories</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-px h-16 bg-gradient-to-b from-pink-soul to-transparent"
                        />
                    </div>
                </section>

                {/* SECTION 2: A Fragrant Memory (Horizontal Scroll Gallery) */}
                <HorizontalScrollGallery
                    bucketName="memories"
                    title="A Fragrant Memory"
                    subtitle="Every memory with you smells of roses and feels like a dream"
                    imageStyle="polaroid"
                />

                {/* SECTION 3: The Pinnacle Reveal */}
                <section className="h-screen flex flex-col items-center justify-center px-6 relative bg-gradient-to-t from-romantic-maroon/20 to-transparent z-10">
                    <div className="text-center space-y-8 z-10 max-w-3xl glass p-12 md:p-20 rounded-[4rem] border border-pink-soul/10 shadow-[0_0_80px_rgba(240,98,146,0.1)]">
                        <div className="flex justify-center mb-6">
                            <Sparkles className="w-12 h-12 text-pink-soul animate-pulse" />
                        </div>
                        <h2 className="text-6xl md:text-8xl font-serif text-pink-soul mb-6">
                            For You,<br /><span className="font-romantic text-7xl md:text-9xl">Love.</span>
                        </h2>
                        <p className="text-2xl md:text-3xl font-sans font-light text-gray-300 italic mb-12 translate-y-[-10px]">
                            {"\"Roses are red, violets are blue, but nothing in this world compares to you. ❤️\""}
                        </p>

                        <Link
                            href="/"
                            className="inline-block py-6 px-12 bg-pink-soul text-background rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(240,98,146,0.4)]"
                        >
                            Back to Timeline
                        </Link>
                    </div>
                </section>

                {/* SECTION 4: Rose Bloom Display */}
                <section className="h-screen flex flex-col items-center justify-start px-6 pt-12 relative z-30">
                    <div className="text-center px-8">
                        <p className="text-pink-soul/80 text-lg font-romantic mb-6">
                            This is for you, Khushi
                        </p>
                        <p className="text-pink-soul/60 text-sm italic mb-4">
                            Please accept this rose as a gesture of my love
                        </p>
                        <Heart className="w-8 h-8 text-pink-soul/60 mx-auto animate-pulse" />
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
