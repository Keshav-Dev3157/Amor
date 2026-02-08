'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

interface PetalProps {
    petal: {
        id: number;
        initialX: number;
        initialY: number;
        angle: number;
        drift: number;
        finalRotate: number;
        finalRadius: number;
        color: string;
        scale: number;
        order: number;
    };
    scrollYProgress: MotionValue<number>;
}

// Sub-components moved outside to avoid re-creation on every render
const BloomPetal = ({ petal, scrollYProgress }: PetalProps) => {
    // Vertical Travel: Converging at the bloom center (45vh)
    const y = useTransform(
        scrollYProgress,
        [0, 0.85, 0.98],
        [`${petal.initialY}vh`, '42vh', '45vh']
    );

    // Horizontal Movement: Drifts then converges precisely (50vw)
    const x = useTransform(
        scrollYProgress,
        [0, 0.4, 0.85, 0.98],
        [
            `${petal.initialX}vw`,
            `${petal.initialX + petal.drift}vw`,
            '50vw',
            `calc(50vw + ${Math.cos((petal.finalRotate) * Math.PI / 180) * petal.finalRadius}px)`
        ]
    );

    // Rotation: Spins then settles into the bloom shape
    const rotate = useTransform(
        scrollYProgress,
        [0, 0.85, 0.98],
        [petal.angle, petal.angle + 720, petal.finalRotate + 180] // Face center
    );

    // Opacity: Fade in logic
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.1, 0.85, 0.98],
        [0, 1, 0.9, 1]
    );

    // Scale: Growing into the bloom
    const scale = useTransform(
        scrollYProgress,
        [0, 0.85, 0.98],
        [petal.scale * 0.4, petal.scale, petal.scale * 1.5]
    );

    return (
        <motion.div
            className="absolute left-0 top-0"
            style={{
                x: x,
                y: y,
                rotate: rotate,
                opacity: opacity,
                scale: scale,
                width: '50px',
                height: '65px',
                backgroundColor: petal.color,
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                boxShadow: '0 5px 25px rgba(0,0,0,0.6), inset 0 0 20px rgba(255,255,255,0.15)',
                transformOrigin: '50% 100%',
                zIndex: 20 - petal.order
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10 rounded-full" />
            <div className="absolute inset-x-[45%] top-0 h-full w-[1px] bg-white/10 blur-[1px]" />
        </motion.div>
    );
};

const RoseStem = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const opacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
    const scaleY = useTransform(scrollYProgress, [0.85, 0.98], [0, 1]);

    return (
        <motion.div
            style={{
                opacity,
                scaleY,
                originY: 0 // Grows downward from the bloom
            }}
            className="absolute left-1/2 top-[45vh] w-1.5 h-64 bg-gradient-to-b from-green-900 via-green-800 to-transparent -translate-x-1/2 rounded-full blur-[0.5px] z-10"
        />
    );
};

export default function SimpleRose() {
    const [mounted, setMounted] = useState(false);
    const { scrollYProgress } = useScroll();

    // ALL useTransform hooks for this component MUST be called here, at the top level
    const glowOpacity = useTransform(scrollYProgress, [0.94, 0.98], [0, 0.8]);
    const glowScale = useTransform(scrollYProgress, [0.94, 0.98], [0, 1]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const petals = useMemo(() => Array.from({ length: 14 }, (_, i) => {
        const isInner = i < 3;
        const isMiddle = i >= 3 && i < 8;
        const radius = isInner ? 8 : isMiddle ? 22 : 45;
        const layerRotate = isInner ? (i * 120) : isMiddle ? (i * 72) : (i * 60);

        // Use index-based deterministic "randomness" to avoid hydration mismatch
        const seedAngle = (i * 137.5) % 360; // Golden angle inspired scatter
        const seedDrift = 10 + ((i * 7) % 15);

        return {
            id: i,
            initialX: (i * 6) + 7,
            initialY: (i * 2) + 5,
            angle: seedAngle,
            drift: (i % 2 === 0 ? 1 : -1) * seedDrift,
            finalRotate: layerRotate,
            finalRadius: radius,
            color: isInner ? '#4a0404' : isMiddle ? '#880e4f' : '#f06292',
            scale: isInner ? 0.7 : isMiddle ? 1.1 : 1.4,
            order: i
        };
    }), []);

    // Early return only AFTER all hooks are defined
    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
            <RoseStem scrollYProgress={scrollYProgress} />

            {petals.map((petal) => (
                <BloomPetal key={petal.id} petal={petal} scrollYProgress={scrollYProgress} />
            ))}

            <motion.div
                style={{
                    opacity: glowOpacity,
                    scale: glowScale,
                    x: '-50%',
                    y: '-50%'
                }}
                className="absolute left-1/2 top-[45vh] w-12 h-12 bg-pink-soul/30 rounded-full blur-[10px] z-30"
            />
        </div>
    );
}

SimpleRose.displayName = 'SimpleRose';
