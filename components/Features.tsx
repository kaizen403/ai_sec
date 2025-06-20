'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Phone, MessageSquare, Brain, Clock, CheckCircle, Zap, Shield, Cpu, Network, Database, Lock } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Intelligent Scheduling',
    subtitle: 'Call-In & Text-In Booking',
    description: 'Visitors, clients, or colleagues dial or message Rixie AI. It checks your calendar, suggests optimal time slots, and instantly confirms appointments—eliminating endless back-and-forth.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Proactive Outreach',
    subtitle: 'Outbound Meeting Requests',
    description: 'Need to reschedule or confirm? Rixie AI reaches out by phone or text on your behalf with professional, human-like communication that maintains your reputation.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Smart Reminders',
    subtitle: 'Never Miss Important Moments',
    description: 'Receive intelligent texts or calls ahead of every event with context-aware information, agenda details, and preparation notes tailored to each meeting.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Brain,
    title: 'Contextual Intelligence',
    subtitle: 'Memory-Driven Insights',
    description: 'Rixie AI learns patterns, remembers preferences, and provides intelligent nudges—alerting you when it\'s time to follow up with key contacts or prepare for recurring topics.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: MessageSquare,
    title: 'Seamless Documentation',
    subtitle: 'Capture Every Important Detail',
    description: 'After calls or meetings, Rixie AI prompts for notes and action items. Dictate decisions, preferences, or follow-ups—everything is timestamped and linked to the relevant event.',
    color: 'from-teal-500 to-blue-500',
  },
  {
    icon: CheckCircle,
    title: 'Action-Oriented Follow-up',
    subtitle: 'Turn Conversations into Results',
    description: 'Transform meeting notes into actionable tasks automatically. Rixie AI creates follow-up reminders and can schedule necessary next steps directly on your calendar.',
    color: 'from-indigo-500 to-purple-500',
  },
];

const capabilities = [
  {
    icon: Cpu,
    title: 'Neural Processing',
    description: 'Advanced AI that understands context and nuance',
    metric: '99.9%',
    unit: 'Accuracy'
  },
  {
    icon: Network,
    title: 'Real-time Sync',
    description: 'Instant calendar and communication integration',
    metric: '<100ms',
    unit: 'Latency'
  },
  {
    icon: Database,
    title: 'Memory Bank',
    description: 'Remembers every interaction and preference',
    metric: '∞',
    unit: 'Storage'
  },
  {
    icon: Lock,
    title: 'Fort Knox Security',
    description: 'Military-grade encryption for all data',
    metric: '256-bit',
    unit: 'Encryption'
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6 font-lexend">
            SUPERHUMAN CAPABILITIES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-lexend">
            Rixie AI doesn't just manage your schedule—it revolutionizes how you connect, remember, and execute on what matters most.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 mb-4"
                >
                  <capability.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="text-3xl font-bold text-cyan-400 mb-1 font-lexend">
                  {capability.metric}
                </div>
                <div className="text-sm text-gray-400 mb-3 font-lexend">
                  {capability.unit}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 font-lexend">
                  {capability.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-lexend">
                  {capability.description}
                </p>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Features - Hexagonal Layout */}
        <div ref={ref} className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50
                }}
                className="group relative perspective-1000"
              >
                <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-500 h-full transform-gpu">
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(45deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`,
                      padding: '2px',
                    }}
                  >
                    <div className="w-full h-full bg-gray-900 rounded-3xl"></div>
                  </motion.div>

                  <div className="relative z-10">
                    {/* Icon with Holographic Effect */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 relative`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-white/20"
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-2 font-lexend">
                      {feature.title}
                    </h3>
                    
                    <h4 className={`text-lg font-medium bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-4 font-lexend`}>
                      {feature.subtitle}
                    </h4>
                    
                    <p className="text-gray-300 leading-relaxed font-lexend">
                      {feature.description}
                    </p>

                    {/* Particle Effect on Hover */}
                    <div className="absolute inset-0 pointer-events-none">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            y: [0, -20, -40],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/30 via-gray-900/30 to-cyan-900/30 border border-gray-700/50 p-12 text-center">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.1), transparent, rgba(6, 182, 212, 0.1), transparent)',
                }}
              />
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 font-lexend"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                READY TO EXPERIENCE THE FUTURE?
              </motion.h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-lexend">
                See how Rixie AI handles real conversations, scheduling conflicts, and complex requests with human-like intelligence.
              </p>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 50px rgba(147, 51, 234, 0.8)",
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl relative overflow-hidden font-lexend"
              >
                <span className="relative z-10">Try Interactive Demo</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}