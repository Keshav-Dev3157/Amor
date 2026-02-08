'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Sparkles, Cloud } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import HorizontalScrollGallery from '@/components/HorizontalScrollGallery';
import VirtualTeddy from '@/components/VirtualTeddy';

gsap.registerPlugin(ScrollTrigger);

export default function TeddyDay() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Soft Reveal
            gsap.from(".reveal-text", {
                opacity: 0,
                scale: 0.95,
                stagger: 0.2,
                duration: 1.5,
                ease: "power2.out",
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
            <div ref={containerRef} className="relative min-h-[400vh] bg-[#FFF8F0] text-[#795548] overflow-hidden">
                {/* Soft Clouds/Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ x: [-20, 20] }}
                        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
                        className="absolute top-[10%] left-[5%] text-[#D7CCC8]/30"
                    >
                        <Cloud size={200} />
                    </motion.div>
                    <motion.div
                        animate={{ x: [20, -20] }}
                        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
                        className="absolute top-[40%] right-[10%] text-[#D7CCC8]/20"
                    >
                        <Cloud size={150} />
                    </motion.div>
                </div>

                {/* Navigation */}
                <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center bg-gradient-to-b from-[#FFF8F0] to-transparent">
                    <Link
                        href="/"
                        className="p-4 glass rounded-full text-[#8D6E63] hover:shadow-[0_0_15px_rgba(141,110,99,0.2)] transition-all pointer-events-auto"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="font-pacifico text-2xl text-[#8D6E63] opacity-80">Cycle 04</div>
                </nav>

                {/* SECTION 1: Intro */}
                <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                        className="space-y-6 z-10"
                    >
                        <StarsIcon />
                        <h1 className="text-6xl md:text-9xl font-pacifico text-[#8D6E63] drop-shadow-sm">
                            Cuddly Love.
                        </h1>
                        <p className="text-xl md:text-2xl text-[#A1887F] italic max-w-2xl mx-auto leading-relaxed font-serif">
                            {"\"A teddy bear is a faithful friend you can hug at any time. Just like my heart is always here for yours.\""}
                        </p>
                    </motion.div>

                    <div className="absolute bottom-20 flex flex-col items-center gap-4 opacity-30">
                        <span className="text-[10px] tracking-[1em] uppercase text-[#8D6E63] font-bold">Scroll for comfort</span>
                        <div className="w-px h-16 bg-gradient-to-b from-[#8D6E63] to-transparent" />
                    </div>
                </section>

                {/* SECTION 2: Cuddly Moments */}
                <section className="py-[20vh] px-6 reveal-trigger">
                    <div className="max-w-4xl mx-auto space-y-[40vh]">
                        <div className="reveal-text flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                            <Sparkles className="w-12 h-12 text-[#BCAAA4]" />
                            <h2 className="text-5xl font-serif text-[#8D6E63]">Soft as Clouds.</h2>
                            <p className="text-xl text-[#A1887F] font-serif leading-relaxed italic">
                                Thinking about you feels like the softest embrace. A gentle reminder that the world is a kind place.
                            </p>
                        </div>

                        <div className="reveal-text flex flex-col items-center md:items-end text-center md:text-right space-y-6 ml-auto">
                            <Heart className="w-12 h-12 text-[#BCAAA4]" />
                            <h2 className="text-5xl font-serif text-[#8D6E63]">Warm as Home.</h2>
                            <p className="text-xl text-[#A1887F] font-serif leading-relaxed italic">
                                No matter where we are, your love is the home I carry with me. Constant, warm, and comforting.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 2.5: The Gallery */}
                <HorizontalScrollGallery
                    bucketName="teddy-day"
                    title="Cuddly Memories"
                    subtitle="Moments that feel like a warm hug"
                    imageStyle="minimal"
                />

                {/* SECTION 3: Virtual Teddy */}
                <section className="min-h-screen py-20 bg-[#FFFBF7]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-6xl font-pacifico text-[#8D6E63]">Your Virtual Bestie</h2>
                            <p className="text-[#A1887F] font-serif italic mt-4 text-lg">Give it a hover or a tap...</p>
                        </div>
                        <VirtualTeddy />
                    </div>
                </section>

                {/* SECTION 4: The Finale */}
                <section className="h-screen flex flex-col items-center justify-center px-6 relative bg-gradient-to-t from-[#D7CCC8]/20 to-transparent">
                    <div className="text-center space-y-8 z-10 max-w-3xl glass p-12 md:p-20 rounded-[4rem] border border-[#D7CCC8]/30 shadow-xl">
                        <h2 className="text-6xl md:text-7xl font-pacifico text-[#8D6E63] mb-6">
                            Sweet Khushi,
                        </h2>
                        <p className="text-2xl md:text-3xl font-serif text-[#795548] italic mb-12 leading-relaxed">
                            {"\"Wishing I could be there to hold you tight. For now, let this digital buddy keep you company.\""}
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center pointer-events-auto">
                            <Link
                                href="/"
                                className="inline-block py-6 px-12 bg-[#8D6E63] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-lg"
                            >
                                Back to Timeline
                            </Link>
                        </div>
                    </div>

                    <footer className="absolute bottom-12 text-[#8D6E63] text-[10px] tracking-[1em] uppercase font-bold">
                        Chapter 04 : Cuddled
                    </footer>
                </section>
            </div>
        </PageTransition>
    );
}

function StarsIcon() {
    return (
        <div className="flex justify-center gap-4 mb-8">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                <Sparkles size={32} className="text-[#BCAAA4]" />
            </motion.div>
        </div>
    );
}
