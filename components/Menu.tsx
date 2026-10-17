'use client';
import { useState } from 'react';
import { menuCategories, menuItems } from '@/data/restaurantData';
import { motion } from 'framer-motion';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-ivory px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading text-burgundy mb-4">قائمة الطعام</h2>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === cat ? 'bg-burgundy text-ivory' : 'bg-transparent text-charcoal border border-charcoal/20 hover:border-burgundy hover:text-burgundy'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4 border-b border-charcoal/10 pb-6"
            >
              {item.image && (
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md shadow-sm" />
              )}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-heading text-xl text-espresso">{item.name}</h3>
                    {item.nameEn && <p className="text-sm text-charcoal/60 font-sans">{item.nameEn}</p>}
                  </div>
                  <span className="font-bold text-burgundy">{item.price.toLocaleString('ar-IQ')} د.ع</span>
                </div>
                <p className="text-charcoal/80 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}