"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 'trial',
    question: 'How does the free trial work?',
    answer: 'You get full access to all features for 30 days, no credit card required. You can connect up to 5 data sources and invite your entire team to try the platform. After the trial, you can choose the plan that works best for your needs.'
  },
  {
    id: 'data-sources',
    question: 'Which data sources can I connect?',
    answer: 'We support 100+ integrations including Google Analytics, Salesforce, HubSpot, Shopify, PostgreSQL, MySQL, MongoDB, Slack, Jira, Facebook Ads, Google Ads, and many more. If you need a custom integration, our Enterprise plan includes custom connector development.'
  },
  {
    id: 'security',
    question: 'How secure is my data?',
    answer: 'Your data security is our top priority. We use enterprise-grade encryption (AES-256), SOC 2 Type II compliance, and never store your raw data. All connections are encrypted in transit and at rest. We also offer SSO, RBAC, and audit logs for Enterprise customers.'
  },
  {
    id: 'setup-time',
    question: 'How long does it take to set up?',
    answer: 'Most teams are up and running within 30 minutes. Our setup wizard guides you through connecting your first data source and creating your first dashboard. For complex setups, our Customer Success team provides hands-on onboarding.'
  },
  {
    id: 'pricing-scale',
    question: 'What happens as my team grows?',
    answer: 'You can easily add team members and upgrade your plan at any time. We only charge for active users, and you can remove users anytime. All plan changes are prorated, so you only pay for what you use.'
  },
  {
    id: 'support',
    question: 'What kind of support do you offer?',
    answer: 'All plans include email support with response times under 24 hours. Professional plans get priority chat support. Enterprise customers receive 24/7 phone support, dedicated account management, and custom training sessions.'
  },
  {
    id: 'data-refresh',
    question: 'How often does my data refresh?',
    answer: 'Data refresh frequency depends on your plan and data source. Starter plans refresh every 4 hours, Professional every hour, and Enterprise offers real-time or custom refresh intervals. Some data sources support instant updates via webhooks.'
  },
  {
    id: 'custom-queries',
    question: 'Can I create custom queries and reports?',
    answer: 'Absolutely! Our natural language interface lets you ask questions in plain English, and you can also write custom SQL queries. Professional and Enterprise plans include advanced analytics, custom metrics, and automated report scheduling.'
  },
  {
    id: 'api-access',
    question: 'Do you provide API access?',
    answer: 'Yes! Professional and Enterprise plans include full REST API access. You can programmatically create dashboards, retrieve data, manage users, and integrate our platform into your existing workflows. Complete API documentation is provided.'
  },
  {
    id: 'cancellation',
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel anytime with no penalties or cancellation fees. Your account remains active until the end of your current billing period. We also offer account pausing for seasonal businesses or temporary project breaks.'
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl mr-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our platform, pricing, and features.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openItems.has(faq.id)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.has(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openItems.has(faq.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <div className="pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is here to help you get started. Book a demo or reach out to our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">
                Book a Demo
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}