'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CelestialRing() {
    return (
        <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
            {/* Outer Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-romantic-crimson/20 blur-[100px] rounded-full"
            />

            {/* The Ring */}
            <motion.div
                initial={{ rotate: 0, scale: 0, opacity: 0 }}
                animate={{ rotate: 360, scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-full h-full rounded-full border-[2px] border-pink-soul/30 relative flex items-center justify-center"
            >
                <div className="absolute inset-[-10px] rounded-full border border-pink-soul/10 animate-[spin_10s_linear_infinite]" />

                {/* Diamond Point */}
                <motion.div
                    animate={{ boxShadow: ["0 0 20px #f06292", "0 0 60px #f06292", "0 0 20px #f06292"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rotate-45 bg-pink-soul border-4 border-white shadow-[0_0_30px_#f06292]"
                />
            </motion.div>

            {/* Inner Heart */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute"
            >
                <div className="text-pink-soul text-6xl md:text-8xl drop-shadow-[0_0_20px_rgba(240,98,146,0.8)]">
                    💍
                </div>
            </motion.div>
        </div>
    );
}
