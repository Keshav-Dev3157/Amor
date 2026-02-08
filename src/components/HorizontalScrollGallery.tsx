'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { supabase } from '@/lib/supabase';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollGalleryProps {
    bucketName?: string;
    title?: string;
    subtitle?: string;
    imageStyle?: 'polaroid' | 'modern' | 'minimal';
}

export default function HorizontalScrollGallery({
    bucketName = 'memories',
    title = 'Our Memories',
    subtitle = 'Swipe through our beautiful moments together',
    imageStyle = 'polaroid'
}: HorizontalScrollGalleryProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchImages() {
            try {
                const { data: listData } = await supabase.storage.from(bucketName).list();

                if (listData && listData.length > 0) {
                    const imageUrls = listData.map((file: { name: string }) => {
                        const { data } = supabase.storage.from(bucketName).getPublicUrl(file.name);
                        return data.publicUrl;
                    });
                    setImages(imageUrls);
                } else {
                    // Fallback placeholders
                    setImages([
                        '/memories/polaroid1.png',
                        '/memories/polaroid2.png',
                    ]);
                }
            } catch (error) {
                console.error('Error fetching images:', error);
                setImages([
                    '/memories/polaroid1.png',
                    '/memories/polaroid2.png',
                ]);
            } finally {
                setLoading(false);
            }
        }

        fetchImages();
    }, [bucketName]);

    useEffect(() => {
        if (!loading && images.length > 0 && containerRef.current && galleryRef.current) {
            const container = containerRef.current;
            const gallery = galleryRef.current;

            // Calculate total scroll distance
            const scrollDistance = gallery.scrollWidth - container.offsetWidth;

            // Only create horizontal scroll if there's content to scroll
            if (scrollDistance > 0) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        pin: true,
                        scrub: 1,
                        end: () => `+=${scrollDistance}`,
                        anticipatePin: 1,
                    }
                });

                tl.to(gallery, {
                    x: -scrollDistance,
                    ease: 'none'
                });

                return () => {
                    ScrollTrigger.getAll().forEach(st => st.kill());
                };
            }
        }
    }, [loading, images]);

    const getImageFrameClass = () => {
        switch (imageStyle) {
            case 'polaroid':
                return 'p-4 bg-white shadow-2xl rounded-2xl border-8 border-white';
            case 'modern':
                return 'p-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20';
            case 'minimal':
                return 'rounded-2xl overflow-hidden shadow-xl';
            default:
                return 'p-4 bg-white shadow-2xl rounded-2xl border-8 border-white';
        }
    };

    if (loading) {
        return (
            <section className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-pink-soul animate-spin" />
            </section>
        );
    }

    return (
        <section ref={containerRef} className="h-screen overflow-hidden relative z-20">
            {/* Title Section */}
            <div className="absolute top-12 left-0 right-0 z-20 text-center px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-serif text-pink-soul mb-4"
                >
                    {title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 italic max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            </div>

            {/* Horizontal Scroll Gallery */}
            <div className="h-full flex items-center">
                <div
                    ref={galleryRef}
                    className="flex gap-8 md:gap-12 px-6 md:px-12"
                    style={{ width: 'max-content' }}
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${getImageFrameClass()} flex-shrink-0 w-[85vw] md:w-96 transform hover:scale-105 transition-transform duration-300`}
                        >
                            <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4 rounded-xl">
                                <img
                                    src={src}
                                    alt={`Memory ${index + 1}`}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/5" />
                            </div>
                            {imageStyle === 'polaroid' && (
                                <p className="font-romantic text-2xl text-romantic-maroon text-center pt-2">
                                    Memory {index + 1}
                                </p>
                            )}
                            {/* Glossy overlay for polaroid style */}
                            {imageStyle === 'polaroid' && (
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-pink-soul/40 text-sm animate-pulse">
                Scroll to explore →
            </div>
        </section>
    );
}
