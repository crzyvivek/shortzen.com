'use client';

export default function HelpHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{
             backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20help%20desk%20support%20center%20with%20friendly%20customer%20service%20representatives%20working%20on%20computers%2C%20modern%20office%20environment%20with%20help%20documentation%20and%20tutorial%20screens%2C%20bright%20and%20welcoming%20atmosphere%20with%20clean%20design%20and%20technology%20focus&width=1200&height=600&seq=help-hero&orientation=landscape')`
           }}>
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          How can we help you?
        </h1>
        <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          Find answers, tutorials, and guides to get the most out of Shortzen
        </p>
      </div>
    </section>
  );
}