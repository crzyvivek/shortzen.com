
'use client';

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <i className="ri-time-line"></i>
            <span>Response within 24 hours</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <i className="ri-customer-service-line"></i>
            <span>24/7 support available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
