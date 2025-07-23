
'use client';

export default function PricingFeatures() {
  const features = [
    {
      category: 'Link Management',
      items: [
        { name: 'Custom short links', free: true, pro: true, business: true, enterprise: true },
        { name: 'Link expiration', free: true, pro: true, business: true, enterprise: true },
        { name: 'Custom domains', free: false, pro: true, business: true, enterprise: true },
        { name: 'Bulk operations', free: false, pro: true, business: true, enterprise: true },
        { name: 'Link folders', free: false, pro: true, business: true, enterprise: true },
        { name: 'Advanced link rules', free: false, pro: false, business: true, enterprise: true }
      ]
    },
    {
      category: 'Analytics & Reporting',
      items: [
        { name: 'Basic analytics', free: true, pro: true, business: true, enterprise: true },
        { name: 'Advanced analytics', free: false, pro: true, business: true, enterprise: true },
        { name: 'Custom reports', free: false, pro: false, business: true, enterprise: true },
        { name: 'Real-time data', free: false, pro: true, business: true, enterprise: true },
        { name: 'Data export', free: false, pro: true, business: true, enterprise: true },
        { name: 'API access', free: false, pro: true, business: true, enterprise: true }
      ]
    },
    {
      category: 'Team & Collaboration',
      items: [
        { name: 'Team workspaces', free: false, pro: true, business: true, enterprise: true },
        { name: 'User roles', free: false, pro: false, business: true, enterprise: true },
        { name: 'SSO integration', free: false, pro: false, business: true, enterprise: true },
        { name: 'Advanced permissions', free: false, pro: false, business: false, enterprise: true },
        { name: 'Audit logs', free: false, pro: false, business: false, enterprise: true }
      ]
    },
    {
      category: 'Support & Security',
      items: [
        { name: 'Email support', free: true, pro: true, business: true, enterprise: true },
        { name: 'Priority support', free: false, pro: true, business: true, enterprise: true },
        { name: 'Phone support', free: false, pro: false, business: true, enterprise: true },
        { name: 'Dedicated manager', free: false, pro: false, business: true, enterprise: true },
        { name: 'SLA guarantee', free: false, pro: false, business: false, enterprise: true }
      ]
    }
  ];

  const planNames = ['Free', 'Pro', 'Business', 'Enterprise'];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Compare All Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See exactly what's included in each plan
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-5 border-b border-gray-200">
            <div className="p-6 font-semibold text-gray-900">Features</div>
            {planNames.map((plan, index) => (
              <div key={index} className="p-6 text-center font-semibold text-gray-900 border-l border-gray-200">
                {plan}
              </div>
            ))}
          </div>

          {features.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="grid grid-cols-5 bg-gray-50 border-b border-gray-200">
                <div className="p-4 font-semibold text-gray-900 text-sm">
                  {category.category}
                </div>
                <div className="border-l border-gray-200"></div>
                <div className="border-l border-gray-200"></div>
                <div className="border-l border-gray-200"></div>
                <div className="border-l border-gray-200"></div>
              </div>
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="grid grid-cols-5 border-b border-gray-200 hover:bg-gray-50">
                  <div className="p-4 text-sm text-gray-700">{item.name}</div>
                  <div className="p-4 text-center border-l border-gray-200">
                    {item.free ? (
                      <i className="ri-check-line text-green-600"></i>
                    ) : (
                      <i className="ri-close-line text-gray-400"></i>
                    )}
                  </div>
                  <div className="p-4 text-center border-l border-gray-200">
                    {item.pro ? (
                      <i className="ri-check-line text-green-600"></i>
                    ) : (
                      <i className="ri-close-line text-gray-400"></i>
                    )}
                  </div>
                  <div className="p-4 text-center border-l border-gray-200">
                    {item.business ? (
                      <i className="ri-check-line text-green-600"></i>
                    ) : (
                      <i className="ri-close-line text-gray-400"></i>
                    )}
                  </div>
                  <div className="p-4 text-center border-l border-gray-200">
                    {item.enterprise ? (
                      <i className="ri-check-line text-green-600"></i>
                    ) : (
                      <i className="ri-close-line text-gray-400"></i>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
