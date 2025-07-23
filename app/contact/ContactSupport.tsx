'use client';

import Link from 'next/link';

export default function ContactSupport() {
  const supportOptions = [
    {
      title: 'Help Center',
      description: 'Browse our comprehensive help documentation',
      icon: 'ri-question-line',
      href: '/help'
    },
    {
      title: 'API Documentation',
      description: 'Technical documentation for developers and integrations',
      icon: 'ri-code-line',
      href: '/help'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step guides and video tutorials',
      icon: 'ri-play-circle-line',
      href: '/help'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share experiences',
      icon: 'ri-chat-3-line',
      href: '/help'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">More Ways to Get Help</h2>
          <p className="text-xl text-gray-600">Find the support you need, when you need it</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => (
            <Link 
              key={index} 
              href={option.href}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                <i className={`${option.icon} text-xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}