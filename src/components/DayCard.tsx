'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lock, Heart } from 'lucide-react';
import { isDayUnlocked, getTimeUntilUnlock } from '@/lib/dateUtils';
import { DayContent } from '@/lib/dayData';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface DayCardProps {
    day: DayContent;
    index: number;
}

export default function DayCard({ day, index }: DayCardProps) {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const unlocked = isDayUnlocked(day.date);
    const timeLeft = getTimeUntilUnlock(day.date);

    // Don't render dynamic parts until mounted to prevent hydration mismatch
    if (!isMounted) {
        return (
            <div className="relative w-full max-w-md mx-auto mb-12 h-64 glass rounded-3xl animate-pulse" />
        );
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn(
                "relative w-full max-w-md mx-auto mb-12 p-8 glass rounded-[2.5rem] group overflow-hidden border border-romantic-maroon/20",
                !unlocked && "opacity-80 grayscale-[0.3]"
            )}
        >
            {/* Decorative highlights */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-romantic-crimson/10 blur-[80px] rounded-full group-hover:bg-romantic-pink/20 transition-colors duration-700" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-6xl mb-6 group-hover:rotate-12 transition-transform duration-700">{day.emoji}</div>
                <h2 className="text-3xl font-pacifico text-pink-soul mb-2">
                    Day {index + 1}: {day.title}
                </h2>
                <p className="text-gray-500 font-medium mb-8 uppercase tracking-widest text-[10px]">
                    {format(day.date, 'MMMM dd, yyyy')}
                </p>

                {unlocked ? (
                    <Link
                        href={day.path}
                        className="px-10 py-4 bg-romantic-maroon text-pink-100 rounded-full font-bold hover:bg-romantic-crimson transition-all hover:shadow-[0_0_20px_rgba(136,14,79,0.5)] transform active:scale-95"
                    >
                        Enter Story
                    </Link>
                ) : (
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 text-romantic-crimson font-bold uppercase tracking-widest text-[10px] mb-2">
                            <Lock size={12} />
                            <span>Locked</span>
                        </div>
                        <p className="text-gray-500 text-xs italic">
                            Unlocks in {timeLeft ? `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m` : 'soon'}
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
