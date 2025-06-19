'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Phone, MessageSquare, Brain, Clock, CheckCircle, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Schedule in Seconds',
    subtitle: 'Call-In & Text-In Booking',
    description: 'Visitors, clients, or colleagues dial or message your AI Secretary\'s number. It checks your calendar, suggests up to three open slots, and instantly confirms an appointment—no more endless back-and-forth.',
    color: 'from-blue-500 to-cyan-500',
    delay: 0,
  },
  {
    icon: Phone,
    title: 'Let Us Make the Call',
    subtitle: 'Outbound Meeting Requests',
    description: 'Need to reschedule or confirm? Your Secretary reaches out by phone or text on your behalf: "Hi, this is Jordan\'s Secretary—are you available next Tuesday at 2 PM?"',
    color: 'from-purple-500 to-pink-500',
    delay: 0.2,
  },
  {
    icon: Clock,
    title: 'Never Forget a Moment',
    subtitle: 'Proactive Reminders',
    description: 'Receive texts or automated calls ahead of every event ("You have \'Project Kickoff\' in one hour—agenda: finalize scope").',
    color: 'from-green-500 to-emerald-500',
    delay: 0.4,
  },
  {
    icon: Brain,
    title: 'Memory-Driven Nudges',
    subtitle: 'Intelligent Contextual Alerts',
    description: 'Beyond standard reminders, your Secretary learns patterns and personal notes—alerting you when it\'s time to check in with a key contact or prepare for a recurring topic.',
    color: 'from-orange-500 to-red-500',
    delay: 0.6,
  },
  {
    icon: MessageSquare,
    title: 'Capture Every Detail',
    subtitle: 'On-Demand Note Capture',
    description: 'After any call or meeting, your Secretary prompts, "Anything to note?" Dictate decisions, preferences, or action items—it timestamps and links them to that event.',
    color: 'from-teal-500 to-blue-500',
    delay: 0.8,
  },
  {
    icon: CheckCircle,
    title: 'Turn Notes into Next Steps',
    subtitle: 'Instant Task Creation',
    description: 'Post-meeting, text "Log action items" and list your tasks. Your Secretary stores them and can add follow-up reminders on your calendar.',
    color: 'from-indigo-500 to-purple-500',
    delay: 1.0,
  },
];

const benefits = [
  {
    icon: Calendar,
    title: 'Calendar-First Design',
    description: 'No inbox access required—just your existing calendar and a secure notes space.',
  },
  {
    icon: Zap,
    title: 'Hands-Free Efficiency',
    description: 'Handle scheduling, reminders, and follow-ups entirely via voice or text.',
  },
  {
    icon: Brain,
    title: 'Human-Like Memory',
    description: 'Personal preferences, project details, and meeting history—all at your fingertips.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and privacy protection for all your sensitive information.',
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#060A17] to-[#0A0F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Your AI Secretary doesn&apos;t just manage your schedule—it revolutionizes how you connect, remember, and follow through.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 font-lexend">{feature.title}</h3>
                <h4 className={`text-lg font-medium bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-4 font-lexend`}>
                  {feature.subtitle}
                </h4>
                <p className="text-gray-300 leading-relaxed font-lexend">{feature.description}</p>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
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
            Why Our AI Secretary Stands Out
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <benefit.icon className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
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
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 p-8 md:p-12 text-center"
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-lexend">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-lexend">
              See how your AI Secretary handles real conversations, scheduling conflicts, and complex requests with human-like intelligence.
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
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-4 left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}