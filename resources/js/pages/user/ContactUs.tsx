import { AlertCircle, CheckCircle, Lightbulb, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormState {
    name: string;
    email: string;
    phone: string;
    subject: string;
    category: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

interface Category {
    value: string;
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

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
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
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

        // Simulate API call
        setTimeout(() => {
            setSuccessMessage("Thank you for contacting SmartLight! We'll get back to you within 24 hours.");
            setForm({
                name: '',
                email: '',
                phone: '',
                subject: '',
                category: 'general',
                message: '',
            });
            setIsSubmitting(false);
        }, 1500);
    };

    const categories: Category[] = [
        { value: 'general', label: 'General Inquiry', icon: MessageCircle },
        { value: 'complaint', label: 'Complaint', icon: AlertCircle },
        { value: 'support', label: 'Technical Support', icon: Lightbulb },
        { value: 'billing', label: 'Billing Issue', icon: Mail },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <div className="mb-4 flex justify-center">
                        <Lightbulb className="h-12 w-12 text-yellow-300" />
                    </div>
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">Get in Touch with SmartLight</h1>
                    <p className="mx-auto max-w-2xl text-xl text-blue-100 dark:text-blue-300">We're here to help illuminate your questions and resolve any concerns</p>
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
                                <div>
                                    <label className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300">What can we help you with?</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {categories.map((category) => {
                                            const IconComponent = category.icon;
                                            return (
                                                <label
                                                    key={category.value}
                                                    className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 p-3 transition-all ${
                                                        form.category === category.value
                                                            ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900'
                                                            : 'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600'
                                                    }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        value={category.value}
                                                        checked={form.category === category.value}
                                                        onChange={handleChange}
                                                        className="sr-only"
                                                    />
                                                    <IconComponent className="h-5 w-5" />
                                                    <span className="text-sm font-medium">{category.label}</span>
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Name and Email Row */}
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            className={`w-full rounded-lg border-2 px-4 py-3 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 ${
                                                errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                                            }`}
                                            placeholder="Enter your full name"
                                        />
                                        {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className={`w-full rounded-lg border-2 px-4 py-3 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 ${
                                                errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                                            }`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                                    </div>
                                </div>

                                {/* Phone and Subject Row */}
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100"
                                            placeholder="(optional)"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            className={`w-full rounded-lg border-2 px-4 py-3 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 ${
                                                errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                                            }`}
                                            placeholder="Brief subject line"
                                        />
                                        {errors.subject && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>}
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className={`w-full resize-none rounded-lg border-2 px-4 py-3 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 ${
                                            errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                                        }`}
                                        placeholder="Please describe your inquiry or concern in detail..."
                                    />
                                    {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
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
                                <div className="flex items-center gap-4 rounded-lg bg-blue-50 p-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <Mail className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">Email</p>
                                        <p className="text-blue-600">support@smartlight.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 rounded-lg bg-green-50 p-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                                        <Phone className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">Phone</p>
                                        <p className="text-green-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 rounded-lg bg-purple-50 p-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                                        <MapPin className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">Address</p>
                                        <p className="text-purple-600">
                                            123 Smart Street
                                            <br />
                                            Tech City, TC 12345
                                        </p>
                                    </div>
                                </div>
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
                            <p className="mb-3 text-gray-700 dark:text-gray-300">We typically respond to all inquiries within 24 hours during business days.</p>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                <p>
                                    <strong>Business Hours:</strong>
                                </p>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>

                        {/* FAQ Link */}
                        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                            <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">Need Quick Help?</h3>
                            <p className="mb-4 text-gray-600 dark:text-gray-300">Check our FAQ section for instant answers to common questions.</p>
                            <button className="w-full rounded-lg bg-gray-800 px-4 py-3 font-semibold text-white transition-colors hover:bg-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800">
                                Visit FAQ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
