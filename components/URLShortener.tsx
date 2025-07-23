
'use client';

import { useState } from 'react';

export default function URLShortener() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleShorten = async () => {
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    if (!isValidUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const randomId = Math.random().toString(36).substr(2, 8);
      setShortUrl(`https://shrinkme.io/${randomId}`);
    } catch (error) {
      setError('Failed to shorten URL. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleShorten();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your long URL here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          <button
            onClick={handleShorten}
            disabled={isLoading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
          >
            {isLoading ? (
              <div className="flex items-center">
                <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center animate-spin mr-2"></i>
                Shortening...
              </div>
            ) : (
              'Shorten URL'
            )}
          </button>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <i className="ri-error-warning-line w-5 h-5 flex items-center justify-center text-red-500 mr-2"></i>
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          </div>
        )}

        {shortUrl && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-4">
                <p className="text-sm text-gray-600 mb-1">Your shortened URL:</p>
                <p className="text-blue-600 font-medium break-all">{shortUrl}</p>
              </div>
              <button
                onClick={handleCopy}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                {copied ? (
                  <div className="flex items-center">
                    <i className="ri-check-line w-4 h-4 flex items-center justify-center mr-1"></i>
                    Copied!
                  </div>
                ) : (
                  <div className="flex items-center">
                    <i className="ri-file-copy-line w-4 h-4 flex items-center justify-center mr-1"></i>
                    Copy
                  </div>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}