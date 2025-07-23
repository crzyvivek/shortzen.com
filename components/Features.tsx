
'use client';

export default function Features() {
  const features = [
    {
      icon: 'ri-links-line',
      title: 'URL Shortening',
      description: 'Create short, memorable links that are easy to share and remember.'
    },
    {
      icon: 'ri-bar-chart-2-line',
      title: 'Advanced Analytics',
      description: 'Track clicks, geographic data, devices, and referrers in real-time.'
    },
    {
      icon: 'ri-qr-code-line',
      title: 'QR Code Generation',
      description: 'Generate QR codes for your shortened URLs for easy mobile sharing.'
    },
    {
      icon: 'ri-edit-2-line',
      title: 'Custom URLs',
      description: 'Create branded short links with custom domains and aliases.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Link Security',
      description: 'Protect your links with password protection and expiration dates.'
    },
    {
      icon: 'ri-team-line',
      title: 'Team Collaboration',
      description: 'Share and manage links with your team members efficiently.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and track your short links effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-6">
                <i className={`${feature.icon} w-6 h-6 flex items-center justify-center text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}