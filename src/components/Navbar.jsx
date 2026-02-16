import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/danilos_detailing_logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
                ? 'bg-neutral-950/70 backdrop-blur-xl border-white/5 py-4 shadow-lg shadow-black/20'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-1 group">
                    <img src={logo} alt="Danilos Detailing" className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium tracking-widest uppercase text-neutral-400 hover:text-white transition-colors group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="tel:+15551234567"
                        className="bg-white/5 hover:bg-red-600/90 border border-white/10 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 backdrop-blur-md flex items-center gap-2 group hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                    >
                        <Phone size={16} className="text-red-500 group-hover:text-white transition-colors" />
                        <span>Book Now</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-t border-neutral-800 absolute w-full"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-neutral-300 hover:text-white text-xl font-medium tracking-tight"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="tel:+15551234567"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-red-600 text-white px-5 py-4 rounded-xl font-bold text-center shadow-lg shadow-red-900/20 flex items-center justify-center gap-3"
                            >
                                <Phone size={20} />
                                Call to Book
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
