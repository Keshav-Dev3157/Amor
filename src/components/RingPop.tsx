'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RingPop({ show }: { show: boolean }) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
                >
                    <div className="relative">
                        {/* Ring Base */}
                        <motion.div
                            initial={{ y: 100, rotate: -20 }}
                            animate={{ y: 0, rotate: 10 }}
                            transition={{ type: "spring", damping: 12 }}
                            className="w-48 h-48 border-8 border-yellow-400 rounded-full shadow-[0_0_50px_rgba(255,215,0,0.5)] flex items-center justify-center"
                        >
                            {/* Diamond */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute -top-12 w-20 h-20 bg-blue-100 rotate-45 border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-blue-200/50 to-transparent" />
                            </motion.div>
                        </motion.div>

                        {/* Sparkles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                    x: (Math.random() - 0.5) * 300,
                                    y: (Math.random() - 0.5) * 300
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: 0.8 + (i * 0.1),
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                                className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-200 rounded-full blur-[2px]"
                            />
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-32 left-1/2 -translate-x-1/2 text-4xl font-pacifico text-pink-soul w-[400px] text-center"
                        >
                            She said YES! 💍✨
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
