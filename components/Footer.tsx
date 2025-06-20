'use client';

import { motion } from 'framer-motion';
import { Bot, Twitter, Linkedin, Github, Mail, Phone, MapPin, Zap, Shield, Cpu } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Demo', href: '#demo' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Contact', href: 'mailto:vrishi@kazdesk.in' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'GDPR', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:vrishi@kazdesk.in', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-black border-t border-cyan-400/20 relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                >
                  <Bot className="h-10 w-10 text-cyan-400" />
                </motion.div>
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-lexend">
                  RIXIE AI
                </span>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-sm font-lexend">
                Rixie AI makes you fire your secretary. Forge genuine connections with calls, texts, and reminders that feel human.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Zap, value: '99.9%', label: 'Uptime' },
                  { icon: Shield, value: '24/7', label: 'Support' },
                  { icon: Cpu, value: '<1s', label: 'Response' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                  >
                    <stat.icon className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                    <div className="text-sm font-bold text-white font-lexend">{stat.value}</div>
                    <div className="text-xs text-gray-400 font-lexend">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -3,
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-800/50 p-3 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-700/50 transition-all border border-gray-700/30 hover:border-cyan-400/50"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-black mb-4 uppercase font-lexend text-sm tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-lexend relative group"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                      />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 pt-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Phone, text: '8639096590', href: 'tel:8639096590' },
              { icon: Mail, text: 'vrishi@kazdesk.in', href: 'mailto:vrishi@kazdesk.in' },
              { icon: MapPin, text: 'Hyderabad, India', href: '#' },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <contact.icon className="w-5 h-5 text-cyan-400" />
                </motion.div>
                <span className="font-lexend">{contact.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm font-lexend">
            © 2025 Rixie AI. All rights reserved. Built for the future.
          </p>
          
          <motion.div
            className="text-xs text-gray-500 font-lexend"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Powered by Advanced AI Technology
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Bottom Border */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        animate={{ 
          background: [
            'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.5), transparent)',
            'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.5), transparent)',
            'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.5), transparent)',
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </footer>
  );
}