
'use client';

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{
             backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20tech%20team%20working%20together%20in%20a%20bright%20office%20space%20with%20computers%20and%20collaborative%20atmosphere%2C%20professional%20business%20environment%20with%20natural%20lighting%20and%20contemporary%20design%2C%20people%20discussing%20ideas%20and%20innovation%2C%20clean%20minimal%20workspace%20with%20technology%20focus&width=1200&height=600&seq=about-hero&orientation=landscape')`
           }}>
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          About Shortzen
        </h1>
        <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          We're on a mission to make the internet more accessible and trackable, one short link at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
            Join Our Team
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
