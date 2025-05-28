import { Mail, Phone } from 'lucide-react';

export function UserFooter() {
    return (
        <footer className="mt-auto bg-gray-900 px-4 py-12 text-white">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                    <h3 className="mb-4 font-medium text-blue-400">Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#features" className="hover:text-blue-400">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#how-it-works" className="hover:text-blue-400">
                                How It Works
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" className="hover:text-blue-400">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400">
                                Get Started
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400">
                                Dashboard
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 font-medium text-blue-400">Contact</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center">
                            <Mail size={16} className="mr-2" />
                            <span>smartstreetlight@gmail.com</span>
                        </li>
                        <li className="flex items-center">
                            <Phone size={16} className="mr-2" />
                            <span>+1(888)123-4567</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 font-medium text-blue-400">Follow us</h3>
                    <div className="flex space-x-3">
                        <a href="#" className="rounded-full bg-blue-600 p-2 hover:bg-blue-500">
                            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                            </svg>
                        </a>
                        <a href="#" className="rounded-full bg-pink-600 p-2 hover:bg-pink-500">
                            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        <a href="#" className="rounded-full bg-blue-800 p-2 hover:bg-blue-700">
                            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="#" className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-12 text-center text-xs text-gray-500">COPYRIGHT © 2025 SMART LIGHT | ALL RIGHTS RESERVED</div>
        </footer>
    );
};
