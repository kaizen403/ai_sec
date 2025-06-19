'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Phone, MessageSquare, Brain, Clock, CheckCircle, Zap, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Calendar,
    title: 'Intelligent Scheduling',
    subtitle: 'Call-In & Text-In Booking',
    description: 'Visitors, clients, or colleagues dial or message Rixie AI. It checks your calendar, suggests optimal time slots, and instantly confirms appointments—eliminating endless back-and-forth.',
    color: 'from-blue-500 to-cyan-500',
    delay: 0,
  },
  {
    icon: Phone,
    title: 'Proactive Outreach',
    subtitle: 'Outbound Meeting Requests',
    description: 'Need to reschedule or confirm? Rixie AI reaches out by phone or text on your behalf with professional, human-like communication that maintains your reputation.',
    color: 'from-purple-500 to-pink-500',
    delay: 0.2,
  },
  {
    icon: Clock,
    title: 'Smart Reminders',
    subtitle: 'Never Miss Important Moments',
    description: 'Receive intelligent texts or calls ahead of every event with context-aware information, agenda details, and preparation notes tailored to each meeting.',
    color: 'from-green-500 to-emerald-500',
    delay: 0.4,
  },
  {
    icon: Brain,
    title: 'Contextual Intelligence',
    subtitle: 'Memory-Driven Insights',
    description: 'Rixie AI learns patterns, remembers preferences, and provides intelligent nudges—alerting you when it\'s time to follow up with key contacts or prepare for recurring topics.',
    color: 'from-orange-500 to-red-500',
    delay: 0.6,
  },
  {
    icon: MessageSquare,
    title: 'Seamless Documentation',
    subtitle: 'Capture Every Important Detail',
    description: 'After calls or meetings, Rixie AI prompts for notes and action items. Dictate decisions, preferences, or follow-ups—everything is timestamped and linked to the relevant event.',
    color: 'from-teal-500 to-blue-500',
    delay: 0.8,
  },
  {
    icon: CheckCircle,
    title: 'Action-Oriented Follow-up',
    subtitle: 'Turn Conversations into Results',
    description: 'Transform meeting notes into actionable tasks automatically. Rixie AI creates follow-up reminders and can schedule necessary next steps directly on your calendar.',
    color: 'from-indigo-500 to-purple-500',
    delay: 1.0,
  },
];

const benefits = [
  {
    icon: Calendar,
    title: 'Calendar-First Design',
    description: 'Seamless integration with your existing workflow—no inbox access required, just intelligent calendar management.',
  },
  {
    icon: Zap,
    title: 'Voice & Text Mastery',
    description: 'Handle all communication entirely via voice or text with natural language processing that understands context.',
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'Continuously learns your preferences, communication style, and business patterns for increasingly personalized service.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, GDPR compliance, and zero-trust architecture protect all your sensitive information.',
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#060A17] to-[#0A0F1F] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
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
          <h2 className="text-5xl md:text-6xl font-lexend font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6">
            Superhuman Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-lexend">
            Rixie AI doesn&apos;t just manage your schedule—it revolutionizes how you connect, remember, and execute on what matters most.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div
          ref={ref}
          className="grid auto-rows-[220px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => {
            const layout = [
              'lg:col-span-2 lg:row-span-2',
              'lg:col-span-2',
              '',
              '',
              'lg:col-span-2',
              ''
            ][index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: feature.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={cn('group relative', layout)}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2 font-lexend">{feature.title}</h3>
                  <h4 className={`text-lg font-medium bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-4 font-lexend`}>
                    {feature.subtitle}
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-lexend flex-grow">{feature.description}</p>

                  {/* Hover Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why We Stand Out */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-lexend font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-12">
            Why Rixie AI Stands Out
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <benefit.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-white mb-3 font-lexend">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-lexend">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Demo Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 p-12 text-center"
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-lexend">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-lexend">
              See how Rixie AI handles real conversations, scheduling conflicts, and complex requests with human-like intelligence.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl font-lexend"
            >
              Try Interactive Demo
            </motion.button>
          </div>
          
          {/* Background Animation */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-4 right-4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
