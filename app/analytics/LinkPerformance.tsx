
'use client';

import { useState } from 'react';

interface LinkPerformanceProps {
  timeRange: string;
}

export default function LinkPerformance({ timeRange }: LinkPerformanceProps) {
  const [sortBy, setSortBy] = useState('clicks');

  const topLinks = [
    {
      id: 1,
      shortUrl: 'shortzen.io/abc123',
      originalUrl: 'https://example.com/very-long-url-that-needs-shortening',
      clicks: 2847,
      uniqueVisitors: 2104,
      created: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      shortUrl: 'shortzen.io/def456',
      originalUrl: 'https://mystore.com/product/amazing-product-details',
      clicks: 1923,
      uniqueVisitors: 1456,
      created: '2024-01-12',
      status: 'active'
    },
    {
      id: 3,
      shortUrl: 'shortzen.io/ghi789',
      originalUrl: 'https://blog.example.com/how-to-boost-your-marketing',
      clicks: 1654,
      uniqueVisitors: 1298,
      created: '2024-01-10',
      status: 'active'
    },
    {
      id: 4,
      shortUrl: 'shortzen.io/jkl012',
      originalUrl: 'https://company.com/about-us-and-our-mission',
      clicks: 1432,
      uniqueVisitors: 1089,
      created: '2024-01-08',
      status: 'active'
    },
    {
      id: 5,
      shortUrl: 'shortzen.io/mno345',
      originalUrl: 'https://social.example.com/campaign/winter-sale-2024',
      clicks: 1201,
      uniqueVisitors: 945,
      created: '2024-01-05',
      status: 'active'
    },
    {
      id: 6,
      shortUrl: 'shortzen.io/pqr678',
      originalUrl: 'https://news.site.com/breaking-news-technology-trends',
      clicks: 987,
      uniqueVisitors: 756,
      created: '2024-01-03',
      status: 'paused'
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Top Performing Links</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
        >
          <option value="clicks">Sort by Clicks</option>
          <option value="visitors">Sort by Visitors</option>
          <option value="date">Sort by Date</option>
        </select>
      </div>

      <div className="space-y-4">
        {topLinks.map((link) => (
          <div key={link.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-blue-600">{link.shortUrl}</span>
                  <button
                    onClick={() => copyToClipboard(`https://${link.shortUrl}`)}
                    className="w-4 h-4 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <i className="ri-file-copy-line text-xs"></i>
                  </button>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  link.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {link.status}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{link.clicks.toLocaleString()} clicks</span>
                <span>{link.uniqueVisitors.toLocaleString()} visitors</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 truncate mb-2">{link.originalUrl}</p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Created: {link.created}</span>
              <div className="flex space-x-2">
                <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                  <i className="ri-edit-line"></i>
                </button>
                <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors cursor-pointer">
                  <i className="ri-delete-bin-line"></i>
                </button>
                <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-green-600 transition-colors cursor-pointer">
                  <i className="ri-qr-code-line"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm cursor-pointer whitespace-nowrap">
          View All Links
        </button>
      </div>
    </div>
  );
}
