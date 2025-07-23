
'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Paste Your URL',
      description: 'Simply paste your long URL into our shortener tool.'
    },
    {
      number: '2',
      title: 'Customize (Optional)',
      description: 'Add a custom alias or choose advanced settings.'
    },
    {
      number: '3',
      title: 'Share & Track',
      description: 'Share your short link and track its performance.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with URL shortening in just three simple steps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 transform translate-x-8 w-16 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}