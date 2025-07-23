
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
            Shortzen
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Pricing
            </Link>
            <Link href="/analytics" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Analytics
            </Link>
            <Link href="/help" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Help
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Login
            </Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Sign Up
            </Link>
            <Link href="/dashboard" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap">
              Dashboard
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                Pricing
              </Link>
              <Link href="/analytics" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                Analytics
              </Link>
              <Link href="/help" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                Help
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                Contact
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                Login
              </Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Sign Up
              </Link>
              <Link href="/dashboard" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap">
                Dashboard
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
