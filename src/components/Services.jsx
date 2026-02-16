import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Droplets, Zap, CheckCircle2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const services = [
    {
        icon: <Sparkles className="w-8 h-8 text-red-500" />,
        title: "Exterior Detail",
        price: "From $150",
        features: ["Hand Wash & Dry", "Clay Bar Treatment", "Wheel & Tire Cleaning", "Spray Wax Application"],
    },
    {
        icon: <Droplets className="w-8 h-8 text-blue-500" />,
        title: "Interior Detail",
        price: "From $200",
        features: ["Deep Vacuum", "Leather Conditioning", "Steam Cleaning", "Window Cleaning"],
    },
    {
        icon: <Zap className="w-8 h-8 text-yellow-500" />,
        title: "Paint Correction",
        price: "From $400",
        features: ["1-Step or 2-Step Polish", "Swirl Mark Removal", "Scratches Reduction", "High Gloss Finish"],
    },
    {
        icon: <Shield className="w-8 h-8 text-green-500" />,
        title: "Ceramic Coating",
        price: "From $800",
        features: ["3-5 Year Protection", "Hydrophobic Effect", "UV Resistance", "Deepest Shine"],
    },
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-neutral-950 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-900/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-900/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <RevealOnScroll>
                    <div className="text-center mb-24">
                        <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">PREMIUM SERVICES</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-900 mx-auto rounded-full mb-8"></div>
                        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            Tailored detailing packages designed to restore, protect, and enhance your vehicle's appearance.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1}>
                            <div
                                className="bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-neutral-900/80 transition-all duration-500 hover:-translate-y-2 group hover:border-red-900/30 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col h-full relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="mb-8 bg-neutral-800/30 p-5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500 shadow-inner border border-white/5 relative z-10">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 relative z-10 group-hover:text-red-500 transition-colors duration-300">{service.title}</h3>
                                <p className="text-neutral-500 font-medium text-lg mb-8 relative z-10 border-b border-white/5 pb-4 inline-block w-full">{service.price}</p>

                                <ul className="space-y-4 mb-8 flex-grow relative z-10">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                                            <CheckCircle2 size={16} className="text-neutral-600 mr-3 mt-0.5 group-hover:text-red-500 transition-colors duration-300" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="tel:+15551234567"
                                    className="relative z-10 block w-full py-4 text-center border border-white/10 bg-white/5 text-white rounded-xl hover:bg-red-600 hover:border-red-600 transition-all duration-300 font-bold text-xs tracking-[0.2em] uppercase hover:shadow-lg hover:shadow-red-900/20"
                                >
                                    Book Now
                                </a>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
