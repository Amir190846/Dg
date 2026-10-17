'use client';
import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section id="story" className="py-24 bg-ivory px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl font-heading text-burgundy mb-6">قصة تجمع الأصالة بالفخامة</h2>
            <div className="h-1 w-24 bg-gold mb-8"></div>
            <div className="space-y-4 text-charcoal/80 text-lg leading-relaxed">
              <p>نقدم لك أكثر من مجرد وجبة؛ نحن نقدم تجربة متكاملة تأخذك في رحلة عبر التراث الممزوج بلمسات العصر الحديث.</p>
              <p>تأسس مطعمنا ليضع معايير جديدة في عالم الضيافة والمطاعم الفاخرة، حيث ننتقي المكونات بعناية فائقة، ونولي اهتماماً بأدق التفاصيل في التحضير والتقديم، لضمان تجربة تذوق استثنائية ترضي الذواقة.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-gold translate-x-4 translate-y-4 rounded-sm -z-10"></div>
            <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop" alt="Restaurant Story" className="w-full h-auto object-cover rounded-sm shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}