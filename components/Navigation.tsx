'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bot, Zap } from 'lucide-react';
import { cn, openCalendly } from '@/lib/utils';

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
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-400/20'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Bot className="h-8 w-8 text-cyan-400" />
            </motion.div>
            <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-lexend">
              RIXIE AI
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <motion.a 
                href="#features" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-lexend font-medium relative group"
                whileHover={{ y: -2 }}
              >
                Features
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                />
              </motion.a>
              
              <motion.a 
                href="#pricing" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-lexend font-medium relative group"
                whileHover={{ y: -2 }}
              >
                Pricing
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                />
              </motion.a>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(147, 51, 234, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openCalendly}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-full font-bold font-lexend relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Book Demo
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600"
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-cyan-400/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <motion.a 
                href="#features" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 font-lexend font-medium"
                whileHover={{ x: 5 }}
                onClick={() => setIsOpen(false)}
              >
                Features
              </motion.a>
              
              <motion.a 
                href="#pricing" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 font-lexend font-medium"
                whileHover={{ x: 5 }}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </motion.a>
              
              <motion.button
                className="w-full text-left bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-3 py-2 rounded-lg font-bold font-lexend"
                onClick={() => {
                  openCalendly();
                  setIsOpen(false);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Demo
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}