import React from 'react';
import AppLogo from '@/components/app-logo';
import { Link } from '@inertiajs/react';

export function UserHeader() {
  return (
      <header className="flex items-center justify-between bg-white px-4 py-2 shadow-sm dark:bg-gray-800">
          <Link href="/" className="flex items-center">
              <AppLogo />
          </Link>
          <nav className="hidden space-x-6 md:flex">
              <Link href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300">
                  Home
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 dark:text-gray-300">
                  How It Works
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 dark:text-gray-300">
                  FAQ
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300">
                  Contact Us
              </Link>
              <Link href="/signin" className="rounded-md bg-blue-600 px-4 py-1 text-white">
                  Get Started
              </Link>
          </nav>
      </header>
  );
}
