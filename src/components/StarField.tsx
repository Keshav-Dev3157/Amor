'use client';

import React, { useEffect, useRef } from 'react';

export default function StarField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        const starCount = 150;

        class Star {
            x: number = 0;
            y: number = 0;
            size: number = 0;
            speedX: number = 0;
            speedY: number = 0;
            opacity: number = 0;

            constructor() {
                this.reset();
            }

            reset() {
                if (!canvas) return;
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = (Math.random() - 0.5) * 0.2;
                this.opacity = Math.random();
            }

            update() {
                if (!canvas) return;
                this.x += this.speedX;
                this.y += this.speedY;
                this.opacity += (Math.random() - 0.5) * 0.05;
                this.opacity = Math.max(0, Math.min(1, this.opacity));

                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(240, 98, 146, ${this.opacity})`; // Pink Soul Stars
                ctx.fill();

                if (this.opacity > 0.8) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = '#f06292';
                } else {
                    ctx.shadowBlur = 0;
                }
            }
        }

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push(new Star());
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(15, 5, 7, 0.1)'; // Trail effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.update();
                star.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            init();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
        />
    );
}
