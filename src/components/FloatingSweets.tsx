'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SWEET_COLORS = ['#5d4037', '#8d6e63', '#a1887f', '#3e2723'];

export default function FloatingSweets() {
    const sweets = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        size: Math.random() * 20 + 10,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        color: SWEET_COLORS[Math.floor(Math.random() * SWEET_COLORS.length)],
        opacity: Math.random() * 0.3 + 0.1,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {sweets.map((sweet) => (
                <motion.div
                    key={sweet.id}
                    initial={{
                        opacity: 0,
                        x: `${sweet.x}%`,
                        y: '110%'
                    }}
                    animate={{
                        opacity: sweet.opacity,
                        y: '-10%',
                        rotate: 360
                    }}
                    transition={{
                        duration: sweet.duration,
                        repeat: Infinity,
                        delay: sweet.delay,
                        ease: "linear"
                    }}
                    className="absolute rounded-sm"
                    style={{
                        width: sweet.size,
                        height: sweet.size,
                        backgroundColor: sweet.color,
                        filter: 'blur(1px)'
                    }}
                />
            ))}
        </div>
    );
}
