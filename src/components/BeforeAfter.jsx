import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
// Using a high-quality Porsche image for perfect alignment - utilizing CSS filters for the 'before' state to ensure 100% geometric match
const carImage = "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop";

import RevealOnScroll from './RevealOnScroll';

const BeforeAfter = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);

    const handleDrag = (e, info) => {
        const containerWidth = containerRef.current.offsetWidth;
        const newPos = (info.point.x / containerWidth) * 100;
        setSliderPosition(Math.min(100, Math.max(0, newPos)));
    };

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percentage = (x / width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, percentage)));
    }

    return (
        <section id="gallery" className="py-32 bg-neutral-950 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Real Results</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">TRANSFORMATIONS</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-900 mx-auto rounded-full mb-8"></div>
                        <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            Slide to reveal the precision and depth of our restoration process.
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.3}>
                    <div
                        ref={containerRef}
                        className="relative w-full aspect-video md:aspect-[21/9] bg-neutral-900 rounded-xl overflow-hidden cursor-ew-resize select-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group"
                        onMouseMove={handleMouseMove}
                        onTouchMove={(e) => {
                            const rect = containerRef.current.getBoundingClientRect();
                            const x = e.touches[0].clientX - rect.left;
                            const width = rect.width;
                            const percentage = (x / width) * 100;
                            setSliderPosition(Math.min(100, Math.max(0, percentage)));
                        }}
                    >
                        {/* After Image (Background) - "Real" looking */}
                        <img
                            src={carImage}
                            alt="After Detail"
                            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                        />

                        {/* Overlay Label for After */}
                        <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-widest pointer-events-none uppercase">
                            After
                        </div>

                        {/* Before Image (Clipped) */}
                        <div
                            className="absolute top-0 left-0 h-full overflow-hidden pointer-events-none shadow-[5px_0_20px_rgba(0,0,0,0.3)]"
                            style={{ width: `${sliderPosition}%` }}
                        >
                            <img
                                src={carImage}
                                alt="Before Detail"
                                className="absolute top-0 left-0 max-w-none h-full object-cover filter brightness-75 sepia-[0.3] grayscale-[0.5] blur-[0.5px]" // Stronger filters to simulate dirty/dull state
                                style={{ width: `${containerRef.current?.offsetWidth}px` || '100vw' }}
                            />
                            {/* Overlay Label for Before */}
                            <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-widest pointer-events-none uppercase">
                                Before
                            </div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-0 bottom-0 w-0.5 bg-red-500/50 cursor-ew-resize z-10"
                            style={{ left: `${sliderPosition}% ` }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)] border-2 border-white transition-transform group-hover:scale-110">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white w-4 h-4"><path d="m9 18 6-6-6-6" /></svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white w-4 h-4 rotate-180 absolute"><path d="m9 18 6-6-6-6" /></svg>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default BeforeAfter;
