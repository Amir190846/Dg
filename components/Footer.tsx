import { siteData } from '@/data/restaurantData';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory/80 pt-20 pb-10 border-t-4 border-gold">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-heading text-2xl text-gold mb-6">{siteData.name}</h3>
            <p className="mb-6 leading-relaxed">{siteData.description}</p>
            <div className="flex gap-4">
              <a href={siteData.social.instagram} className="hover:text-gold transition-colors"><Instagram /></a>
              <a href={siteData.social.facebook} className="hover:text-gold transition-colors"><Facebook /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-xl text-white mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="hover:text-gold transition-colors">الرئيسية</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">قائمة الطعام</a></li>
              <li><a href="#featured" className="hover:text-gold transition-colors">الأطباق المميزة</a></li>
              <li><a href="#reservation" className="hover:text-gold transition-colors">الحجز</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl text-white mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <span>{siteData.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-gold shrink-0 mt-1" size={20} />
                <span dir="ltr">{siteData.contact.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-gold shrink-0 mt-1" size={20} />
                <span>{siteData.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {siteData.name}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}