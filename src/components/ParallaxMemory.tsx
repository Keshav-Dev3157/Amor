'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxMemoryProps {
    image: string;
    caption: string;
    className?: string;
}

export default function ParallaxMemory({ image, caption, className }: ParallaxMemoryProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(imageRef.current,
                { y: -50, scale: 1.1 },
                {
                    y: 50,
                    scale: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                }
            );

            gsap.fromTo(textRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: true,
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className={`relative overflow-hidden rounded-[2rem] shadow-2xl ${className}`}>
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
            <img
                ref={imageRef}
                src={image}
                alt={caption}
                className="w-full h-full object-cover"
            />
            <div
                ref={textRef}
                className="absolute bottom-8 left-8 z-20 text-white drop-shadow-lg"
            >
                <p className="text-romantic text-3xl md:text-4xl mb-2">{caption}</p>
                <div className="h-0.5 w-12 bg-white/70" />
            </div>
        </div>
    );
}
