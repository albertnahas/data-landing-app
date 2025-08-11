"use client";

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Area, AreaChart } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, TrendingUp, Users, DollarSign, Target } from 'lucide-react';

// Sample data for different query types
const sampleData = {
  revenue: [
    { month: 'Jan', value: 65000, comparison: 58000 },
    { month: 'Feb', value: 72000, comparison: 61000 },
    { month: 'Mar', value: 68000, comparison: 65000 },
    { month: 'Apr', value: 85000, comparison: 70000 },
    { month: 'May', value: 91000, comparison: 75000 },
    { month: 'Jun', value: 98000, comparison: 82000 },
  ],
  users: [
    { month: 'Jan', active: 12500, new: 2100 },
    { month: 'Feb', active: 13200, new: 2800 },
    { month: 'Mar', active: 14100, new: 3200 },
    { month: 'Apr', active: 15800, new: 2900 },
    { month: 'May', active: 17200, new: 3400 },
    { month: 'Jun', active: 19100, new: 3800 },
  ],
  conversion: [
    { stage: 'Visitors', users: 10000, percentage: 100 },
    { stage: 'Sign Ups', users: 2500, percentage: 25 },
    { stage: 'Trials', users: 1200, percentage: 12 },
    { stage: 'Paid', users: 360, percentage: 3.6 },
    { stage: 'Retained', users: 290, percentage: 2.9 },
  ],
  campaigns: [
    { name: 'Google Ads', revenue: 45000, cost: 12000, roi: 275 },
    { name: 'Facebook', revenue: 32000, cost: 8500, roi: 276 },
    { name: 'LinkedIn', revenue: 28000, cost: 9000, roi: 211 },
    { name: 'Twitter', revenue: 18000, cost: 5500, roi: 227 },
    { name: 'Email', revenue: 35000, cost: 2000, roi: 1650 },
  ],
  support: [
    { category: 'Login Issues', tickets: 145, severity: 'high' },
    { category: 'Payment', tickets: 98, severity: 'medium' },
    { category: 'Feature Request', tickets: 87, severity: 'low' },
    { category: 'Bug Reports', tickets: 76, severity: 'high' },
    { category: 'Integration', tickets: 52, severity: 'medium' },
  ]
};

const queries = [
  {
    id: 'revenue',
    question: "What's our revenue trend over the last 6 months?",
    type: 'line',
    icon: <TrendingUp className="w-5 h-5" />,
    insight: "Revenue has grown 51% compared to last year, with consistent month-over-month growth. May-June showed the strongest acceleration.",
    metric: "+51% YoY Growth"
  },
  {
    id: 'users',
    question: "How is our user acquisition performing?",
    type: 'area',
    icon: <Users className="w-5 h-5" />,
    insight: "Active users grew 53% while new user acquisition increased 81%. Strong retention indicates product-market fit.",
    metric: "+53% Active Users"
  },
  {
    id: 'conversion',
    question: "Where are users dropping off in our funnel?",
    type: 'bar',
    icon: <Target className="w-5 h-5" />,
    insight: "The biggest drop-off occurs between sign-ups and trial activation (52% loss). Focus on onboarding improvements.",
    metric: "52% Drop-off at Trial"
  },
  {
    id: 'campaigns',
    question: "Which marketing campaigns have the highest ROI?",
    type: 'bar',
    icon: <DollarSign className="w-5 h-5" />,
    insight: "Email marketing delivers exceptional ROI (1650%) despite lower volume. Google Ads and Facebook show similar efficiency.",
    metric: "1650% Email ROI"
  }
];

// const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function InteractiveDemo() {
  const [selectedQuery, setSelectedQuery] = useState(queries[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleQuerySelect = (query: typeof queries[0]) => {
    if (selectedQuery.id === query.id) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedQuery(query);
      setIsAnimating(false);
    }, 300);
  };

  const renderChart = () => {
    const data = sampleData[selectedQuery.id as keyof typeof sampleData];

    switch (selectedQuery.type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="comparison" 
                stroke="#94a3b8" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'area':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area
                type="monotone"
                dataKey="active"
                stackId="1"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="new"
                stackId="2"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.8}
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'bar':
        if (selectedQuery.id === 'conversion') {
          return (
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="stage" type="category" stroke="#6b7280" width={80} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="users" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          );
        } else {
          return (
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="roi" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          );
        }

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try it yourself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of instant insights. Click any question below to see how our platform transforms your data into actionable intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Query Selection */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Ask a question:</h3>
            {queries.map((query) => (
              <motion.button
                key={query.id}
                onClick={() => handleQuerySelect(query)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 ${
                  selectedQuery.id === query.id
                    ? 'border-indigo-500 bg-indigo-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-2 rounded-lg ${
                    selectedQuery.id === query.id ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {query.icon}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${
                      selectedQuery.id === query.id ? 'text-indigo-900' : 'text-gray-900'
                    }`}>
                      {query.question}
                    </p>
                    {selectedQuery.id === query.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3"
                      >
                        <div className="flex items-center text-sm text-indigo-600 font-medium">
                          <Play className="w-4 h-4 mr-2" />
                          Analyzing...
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Results Display */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Analysis Results
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live Data</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {!isAnimating && (
                    <motion.div
                      key={selectedQuery.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Chart */}
                      <div className="mb-8">
                        {renderChart()}
                      </div>

                      {/* Insights */}
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                        <div className="flex items-start justify-between mb-4">
                          <h5 className="font-semibold text-gray-900">Key Insight</h5>
                          <div className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">
                            {selectedQuery.metric}
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {selectedQuery.insight}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {isAnimating && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center h-96"
                  >
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
                      <p className="text-gray-600">Analyzing your data...</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* CTA */}
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <Play className="w-5 h-5 mr-2" />
                Start Your Free Trial
              </button>
              <p className="mt-3 text-sm text-gray-500">
                Connect your data sources in under 5 minutes
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}