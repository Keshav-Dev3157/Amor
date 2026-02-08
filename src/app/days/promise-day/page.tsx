'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, ShieldCheck, Stars } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import HorizontalScrollGallery from '@/components/HorizontalScrollGallery';
import PinkyPromise from '@/components/PinkyPromise';

gsap.registerPlugin(ScrollTrigger);

export default function PromiseDay() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Elegant Reveal
            gsap.from(".reveal-text", {
                opacity: 0,
                x: -30,
                stagger: 0.3,
                duration: 1.5,
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
            <div ref={containerRef} className="relative min-h-[400vh] bg-[#0A192F] text-[#E6F1FF] overflow-hidden">
                {/* Background Particles/Glows */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-[#FFD700]/5 blur-[120px] rounded-full" />
                </div>

                {/* Navigation */}
                <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center bg-gradient-to-b from-[#0A192F] to-transparent">
                    <Link
                        href="/"
                        className="p-4 glass rounded-full text-[#64FFDA] hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] transition-all pointer-events-auto"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="font-pacifico text-2xl text-[#64FFDA] opacity-80">Cycle 05</div>
                </nav>

                {/* SECTION 1: The Oath */}
                <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="space-y-6 z-10"
                    >
                        <div className="flex justify-center mb-8">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <ShieldCheck className="w-16 h-16 text-[#64FFDA]" />
                            </motion.div>
                        </div>
                        <h1 className="text-6xl md:text-9xl font-pacifico text-[#CCD6F6] drop-shadow-lg">
                            An Eternal Oath.
                        </h1>
                        <p className="text-xl md:text-2xl text-[#8892B0] italic max-w-2xl mx-auto leading-relaxed font-serif">
                            {"\"A promise is not just words, it's a silent commitment from one heart to another. A bond that never breaks.\""}
                        </p>
                    </motion.div>

                    <div className="absolute bottom-20 flex flex-col items-center gap-4 opacity-30">
                        <span className="text-[10px] tracking-[1em] uppercase text-[#64FFDA] font-bold">Scroll for the truth</span>
                        <div className="w-px h-16 bg-gradient-to-b from-[#64FFDA] to-transparent" />
                    </div>
                </section>

                {/* SECTION 2: Pillars of Trust */}
                <section className="py-[20vh] px-6 reveal-trigger">
                    <div className="max-w-4xl mx-auto space-y-[40vh]">
                        <div className="reveal-text flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                            <Lock className="w-12 h-12 text-[#FFD700]" />
                            <h2 className="text-5xl font-serif text-[#CCD6F6]">Held in Trust.</h2>
                            <p className="text-xl text-[#8892B0] font-serif leading-relaxed italic">
                                Your secrets, your dreams, your fears... they are all safe with me. I promise to be the keeper of your happiness.
                            </p>
                        </div>

                        <div className="reveal-text flex flex-col items-center md:items-end text-center md:text-right space-y-6 ml-auto">
                            <Stars className="w-12 h-12 text-[#FFD700]" />
                            <h2 className="text-5xl font-serif text-[#CCD6F6]">Guided by Stars.</h2>
                            <p className="text-xl text-[#8892B0] font-serif leading-relaxed italic">
                                No regardless of how dark the night gets, my promise to you will always be the light that guides us back together.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 2.5: The Gallery */}
                <HorizontalScrollGallery
                    bucketName="promise-day"
                    title="Vows Captured"
                    subtitle="Every smile is a promise kept"
                    imageStyle="minimal"
                />

                {/* SECTION 3: Pinky Promise */}
                <section className="min-h-screen py-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-6xl font-pacifico text-[#64FFDA]">Our Pinky Promise</h2>
                            <div className="mt-8">
                                <PinkyPromise />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: The Final Word */}
                <section className="h-screen flex flex-col items-center justify-center px-6 relative bg-gradient-to-t from-blue-900/20 to-transparent">
                    <div className="text-center space-y-8 z-10 max-w-3xl glass p-12 md:p-20 rounded-[4rem] border border-[#64FFDA]/10 shadow-[0_0_80px_rgba(100,255,218,0.1)]">
                        <h2 className="text-6xl md:text-7xl font-pacifico text-[#CCD6F6] mb-6">
                            My Promise,
                        </h2>
                        <p className="text-2xl md:text-3xl font-serif text-[#8892B0] italic mb-12 leading-relaxed">
                            {"\"I promise to never stop choosing you. To never stop loving you. To be your rock, your refuge, and your forever.\""}
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center pointer-events-auto">
                            <Link
                                href="/"
                                className="inline-block py-6 px-12 border border-[#64FFDA] text-[#64FFDA] rounded-full font-bold text-xl hover:bg-[#64FFDA]/10 transition-all shadow-[0_0_20px_rgba(100,255,218,0.2)]"
                            >
                                I Promise Too
                            </Link>
                        </div>
                    </div>

                    <footer className="absolute bottom-12 text-[#64FFDA] text-[10px] tracking-[1em] uppercase font-bold opacity-50">
                        Chapter 05 : Vowed
                    </footer>
                </section>
            </div>
        </PageTransition>
    );
}
