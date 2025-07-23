'use client';

export default function DashboardOverview() {
  const stats = [
    {
      title: 'Total Links',
      value: '1,234',
      change: '+12%',
      icon: 'ri-link',
      color: 'blue'
    },
    {
      title: 'Total Clicks',
      value: '45,678',
      change: '+8%',
      icon: 'ri-mouse-line',
      color: 'green'
    },
    {
      title: 'Click Rate',
      value: '3.2%',
      change: '+0.5%',
      icon: 'ri-bar-chart-line',
      color: 'purple'
    },
    {
      title: 'Top Country',
      value: 'United States',
      change: '42%',
      icon: 'ri-global-line',
      color: 'orange'
    }
  ];

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your links.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 flex items-center justify-center bg-${stat.color}-100 rounded-lg`}>
                  <i className={`${stat.icon} text-lg text-${stat.color}-600`}></i>
                </div>
                <span className="text-green-600 text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}