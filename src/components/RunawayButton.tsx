'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface RunawayButtonProps {
    children: React.ReactNode;
    className?: string;
}

export default function RunawayButton({ children, className }: RunawayButtonProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleInteraction = () => {
        // Jump to a random position within a reasonable range
        const newX = (Math.random() - 0.5) * 300;
        const newY = (Math.random() - 0.5) * 300;
        setPosition({ x: newX, y: newY });
    };

    return (
        <motion.button
            animate={{ x: position.x, y: position.y }}
            onMouseEnter={handleInteraction}
            onClick={handleInteraction}
            whileTap={{ scale: 0.9 }}
            className={className}
        >
            {children}
        </motion.button>
    );
}
