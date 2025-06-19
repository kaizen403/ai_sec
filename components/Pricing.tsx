'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for solopreneurs and small businesses',
    features: [
      'Up to 100 calls/month',
      'Basic calendar integration',
      'SMS & email notifications',
      'Standard business hours',
      'Basic call recording',
      'Email support',
    ],
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    description: 'Ideal for growing teams and busy professionals',
    features: [
      'Up to 500 calls/month',
      'Advanced calendar sync',
      'Smart routing & escalation',
      '24/7 availability',
      'Full conversation logs',
      'Priority support',
      'Custom greetings',
      'Meeting prep briefs',
      'CRM integration',
    ],
    icon: Star,
    color: 'from-purple-500 to-pink-500',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$399',
    period: '/month',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited calls',
      'Multi-calendar management',
      'Advanced AI training',
      'Custom workflows',
      'Department routing',
      'Dedicated account manager',
      'White-label options',
      'API access',
      'Advanced analytics',
      'SSO integration',
      'Custom integrations',
    ],
    icon: Crown,
    color: 'from-orange-500 to-red-500',
    popular: false,
  },
];

const faqs = [
  {
    question: 'How does the AI Secretary handle complex scheduling?',
    answer: 'Our AI understands context, preferences, and scheduling conflicts. It can handle multi-party meetings, time zone conversions, and even reschedule meetings when conflicts arise.',
  },
  {
    question: 'Can it integrate with my existing tools?',
    answer: 'Yes! We integrate with Google Calendar, Outlook, Salesforce, HubSpot, Slack, and dozens of other popular business tools. Custom integrations available for Enterprise plans.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level encryption, comply with GDPR and CCPA, and never sell your data. All conversations are encrypted and stored securely.',
  },
  {
    question: 'What if the AI can\'t handle a request?',
    answer: 'The AI is trained to recognize its limitations and will seamlessly transfer complex requests to you or your team. You maintain full control.',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#060A17] to-[#0A0F1F] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-lexend font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-lexend">
            Choose the plan that fits your needs. All plans include a 14-day free trial with full access to features.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full border border-green-500/20">
            <Check className="w-4 h-4" />
            <span className="font-lexend">No setup fees • Cancel anytime • 30-day money-back guarantee</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm font-lexend"
                >
                  Most Popular
                </motion.div>
              )}
              
              <div className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border ${
                plan.popular ? 'border-purple-500/50' : 'border-white/10'
              } hover:border-white/20 transition-all duration-300 h-full`}>
                
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.color} mb-4`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-lexend">{plan.name}</h3>
                  <p className="text-gray-400 mb-4 font-lexend">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-white font-lexend">{plan.price}</span>
                    <span className="text-gray-400 font-lexend">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 mt-0.5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 font-lexend">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } py-4 rounded-2xl font-bold text-lg transition-all duration-300 font-lexend`}
                >
                  Start Free Trial
                </motion.button>

                {/* Background Effect */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-lexend font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-3 font-lexend">{faq.question}</h4>
                <p className="text-gray-400 leading-relaxed font-lexend">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 p-12"
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-lexend">
              Ready to Transform Your Productivity?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-lexend">
              Join thousands of professionals who have already fired their human secretary. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl font-lexend"
              >
                Start 14-Day Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors font-lexend"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>

          {/* Background decoration */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-4 right-4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}