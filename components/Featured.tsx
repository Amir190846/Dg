'use client';
import { motion } from 'framer-motion';
import { menuItems } from '@/data/restaurantData';

export default function Featured() {
  const featuredItems = menuItems.filter(item => item.isFeatured);

  return (
    <section id="featured" className="py-24 bg-espresso text-ivory px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading text-gold mb-4">أطباقنا المميزة</h2>
          <div className="h-1 w-24 bg-burgundy mx-auto"></div>
          <p className="mt-4 text-ivory/70 max-w-2xl mx-auto">اختيارات الشيف لأطباق استثنائية تعكس براعتنا في دمج النكهات الكلاسيكية بالأسلوب المعاصر.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-heading text-gold mb-2">{item.name}</h3>
                <p className="text-ivory/80 mb-4">{item.description}</p>
                <span className="text-xl font-bold text-ivory">{item.price.toLocaleString('ar-IQ')} د.ع</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}