
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DashboardOverview from './DashboardOverview';
import DashboardLinks from './DashboardLinks';
import DashboardStats from './DashboardStats';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'home', label: 'Home', icon: 'ri-home-line', href: '/' },
    { id: 'overview', label: 'Overview', icon: 'ri-dashboard-line', href: '/dashboard' },
    { id: 'links', label: 'My Links', icon: 'ri-link', href: '/dashboard' },
    { id: 'analytics', label: 'Analytics', icon: 'ri-bar-chart-line', href: '/analytics' },
    { id: 'settings', label: 'Settings', icon: 'ri-settings-line', href: '/dashboard' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Dashboard</h2>
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <i className={`${item.icon} w-5 h-5 flex items-center justify-center`}></i>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <DashboardOverview />
          <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <DashboardLinks />
              </div>
              <div>
                <DashboardStats />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
