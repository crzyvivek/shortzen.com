
'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@shortzen.com',
      action: 'mailto:support@shortzen.com'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone Support',
      description: 'Call us during business hours',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 24/7',
      action: '#'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Office Location',
      description: 'Visit us in person',
      contact: '123 Tech Street, San Francisco, CA 94105',
      action: '#'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM PST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Other ways to reach us</h2>
        
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
                <i className={`${method.icon} text-xl text-blue-600`}></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                <a 
                  href={method.action}
                  className="text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  {method.contact}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
        <div className="space-y-3">
          {businessHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-700">{schedule.day}</span>
              <span className="text-gray-600">{schedule.hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800 text-sm">
            <i className="ri-information-line mr-2"></i>
            For urgent technical issues, our emergency support is available 24/7 for Business and Enterprise customers.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
        <p className="text-gray-600 mb-4">Stay updated with our latest news and updates</p>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
            <i className="ri-twitter-line"></i>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
            <i className="ri-linkedin-line"></i>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
            <i className="ri-facebook-line"></i>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
            <i className="ri-instagram-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
