import React from 'react';
import AppLogo from '@/components/app-logo';
import { Link } from '@inertiajs/react';

export function UserHeader() {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-2 shadow-sm dark:bg-gray-800">
      <AppLogo />
      <nav className="hidden space-x-6 md:flex">
        <a href="#features" className="text-gray-700 hover:text-blue-600 dark:text-gray-300">
          Features
        </a>
        <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 dark:text-gray-300">
          How It Works
        </a>
        <a href="#testimonials" className="text-gray-700 hover:text-blue-600 dark:text-gray-300">
          Testimonials
        </a>
        <a href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300">
          Contact Us
        </a>
        <Link href="/signin" className="rounded-md bg-blue-600 px-4 py-1 text-white">
          Get Started
        </Link>
      </nav>
    </header>
  );
}
