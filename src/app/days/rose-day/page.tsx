'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowLeft, Heart, Sparkles, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SimpleRose from '@/components/SimpleRose';
import { supabase } from '@/lib/supabase';

gsap.registerPlugin(ScrollTrigger);

const MemoryPolaroid = ({ src, caption, rotation, xOffset, delay = 0 }: { src: string, caption: string, rotation: number, xOffset: string, delay?: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, rotate: rotation - 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: rotation }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay, ease: "easeOut" }}
            className={`relative p-4 bg-white shadow-2xl rounded-sm w-[85vw] md:w-80 border-8 border-white ${xOffset}`}
        >
            <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                <img src={src} alt={caption} className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black/5" />
            </div>
            <p className="font-romantic text-2xl text-romantic-maroon text-center pt-2">
                {caption}
            </p>
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
        </motion.div>
    );
};

export default function RoseDay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = React.useState<{ [key: string]: string }>({
        polaroid1: "/memories/polaroid1.png",
        polaroid2: "/memories/polaroid2.png"
    });
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchImages() {
            try {
                const { data: listData } = await supabase.storage.from('memories').list();

                if (listData && listData.length > 0) {
                    const newImages: { [key: string]: string } = {};
                    for (let i = 0; i < Math.min(listData.length, 2); i++) {
                        const { data } = supabase.storage.from('memories').getPublicUrl(listData[i].name);
                        newImages[`polaroid${i + 1}`] = data.publicUrl;
                    }
                    if (Object.keys(newImages).length > 0) {
                        setImages(prev => ({ ...prev, ...newImages }));
                    }
                }
            } catch (error) {
                console.error("Error fetching images from Supabase:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchImages();
    }, []);

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

                {/* SECTION 2: A Fragrant Memory (Personalization Layer) */}
                <section className="min-h-screen py-[20vh] px-8 relative overflow-visible z-10">
                    <div className="max-w-6xl mx-auto space-y-[30vh]">
                        {/* Intro to Memories */}
                        <div className="flex flex-col items-center text-center space-y-6 mb-20">
                            <Heart className="w-12 h-12 text-romantic-crimson animate-pulse" />
                            <h2 className="text-6xl md:text-7xl font-serif text-pink-soul">A Fragrant Memory</h2>
                            <p className="text-xl md:text-2xl text-gray-400 font-sans leading-relaxed italic max-w-3xl">
                                Every memory with you smells of roses and feels like a dream. Here are a few moments that stay forever in my heart.
                            </p>
                        </div>

                        {/* Floating Memory 1 */}
                        <div className="flex justify-start w-full relative min-h-[400px]">
                            {loading ? (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Loader2 className="w-8 h-8 text-pink-soul/20 animate-spin" />
                                </div>
                            ) : (
                                <MemoryPolaroid
                                    src={images.polaroid1}
                                    caption="Our Sunset"
                                    rotation={-4}
                                    xOffset="mx-auto md:ml-10"
                                />
                            )}
                        </div>

                        {/* Middle Text */}
                        <div className="flex justify-center text-center py-20">
                            <p className="text-2xl md:text-3xl font-serif text-pink-soul/40 italic max-w-xl">
                                {"\"The way you smile at me makes even the brightest rose feel dull.\""}
                            </p>
                        </div>

                        {/* Floating Memory 2 */}
                        <div className="flex justify-end w-full relative min-h-[400px]">
                            {loading ? (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Loader2 className="w-8 h-8 text-pink-soul/20 animate-spin" />
                                </div>
                            ) : (
                                <MemoryPolaroid
                                    src={images.polaroid2}
                                    caption="Just for you"
                                    rotation={3}
                                    xOffset="mx-auto md:mr-10"
                                    delay={0.2}
                                />
                            )}
                        </div>
                    </div>
                </section>

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

                    <footer className="absolute bottom-12 text-pink-soul/20 text-[10px] tracking-[1.2em] uppercase font-medium">
                        Chapter 01 : Completed
                    </footer>
                </section>
            </div>
        </PageTransition>
    );
}
