'use client';

import { motion } from 'framer-motion';
import { Bot, Calendar, Phone, MessageSquare, Sparkles, Zap, Clock } from 'lucide-react';

export default function Hero() {
  const floatingIcons = [
    { icon: Calendar, delay: 0 },
    { icon: Phone, delay: 0.2 },
    { icon: MessageSquare, delay: 0.4 },
    { icon: Sparkles, delay: 0.6 },
    { icon: Zap, delay: 0.8 },
    { icon: Clock, delay: 1 },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0B0E15] via-[#0F141A] to-[#161C22] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-slate-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ icon: Icon, delay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:block text-blue-400"
          style={{
            left: `${15 + (index * 15)}%`,
            top: `${20 + (index * 10)}%`,
          }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1

              className="text-3xl md:text-5xl lg:text-6xl font-lexend font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6 leading-tight tracking-tight"

              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The AI That Makes You
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-lexend font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-8 leading-tight tracking-tight">

                <span className="fire-underline">Fire</span> Your Secretary
              </h1>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-lexend"
          >
            Forge genuine connections—calls, texts, reminders, and answers that feel human.
            <span className="block mt-2 text-blue-400 font-medium">
              Your AI Secretary works 24/7, never sleeps, and never forgets.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-slate-700 text-white font-bold rounded-full text-lg shadow-2xl overflow-hidden font-lexend"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Bot className="w-5 h-5" />
                Get Your AI Secretary
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-slate-600"
                initial={{ scale: 0, rotate: 180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors font-lexend"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '50K+', label: 'Calls Handled', icon: Phone },
              { number: '24/7', label: 'Always Available', icon: Clock },
              { number: '99.9%', label: 'Uptime Guarantee', icon: Zap },
            ].map(({ number, label, icon: Icon }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                  aria-hidden="true"
                />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex flex-col items-center">
                  <Icon className="w-8 h-8 text-blue-400 mb-3" />
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-3xl font-extrabold text-white mb-1 font-lexend"
                  >
                    {number}
                  </motion.div>
                  <div className="text-gray-400 font-lexend text-sm">{label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
