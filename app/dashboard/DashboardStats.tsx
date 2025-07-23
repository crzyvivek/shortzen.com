'use client';

export default function DashboardStats() {
  const topCountries = [
    { country: 'United States', clicks: 12540, percentage: 42 },
    { country: 'United Kingdom', clicks: 8320, percentage: 28 },
    { country: 'Canada', clicks: 4560, percentage: 15 },
    { country: 'Australia', clicks: 2890, percentage: 10 },
    { country: 'Germany', clicks: 1490, percentage: 5 }
  ];

  const topReferrers = [
    { referrer: 'google.com', clicks: 8960, percentage: 35 },
    { referrer: 'facebook.com', clicks: 6240, percentage: 25 },
    { referrer: 'twitter.com', clicks: 3890, percentage: 15 },
    { referrer: 'linkedin.com', clicks: 2670, percentage: 10 },
    { referrer: 'direct', clicks: 3740, percentage: 15 }
  ];

  const recentActivity = [
    { action: 'Link created', link: 'shortzen.com/abc123', time: '2 hours ago' },
    { action: 'Link clicked', link: 'shortzen.com/def456', time: '3 hours ago' },
    { action: 'Link edited', link: 'shortzen.com/ghi789', time: '5 hours ago' },
    { action: 'Link created', link: 'shortzen.com/jkl012', time: '1 day ago' },
    { action: 'Link clicked', link: 'shortzen.com/mno345', time: '1 day ago' }
  ];

  return (
    <div className="space-y-6">
      {/* Top Countries */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Countries</h3>
        <div className="space-y-3">
          {topCountries.map((country, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full">
                  <i className="ri-global-line text-blue-600 text-sm"></i>
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">{country.country}</div>
                  <div className="text-xs text-gray-500">{country.clicks} clicks</div>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-900">{country.percentage}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Referrers */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Referrers</h3>
        <div className="space-y-3">
          {topReferrers.map((referrer, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                  <i className="ri-external-link-line text-green-600 text-sm"></i>
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">{referrer.referrer}</div>
                  <div className="text-xs text-gray-500">{referrer.clicks} clicks</div>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-900">{referrer.percentage}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
                <i className="ri-time-line text-purple-600 text-sm"></i>
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900 text-sm">{activity.action}</div>
                <div className="text-xs text-blue-600">{activity.link}</div>
                <div className="text-xs text-gray-500">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}