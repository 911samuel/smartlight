import UserLayout from '@/layouts/UserLayout';
import { Link } from '@inertiajs/react';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { HowItWorksCard } from '@/components/ui/HowItWorksCard';
import { FeaturesCard } from '@/components/ui/FeaturesCard';
import { features, howItWorksSteps, testimonials } from '@/data/entryPageData';

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
                    {features.map((feature) => (
                        <FeaturesCard
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
                <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 dark:text-white">How It Works</h2>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                    {howItWorksSteps.map((step) => (
                        <HowItWorksCard key={step.id} title={step.title} description={step.description} />
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="px-4 py-16">
                <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 dark:text-white">What Our Users Say</h2>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial.testimonial}
                            author={testimonial.author}
                        />
                    ))}
                </div>
            </section>
        </UserLayout>
    );
}
