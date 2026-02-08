'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const PETAL_COLORS = [
    '#4a0404', '#6a0606', '#880e4f', '#ad1457', '#c2185b',
];

interface PetalProps {
    index: number;
    total: number;
}

const Petal = React.forwardRef<SVGSVGElement, PetalProps>(({ index, total }, ref) => {
    const layer = Math.floor(index / 10);
    const scaleInFinal = 0.7 + (layer * 0.2);

    return (
        <svg
            ref={ref}
            viewBox="0 0 100 100"
            className="absolute w-20 h-20 pointer-events-none"
            style={{
                filter: 'drop-shadow(0 0 6px rgba(0,0,0,0.4))',
                zIndex: total - index
            }}
        >
            <path
                d="M50 0 C75 25 90 70 50 100 C10 70 25 25 50 0"
                fill={PETAL_COLORS[index % PETAL_COLORS.length]}
                style={{ transform: `scale(${scaleInFinal})` }}
            />
        </svg>
    );
});

Petal.displayName = 'Petal';

const RoseStem = React.forwardRef<SVGSVGElement>((_, ref) => {
    return (
        <svg
            ref={ref}
            viewBox="0 0 100 400"
            className="absolute w-24 h-80 pointer-events-none opacity-0 translate-y-16"
            style={{ zIndex: -1 }}
        >
            <path d="M50 0 Q55 150 50 400" stroke="#1a471c" strokeWidth="5" fill="transparent" strokeLinecap="round" />
            <path d="M52 120 Q80 95 90 125 Q70 150 52 138" fill="#236b27" />
            <path d="M48 200 Q20 175 15 210 Q40 240 48 220" fill="#236b27" />
            <path d="M55 280 Q75 265 80 285 Q60 305 55 295" fill="#236b27" />
        </svg>
    );
});

RoseStem.displayName = 'RoseStem';

export default function AssemblingRose() {
    const containerRef = useRef<HTMLDivElement>(null);
    const petalsRef = useRef<(SVGSVGElement | null)[]>([]);
    const stemRef = useRef<SVGSVGElement>(null);
    const coreRef = useRef<HTMLDivElement>(null);
    const totalPetals = 50;

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const petals = petalsRef.current.filter(Boolean);
        if (!petals.length || !containerRef.current) return;

        const ctx = gsap.context(() => {
            petals.forEach((petal, i) => {
                if (!petal) return;

                const layer = Math.floor(i / 10);
                const petalInLayer = i % 10;
                const angle = petalInLayer * 36;
                const finalRadius = layer * 15 + 8;
                const finalYOffset = -80 - (layer * 10);

                // STAGE 1: Start - Petals visibly drifting at the top
                gsap.set(petal, {
                    x: (Math.random() - 0.5) * window.innerWidth * 0.5,
                    y: -window.innerHeight * 0.3 + (Math.random() - 0.5) * 200,
                    rotation: Math.random() * 360,
                    scale: 0.6,
                    opacity: 0.7,
                });

                // STAGE 2: Journey - Petals travel downward as user scrolls
                gsap.to(petal, {
                    y: window.innerHeight * 0.3,
                    rotation: "+=180",
                    opacity: 0.8,
                    scrollTrigger: {
                        trigger: "body",
                        start: "top top",
                        end: "70% top",
                        scrub: 1.5,
                    }
                });

                // STAGE 3: Convergence - Petals gather and form the rose shape
                gsap.to(petal, {
                    x: Math.cos(angle * (Math.PI / 180)) * finalRadius,
                    y: Math.sin(angle * (Math.PI / 180)) * (finalRadius * 0.7) + finalYOffset,
                    rotation: angle + 90,
                    scale: 1,
                    opacity: 1,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: "body",
                        start: "75% top",
                        end: "90% top",
                        scrub: 2,
                    }
                });

                // STAGE 4: Breathing - The completed rose breathes gently
                gsap.to(petal, {
                    scale: 1.08,
                    rotation: `+=${Math.random() * 6 - 3}`,
                    duration: 2.5 + Math.random(),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    scrollTrigger: {
                        trigger: "body",
                        start: "92% top",
                        toggleActions: "play pause resume pause",
                    }
                });
            });

            // Stem reveal during convergence
            if (stemRef.current) {
                gsap.to(stemRef.current, {
                    opacity: 0.8,
                    y: 0,
                    scrollTrigger: {
                        trigger: "body",
                        start: "80% top",
                        end: "95% top",
                        scrub: 1,
                    }
                });
            }

            // Core glow
            if (coreRef.current) {
                gsap.to(coreRef.current, {
                    scale: 5,
                    opacity: 0.35,
                    scrollTrigger: {
                        trigger: "body",
                        start: "85% top",
                        end: "95% top",
                        scrub: 1,
                    }
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none flex items-end justify-center pb-32" style={{ zIndex: 0 }}>
            <div className="relative w-1 h-1">
                <RoseStem ref={stemRef} />

                {Array.from({ length: totalPetals }).map((_, i) => (
                    <Petal
                        key={i}
                        index={i}
                        total={totalPetals}
                        ref={(el) => { petalsRef.current[i] = el; }}
                    />
                ))}

                <div
                    ref={coreRef}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[85px] w-6 h-6 rounded-full bg-romantic-pink opacity-0 blur-2xl scale-0"
                />
            </div>
        </div>
    );
}
