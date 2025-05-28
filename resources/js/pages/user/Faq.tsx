import { useAppearance } from '@/hooks/use-appearance';
import UserLayout from '@/layouts/UserLayout';
import { ChevronDown, ChevronUp, CreditCard, HelpCircle, Lightbulb, MessageCircle, Search, Settings, Shield, Smartphone, Truck } from 'lucide-react';
import { useState } from 'react';

const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, color: 'bg-gray-500' },
    { id: 'products', name: 'Products', icon: Lightbulb, color: 'bg-yellow-500' },
    { id: 'installation', name: 'Installation', icon: Settings, color: 'bg-blue-500' },
    { id: 'app', name: 'Mobile App', icon: Smartphone, color: 'bg-green-500' },
    { id: 'billing', name: 'Billing', icon: CreditCard, color: 'bg-purple-500' },
    { id: 'shipping', name: 'Shipping', icon: Truck, color: 'bg-orange-500' },
    { id: 'warranty', name: 'Warranty', icon: Shield, color: 'bg-red-500' },
];

const faqData = [
    {
        category: 'products',
        question: 'What types of smart bulbs does SmartLight offer?',
        answer: 'SmartLight offers a comprehensive range of smart lighting solutions including LED smart bulbs (A19, BR30, PAR38), smart light strips, smart switches, smart dimmers, and outdoor smart lighting. All our products support Wi-Fi connectivity and are compatible with major smart home platforms like Alexa, Google Assistant, and Apple HomeKit.',
    },
    {
        category: 'products',
        question: 'How long do SmartLight bulbs last?',
        answer: 'Our LED smart bulbs are rated for 25,000+ hours of use, which translates to approximately 22+ years when used 3 hours per day. They also come with a 3-year manufacturer warranty for your peace of mind.',
    },
    {
        category: 'products',
        question: 'Can I control the brightness and color of the bulbs?',
        answer: 'Yes! Our smart bulbs offer full dimming capabilities (1-100%) and many models feature 16 million colors plus tunable white light from warm (2700K) to cool daylight (6500K). You can adjust these settings through our mobile app or voice commands.',
    },
    {
        category: 'installation',
        question: 'Do I need special wiring to install SmartLight products?',
        answer: "Most SmartLight bulbs work with your existing fixtures - simply screw them in like regular bulbs. Smart switches may require basic electrical work. If you're not comfortable with electrical installation, we recommend consulting a licensed electrician.",
    },
    {
        category: 'installation',
        question: 'How do I connect my SmartLight bulbs to Wi-Fi?',
        answer: 'Download the SmartLight app, create an account, turn your bulb on/off 3 times to enter pairing mode, then follow the in-app setup wizard. The app will guide you through connecting to your 2.4GHz Wi-Fi network (5GHz not supported).',
    },
    {
        category: 'installation',
        question: 'What if my Wi-Fi network changes or I move?',
        answer: 'You can easily reconfigure your bulbs through the SmartLight app. Go to Device Settings, select "Change Wi-Fi Network," and follow the setup process again. Your schedules and preferences will be preserved.',
    },
    {
        category: 'app',
        question: 'Is the SmartLight app free?',
        answer: 'Yes, the SmartLight mobile app is completely free and available for both iOS and Android devices. It includes all features for controlling your lights, creating schedules, setting scenes, and managing your smart home lighting.',
    },
    {
        category: 'app',
        question: 'Can multiple family members control the lights?',
        answer: 'Absolutely! You can share access to your SmartLight devices with family members through the app. Each person can download the app and you can invite them to join your "home" to control the lights.',
    },
    {
        category: 'app',
        question: "Does the app work when I'm away from home?",
        answer: 'Yes, as long as your bulbs are connected to Wi-Fi and you have an internet connection, you can control your SmartLight devices from anywhere in the world through the mobile app.',
    },
    {
        category: 'billing',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and buy-now-pay-later options through Klarna and Afterpay.',
    },
    {
        category: 'billing',
        question: 'Do you offer bulk discounts for large orders?',
        answer: 'Yes! We offer volume discounts for orders of 20+ units. Contact our sales team at sales@smartlight.com or call 1-800-SMART-01 for custom pricing on bulk orders.',
    },
    {
        category: 'billing',
        question: "Can I return products if I'm not satisfied?",
        answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your SmartLight products, you can return them for a full refund within 30 days of purchase. Items must be in original condition.",
    },
    {
        category: 'shipping',
        question: 'How fast is shipping?',
        answer: 'We offer several shipping options: Standard (3-5 business days), Express (1-2 business days), and overnight delivery. Orders placed before 2 PM EST ship the same day. Free standard shipping on orders over $50.',
    },
    {
        category: 'shipping',
        question: 'Do you ship internationally?',
        answer: 'Currently, we ship to the United States, Canada, and select European countries. International shipping rates and delivery times vary by location. Check our shipping page for specific countries and rates.',
    },
    {
        category: 'shipping',
        question: 'How can I track my order?',
        answer: "Once your order ships, you'll receive a tracking number via email. You can track your package on our website or directly with the shipping carrier. You'll also receive updates as your package moves through the delivery process.",
    },
    {
        category: 'warranty',
        question: 'What does the SmartLight warranty cover?',
        answer: 'Our 3-year warranty covers manufacturing defects, premature failure, and connectivity issues. It does not cover damage from misuse, power surges, or normal wear and tear. Warranty claims can be submitted through our website.',
    },
    {
        category: 'warranty',
        question: 'How do I file a warranty claim?',
        answer: 'To file a warranty claim, visit our support page, provide your order number and describe the issue. Our support team will troubleshoot the problem and, if covered under warranty, provide a replacement or refund.',
    },
    {
        category: 'products',
        question: 'Are SmartLight products energy efficient?',
        answer: 'Yes! Our LED smart bulbs use up to 80% less energy than traditional incandescent bulbs. A 9W SmartLight bulb produces the same brightness as a 60W incandescent bulb, saving you money on electricity bills.',
    },
    {
        category: 'app',
        question: 'Can I set schedules and timers for my lights?',
        answer: 'Yes, the SmartLight app allows you to create custom schedules, set sunrise/sunset automation, create vacation mode, and set sleep timers. You can also create lighting scenes for different activities and moods.',
    },
    {
        category: 'products',
        question: 'Are SmartLight bulbs compatible with dimmer switches?',
        answer: 'SmartLight bulbs have built-in dimming capabilities controlled through the app. They work best in regular (non-dimming) fixtures. If you have existing dimmer switches, you may want to replace them with our smart switches for optimal performance.',
    },
];

export default function FAQ() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

    const { appearance } = useAppearance();

    const toggleItem = (index: number) => {
        setOpenItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const filteredFAQs = faqData.filter((item) => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesSearch =
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) || item.answer.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <UserLayout>
            <div
                className={`min-h-screen ${
                    appearance === 'dark'
                        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
                        : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
                }`}
            >
                {/* Hero Section */}
                <div
                    className={`py-16 text-white ${
                        appearance === 'dark' ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-600 to-indigo-700'
                    }`}
                >
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <div className="mb-4 flex justify-center">
                            <HelpCircle className="h-12 w-12 text-yellow-300" />
                        </div>
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
                        <p className={appearance === 'dark' ? 'mx-auto max-w-2xl text-xl text-gray-300' : 'mx-auto max-w-2xl text-xl text-blue-100'}>
                            Find quick answers to common questions about SmartLight products and services
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-6xl px-6 py-12">
                    {/* Search Bar */}
                    <div className="mb-8">
                        <div className="relative mx-auto max-w-2xl">
                            <Search
                                className={
                                    appearance === 'dark'
                                        ? 'absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400'
                                        : 'absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400'
                                }
                            />
                            <input
                                type="text"
                                placeholder="Search for answers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={
                                    appearance === 'dark'
                                        ? 'w-full rounded-2xl border-2 border-gray-700 bg-gray-900 py-4 pr-4 pl-12 text-lg text-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                                        : 'w-full rounded-2xl border-2 border-gray-200 py-4 pr-4 pl-12 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                                }
                            />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-12">
                        <h3
                            className={
                                appearance === 'dark'
                                    ? 'mb-4 text-center text-lg font-semibold text-gray-300'
                                    : 'mb-4 text-center text-lg font-semibold text-gray-900'
                            }
                        >
                            Browse by Category
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => {
                                const IconComponent = category.icon;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-all duration-200 ${
                                            selectedCategory === category.id
                                                ? `${category.color} scale-105 text-white shadow-md`
                                                : appearance === 'dark'
                                                  ? 'border border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800'
                                                  : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        <IconComponent className="h-5 w-5" />
                                        {category.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {filteredFAQs.length > 0 ? (
                            filteredFAQs.map((item, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl border ${
                                        appearance === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
                                    } p-4 shadow-sm`}
                                >
                                    <button onClick={() => toggleItem(index)} className="flex w-full items-center justify-between text-left">
                                        <span
                                            className={
                                                appearance === 'dark' ? 'text-lg font-semibold text-gray-200' : 'text-lg font-semibold text-gray-900'
                                            }
                                        >
                                            {item.question}
                                        </span>
                                        {openItems[index] ? (
                                            <ChevronUp className={appearance === 'dark' ? 'h-5 w-5 text-gray-400' : 'h-5 w-5'} />
                                        ) : (
                                            <ChevronDown className={appearance === 'dark' ? 'h-5 w-5 text-gray-400' : 'h-5 w-5'} />
                                        )}
                                    </button>
                                    {openItems[index] && (
                                        <div className={appearance === 'dark' ? 'mt-2 text-gray-300' : 'mt-2 text-gray-700'}>
                                            <p>{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className={appearance === 'dark' ? 'text-center text-gray-400' : 'text-center text-gray-500'}>
                                No FAQs found for your search.
                            </p>
                        )}
                    </div>

                    {/* Still Have Questions Section */}
                    <div
                        className={`mt-16 rounded-2xl p-8 text-center ${
                            appearance === 'dark'
                                ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
                        }`}
                    >
                        <MessageCircle className="mx-auto mb-4 h-12 w-12 text-yellow-300" />
                        <h3 className="mb-4 text-2xl font-bold">Still Have Questions?</h3>
                        <p className={appearance === 'dark' ? 'mx-auto mb-6 max-w-2xl text-gray-300' : 'mx-auto mb-6 max-w-2xl text-blue-100'}>
                            Can't find what you're looking for? Our support team is here to help you with any questions about SmartLight products.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
                                Contact Support
                            </button>
                            <button className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
                                Live Chat
                            </button>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div
                            className={`rounded-xl border p-6 text-center shadow-lg ${
                                appearance === 'dark' ? 'border-gray-700 bg-gray-900 text-gray-300' : 'border-gray-200 bg-white text-gray-900'
                            }`}
                        >
                            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500">
                                <Lightbulb className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="mb-1 font-semibold">24/7 Support</h4>
                            <p className="text-sm">Round-the-clock assistance</p>
                        </div>
                        <div
                            className={`rounded-xl border p-6 text-center shadow-lg ${
                                appearance === 'dark' ? 'border-gray-700 bg-gray-900 text-gray-300' : 'border-gray-200 bg-white text-gray-900'
                            }`}
                        >
                            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="mb-1 font-semibold">3-Year Warranty</h4>
                            <p className="text-sm">Comprehensive coverage</p>
                        </div>
                        <div
                            className={`rounded-xl border p-6 text-center shadow-lg ${
                                appearance === 'dark' ? 'border-gray-700 bg-gray-900 text-gray-300' : 'border-gray-200 bg-white text-gray-900'
                            }`}
                        >
                            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
                                <Truck className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="mb-1 font-semibold">Fast Shipping</h4>
                            <p className="text-sm">Free on orders over $50</p>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
