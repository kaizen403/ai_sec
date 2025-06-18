'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#060A17]/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white font-lexend">AI Secretary</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors font-lexend">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors font-lexend">
                How It Works
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors font-lexend">
                Pricing
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium font-lexend"
              >
                Get Started
              </motion.button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#060A17]/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white font-lexend">
              Features
            </a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-300 hover:text-white font-lexend">
              How It Works
            </a>
            <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-white font-lexend">
              Pricing
            </a>
            <button className="w-full text-left bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-lg font-medium font-lexend">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}