
'use client';

export default function Statistics() {
  const stats = [
    {
      number: '2.5M+',
      label: 'Links Created',
      icon: 'ri-links-line'
    },
    {
      number: '150M+',
      label: 'Clicks Tracked',
      icon: 'ri-cursor-line'
    },
    {
      number: '50K+',
      label: 'Active Users',
      icon: 'ri-user-line'
    },
    {
      number: '99.9%',
      label: 'Uptime',
      icon: 'ri-shield-check-line'
    }
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Millions
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of businesses and individuals who trust our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} w-8 h-8 flex items-center justify-center text-white`}></i>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}