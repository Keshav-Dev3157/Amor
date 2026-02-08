'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Stars, Coffee } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import HorizontalScrollGallery from '@/components/HorizontalScrollGallery';
import FloatingSweets from '@/components/FloatingSweets';
import ChocolateBox from '@/components/ChocolateBox';

gsap.registerPlugin(ScrollTrigger);

export default function ChocolateDay() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Sweet Reveal
            gsap.from(".reveal-text", {
                opacity: 0,
                y: 30,
                stagger: 0.2,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".reveal-trigger",
                    start: "top 80%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <PageTransition>
            <div ref={containerRef} className="relative min-h-[400vh] bg-[#1a0f0a] text-foreground overflow-hidden">
                <FloatingSweets />

                {/* Custom Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#5d4037]/20 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#8d6e63]/10 blur-[150px] rounded-full" />
                </div>

                {/* Navigation */}
                <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center bg-gradient-to-b from-[#1a0f0a] to-transparent">
                    <Link
                        href="/"
                        className="p-4 glass rounded-full text-[#d7ccc8] hover:shadow-[0_0_15px_rgba(215,204,200,0.3)] transition-all pointer-events-auto"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="font-pacifico text-2xl text-[#d7ccc8] opacity-80">Cycle 03</div>
                </nav>

                {/* SECTION 1: Intro */}
                <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="space-y-6 z-10"
                    >
                        <h1 className="text-6xl md:text-9xl font-pacifico text-[#d7ccc8] drop-shadow-[0_0_30px_rgba(215,204,200,0.2)]">
                            Sweetest Part.
                        </h1>
                        <p className="text-xl md:text-2xl text-[#a1887f] italic max-w-2xl mx-auto leading-relaxed font-serif">
                            {"\"Some memories are like chocolate... they melt in your heart and leave a warmth that lasts forever.\""}
                        </p>
                    </motion.div>

                    <div className="absolute bottom-20 flex flex-col items-center gap-4 opacity-30">
                        <span className="text-[10px] tracking-[1em] uppercase text-[#d7ccc8] font-bold">Scroll to savor</span>
                        <div className="w-px h-16 bg-gradient-to-b from-[#d7ccc8] to-transparent" />
                    </div>
                </section>

                {/* SECTION 2: Melting Moments */}
                <section className="py-[20vh] px-6 reveal-trigger">
                    <div className="max-w-4xl mx-auto space-y-[40vh]">
                        <div className="reveal-text flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                            <Coffee className="w-12 h-12 text-[#8d6e63]" />
                            <h2 className="text-5xl font-serif text-[#d7ccc8]">Warm and Rich.</h2>
                            <p className="text-xl text-[#a1887f] font-serif leading-relaxed italic">
                                Like a cup of hot chocolate on a rainy day, your presence is the comfort I never knew I needed.
                            </p>
                        </div>

                        <div className="reveal-text flex flex-col items-center md:items-end text-center md:text-right space-y-6 ml-auto">
                            <Stars className="w-12 h-12 text-[#8d6e63]" />
                            <h2 className="text-5xl font-serif text-[#d7ccc8]">Purely Indulgent.</h2>
                            <p className="text-xl text-[#a1887f] font-serif leading-relaxed italic">
                                Every moment we spend together feels like the finest indulgence. Sweet, unique, and impossible to forget.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 2.5: The Gallery */}
                <HorizontalScrollGallery
                    bucketName="chocolate-day"
                    title="Sweet Memories"
                    subtitle="The sweetest moments captured in time"
                    imageStyle="minimal"
                />

                <ChocolateBox />

                {/* SECTION 3: The Finale */}
                <section className="h-screen flex flex-col items-center justify-center px-6 relative">
                    <div className="absolute inset-0 bg-[#5d4037]/5 blur-[120px] rounded-full translate-y-20" />

                    <div className="text-center space-y-8 z-10 max-w-3xl glass p-12 md:p-20 rounded-[4rem] border border-[#d7ccc8]/10 shadow-[0_0_80px_rgba(93,64,55,0.2)]">
                        <h2 className="text-6xl md:text-7xl font-pacifico text-[#d7ccc8] mb-6">
                            My Sweet Khushi,
                        </h2>
                        <p className="text-2xl md:text-3xl font-serif text-[#a1887f] italic mb-12">
                            {"\"Life with you is a box of chocolates... and I've found my favorite flavor in every single laugh we share.\""}
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center pointer-events-auto">
                            <Link
                                href="/"
                                className="inline-block py-6 px-12 bg-[#8d6e63] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(141,110,99,0.4)]"
                            >
                                Back to Timeline
                            </Link>
                        </div>
                    </div>

                    <footer className="absolute bottom-12 text-[#5d4037] text-[10px] tracking-[1em] uppercase font-bold">
                        Chapter 03 : Shared
                    </footer>
                </section>
            </div>
        </PageTransition>
    );
}
