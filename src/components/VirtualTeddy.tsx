'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VirtualTeddy() {
    return (
        <div className="flex flex-col items-center gap-12 py-20">
            <motion.div
                className="relative w-64 h-64 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Teddy Ears */}
                <div className="absolute top-0 left-8 w-16 h-16 bg-[#D7CCC8] rounded-full border-4 border-[#BCAAA4]" />
                <div className="absolute top-0 right-8 w-16 h-16 bg-[#D7CCC8] rounded-full border-4 border-[#BCAAA4]" />
                <div className="absolute top-4 left-12 w-8 h-8 bg-[#BCAAA4] rounded-full" />
                <div className="absolute top-4 right-12 w-8 h-8 bg-[#BCAAA4] rounded-full" />

                {/* Teddy Head */}
                <motion.div
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-40 bg-[#D7CCC8] rounded-[4rem] border-4 border-[#BCAAA4] z-10 flex flex-col items-center justify-center"
                >
                    {/* Eyes */}
                    <div className="flex gap-12 mb-4">
                        <motion.div
                            animate={{ scaleY: [1, 0.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            className="w-4 h-4 bg-[#3E2723] rounded-full"
                        />
                        <motion.div
                            animate={{ scaleY: [1, 0.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            className="w-4 h-4 bg-[#3E2723] rounded-full"
                        />
                    </div>
                    {/* Snout */}
                    <div className="w-16 h-12 bg-white rounded-full flex flex-col items-center pt-2">
                        <div className="w-6 h-4 bg-[#3E2723] rounded-full" />
                        <div className="w-px h-4 bg-[#3E2723]" />
                    </div>
                </motion.div>

                {/* Teddy Body */}
                <div className="absolute top-36 left-1/2 -translate-x-1/2 w-56 h-48 bg-[#D7CCC8] rounded-[5rem] border-4 border-[#BCAAA4] z-0" />

                {/* Teddy Paws */}
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#D7CCC8] rounded-full border-4 border-[#BCAAA4]" />
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#D7CCC8] rounded-full border-4 border-[#BCAAA4]" />

                {/* Heart on Chest */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute top-[60%] left-1/2 -translate-x-1/2 z-20"
                >
                    <div className="text-red-500 text-3xl">❤</div>
                </motion.div>
            </motion.div>

            <p className="text-xl font-serif text-[#8D6E63] italic max-w-sm text-center">
                This teddy stays here to give you all the hugs I can&apos;t give in person right now. 🧸
            </p>
        </div>
    );
}
