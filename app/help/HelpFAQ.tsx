'use client';

import { useState } from 'react';

export default function HelpFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I create a short link?',
      answer: 'Simply paste your long URL into the input field on our homepage, customize your link if desired, and click "Shorten URL". Your new short link will be ready to use immediately.'
    },
    {
      question: 'Can I customize my short links?',
      answer: 'Yes! Pro and higher plans allow you to create custom short links with your own keywords. This makes your links more memorable and branded.'
    },
    {
      question: 'How do I track link performance?',
      answer: 'All shortened links come with detailed analytics. Visit your dashboard to see click counts, geographic data, referrer information, and more. Analytics are available in real-time.'
    },
    {
      question: 'What is a custom domain?',
      answer: 'A custom domain lets you use your own branded domain for short links instead of shortzen.com. For example, you could use links.yourbrand.com/abc123.'
    },
    {
      question: 'How do I set up a custom domain?',
      answer: 'Custom domains are available on Business and Enterprise plans. Go to Settings > Domains, add your domain, and follow the DNS configuration instructions.'
    },
    {
      question: 'Do short links expire?',
      answer: 'Free links never expire. However, inactive accounts may have their links deactivated after 12 months of inactivity. Paid plans have no expiration limits.'
    },
    {
      question: 'Can I bulk create short links?',
      answer: 'Yes! Business and Enterprise plans include bulk link creation via CSV upload or our API. This is perfect for large campaigns or migrations.'
    },
    {
      question: 'Is there an API available?',
      answer: 'Yes, we offer a comprehensive REST API for all paid plans. You can create, manage, and track links programmatically. Full documentation is available in our API section.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions about Shortzen
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <i className={`ri-arrow-${openFAQ === index ? 'up' : 'down'}-s-line text-gray-400`}></i>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}