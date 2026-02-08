'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PinkyPromise() {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="relative w-64 h-64 flex items-center justify-center">
                {/* stylized hands represented by arcs/paths */}
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Left Hand/Pinky */}
                    <motion.path
                        initial={{ pathLength: 0, x: -20 }}
                        whileInView={{ pathLength: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M 50 100 C 50 120, 70 140, 95 100"
                        fill="none"
                        stroke="#4FC3F7"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                    {/* Right Hand/Pinky */}
                    <motion.path
                        initial={{ pathLength: 0, x: 20 }}
                        whileInView={{ pathLength: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M 150 100 C 150 120, 130 140, 105 100"
                        fill="none"
                        stroke="#FFD700"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                    {/* The Interlock Circle */}
                    <motion.circle
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        cx="100"
                        cy="100"
                        r="15"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                    />
                    <motion.path
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        d="M 90 100 L 110 100 M 100 90 L 100 110"
                        stroke="#FFD700"
                        strokeWidth="2"
                    />
                </svg>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-2xl font-serif text-[#FFD700] italic mt-8 drop-shadow-lg"
            >
                A promise made is a bond eternal.
            </motion.p>
        </div>
    );
}
