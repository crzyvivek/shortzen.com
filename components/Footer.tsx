
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-blue-400 mb-4 block" style={{ fontFamily: 'Pacifico, serif' }}>
              Shortzen
            </Link>
            <p className="text-gray-400 mb-4">
              The most powerful URL shortener with advanced analytics and tracking capabilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-twitter-line"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-facebook-line"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-linkedin-line"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Pricing</Link></li>
              <li><Link href="/analytics" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Analytics</Link></li>
              <li><Link href="/api" className="text-gray-400 hover:text-white transition-colors cursor-pointer">API</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Careers</Link></li>
              <li><Link href="/press" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Press</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Help Center</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</Link></li>
              <li><Link href="/status" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Status</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Shortzen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
