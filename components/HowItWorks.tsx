'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Calendar, Brain, MessageSquare, ArrowRight, PlayCircle, Zap, Shield, Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Connect Your Phone',
    description: 'Get your dedicated AI Secretary number and share it with your contacts. Your AI is instantly ready to handle calls and texts.',
    details: [
      'Instant setup in under 2 minutes',
      'Professional greeting customization',
      'Smart call routing and screening'
    ]
  },
  {
    number: '02',
    icon: Calendar,
    title: 'Sync Your Calendar',
    description: 'Link Google Calendar, Outlook, or any major calendar service. Your AI knows your availability in real-time.',
    details: [
      'Two-way calendar synchronization',
      'Multi-calendar support',
      'Time zone intelligence'
    ]
  },
  {
    number: '03',
    icon: Brain,
    title: 'Train Your Preferences',
    description: 'Teach your AI Secretary your meeting preferences, communication style, and business rules.',
    details: [
      'Natural language training',
      'Custom business logic',
      'Personality customization'
    ]
  },
  {
    number: '04',
    icon: MessageSquare,
    title: 'Start Delegating',
    description: 'Your AI handles scheduling, reminders, and follow-ups while you focus on what matters most.',
    details: [
      'Automated follow-ups',
      'Smart reminder system',
      'Detailed conversation logs'
    ]
  },
];

const useCases = [
  {
    title: 'Executive Leadership',
    description: 'Board meetings, investor calls, and strategic planning sessions managed seamlessly.',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Sales & Consulting',
    description: 'Prospect calls, client meetings, and proposal follow-ups handled professionally.',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Healthcare & Legal',
    description: 'Patient appointments, consultations, and compliance-ready communication.',
    icon: Clock,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Creative & Freelance',
    description: 'Client consultations, project kickoffs, and creative briefings scheduled effortlessly.',
    icon: CheckCircle,
    color: 'from-orange-500 to-red-500',
  },
];

// Interactive Step Animation Component
const StepAnimation = ({ step, index, isActive }: { step: any, index: number, isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`relative ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}
    >
      <div className="group relative">
        {/* Step Number */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="absolute -left-6 lg:-left-8 top-8 z-10"
        >
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-white font-bold text-xl lg:text-2xl font-lexend">{step.number}</span>
          </div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-blue-500/30 transition-all duration-300 ml-6 lg:ml-8"
        >
          <div className="flex items-start gap-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl"
            >
              <step.icon className="w-8 h-8 text-blue-400" />
            </motion.div>
            
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-lexend">{step.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-lexend">{step.description}</p>
              
              <ul className="space-y-3">
                {step.details.map((detail: string, detailIndex: number) => (
                  <motion.li
                    key={detailIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + detailIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-blue-300 font-lexend"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-[#0A0F1F] to-[#060A17] relative overflow-hidden">
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
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-lexend">
            Get your AI Secretary up and running in minutes. No complex setup, no training required—just intelligent automation that works.
          </p>
        </motion.div>

        {/* Steps with Timeline */}
        <div ref={ref} className="relative mb-20">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 opacity-30"></div>
          
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`lg:grid lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <StepAnimation step={step} index={index} isActive={inView} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl font-lexend font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-12">
            Perfect for Every Professional
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${useCase.color} mb-6`}
                  >
                    <useCase.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 font-lexend">{useCase.title}</h4>
                  <p className="text-gray-400 leading-relaxed font-lexend">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 p-12 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-4 left-4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"
          />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-lexend">
              See It in Action
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-lexend">
              Watch a real conversation between a client and an AI Secretary. Notice how natural, intelligent, and efficient it feels.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl font-lexend"
            >
              <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Watch 2-Minute Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}