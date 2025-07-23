
'use client';

export default function AboutMission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Shortzen, we believe that every click matters. Our mission is to provide businesses, marketers, and individuals with the most powerful and intuitive URL shortening platform that not only creates memorable links but also delivers actionable insights.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We're building more than just a URL shortener – we're creating a comprehensive link management ecosystem that helps our users understand their audience, optimize their content, and grow their business.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">2019</h3>
                <p className="text-gray-600">Founded</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">500M+</h3>
                <p className="text-gray-600">Links Created</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">1M+</h3>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">99.9%</h3>
                <p className="text-gray-600">Uptime</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20team%20collaboration%20in%20modern%20office%20environment%20with%20data%20visualization%20screens%20and%20analytics%20dashboards%2C%20people%20working%20on%20computers%20with%20charts%20and%20graphs%2C%20clean%20contemporary%20workspace%20with%20natural%20light%20and%20technology%20focus%2C%20business%20intelligence%20and%20data%20analysis%20atmosphere&width=600&height=400&seq=mission-img&orientation=landscape"
              alt="Our Mission"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
