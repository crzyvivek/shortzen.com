
'use client';

import { useState } from 'react';

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate the billing accordingly.'
    },
    {
      question: 'What happens to my links if I downgrade?',
      answer: 'Your existing links will continue to work. However, you may lose access to advanced features and your monthly link creation limit may be reduced.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact our support team for a full refund.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, all paid plans include a 14-day free trial. No credit card required to start your trial.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can pay by invoice.'
    },
    {
      question: 'Can I use my own domain?',
      answer: 'Yes, custom domains are available on Pro, Business, and Enterprise plans. You can use your own domain for branded short links.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'Free users get email support, Pro users get priority email support, Business users get phone support, and Enterprise users get dedicated account management.'
    },
    {
      question: 'Are there any setup fees?',
      answer: 'No, there are no setup fees for any of our plans. You only pay the monthly or annual subscription fee.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 text-left flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={`ri-${openIndex === index ? 'subtract' : 'add'}-line text-gray-600`}></i>
                </div>
              </button>
              {openIndex === index && (
                <div className="pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
