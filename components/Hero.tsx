'use client';
import { motion } from 'framer-motion';
import { siteData } from '@/data/restaurantData';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-charcoal/70 z-10"></div>
        <img src="/1.jpg" alt="Restaurant Interior" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-20 text-center text-ivory px-4 mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-heading mb-4 text-gold"
        >
          {siteData.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light"
        >
          {siteData.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#menu" className="bg-gold text-espresso px-8 py-3 rounded-sm font-semibold hover:bg-ivory transition-colors duration-300">
            استعرض المنيو
          </a>
          <a href="#reservation" className="border border-gold text-gold px-8 py-3 rounded-sm font-semibold hover:bg-gold hover:text-espresso transition-colors duration-300">
            احجز طاولتك
          </a>
        </motion.div>
      </div>
    </section>
  )
}
