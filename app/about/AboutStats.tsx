
'use client';

export default function AboutStats() {
  const stats = [
    {
      number: '500M+',
      label: 'Links Shortened',
      description: 'Total links created by our users worldwide',
      icon: 'ri-link'
    },
    {
      number: '1M+',
      label: 'Active Users',
      description: 'Monthly active users across all plans',
      icon: 'ri-user-line'
    },
    {
      number: '50B+',
      label: 'Clicks Tracked',
      description: 'Total clicks analyzed and reported',
      icon: 'ri-mouse-line'
    },
    {
      number: '190+',
      label: 'Countries',
      description: 'Users from around the globe',
      icon: 'ri-global-line'
    },
    {
      number: '99.9%',
      label: 'Uptime',
      description: 'Reliable service you can depend on',
      icon: 'ri-shield-check-line'
    },
    {
      number: '24/7',
      label: 'Support',
      description: 'Round-the-clock customer assistance',
      icon: 'ri-customer-service-line'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Millions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform has grown to become one of the most trusted URL shortening services in the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-200">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h4>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
