import UserLayout from '@/layouts/UserLayout';
import { Link } from '@inertiajs/react';

export default function EntryPage() {
    return (
        <UserLayout>
            <title>Street Light</title>
            {/* Hero Section */}
            <section className="bg-blue-600 px-4 py-16 text-center text-white">
                <h1 className="mb-3 text-3xl font-bold">Smart Street Light Monitoring System</h1>
                <p className="mx-auto mb-8 max-w-2xl">
                    Optimize your street lighting with IoT technology for energy efficiency and proactive maintenance.
                </p>
                <Link href="/signin" className="rounded-full bg-white px-6 py-2 font-medium text-blue-600">
                    Get Started
                </Link>
            </section>

            {/* Features Section */}
            <section id="features" className="px-4 py-16">
                <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 dark:text-white">Features</h2>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Feature 1 */}
                    <div className="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-800">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                            <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="mb-2 font-bold text-gray-900 dark:text-white">Energy Efficiency</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300"></p>
                    </div>

                    {/* Feature 2 */}
                    <div className="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-800">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                            <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 20V10M18 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="mb-2 font-bold text-gray-900 dark:text-white">Real-Time Monitoring</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Monitor the operational status of individual lights effectively.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-800">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                            <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path
                                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 font-bold text-gray-900 dark:text-white">Proactive Maintenance</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Receive alerts for maintenance needs to ensure optimal performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
                <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 dark:text-white">How It Works</h2>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Step 1 */}
                    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                        <h3 className="mb-2 text-center font-bold text-gray-900 dark:text-white">Step 1: Data Collection</h3>
                        <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                            Ambient light and motion sensors collect data in real-time.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                        <h3 className="mb-2 text-center font-bold text-gray-900 dark:text-white">Step 2: Data Transmission</h3>
                        <p className="text-center text-sm text-gray-700 dark:text-gray-300">Data is transmitted to the cloud for analysis.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                        <h3 className="mb-2 text-center font-bold text-gray-900 dark:text-white">Step 3: Dynamic Adjustment</h3>
                        <p className="text-center text-sm text-gray-700 dark:text-gray-300">Light intensity is adjusted based on analyzed data.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="px-4 py-16">
                <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 dark:text-white">What Our Users Say</h2>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Testimonial 1 */}
                    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                        <p className="mb-4 text-sm text-gray-700 italic dark:text-gray-300">
                            "This system has transformed our street lighting and reduced our energy costs significantly."
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">- John Doe</p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                        <p className="mb-4 text-sm text-gray-700 italic dark:text-gray-300">
                            "Proactive maintenance alerts have made our city safer and more efficient."
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">- Jane Smith</p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                        <p className="mb-4 text-sm text-gray-700 italic dark:text-gray-300">
                            "Real-time monitoring gives us peace of mind that our lighting is always optimal."
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">- Alex Johnson</p>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
}
