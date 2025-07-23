
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AnalyticsOverview from './AnalyticsOverview';
import AnalyticsDetails from './AnalyticsDetails';
import AnalyticsChart from './AnalyticsChart';
import LinkPerformance from './LinkPerformance';

export default function AnalyticsPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Track your link performance and audience insights</p>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { value: '24h', label: 'Last 24 hours' },
              { value: '7d', label: 'Last 7 days' },
              { value: '30d', label: 'Last 30 days' },
              { value: '90d', label: 'Last 90 days' },
              { value: '1y', label: 'Last year' }
            ].map((range) => (
              <button
                key={range.value}
                onClick={() => setSelectedTimeRange(range.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedTimeRange === range.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        <AnalyticsOverview timeRange={selectedTimeRange} />
        <AnalyticsChart timeRange={selectedTimeRange} />
        <div className="grid lg:grid-cols-2 gap-8">
          <AnalyticsDetails timeRange={selectedTimeRange} />
          <LinkPerformance timeRange={selectedTimeRange} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
