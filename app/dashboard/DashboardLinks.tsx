'use client';

import { useState } from 'react';

export default function DashboardLinks() {
  const [filter, setFilter] = useState('all');

  const links = [
    {
      id: 1,
      shortUrl: 'shortzen.com/abc123',
      originalUrl: 'https://example.com/very-long-url-that-needs-shortening',
      clicks: 1234,
      created: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      shortUrl: 'shortzen.com/def456',
      originalUrl: 'https://another-example.com/product/details/12345',
      clicks: 856,
      created: '2024-01-14',
      status: 'active'
    },
    {
      id: 3,
      shortUrl: 'shortzen.com/ghi789',
      originalUrl: 'https://blog.example.com/article/how-to-use-url-shortener',
      clicks: 432,
      created: '2024-01-13',
      status: 'active'
    },
    {
      id: 4,
      shortUrl: 'shortzen.com/jkl012',
      originalUrl: 'https://shop.example.com/category/electronics/smartphones',
      clicks: 289,
      created: '2024-01-12',
      status: 'paused'
    },
    {
      id: 5,
      shortUrl: 'shortzen.com/mno345',
      originalUrl: 'https://docs.example.com/api/reference/authentication',
      clicks: 167,
      created: '2024-01-11',
      status: 'active'
    }
  ];

  const filteredLinks = links.filter(link => {
    if (filter === 'all') return true;
    return link.status === filter;
  });

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(`https://${url}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Your Links</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
            Create New Link
          </button>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'all' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Links
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'active' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('paused')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'paused' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Paused
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {filteredLinks.map((link) => (
          <div key={link.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-blue-600">{link.shortUrl}</span>
                  <button
                    onClick={() => copyToClipboard(link.shortUrl)}
                    className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    <i className="ri-file-copy-line text-sm"></i>
                  </button>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  link.status === 'active' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {link.status}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                {link.clicks} clicks
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-2 truncate">
              {link.originalUrl}
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Created: {link.created}</span>
              <div className="flex space-x-2">
                <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                  <i className="ri-bar-chart-line"></i>
                </button>
                <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-green-600 transition-colors cursor-pointer">
                  <i className="ri-edit-line"></i>
                </button>
                <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors cursor-pointer">
                  <i className="ri-delete-bin-line"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-gray-200 text-center">
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
          View All Links →
        </button>
      </div>
    </div>
  );
}