'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface SuccessCelebrationProps {
    show: boolean;
}

export default function SuccessCelebration({ show }: SuccessCelebrationProps) {
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; color: string; size: number }[]>([]);

    useEffect(() => {
        if (show) {
            const newParticles = Array.from({ length: 50 }).map((_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                color: ['#f06292', '#ffb74d', '#4fc3f7', '#aed581', '#ffffff'][Math.floor(Math.random() * 5)],
                size: Math.random() * 10 + 5
            }));
            setParticles(newParticles);
        }
    }, [show]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl"
                >
                    {/* Confetti Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {particles.map((p) => (
                            <motion.div
                                key={p.id}
                                initial={{
                                    x: `${50}%`,
                                    y: '100%',
                                    scale: 0,
                                    rotate: 0
                                }}
                                animate={{
                                    x: `${p.x}%`,
                                    y: `${p.y}%`,
                                    scale: 1,
                                    rotate: 720
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut",
                                    delay: Math.random() * 0.5
                                }}
                                style={{
                                    position: 'absolute',
                                    width: p.size,
                                    height: p.size,
                                    backgroundColor: p.color,
                                    borderRadius: Math.random() > 0.5 ? '50%' : '2px'
                                }}
                            />
                        ))}
                    </div>

                    {/* Content */}
                    <motion.div
                        initial={{ scale: 0.8, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        className="text-center space-y-8 px-6 max-w-2xl z-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-pacifico text-pink-soul">
                            I KNEW YOU'D SAY YES!
                        </h1>
                        <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed">
                            Because you're stuck with me forever now 😏<br />
                            <span className="text-gray-400 text-xl font-inter italic block mt-4">
                                (And I'm the luckiest person alive because of it)
                            </span>
                        </p>

                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4">
                            <p className="text-xl text-pink-soul font-bold">
                                Come back tomorrow for Chocolate Day.
                            </p>
                            <p className="text-gray-400 italic">
                                I have sweet things to tell you 🍫
                            </p>
                        </div>

                        <Link
                            href="/"
                            className="inline-block py-6 px-12 bg-pink-soul text-background rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(240,98,146,0.4)]"
                        >
                            Back to Timeline
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
