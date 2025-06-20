'use client';

import { motion } from 'framer-motion';
import { Bot, Zap, ArrowRight, Cpu, Shield, Sparkles } from 'lucide-react';
import { openCalendly } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden flex items-center">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-green-400/30 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 100 + 100}px`,
            }}
            animate={{
              y: ['-100vh', '100vh'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="w-16 h-16 border border-cyan-400/20 rotate-45 bg-gradient-to-r from-purple-500/5 to-cyan-500/5"></div>
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <h1 className="text-6xl md:text-7xl font-black leading-tight font-lexend">
                  <span className="holographic">RIXIE AI</span>
                </h1>
                <motion.div
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -left-2 text-6xl md:text-7xl font-black text-red-500/20 font-lexend"
                >
                  RIXIE AI
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-lexend">
                The AI That Makes You
              </h2>
              <div className="relative inline-block">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent font-lexend">
                  FIRE YOUR SECRETARY
                </span>
                <motion.div
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/50 to-yellow-500/50"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed font-lexend"
            >
              Forge genuine connections with calls, texts, reminders, and answers that feel human.
              <span className="block mt-2 text-cyan-400 font-medium">
                Don't wait. She's not worth it. Replace your secretary with Rixie AI now!
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openCalendly}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg text-lg overflow-hidden border border-purple-400/30 font-lexend"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Bot className="w-6 h-6" />
                  Book Demo Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-cyan-400/50 text-cyan-400 font-bold rounded-lg text-lg hover:bg-cyan-400/5 transition-all font-lexend"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { icon: Zap, value: '99.9%', label: 'Uptime' },
                { icon: Shield, value: '24/7', label: 'Available' },
                { icon: Sparkles, value: '< 1s', label: 'Response' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white font-lexend">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-lexend">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Central AI Core */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="relative w-48 h-48 rounded-full border-4 border-cyan-400/30 flex items-center justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/80 to-cyan-500/80 flex items-center justify-center"
                >
                  <Cpu className="w-16 h-16 text-white" />
                </motion.div>
              </motion.div>

              {/* Orbiting Elements */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-cyan-400/70 rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    transformOrigin: `${120 + i * 20}px center`,
                  }}
                />
              ))}

              {/* Pulsing Rings */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-purple-500/20"
                  style={{
                    width: `${200 + i * 60}px`,
                    height: `${200 + i * 60}px`,
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}