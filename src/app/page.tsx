import Image from "next/image";
import InteractiveDemo from "../components/InteractiveDemo";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Images */}
        <div className="absolute inset-0">
          {/* First background image */}
          <Image
            src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern workspace with data visualization"
            fill
            className="object-cover"
            priority
          />
          {/* Second background image with blend effect */}
          <div className="absolute inset-0 opacity-30">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Digital technology and data networks"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
          {/* Framer-style gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl" role="banner">
              <span className="block">Decisions that used to</span>
              <span className="block text-indigo-400">take days — now in minutes.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200 leading-8">
              Connect your company data, ask a question, get research-backed answers instantly.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <button 
                className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                aria-label="Join the beta program">
                Join the Beta
              </button>
              <button 
                className="rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all duration-200"
                aria-label="Watch demo video">
                See It in Action
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">For Product Managers</h3>
                  <p className="text-gray-600">
                    Stop digging through Confluence, Jira, and Google Analytics for hours — get the answers in one place.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">For Sales/Marketing</h3>
                  <p className="text-gray-600">
                    No more manual spreadsheet exports — know exactly which campaigns are winning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Three simple steps to data-driven decisions
            </p>
          </div>
          
          {/* Animated Dashboard Preview */}
          <div className="mt-12 flex justify-center">
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-4xl w-full">
              <svg viewBox="0 0 800 500" className="w-full h-auto">
                {/* Dashboard Background */}
                <rect width="800" height="500" fill="#f8fafc" rx="12"/>
                
                {/* Header */}
                <rect x="20" y="20" width="760" height="50" fill="#ffffff" rx="8"/>
                <text x="40" y="45" className="fill-gray-800 text-lg font-semibold">Data Dashboard</text>
                
                {/* Animated Chart 1 - Bar Chart */}
                <g transform="translate(40, 100)">
                  <rect x="0" y="0" width="220" height="160" fill="#ffffff" rx="8"/>
                  <text x="10" y="25" className="fill-gray-700 text-sm font-medium">Revenue by Quarter</text>
                  
                  {/* Bars */}
                  <rect x="30" y="120" width="30" height="20" fill="#3b82f6">
                    <animate attributeName="height" values="20;60;20" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="y" values="120;80;120" dur="3s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="70" y="110" width="30" height="30" fill="#6366f1">
                    <animate attributeName="height" values="30;80;30" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                    <animate attributeName="y" values="110;60;110" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                  </rect>
                  <rect x="110" y="100" width="30" height="40" fill="#8b5cf6">
                    <animate attributeName="height" values="40;100;40" dur="3s" repeatCount="indefinite" begin="1s"/>
                    <animate attributeName="y" values="100;40;100" dur="3s" repeatCount="indefinite" begin="1s"/>
                  </rect>
                  <rect x="150" y="90" width="30" height="50" fill="#a855f7">
                    <animate attributeName="height" values="50;120;50" dur="3s" repeatCount="indefinite" begin="1.5s"/>
                    <animate attributeName="y" values="90;20;90" dur="3s" repeatCount="indefinite" begin="1.5s"/>
                  </rect>
                </g>
                
                {/* Animated Chart 2 - Line Chart */}
                <g transform="translate(280, 100)">
                  <rect x="0" y="0" width="220" height="160" fill="#ffffff" rx="8"/>
                  <text x="10" y="25" className="fill-gray-700 text-sm font-medium">User Growth</text>
                  
                  {/* Animated line */}
                  <polyline points="20,140 60,120 100,100 140,80 180,60" 
                           fill="none" 
                           stroke="#10b981" 
                           strokeWidth="3"
                           strokeDasharray="200"
                           strokeDashoffset="200">
                    <animate attributeName="stroke-dashoffset" values="200;0;200" dur="4s" repeatCount="indefinite"/>
                  </polyline>
                  
                  {/* Data points */}
                  <circle cx="20" cy="140" r="4" fill="#10b981">
                    <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="0.5s"/>
                  </circle>
                  <circle cx="60" cy="120" r="4" fill="#10b981">
                    <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="1s"/>
                  </circle>
                  <circle cx="100" cy="100" r="4" fill="#10b981">
                    <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="1.5s"/>
                  </circle>
                  <circle cx="140" cy="80" r="4" fill="#10b981">
                    <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="2s"/>
                  </circle>
                  <circle cx="180" cy="60" r="4" fill="#10b981">
                    <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="2.5s"/>
                  </circle>
                </g>
                
                {/* Animated Chart 3 - Donut Chart */}
                <g transform="translate(520, 100)">
                  <rect x="0" y="0" width="220" height="160" fill="#ffffff" rx="8"/>
                  <text x="10" y="25" className="fill-gray-700 text-sm font-medium">Traffic Sources</text>
                  
                  {/* Donut segments */}
                  <circle cx="110" cy="90" r="35" fill="none" stroke="#ef4444" strokeWidth="20" 
                          strokeDasharray="70 150" strokeDashoffset="0">
                    <animateTransform attributeName="transform" type="rotate" 
                                    values="0 110 90;360 110 90" dur="8s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="110" cy="90" r="35" fill="none" stroke="#f59e0b" strokeWidth="20" 
                          strokeDasharray="50 170" strokeDashoffset="70">
                    <animateTransform attributeName="transform" type="rotate" 
                                    values="0 110 90;360 110 90" dur="8s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="110" cy="90" r="35" fill="none" stroke="#10b981" strokeWidth="20" 
                          strokeDasharray="100 120" strokeDashoffset="120">
                    <animateTransform attributeName="transform" type="rotate" 
                                    values="0 110 90;360 110 90" dur="8s" repeatCount="indefinite"/>
                  </circle>
                </g>
                
                {/* KPI Cards */}
                <g transform="translate(40, 290)">
                  <rect x="0" y="0" width="160" height="80" fill="#ffffff" rx="8"/>
                  <text x="10" y="25" className="fill-gray-500 text-xs">Total Revenue</text>
                  <text x="10" y="50" className="fill-gray-900 text-xl font-bold">$2.4M</text>
                  <text x="10" y="70" className="fill-green-500 text-sm">↗ 12.5%</text>
                </g>
                
                <g transform="translate(220, 290)">
                  <rect x="0" y="0" width="160" height="80" fill="#ffffff" rx="8"/>
                  <text x="10" y="25" className="fill-gray-500 text-xs">Active Users</text>
                  <text x="10" y="50" className="fill-gray-900 text-xl font-bold">45.2K</text>
                  <text x="10" y="70" className="fill-green-500 text-sm">↗ 8.1%</text>
                </g>
                
                <g transform="translate(400, 290)">
                  <rect x="0" y="0" width="160" height="80" fill="#ffffff" rx="8"/>
                  <text x="10" y="25" className="fill-gray-500 text-xs">Conversion Rate</text>
                  <text x="10" y="50" className="fill-gray-900 text-xl font-bold">3.24%</text>
                  <text x="10" y="70" className="fill-red-500 text-sm">↘ 2.1%</text>
                </g>
                
                <g transform="translate(580, 290)">
                  <rect x="0" y="0" width="160" height="80" fill="#ffffff" rx="8"/>
                  <text x="10" y="25" className="fill-gray-500 text-xs">Avg Session</text>
                  <text x="10" y="50" className="fill-gray-900 text-xl font-bold">4:32</text>
                  <text x="10" y="70" className="fill-green-500 text-sm">↗ 15.3%</text>
                </g>
                
                {/* Floating data points animation */}
                <circle r="3" fill="#3b82f6" opacity="0.6">
                  <animateMotion dur="6s" repeatCount="indefinite" 
                                path="M100,400 Q200,350 300,380 T500,370 T700,390"/>
                  <animate attributeName="opacity" values="0;0.8;0" dur="6s" repeatCount="indefinite"/>
                </circle>
                <circle r="2" fill="#10b981" opacity="0.4">
                  <animateMotion dur="8s" repeatCount="indefinite" begin="2s"
                                path="M150,420 Q350,380 450,400 T650,410 T750,400"/>
                  <animate attributeName="opacity" values="0;0.6;0" dur="8s" repeatCount="indefinite" begin="2s"/>
                </circle>
              </svg>
            </div>
          </div>
          
          <div className="mt-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mx-auto mb-6">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect your data sources</h3>
                <p className="text-gray-600">
                  Link your existing tools like Google Analytics, Jira, Salesforce, and more in minutes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mx-auto mb-6">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ask your question</h3>
                <p className="text-gray-600">
                  Type your question in plain English. No SQL or complex queries required.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mx-auto mb-6">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get research-backed recommendations</h3>
                <p className="text-gray-600">
                  Receive instant insights with data visualizations and actionable next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Works with your existing stack
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Connect your favorite tools in minutes with our powerful integrations
            </p>
          </div>

          {/* Integration Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center mb-16">
            {/* Salesforce */}
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-md transition-all duration-300 group">
              <Image
                src="/salesforce-logo.svg"
                alt="Salesforce"
                width={120}
                height={40}
                className="max-h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Google Analytics */}
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-md transition-all duration-300 group">
              <Image
                src="/google-analytics-logo.svg"
                alt="Google Analytics"
                width={120}
                height={40}
                className="max-h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Stripe */}
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-md transition-all duration-300 group">
              <Image
                src="/stripe-logo.svg"
                alt="Stripe"
                width={120}
                height={40}
                className="max-h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* HubSpot */}
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-md transition-all duration-300 group">
              <Image
                src="/hubspot-logo.svg"
                alt="HubSpot"
                width={120}
                height={40}
                className="max-h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Slack */}
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-md transition-all duration-300 group">
              <Image
                src="/slack-logo.svg"
                alt="Slack"
                width={120}
                height={40}
                className="max-h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Jira */}
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-md transition-all duration-300 group">
              <Image
                src="/jira-logo.svg"
                alt="Jira"
                width={120}
                height={40}
                className="max-h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Microsoft Teams */}
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-md transition-all duration-300 group">
              <Image
                src="/microsoft-teams-logo.svg"
                alt="Microsoft Teams"
                width={120}
                height={40}
                className="max-h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* API Documentation Teaser */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mr-4">
                  <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Connect in Minutes</h3>
                  <p className="text-gray-600">
                    Simple REST API and pre-built connectors make integration effortless
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-indigo-600 text-2xl font-bold mb-2">5 min</div>
                    <div className="text-gray-600 text-sm">Average setup time</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-indigo-600 text-2xl font-bold mb-2">50+</div>
                    <div className="text-gray-600 text-sm">Pre-built integrations</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-indigo-600 text-2xl font-bold mb-2">99.9%</div>
                    <div className="text-gray-600 text-sm">Uptime reliability</div>
                  </div>
                </div>
              </div>

              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-200 mr-4">
                View API Docs
              </button>
              <button className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-200">
                See All Integrations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Example Queries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Ask anything about your business
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Here are some questions our beta users love asking
            </p>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="text-blue-600 mb-3">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Product Insights</h3>
              <p className="text-gray-600 italic">
                &quot;Which product feature gets the most support tickets?&quot;
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <div className="text-green-600 mb-3">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Campaign Performance</h3>
              <p className="text-gray-600 italic">
                &quot;Which campaigns brought the highest revenue last month?&quot;
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <div className="text-purple-600 mb-3">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Funnel Analysis</h3>
              <p className="text-gray-600 italic">
                &quot;Where are customers dropping off in the funnel?&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <InteractiveDemo />

      {/* FAQ Section */}
      <FAQSection />

      {/* Social Proof & CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-8">
            Get early access
          </h2>
          
          <div className="mb-12">
            <p className="text-gray-300 mb-8">Already trusted by teams at</p>
            
            {/* Testimonials Carousel */}
            <div className="relative max-w-4xl mx-auto carousel-container">
              <div className="overflow-hidden rounded-3xl">
                <div className="flex carousel-slide">
                  {/* Testimonial 1 */}
                  <div className="min-w-full px-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            S
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-lg mb-4 italic">
                            &quot;We went from spending 3 hours analyzing campaign data to getting insights in 30 seconds. Game changer for our marketing team.&quot;
                          </p>
                          <div>
                            <p className="text-white font-semibold">Sarah Chen</p>
                            <p className="text-gray-300 text-sm">Head of Growth, TechFlow</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="min-w-full px-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            M
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-lg mb-4 italic">
                            &quot;Finally, a tool that speaks our language. No more waiting for engineering to pull data - we get answers instantly.&quot;
                          </p>
                          <div>
                            <p className="text-white font-semibold">Marcus Rodriguez</p>
                            <p className="text-gray-300 text-sm">Product Manager, DataSync</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="min-w-full px-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            A
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-lg mb-4 italic">
                            &quot;The insights we&apos;re getting helped us identify bottlenecks we didn&apos;t even know existed. ROI was immediate.&quot;
                          </p>
                          <div>
                            <p className="text-white font-semibold">Aisha Patel</p>
                            <p className="text-gray-300 text-sm">VP Operations, ScaleUp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 4 */}
                  <div className="min-w-full px-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            J
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-lg mb-4 italic">
                            &quot;Our executive team now makes data-driven decisions in real-time instead of waiting for weekly reports.&quot;
                          </p>
                          <div>
                            <p className="text-white font-semibold">James Kim</p>
                            <p className="text-gray-300 text-sm">CEO, InnovateLabs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Repeat first testimonial for seamless loop */}
                  <div className="min-w-full px-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            S
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-lg mb-4 italic">
                            &quot;We went from spending 3 hours analyzing campaign data to getting insights in 30 seconds. Game changer for our marketing team.&quot;
                          </p>
                          <div>
                            <p className="text-white font-semibold">Sarah Chen</p>
                            <p className="text-gray-300 text-sm">Head of Growth, TechFlow</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Carousel indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                <div className="w-3 h-3 rounded-full bg-white/30 transition-all duration-300 indicator-1"></div>
                <div className="w-3 h-3 rounded-full bg-white/30 transition-all duration-300 indicator-2"></div>
                <div className="w-3 h-3 rounded-full bg-white/30 transition-all duration-300 indicator-3"></div>
                <div className="w-3 h-3 rounded-full bg-white/30 transition-all duration-300 indicator-4"></div>
              </div>
            </div>
          </div>
          
          <div className="max-w-md mx-auto">
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-gray-600 bg-gray-800 px-6 py-3 text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200"
              >
                Join Beta
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-400">
              No spam. Unsubscribe anytime. Privacy policy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}