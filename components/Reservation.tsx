'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Reservation() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="reservation" className="py-24 bg-ivory px-4 border-t border-charcoal/5">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border border-gold/20">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-heading text-burgundy mb-4">احجز طاولتك</h2>
            <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
            <p className="text-charcoal/70">نرجو ملء النموذج أدناه وسنقوم بتأكيد حجزك في أقرب وقت عبر الهاتف.</p>
          </div>

          {status === 'success' ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-sm text-center">
              <h3 className="text-xl font-bold mb-2">تم استلام طلبك بنجاح!</h3>
              <p>سيقوم فريقنا بالتواصل معك قريباً لتأكيد الحجز النهائي.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">الاسم الكريم</label>
                  <input required type="text" className="w-full border border-charcoal/20 rounded-sm p-3 focus:outline-none focus:border-gold transition-colors bg-ivory/50" placeholder="الاسم الكامل" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">رقم الهاتف</label>
                  <input required type="tel" className="w-full border border-charcoal/20 rounded-sm p-3 focus:outline-none focus:border-gold transition-colors bg-ivory/50" placeholder="07XXXXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">عدد الأشخاص</label>
                  <select className="w-full border border-charcoal/20 rounded-sm p-3 focus:outline-none focus:border-gold transition-colors bg-ivory/50">
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} أشخاص</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">التاريخ</label>
                  <input required type="date" className="w-full border border-charcoal/20 rounded-sm p-3 focus:outline-none focus:border-gold transition-colors bg-ivory/50" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">ملاحظات إضافية (اختياري)</label>
                <textarea rows={3} className="w-full border border-charcoal/20 rounded-sm p-3 focus:outline-none focus:border-gold transition-colors bg-ivory/50" placeholder="مناسبة خاصة، حساسية من طعام معين..."></textarea>
              </div>
              <button type="submit" className="w-full bg-burgundy text-ivory py-4 rounded-sm font-bold text-lg hover:bg-espresso transition-colors duration-300">
                طلب الحجز
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}