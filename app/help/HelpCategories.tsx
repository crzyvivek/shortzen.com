'use client';

export default function HelpCategories() {
  const categories = [
    {
      title: 'Getting Started',
      description: 'Learn the basics of using Shortzen',
      icon: 'ri-rocket-line',
      articles: [
        'How to create your first short link',
        'Setting up your account',
        'Understanding the dashboard',
        'Basic link management'
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: 'ri-play-circle-line',
      articles: [
        'Getting Started with Shortzen - Complete Tutorial',
        'Advanced Analytics Walkthrough',
        'Custom Domains Setup Guide',
        'Link Optimization Best Practices'
      ]
    },
    {
      title: 'Analytics & Tracking',
      description: 'Understanding your link performance',
      icon: 'ri-bar-chart-line',
      articles: [
        'Reading analytics reports',
        'Setting up conversion tracking',
        'Geographic data insights',
        'Referrer analysis guide'
      ]
    },
    {
      title: 'Custom Domains',
      description: 'Brand your links with custom domains',
      icon: 'ri-global-line',
      articles: [
        'Adding a custom domain',
        'DNS configuration guide',
        'SSL certificate setup',
        'Domain verification process'
      ]
    },
    {
      title: 'API & Integrations',
      description: 'Technical documentation for developers',
      icon: 'ri-code-line',
      articles: [
        'API authentication guide',
        'Creating links via API',
        'Webhook configurations',
        'Third-party integrations'
      ]
    },
    {
      title: 'Account Management',
      description: 'Managing your Shortzen account',
      icon: 'ri-user-settings-line',
      articles: [
        'Billing and subscription',
        'Team collaboration features',
        'Security settings',
        'Account deletion process'
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Help Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive help documentation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                <i className={`${category.icon} text-xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.articles.map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <a href="#" className="text-blue-600 hover:text-blue-700 text-sm cursor-pointer">
                      {article}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm cursor-pointer">
                  View all articles →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}