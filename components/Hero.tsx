
'use client';

import { useState } from 'react';
import URLShortener from './URLShortener';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20digital%20technology%20background%20with%20abstract%20geometric%20patterns%2C%20blue%20and%20white%20color%20scheme%2C%20clean%20minimalist%20design%2C%20suitable%20for%20tech%20website%20hero%20section%2C%20professional%20and%20trustworthy%20atmosphere%2C%20network%20connections%20visualization%2C%20data%20flow%20concept&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/90"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Shorten Your URLs
            <span className="block text-blue-600">Track Your Success</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create short, trackable links that boost your marketing campaigns. 
            Get detailed analytics and insights to optimize your performance.
          </p>

          <URLShortener />
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <i className="ri-shield-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-2"></i>
              <span>100% Safe & Secure</span>
            </div>
            <div className="flex items-center">
              <i className="ri-bar-chart-line w-5 h-5 flex items-center justify-center text-blue-500 mr-2"></i>
              <span>Detailed Analytics</span>
            </div>
            <div className="flex items-center">
              <i className="ri-timer-line w-5 h-5 flex items-center justify-center text-purple-500 mr-2"></i>
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}