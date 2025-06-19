'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, MessageSquare, Calendar, Brain, ArrowRight, PlayCircle, User, Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Connect Your Phone',
    description:
      'Grab your dedicated AI Secretary number and share it with your contacts.',
  },
  {
    number: '02',
    icon: Calendar,
    title: 'Sync Your Calendar',
    description:
      'Link Google or Outlook so your availability is always up to date.',
  },
  {
    number: '03',
    icon: Brain,
    title: 'Train Preferences',
    description:
      'Teach your AI Secretary how and when you like to meet or respond.',
  },
  {
    number: '04',
    icon: MessageSquare,
    title: 'Start Delegating',
    description:
      'Let your AI handle calls, texts and reminders while you focus.',
  },
];

const useCases = [
  {
    title: 'For Executives',
    scenarios: [
      'Schedule board meetings across multiple time zones',
      'Manage client calls and follow-up reminders',
      'Coordinate with executive assistants seamlessly',
    ],
    icon: '👔',
  },
  {
    title: 'For Consultants',
    scenarios: [
      'Book discovery calls with prospects',
      'Manage project check-ins and deliverables',
      'Handle client communication professionally',
    ],
    icon: '💼',
  },
  {
    title: 'For Healthcare',
    scenarios: [
      'Schedule patient appointments and confirmations',
      'Manage referral coordination',
      'Handle prescription refill reminders',
    ],
    icon: '🏥',
  },
  {
    title: 'For Sales Teams',
    scenarios: [
      'Qualify leads and book demos',
      'Follow up on proposals automatically',
      'Coordinate team meetings and training',
    ],
    icon: '📈',
  },
];

// Interactive Animation Component
const CallAnimation = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6 text-center font-lexend">
          Watch Your AI Secretary in Action
        </h3>

        {/* Phone Animation */}
        <div className="relative">
          {/* Incoming Call */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6 p-4 bg-blue-500/20 rounded-2xl border border-blue-500/30"
          >
            <div className="relative">
              <Phone className="w-8 h-8 text-blue-400" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -inset-2 border-2 border-blue-400/50 rounded-full"
              />
            </div>
            <div>
              <p className="text-white font-semibold font-lexend">Incoming Call</p>
              <p className="text-blue-300 text-sm font-lexend">Client wants to schedule a meeting</p>
            </div>
          </motion.div>

          {/* AI Processing */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6 p-4 bg-yellow-500/20 rounded-2xl border border-yellow-500/30"
          >
            <Brain className="w-8 h-8 text-yellow-400" />
            <div className="flex-1">
              <p className="text-white font-semibold font-lexend">AI Processing</p>
              <div className="flex items-center gap-2 mt-2">
                <motion.div
                  animate={{ rotate: 360 }}

                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}

                  className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full"
                />
                <p className="text-yellow-300 text-sm font-lexend">Checking calendar availability...</p>
              </div>
            </div>
          </motion.div>

          {/* Calendar Check */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6 p-4 bg-green-500/20 rounded-2xl border border-green-500/30"
          >
            <Calendar className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-white font-semibold font-lexend">Calendar Synced</p>
              <p className="text-green-300 text-sm font-lexend">Found 3 available slots this week</p>
            </div>
          </motion.div>

          {/* Response */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-4 bg-orange-500/20 rounded-2xl border border-orange-500/30"
          >
            <CheckCircle className="w-8 h-8 text-orange-400" />
            <div>
              <p className="text-white font-semibold font-lexend">Meeting Scheduled</p>
              <p className="text-orange-300 text-sm font-lexend">Confirmation sent to both parties</p>
            </div>
          </motion.div>

          {/* Connecting Lines */}
          <motion.div
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-blue-400 via-yellow-400 via-green-400 to-orange-400 opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-[#0A0F1F] to-[#060A17]">
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
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-lexend">
            Get your AI Secretary up and running in minutes, not hours. No complex setup, no training required.
          </p>
        </motion.div>

        {/* Interactive Animation */}
        <CallAnimation />

        {/* Steps */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-500/40"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20"
              >
                <step.icon className="w-6 h-6 text-blue-300" />
              </motion.div>
              <div className="text-3xl font-extrabold text-blue-300 font-lexend">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white font-lexend">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm font-lexend">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl font-lexend font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-12">
            Perfect for Any Industry
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-4 font-lexend">{useCase.title}</h4>
                  <ul className="space-y-2">
                    {useCase.scenarios.map((scenario, scenarioIndex) => (
                      <li key={scenarioIndex} className="text-gray-400 text-sm flex items-start gap-2 font-lexend">
                        <ArrowRight className="w-3 h-3 text-blue-400 mt-1 flex-shrink-0" />
                        {scenario}
                      </li>
                    ))}
                  </ul>
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
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-white/10 p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-lexend">
            See It in Action
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-lexend">
            Watch a real conversation between a client and an AI Secretary. Notice how natural and efficient it feels.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all font-lexend"
          >
            <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Watch 2-Minute Demo
          </motion.button>

          {/* Background decoration */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
