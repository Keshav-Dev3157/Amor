'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Anchor, Send } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import StarField from '@/components/StarField';
import CelestialRing from '@/components/CelestialRing';

gsap.registerPlugin(ScrollTrigger);

export default function ProposeDay() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Celestial Reveal
            gsap.from(".reveal-text", {
                opacity: 0,
                y: 40,
                stagger: 0.3,
                duration: 1.5,
                ease: "power4.out",
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
            <div ref={containerRef} className="relative min-h-[400vh] bg-background text-foreground overflow-hidden">
                <StarField />

                {/* Navigation */}
                <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center bg-gradient-to-b from-background to-transparent">
                    <Link
                        href="/"
                        className="p-4 glass rounded-full text-pink-soul hover:shadow-[0_0_15px_rgba(240,98,146,0.3)] transition-all pointer-events-auto"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="font-pacifico text-2xl text-pink-soul opacity-80">Cycle 02</div>
                </nav>

                {/* SECTION 1: The Void */}
                <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                        className="space-y-6 z-10"
                    >
                        <h1 className="text-6xl md:text-9xl font-pacifico text-pink-soul drop-shadow-[0_0_30px_rgba(240,98,146,0.4)]">
                            The Silence
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 italic max-w-2xl mx-auto leading-relaxed">
                            "Before you, the world was just empty space. Silent. Beautiful, but missing its center."
                        </p>
                    </motion.div>

                    <div className="absolute bottom-20 flex flex-col items-center gap-4 opacity-50">
                        <span className="text-[10px] tracking-[1em] uppercase text-pink-soul font-bold">Scroll through time</span>
                        <div className="w-px h-16 bg-gradient-to-b from-pink-soul to-transparent" />
                    </div>
                </section>

                {/* SECTION 2: The Constellations */}
                <section className="py-[20vh] px-6 reveal-trigger">
                    <div className="max-w-4xl mx-auto space-y-[40vh]">

                        <div className="reveal-text flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                            <Anchor className="w-12 h-12 text-romantic-crimson" />
                            <h2 className="text-5xl font-pacifico text-pink-soul">You became my Gravity.</h2>
                            <p className="text-xl text-gray-400 font-inter leading-relaxed italic">
                                Suddenly, I wasn't just drifting. Everything I did, every thought I had, started orbiting around you.
                            </p>
                        </div>

                        <div className="reveal-text flex flex-col items-center md:items-end text-center md:text-right space-y-6 ml-auto">
                            <Send className="w-12 h-12 text-romantic-crimson" />
                            <h2 className="text-5xl font-pacifico text-pink-soul">The Stars Began to Align.</h2>
                            <p className="text-xl text-gray-400 font-inter leading-relaxed italic">
                                The Gorakhpur station roses, the late night talks, the shared silences... it was all building toward a single moment.
                            </p>
                        </div>

                    </div>
                </section>

                {/* SECTION 3: The Gathering */}
                <section className="h-screen flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 bg-romantic-crimson/5 blur-[120px] rounded-full translate-y-20" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center space-y-12 z-10 px-6"
                    >
                        <h2 className="text-4xl md:text-6xl font-pacifico text-pink-soul">Are you ready to see what I've been building?</h2>
                        <div className="h-px w-32 bg-pink-soul/30 mx-auto" />
                        <p className="text-lg text-gray-500 uppercase tracking-[0.5em] font-bold">Keep scrolling for the pinnacle</p>
                    </motion.div>
                </section>

                {/* SECTION 4: The Pinnacle Reveal */}
                <section className="h-screen flex flex-col items-center justify-center px-6 relative bg-gradient-to-t from-romantic-maroon/20 to-transparent">
                    <div className="mb-20">
                        <CelestialRing />
                    </div>

                    <div className="text-center space-y-8 z-10 max-w-3xl glass p-12 md:p-20 rounded-[4rem] border border-pink-soul/10 shadow-[0_0_80px_rgba(240,98,146,0.1)]">
                        <h2 className="text-6xl md:text-8xl font-pacifico text-pink-soul mb-6">
                            My Queen,
                        </h2>
                        <p className="text-2xl md:text-3xl font-inter text-gray-300 italic mb-12">
                            "In this lifetime and every other, I choose you. I propose that we build a world where only we exist. Will you keep orbiting with me?"
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center pointer-events-auto">
                            <button className="group relative py-6 px-12 bg-pink-soul text-background rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(240,98,146,0.4)] overflow-hidden">
                                <span className="relative z-10 flex items-center gap-3">
                                    YES, FOREVER <Heart className="w-5 h-5 fill-current" />
                                </span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                            </button>

                            <Link
                                href="/"
                                className="py-6 px-12 border border-pink-soul/30 text-pink-soul rounded-full font-bold text-xl hover:bg-pink-soul/5 transition-all"
                            >
                                Back to Timeline
                            </Link>
                        </div>
                    </div>

                    <footer className="absolute bottom-12 text-gray-600 text-[10px] tracking-[1em] uppercase font-bold">
                        Chapter 02 : Completed
                    </footer>
                </section>
            </div>
        </PageTransition>
    );
}
