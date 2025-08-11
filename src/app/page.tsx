import Image from "next/image";

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
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Decisions that used to</span>
              <span className="block text-indigo-400">take days — now in minutes.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200 leading-8">
              Connect your company data, ask a question, get research-backed answers instantly.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <button className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200">
                Join the Beta
              </button>
              <button className="rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all duration-200">
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
                "Which product feature gets the most support tickets?"
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
                "Which campaigns brought the highest revenue last month?"
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
                "Where are customers dropping off in the funnel?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-8">
            Get early access
          </h2>
          
          <div className="mb-12">
            <p className="text-gray-300 mb-8">Already trusted by teams at</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="bg-white rounded px-4 py-2 text-gray-800 font-semibold">Startup A</div>
              <div className="bg-white rounded px-4 py-2 text-gray-800 font-semibold">Startup B</div>
              <div className="bg-white rounded px-4 py-2 text-gray-800 font-semibold">Startup C</div>
              <div className="bg-white rounded px-4 py-2 text-gray-800 font-semibold">Startup D</div>
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
    </div>
  );
}