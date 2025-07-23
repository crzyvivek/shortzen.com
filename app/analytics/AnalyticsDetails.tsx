
'use client';

interface AnalyticsDetailsProps {
  timeRange: string;
}

export default function AnalyticsDetails({ timeRange }: AnalyticsDetailsProps) {
  const topCountries = [
    { country: 'United States', flag: '🇺🇸', clicks: 4250, percentage: 33 },
    { country: 'United Kingdom', flag: '🇬🇧', clicks: 2100, percentage: 16 },
    { country: 'Canada', flag: '🇨🇦', clicks: 1800, percentage: 14 },
    { country: 'Germany', flag: '🇩🇪', clicks: 1500, percentage: 12 },
    { country: 'France', flag: '🇫🇷', clicks: 1200, percentage: 9 },
    { country: 'Australia', flag: '🇦🇺', clicks: 950, percentage: 7 },
    { country: 'Japan', flag: '🇯🇵', clicks: 800, percentage: 6 },
    { country: 'Others', flag: '🌍', clicks: 247, percentage: 3 }
  ];

  const topReferrers = [
    { source: 'Direct', clicks: 3500, percentage: 27, icon: 'ri-external-link-line' },
    { source: 'Twitter', clicks: 2800, percentage: 22, icon: 'ri-twitter-line' },
    { source: 'Facebook', clicks: 2200, percentage: 17, icon: 'ri-facebook-line' },
    { source: 'LinkedIn', clicks: 1900, percentage: 15, icon: 'ri-linkedin-line' },
    { source: 'Instagram', clicks: 1400, percentage: 11, icon: 'ri-instagram-line' },
    { source: 'YouTube', clicks: 800, percentage: 6, icon: 'ri-youtube-line' },
    { source: 'Others', clicks: 247, percentage: 2, icon: 'ri-share-line' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Countries</h3>
        <div className="space-y-3">
          {topCountries.map((country, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-lg">{country.flag}</span>
                <span className="text-sm font-medium text-gray-900">{country.country}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">{country.clicks.toLocaleString()}</span>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${country.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 w-8">{country.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Referrers</h3>
        <div className="space-y-3">
          {topReferrers.map((referrer, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center rounded bg-gray-100">
                  <i className={`${referrer.icon} text-gray-600`}></i>
                </div>
                <span className="text-sm font-medium text-gray-900">{referrer.source}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">{referrer.clicks.toLocaleString()}</span>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${referrer.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 w-8">{referrer.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
