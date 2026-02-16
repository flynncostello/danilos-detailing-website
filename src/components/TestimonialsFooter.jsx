import React from 'react';
import { motion } from 'framer-motion';
import { Star, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import logo from '../assets/danilos_detailing_logo.png';
import RevealOnScroll from './RevealOnScroll';

const TestimonialsFooter = () => {
    return (
        <>
            {/* Testimonials */}
            <section id="testimonials" className="py-32 bg-neutral-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Client Stories</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">TRUSTED BY ENTHUSIASTS</h2>
                        </div>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                text: "Absolutely incredible work. Danilo transformed my Porsche back to showroom condition. The attention to detail is unmatched.",
                                author: "Alex Johnson",
                                car: "Porsche 911 Turbo S"
                            },
                            {
                                text: "I've tried many detailers in the city, but none come close to this level of perfection. The ceramic coating is flawless.",
                                author: "Michael Chen",
                                car: "BMW M4 Competition"
                            },
                            {
                                text: "Professional, punctual, and passionate. My vintage Mercedes looks better than it did 30 years ago. Highly recommended.",
                                author: "Sarah Williams",
                                car: "Mercedes-Benz 190SL"
                            }
                        ].map((item, index) => (
                            <RevealOnScroll key={index} delay={index * 0.1}>
                                <div className="bg-neutral-900/40 backdrop-blur border border-white/5 p-10 rounded-2xl hover:bg-neutral-900/60 transition-colors relative group h-full">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600/0 via-red-600/50 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="flex text-red-500 mb-6 space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-neutral-300 mb-8 italic leading-relaxed font-light">
                                        "{item.text}"
                                    </p>
                                    <div className="mt-auto">
                                        <h4 className="text-white font-bold tracking-wide uppercase text-sm">{item.author}</h4>
                                        <p className="text-xs text-red-500 font-medium mt-1 uppercase tracking-wider">{item.car}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
            <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-center md:text-left">
                        <RevealOnScroll delay={0.1}>
                            <div>
                                <img src={logo} alt="Danilos Detailing" className="h-20 w-auto mb-6 mx-auto md:mx-0 object-contain hover:scale-105 transition-transform" />
                                <p className="text-neutral-500 mb-8 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                                    Premium auto detailing services for those who demand perfection. Restoring beauty, one detail at a time.
                                </p>
                                <div className="flex space-x-4 justify-center md:justify-start">
                                    <a href="https://www.instagram.com/danilosdetailing/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:border-transparent transition-all duration-300">
                                        <Instagram size={18} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-transparent transition-all duration-300">
                                        <Facebook size={18} />
                                    </a>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.2}>
                            <div>
                                <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Navigation</h4>
                                <ul className="space-y-4 text-sm">
                                    <li><a href="#services" className="text-neutral-500 hover:text-red-500 transition-colors">Services</a></li>
                                    <li><a href="#gallery" className="text-neutral-500 hover:text-red-500 transition-colors">Gallery</a></li>
                                    <li><a href="#testimonials" className="text-neutral-500 hover:text-red-500 transition-colors">Client Stories</a></li>
                                    <li><a href="#contact" className="text-neutral-500 hover:text-red-500 transition-colors">Contact Us</a></li>
                                </ul>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.3}>
                            <div>
                                <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Contact</h4>
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <a href="tel:+15551234567" className="flex items-center justify-center md:justify-start text-neutral-500 hover:text-white transition-colors group">
                                            <Phone className="w-4 h-4 mr-3 text-red-600 group-hover:scale-110 transition-transform" />
                                            <span>+1 (555) 123-4567</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:hello@danilosdetailing.com" className="flex items-center justify-center md:justify-start text-neutral-500 hover:text-white transition-colors group">
                                            <Mail className="w-4 h-4 mr-3 text-red-600 group-hover:scale-110 transition-transform" />
                                            <span>hello@danilosdetailing.com</span>
                                        </a>
                                    </li>
                                    <li className="flex items-start justify-center md:justify-start text-neutral-500">
                                        <MapPin className="w-4 h-4 mr-3 text-red-600 mt-0.5 flex-shrink-0" />
                                        <span>123 Detail Street<br />Los Angeles, CA 90021</span>
                                    </li>
                                </ul>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.4}>
                            <div>
                                <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Hours</h4>
                                <ul className="space-y-3 text-sm text-neutral-500">
                                    <li className="flex justify-between border-b border-neutral-900 pb-2">
                                        <span>Mon - Fri</span>
                                        <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
                                    </li>
                                    <li className="flex justify-between border-b border-neutral-900 pb-2">
                                        <span>Saturday</span>
                                        <span className="text-white font-medium">9:00 AM - 4:00 PM</span>
                                    </li>
                                    <li className="flex justify-between pb-2">
                                        <span>Sunday</span>
                                        <span className="text-red-600 font-bold">Closed</span>
                                    </li>
                                </ul>
                            </div>
                        </RevealOnScroll>
                    </div>

                    <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 uppercase tracking-wider">
                        <p>&copy; 2024 Danilo's Detailing. Crafted with precision.</p>
                        <div className="flex space-x-8 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default TestimonialsFooter;
