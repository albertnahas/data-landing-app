"use client";

import { motion } from 'framer-motion';
import { Shield, Lock, Award, Globe, Users, Zap } from 'lucide-react';

const trustMetrics = [
  {
    value: '99.9%',
    label: 'Uptime SLA',
    description: 'Enterprise-grade reliability',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600'
  },
  {
    value: '500+',
    label: 'Enterprise Customers',
    description: 'Trusted by industry leaders',
    icon: <Users className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    value: '10M+',
    label: 'Queries Processed Daily',
    description: 'Scale proven globally',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-600'
  }
];

const certifications = [
  {
    name: 'SOC 2 Type II',
    description: 'Security, availability, and confidentiality controls',
    icon: <Shield className="w-8 h-8" />,
    verified: true
  },
  {
    name: 'GDPR Compliant',
    description: 'European data protection regulations',
    icon: <Lock className="w-8 h-8" />,
    verified: true
  },
  {
    name: 'ISO 27001',
    description: 'Information security management',
    icon: <Award className="w-8 h-8" />,
    verified: true
  },
  {
    name: 'CCPA Ready',
    description: 'California consumer privacy compliance',
    icon: <Shield className="w-8 h-8" />,
    verified: true
  }
];

const securityFeatures = [
  {
    title: 'End-to-End Encryption',
    description: 'AES-256 encryption for data in transit and at rest',
    icon: '🔐'
  },
  {
    title: 'Zero Data Storage',
    description: 'We only store metadata, never your sensitive business data',
    icon: '🚫'
  },
  {
    title: 'Role-Based Access',
    description: 'Granular permissions and access controls for your team',
    icon: '👥'
  },
  {
    title: 'Audit Logs',
    description: 'Complete activity tracking and compliance reporting',
    icon: '📋'
  },
  {
    title: 'Single Sign-On',
    description: 'SAML, OAuth, and enterprise identity providers',
    icon: '🔑'
  },
  {
    title: 'VPC Deployment',
    description: 'Private cloud deployment options available',
    icon: '☁️'
  }
];

const companyLogos = [
  { name: 'TechCorp', width: 120, height: 40, placeholder: true },
  { name: 'DataFlow', width: 100, height: 35, placeholder: true },
  { name: 'InnovateLabs', width: 140, height: 45, placeholder: true },
  { name: 'ScaleUp', width: 110, height: 38, placeholder: true },
  { name: 'CloudTech', width: 125, height: 42, placeholder: true },
  { name: 'FastTrack', width: 115, height: 36, placeholder: true }
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by teams worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Enterprise-grade security and reliability that scales with your business
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${metric.color} text-white mb-4`}>
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-500">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Company Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-gray-100 pt-12"
          >
            <p className="text-gray-500 text-sm mb-8 uppercase tracking-wider font-medium">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {companyLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="grayscale hover:grayscale-0 transition-all duration-200"
                >
                  {/* Placeholder logo */}
                  <div 
                    className="bg-gray-200 rounded flex items-center justify-center text-gray-600 font-semibold text-sm"
                    style={{ width: logo.width, height: logo.height }}
                  >
                    {logo.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Security & Compliance */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Security & Compliance
            </h3>
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200"
                >
                  <div className="flex-shrink-0 text-indigo-600 mr-4">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h4 className="font-semibold text-gray-900 mr-2">
                        {cert.name}
                      </h4>
                      {cert.verified && (
                        <div className="flex items-center text-green-600 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Verified
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mt-1">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Enterprise Security Features
            </h3>
            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-2xl mr-4 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Security CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <Shield className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need additional security requirements?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer custom security implementations, private cloud deployment, and additional compliance certifications for Enterprise customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">
                Request Security Whitepaper
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">
                Schedule Security Review
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}