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
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div
                className={`bg-white rounded-2xl p-8 border-2 ${
                  plan.popular ? "border-gray-900 shadow-lg" : "border-gray-200"
                } h-full flex flex-col`}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex p-3 rounded-xl bg-gray-50 mb-4">
                    <plan.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                    plan.popular
                      ? "bg-gray-900 text-white"
                      : "bg-gray-50 text-gray-900 border border-gray-200"
                  }`}
                >
                  Contact Us
                </button>
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
          <h3 className="text-3xl font-light text-gray-900 text-center mb-12 tracking-tight">
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
                className="bg-gray-50 rounded-xl p-6"
              >
                <h4 className="text-lg font-medium text-gray-900 mb-3 leading-snug">
                  {faq.question}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
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
          className="text-center bg-gray-50 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Lets discuss how our AI Secretary can transform your business
            operations and boost your productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-medium inline-flex items-center gap-2 transition-all duration-200">
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="px-8 py-3 bg-transparent border border-gray-300 text-gray-700 font-medium rounded-xl transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

