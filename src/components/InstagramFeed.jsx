import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const InstagramFeed = () => {
    // Placeholder images that look like high-end detailing shots
    const posts = [
        "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=600&auto=format&fit=crop"
    ];

    return (
        <section className="py-24 bg-neutral-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <RevealOnScroll>
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                Follow the Process
                            </h2>
                            <p className="text-neutral-400 max-w-lg">
                                Behind the scenes of our latest transformations. Join our community of automotive enthusiasts.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.2}>
                        <motion.a
                            href="https://www.instagram.com/danilosdetailing/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center gap-2 text-white bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-bold shadow-lg shadow-purple-900/20"
                        >
                            <Instagram size={20} />
                            <span>@danilosdetailing</span>
                        </motion.a>
                    </RevealOnScroll>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {posts.map((post, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1 + 0.3}>
                            <a
                                href="https://www.instagram.com/danilosdetailing/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-900 block"
                            >
                                <img
                                    src={post}
                                    alt="Instagram Post"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Instagram className="text-white w-8 h-8" />
                                </div>
                            </a>
                        </RevealOnScroll>
                    ))}
                </div>

                <div className="mt-8 flex justify-center md:hidden">
                    <a
                        href="https://www.instagram.com/danilosdetailing/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-bold shadow-lg shadow-purple-900/20"
                    >
                        <Instagram size={20} />
                        <span>Follow on Instagram</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
