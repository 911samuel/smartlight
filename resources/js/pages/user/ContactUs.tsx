import { CategoryRadioGroup, ContactInfoCard, InputField, TextAreaField } from '@/components/ui';
import UserLayout from '@/layouts/UserLayout';
import { CheckCircle, Lightbulb, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import type { FormState, FormErrors } from '@/types/contactUsTypes';
import { categories } from '@/data/contactUsData';


export default function ContactUs() {
    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: 'general',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        if (errors[e.target.name]) {
            setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
        }
    };

    const handleInputChange = (name: keyof FormState, value: string) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};

        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!form.subject.trim()) newErrors.subject = 'Subject is required';
        if (!form.message.trim()) newErrors.message = 'Message is required';

        return newErrors;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken || '',
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                if (errorData.errors) {
                    setErrors(errorData.errors);
                } else {
                    setErrors({ message: 'Failed to submit the form. Please try again.' });
                }
                setIsSubmitting(false);
                return;
            }

            const data = await response.json();
            setSuccessMessage(data.message || "Thank you for contacting SmartLight! We'll get back to you within 24 hours.");
            setForm({
                name: '',
                email: '',
                phone: '',
                subject: '',
                category: 'general',
                message: '',
            });
        } catch {
            setErrors({ message: 'An error occurred. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <UserLayout>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <div className="mb-4 flex justify-center">
                            <Lightbulb className="h-12 w-12 text-yellow-300" />
                        </div>
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Get in Touch with SmartLight</h1>
                        <p className="mx-auto max-w-2xl text-xl text-blue-100 dark:text-blue-300">
                            We're here to help illuminate your questions and resolve any concerns
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-6 py-16">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                                <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                                    <MessageCircle className="h-6 w-6 text-blue-600" />
                                    Send us a Message
                                </h2>

                                {successMessage && (
                                    <div className="mb-6 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900">
                                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                                        <p className="text-green-800 dark:text-green-300">{successMessage}</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                    {/* Category Selection */}
                                    <CategoryRadioGroup categories={categories} selectedValue={form.category} onChange={(value) => handleInputChange('category', value)} />

                                    {/* Name and Email Row */}
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <InputField
                                            label="Full Name *"
                                            id="name"
                                            name="name"
                                            value={form.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            error={errors.name}
                                            placeholder="Enter your full name"
                                        />
                                        <InputField
                                            label="Email Address *"
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            error={errors.email}
                                        />
                                    </div>

                                    {/* Phone and Subject Row */}
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <InputField
                                            label="Phone Number"
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="(optional)"
                                        />
                                        <InputField
                                            label="Subject *"
                                            id="subject"
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            error={errors.subject}
                                            placeholder="Brief subject line"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <TextAreaField
                                            label="Message *"
                                            id="message"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            error={errors.message}
                                            placeholder="Please describe your inquiry or concern in detail..."
                                            rows={6}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 font-semibold text-white transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-5 w-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Contact Cards */}
                            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                                <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-gray-100">Contact Information</h3>
                                <div className="space-y-4">
                                    <ContactInfoCard icon={Mail} title="Email">
                                        <p className="text-blue-600">support@smartlight.com</p>
                                    </ContactInfoCard>
                                    <ContactInfoCard icon={Phone} title="Phone">
                                        <p className="text-green-600">+1 (555) 123-4567</p>
                                    </ContactInfoCard>
                                    <ContactInfoCard icon={MapPin} title="Address">
                                        <p className="text-purple-600">
                                            123 Smart Street
                                            <br />
                                            Tech City, TC 12345
                                        </p>
                                    </ContactInfoCard>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="rounded-2xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 p-6 shadow-lg dark:border-yellow-700 dark:from-yellow-900 dark:to-orange-900">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500">
                                        <Lightbulb className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Quick Response</h3>
                                </div>
                                <p className="mb-3 text-gray-700 dark:text-gray-300">
                                    We typically respond to all inquiries within 24 hours during business days.
                                </p>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    <p>
                                        <strong>Business Hours:</strong>
                                    </p>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                                <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">Need Quick Help?</h3>
                                <p className="mb-4 text-gray-600 dark:text-gray-300">
                                    Check our FAQ section for instant answers to common questions.
                                </p>
                                <a
                                    href="/faq"
                                    className="w-full rounded-lg bg-gray-800 px-4 py-3 font-semibold text-white transition-colors hover:bg-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
                                >
                                    Visit FAQ
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
