import { Category, FAQItem } from '@/types/faqTypes';
import { HelpCircle, Lightbulb, Settings, Smartphone, CreditCard, Truck, Shield } from 'lucide-react';

export const categories: Category[] = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, color: 'bg-gray-500' },
    { id: 'products', name: 'Products', icon: Lightbulb, color: 'bg-yellow-500' },
    { id: 'installation', name: 'Installation', icon: Settings, color: 'bg-blue-500' },
    { id: 'app', name: 'Mobile App', icon: Smartphone, color: 'bg-green-500' },
    { id: 'billing', name: 'Billing', icon: CreditCard, color: 'bg-purple-500' },
    { id: 'shipping', name: 'Shipping', icon: Truck, color: 'bg-orange-500' },
    { id: 'warranty', name: 'Warranty', icon: Shield, color: 'bg-red-500' },
];

export const faqData: FAQItem[] = [
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
