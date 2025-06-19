"use client";

import { motion } from "framer-motion";
import { Check, Users, Building, Crown, ArrowRight } from "lucide-react";

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
  },
];

const faqs = [
  {
    question: "How does the AI Secretary handle complex scheduling?",
    answer:
      "Our AI understands context, preferences, and scheduling conflicts. It can handle multi-party meetings, time zone conversions, and even reschedule meetings when conflicts arise.",
  },
  {
    question: "Can it integrate with my existing tools?",
    answer:
      "Yes. We integrate with Google Calendar, Outlook, Salesforce, HubSpot, Slack, and dozens of other popular business tools. Custom integrations available for Enterprise plans.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption, comply with GDPR and CCPA, and never sell your data. All conversations are encrypted and stored securely.",
  },
  {
    question: "What if the AI cannot handle a request?",
    answer:
      "The AI is trained to recognize its limitations and will seamlessly transfer complex requests to you or your team. You maintain full control.",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-[#060A17] to-[#0A0F1F] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl font-lexend font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-lexend">
            Transparent solutions designed to scale with your business needs.
            All plans include comprehensive support and full feature access.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? "lg:scale-105" : ""}`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-1 rounded-full text-sm font-bold font-lexend"
                >
                  Most Popular
                </motion.div>
              )}

              <div
                className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border ${
                  plan.popular ? "border-purple-500/50" : "border-white/10"
                } h-full flex flex-col hover:border-white/20 transition-all duration-300`}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mb-4"
                  >
                    <plan.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-2 font-lexend">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-lexend">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed font-lexend">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 font-lexend ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-lexend font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-12">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-3 font-lexend">
                  {faq.question}
                </h4>
                <p className="text-gray-400 leading-relaxed font-lexend">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-3xl p-12 relative overflow-hidden"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-lexend">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed font-lexend">
            Lets discuss how our AI Secretary can transform your business
            operations and boost your productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 shadow-2xl font-lexend"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border border-white/20 text-white font-bold rounded-full transition-colors font-lexend hover:bg-white/10"
            >
              Schedule Demo
            </motion.button>
          </div>

          {/* Background decoration */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-4 left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-4 right-4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

