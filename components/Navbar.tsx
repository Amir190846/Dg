'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteData } from '@/data/restaurantData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-espresso/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-gold font-heading text-2xl font-bold tracking-wider">{siteData.name}</a>
        
        <nav className="hidden md:flex gap-8 text-ivory font-medium">
          <a href="#story" className="hover:text-gold transition-colors">قصتنا</a>
          <a href="#featured" className="hover:text-gold transition-colors">المميز</a>
          <a href="#menu" className="hover:text-gold transition-colors">المنيو</a>
          <a href="#reservation" className="hover:text-gold transition-colors">الحجز</a>
        </nav>

        <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-espresso/95 backdrop-blur-md flex flex-col items-center py-6 gap-6 text-ivory border-t border-white/10">
          <a href="#story" onClick={() => setIsOpen(false)}>قصتنا</a>
          <a href="#featured" onClick={() => setIsOpen(false)}>المميز</a>
          <a href="#menu" onClick={() => setIsOpen(false)}>المنيو</a>
          <a href="#reservation" onClick={() => setIsOpen(false)}>الحجز</a>
        </div>
      )}
    </header>
  )
}