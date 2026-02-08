'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VALENTINE_DAYS } from '@/lib/dayData';
import DayCard from './DayCard';

export default function Timeline() {
    return (
        <div className="relative py-20 px-6 maroon-gradient min-h-screen">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-24 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-7xl md:text-9xl font-pacifico text-pink-soul mb-2 drop-shadow-2xl"
                    >
                        Amor
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 uppercase tracking-[0.5em] text-xs font-bold opacity-80"
                    >
                        A Journey Through My Heart
                    </motion.p>
                    <div className="h-px w-24 bg-romantic-crimson mx-auto mt-8 opacity-50" />
                </div>

                <div className="flex flex-col items-center">
                    {VALENTINE_DAYS.map((day, index) => (
                        <DayCard key={day.id} day={day} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
