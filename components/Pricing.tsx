'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Users, Building, Crown, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { openCalendly } from '@/lib/utils';

const plans = [
  {
    name: "Starter",
    description: "Perfect for solopreneurs and small businesses",
    features: [
      "Up to 100 calls per month",
      "Basic calendar integration",
      "SMS & email notifications",
      "Standard business hours",
      "Basic call recording",
      "Email support",
    ],
    icon: Users,
    popular: false,
    tier: 'basic'
  },
  {
    name: "Professional",
    description: "Ideal for growing teams and busy professionals",
    features: [
      "Up to 500 calls per month",
      "Advanced calendar synchronization",
      "Smart routing & escalation",
      "24/7 availability",
      "Full conversation logs",
      "Priority support",
      "Custom greetings",
      "Meeting preparation briefs",
      "CRM integration",
    ],
    icon: Building,
    popular: true,
    tier: 'pro'
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited calls",
      "Multi-calendar management",
      "Advanced AI training",
      "Custom workflows",
      "Department routing",
      "Dedicated account manager",
      "White-label options",
      "API access",
      "Advanced analytics",
      "SSO integration",
      "Custom integrations",
    ],
    icon: Crown,
    popular: false,
    tier: 'enterprise'
  },
];

const faqs = [
  {
    question: "How does Rixie AI handle complex scheduling?",
    answer: "Our AI understands context, preferences, and scheduling conflicts. It can handle multi-party meetings, time zone conversions, and even reschedule meetings when conflicts arise."
  },
  {
    question: "Can it integrate with my existing tools?",
    answer: "Yes. We integrate with Google Calendar, Outlook, Salesforce, HubSpot, Slack, and dozens of other popular business tools. Custom integrations available for Enterprise plans."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level encryption, comply with GDPR and CCPA, and never sell your data. All conversations are encrypted and stored securely."
  },
  {
    question: "What if the AI cannot handle a request?",
    answer: "The AI is trained to recognize its limitations and will seamlessly transfer complex requests to you or your team. You maintain full control."
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-cyan-400/30"
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6 font-lexend">
            CHOOSE YOUR POWER
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-lexend">
            Transparent solutions designed to scale with your business needs. All plans include comprehensive support and full feature access.
          </p>
        </motion.div>

        {/* Pricing Cards - Hexagonal Design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              }}
              className={`relative group ${plan.popular ? "lg:scale-105" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold font-lexend neon-border">
                    MOST POPULAR
                  </div>
                </motion.div>
              )}

              <div className={`relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 h-full ${
                plan.popular 
                  ? "border-purple-500/50 hover:border-purple-400" 
                  : "border-gray-700/30 hover:border-cyan-400/50"
              }`}>
                
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: plan.popular 
                      ? 'linear-gradient(45deg, #8b5cf6, #ec4899)' 
                      : 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
                  }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`inline-flex p-4 rounded-2xl mb-4 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                          : 'bg-gradient-to-r from-cyan-500 to-purple-500'
                      }`}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-black text-white mb-2 font-lexend">
                      {plan.name.toUpperCase()}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed font-lexend">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed font-lexend">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:vrishi@kazdesk.in"
                    className={`block w-full py-4 px-6 rounded-2xl font-bold text-center transition-all duration-300 font-lexend ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-purple-500/50'
                        : 'bg-gray-800/50 text-white hover:bg-gray-700/50 border border-gray-600'
                    }`}
                  >
                    CONTACT US
                  </motion.a>
                </div>

                {/* Particle Effects */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/50 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        y: [0, -30],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section - Cyberpunk Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-4xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-12 font-lexend">
            FREQUENTLY ASKED QUESTIONS
          </h3>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                  <motion.button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/20 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <h4 className="text-lg font-bold text-white font-lexend pr-4">
                      {faq.question}
                    </h4>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-4"></div>
                          <p className="text-gray-300 leading-relaxed font-lexend">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA - Holographic Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/30 via-gray-900/30 to-cyan-900/30 border border-gray-700/50 p-12 text-center">
            {/* Animated Holographic Background */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  'linear-gradient(45deg, #8b5cf6, #06b6d4)',
                  'linear-gradient(45deg, #06b6d4, #ec4899)',
                  'linear-gradient(45deg, #ec4899, #8b5cf6)',
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.h3
                className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 font-lexend"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(6, 182, 212, 0.5)',
                    '0 0 40px rgba(147, 51, 234, 0.5)',
                    '0 0 20px rgba(6, 182, 212, 0.5)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                READY TO BOOK A DEMO?
              </motion.h3>
              
              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed font-lexend">
                Let's discuss how Rixie AI can transform your business operations and boost your productivity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 0 50px rgba(147, 51, 234, 0.8)',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openCalendly}
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-bold inline-flex items-center gap-3 shadow-2xl relative overflow-hidden font-lexend"
                >
                  <span className="relative z-10">BOOK DEMO NOW</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:vrishi@kazdesk.in"
                  className="px-10 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-full transition-all font-lexend hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50"
                >
                  CONTACT US
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}