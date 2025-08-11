"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';

const footerSections = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API Documentation', href: '#api-docs' },
      { name: 'Changelog', href: '#changelog' },
      { name: 'Roadmap', href: '#roadmap' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { name: 'For Marketing Teams', href: '#marketing' },
      { name: 'For Product Managers', href: '#product' },
      { name: 'For Sales Teams', href: '#sales' },
      { name: 'For Executives', href: '#executives' },
      { name: 'For Analysts', href: '#analysts' },
      { name: 'Enterprise', href: '#enterprise' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Help Center', href: '#help' },
      { name: 'Blog', href: '#blog' },
      { name: 'Webinars', href: '#webinars' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Templates', href: '#templates' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' },
      { name: 'Partners', href: '#partners' },
      { name: 'Contact', href: '#contact' },
      { name: 'Security', href: '#security' }
    ]
  }
];

const socialLinks = [
  {
    name: 'Twitter',
    href: '#twitter',
    icon: <Twitter className="w-5 h-5" />
  },
  {
    name: 'LinkedIn',
    href: '#linkedin',
    icon: <Linkedin className="w-5 h-5" />
  },
  {
    name: 'GitHub',
    href: '#github',
    icon: <Github className="w-5 h-5" />
  }
];

const contactInfo = [
  {
    type: 'email',
    value: 'hello@datainsights.com',
    icon: <Mail className="w-5 h-5" />
  },
  {
    type: 'phone',
    value: '+1 (555) 123-4567',
    icon: <Phone className="w-5 h-5" />
  },
  {
    type: 'address',
    value: '123 Data Street, San Francisco, CA 94105',
    icon: <MapPin className="w-5 h-5" />
  }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">DataInsights</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Transform your business data into actionable insights with our AI-powered analytics platform. 
                  Make data-driven decisions in minutes, not days.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.type}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center text-gray-400"
                  >
                    <div className="mr-3 text-indigo-400">
                      {contact.icon}
                    </div>
                    <span className="text-sm">{contact.value}</span>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay in the loop</h4>
              <p className="text-gray-400 text-sm">
                Get the latest updates on new features, integrations, and best practices.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DataInsights. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="#gdpr" className="text-gray-400 hover:text-white transition-colors duration-200">
                GDPR
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}