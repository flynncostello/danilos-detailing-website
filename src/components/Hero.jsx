import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-neutral-950">
            {/* Background Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/40 to-neutral-950 z-10" />

            {/* Animated Spotlights */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Car Detail"
                    className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_infinite_alternate]"
                    style={{ animation: 'slowZoom 20s ease-in-out infinite alternate' }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-16">
                <div
                    className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-black/40 border border-white/5 text-white/80 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase mb-8 backdrop-blur-xl shadow-2xl"
                >
                    <Sparkles size={12} className="text-red-500" />
                    <span>Premium Auto Detailing</span>
                </div>

                <div className="overflow-hidden mb-8">
                    <h1
                        className="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.9]"
                    >
                        PERFECTION <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500 drop-shadow-lg filter bg-size-200 animate-gradient">
                            DEFINED
                        </span>
                    </h1>
                </div>

                <p className="text-lg md:text-xl text-neutral-300/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                    The ultimate care for your vehicle. Unrivaled paint correction, ceramic coating, and bespoke detailing services.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="tel:+15551234567"
                        className="w-full sm:w-auto px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(220,38,38,0.3)] hover:shadow-[0_0_60px_rgba(220,38,38,0.5)] flex items-center justify-center gap-3 text-sm tracking-widest uppercase"
                    >
                        <Phone size={18} />
                        Book Appointment
                    </a>
                    <a
                        href="#services"
                        className="w-full sm:w-auto px-10 py-5 bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 font-bold rounded-full backdrop-blur-sm transition-all text-sm tracking-widest uppercase"
                    >
                        View Services
                    </a>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
            >
                <a href="#services" className="text-white/30 hover:text-white transition-colors animate-bounce block p-2">
                    <ChevronDown size={32} />
                </a>
            </motion.div>

            <style>{`
                @keyframes slowZoom {
                    0% { transform: scale(1.05); }
                    100% { transform: scale(1.15); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
