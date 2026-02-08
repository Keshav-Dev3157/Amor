'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHOCOLATES = [
    { id: 1, color: '#3e2723', message: "You make my life sweeter than any chocolate." },
    { id: 2, color: '#5d4037', message: "Thinking of you is my favorite indulgence." },
    { id: 3, color: '#8d6e63', message: "Every day with you is a treat." },
    { id: 4, color: '#a1887f', message: "You're the caramel filling to my chocolate heart." }
];

export default function ChocolateBox() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className="flex flex-col items-center gap-12 py-20 px-6">
            <h3 className="text-3xl font-serif text-[#d7ccc8]">Pick a Chocolate...</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {CHOCOLATES.map((choco) => (
                    <motion.button
                        key={choco.id}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedId(choco.id)}
                        className="w-24 h-24 rounded-2xl shadow-2xl relative flex items-center justify-center overflow-hidden border border-white/5"
                        style={{ backgroundColor: choco.color }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                        <div className="w-12 h-12 bg-white/5 blur-md rounded-full" />
                    </motion.button>
                ))}
            </div>

            <div className="h-32 flex items-center justify-center max-w-xl text-center">
                <AnimatePresence mode="wait">
                    {selectedId ? (
                        <motion.p
                            key={selectedId}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-xl md:text-2xl font-serif text-[#d7ccc8] italic"
                        >
                            {CHOCOLATES.find(c => c.id === selectedId)?.message}
                        </motion.p>
                    ) : (
                        <p className="text-gray-500 font-serif italic italic opacity-50">
                            (Waiting for your choice)
                        </p>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
