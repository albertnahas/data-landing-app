"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Building, Rocket, Shield, Users, Database, BarChart3, Headphones } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 49, annual: 39 },
    description: 'Perfect for small teams getting started with data insights',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
    features: [
      { text: '5 data source connections', included: true },
      { text: '10 team members', included: true },
      { text: 'Basic visualizations', included: true },
      { text: '1,000 queries per month', included: true },
      { text: 'Email support', included: true },
      { text: 'Custom dashboards', included: false },
      { text: 'Advanced analytics', included: false },
      { text: 'Priority support', included: false },
      { text: 'Custom integrations', included: false },
      { text: 'Dedicated account manager', included: false },
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: { monthly: 149, annual: 119 },
    description: 'For growing teams that need advanced analytics capabilities',
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-600',
    features: [
      { text: '25 data source connections', included: true },
      { text: '50 team members', included: true },
      { text: 'Advanced visualizations', included: true },
      { text: '10,000 queries per month', included: true },
      { text: 'Priority email & chat support', included: true },
      { text: 'Custom dashboards', included: true },
      { text: 'Advanced analytics & AI insights', included: true },
      { text: 'API access', included: true },
      { text: 'Custom integrations', included: false },
      { text: 'Dedicated account manager', included: false },
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 499, annual: 399 },
    description: 'For large organizations with complex data needs',
    icon: <Building className="w-6 h-6" />,
    color: 'from-gray-700 to-gray-900',
    features: [
      { text: 'Unlimited data source connections', included: true },
      { text: 'Unlimited team members', included: true },
      { text: 'White-label dashboards', included: true },
      { text: 'Unlimited queries', included: true },
      { text: '24/7 phone & chat support', included: true },
      { text: 'Custom dashboards', included: true },
      { text: 'Advanced analytics & AI insights', included: true },
      { text: 'Full API access', included: true },
      { text: 'Custom integrations & SSO', included: true },
      { text: 'Dedicated account manager', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const addOns = [
  {
    name: 'Additional Data Sources',
    description: 'Connect more platforms beyond your plan limit',
    price: { monthly: 10, annual: 8 },
    icon: <Database className="w-5 h-5" />,
  },
  {
    name: 'Advanced Security Pack',
    description: 'SOC2, HIPAA compliance + enhanced security features',
    price: { monthly: 99, annual: 79 },
    icon: <Shield className="w-5 h-5" />,
  },
  {
    name: 'Premium Support',
    description: 'Dedicated success manager + priority implementation',
    price: { monthly: 199, annual: 159 },
    icon: <Headphones className="w-5 h-5" />,
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const calculateSavings = (monthly: number, annual: number) => {
    const yearlyMonthly = monthly * 12;
    const yearlyAnnual = annual * 12;
    const savings = Math.round(((yearlyMonthly - yearlyAnnual) / yearlyMonthly) * 100);
    return savings;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprise charges.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center mt-8"
          >
            <div className="bg-gray-100 rounded-full p-1 flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                  billingCycle === 'annual'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl border-2 transition-all duration-200 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-indigo-500 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${plan.color} text-white mr-4`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price[billingCycle]}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'month, billed annually'}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <div className="text-green-600 text-sm font-medium mt-1">
                      Save {calculateSavings(plan.price.monthly, plan.price.annual)}% annually
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className={`flex-shrink-0 mt-0.5 ${
                        feature.included ? 'text-green-500' : 'text-gray-300'
                      }`}>
                        <Check className="w-5 h-5" />
                      </div>
                      <span className={`ml-3 text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Add-ons & Extensions</h3>
            <p className="text-gray-600">Enhance your plan with additional capabilities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg mr-3">
                    {addon.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900">{addon.name}</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900">
                    ${addon.price[billingCycle]}
                  </span>
                  <span className="text-gray-600 text-sm ml-1">/month</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Questions about our pricing? 
            <a href="#faq" className="text-indigo-600 font-medium hover:text-indigo-700 ml-1">
              Check our FAQ
            </a>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              30-day free trial
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              No setup fees
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Cancel anytime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}