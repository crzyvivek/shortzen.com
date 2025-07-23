
'use client';

export default function AboutValues() {
  const values = [
    {
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible with link management and analytics.',
      icon: 'ri-lightbulb-line'
    },
    {
      title: 'Reliability',
      description: 'Our users depend on us. We maintain 99.9% uptime and ensure your links always work.',
      icon: 'ri-shield-check-line'
    },
    {
      title: 'Privacy',
      description: 'We respect your data and privacy. Your information is secure and never shared without permission.',
      icon: 'ri-lock-line'
    },
    {
      title: 'Simplicity',
      description: 'Complex analytics made simple. We believe powerful tools should be easy to use.',
      icon: 'ri-magic-line'
    },
    {
      title: 'Community',
      description: 'We build for our community. Your feedback drives our product development.',
      icon: 'ri-team-line'
    },
    {
      title: 'Growth',
      description: 'We help businesses grow by providing insights that matter. Your success is our success.',
      icon: 'ri-line-chart-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at Shortzen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className={`${value.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
