
'use client';

interface AnalyticsOverviewProps {
  timeRange: string;
}

export default function AnalyticsOverview({ timeRange }: AnalyticsOverviewProps) {
  const stats = [
    {
      title: 'Total Clicks',
      value: '12,847',
      change: '+12.5%',
      icon: 'ri-mouse-line',
      trend: 'up'
    },
    {
      title: 'Total Links',
      value: '1,234',
      change: '+8.2%',
      icon: 'ri-link',
      trend: 'up'
    },
    {
      title: 'Unique Visitors',
      value: '9,542',
      change: '+15.3%',
      icon: 'ri-user-line',
      trend: 'up'
    },
    {
      title: 'Countries',
      value: '87',
      change: '+3.1%',
      icon: 'ri-global-line',
      trend: 'up'
    },
    {
      title: 'Top Referrer',
      value: 'Twitter',
      change: '2,341 clicks',
      icon: 'ri-share-line',
      trend: 'neutral'
    },
    {
      title: 'Click-through Rate',
      value: '3.8%',
      change: '+0.5%',
      icon: 'ri-bar-chart-line',
      trend: 'up'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100`}>
              <i className={`${stat.icon} text-xl text-blue-600`}></i>
            </div>
            <div className={`text-sm font-medium ${
              stat.trend === 'up' ? 'text-green-600' : 
              stat.trend === 'down' ? 'text-red-600' : 'text-gray-500'
            }`}>
              {stat.change}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
          <p className="text-gray-600 text-sm">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
