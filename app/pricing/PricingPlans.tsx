
'use client';

interface PricingPlansProps {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}

export default function PricingPlans({ isAnnual, setIsAnnual }: PricingPlansProps) {
  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for personal use and testing',
      features: [
        '1,000 links per month',
        'Basic analytics',
        'Standard support',
        'Link expiration',
        'Basic customization'
      ],
      buttonText: 'Get Started Free',
      popular: false
    },
    {
      name: 'Pro',
      price: { monthly: 12, annual: 10 },
      description: 'Great for small businesses and marketers',
      features: [
        '10,000 links per month',
        'Advanced analytics',
        'Custom domains',
        'QR codes',
        'Priority support',
        'Team collaboration',
        'API access',
        'Bulk operations'
      ],
      buttonText: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Business',
      price: { monthly: 49, annual: 39 },
      description: 'Designed for growing businesses',
      features: [
        '100,000 links per month',
        'Advanced analytics & reports',
        'Multiple custom domains',
        'White-label solution',
        'Advanced integrations',
        'Dedicated account manager',
        'SSO & user management',
        'Advanced security features'
      ],
      buttonText: 'Start Business Trial',
      popular: false
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', annual: 'Custom' },
      description: 'For large organizations with specific needs',
      features: [
        'Unlimited links',
        'Custom analytics dashboard',
        'Dedicated infrastructure',
        'Advanced security & compliance',
        'Custom integrations',
        '24/7 premium support',
        'Training & onboarding',
        'SLA guarantee'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                !isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-2xl p-8 ${
              plan.popular 
                ? 'bg-blue-50 border-2 border-blue-200 relative' 
                : 'bg-white border border-gray-200'
            }`}>
              {plan.popular && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {typeof plan.price[isAnnual ? 'annual' : 'monthly'] === 'number' 
                      ? `$${plan.price[isAnnual ? 'annual' : 'monthly']}`
                      : plan.price[isAnnual ? 'annual' : 'monthly']
                    }
                  </span>
                  {typeof plan.price[isAnnual ? 'annual' : 'monthly'] === 'number' && (
                    <span className="text-gray-600 text-sm">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center text-green-600 mr-3">
                      <i className="ri-check-line"></i>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center">
              <i className="ri-shield-check-line mr-1"></i>
              SSL Secured
            </span>
            <span className="flex items-center">
              <i className="ri-time-line mr-1"></i>
              99.9% Uptime
            </span>
            <span className="flex items-center">
              <i className="ri-customer-service-line mr-1"></i>
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
