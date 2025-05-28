import UserLayout from '@/layouts/UserLayout';
import {
   ArrowRight,
    Calendar,
    CheckCircle,
    Clock,
    Home,
    Lightbulb,
    Palette,
    Play,
    Settings,
    Shield,
    Smartphone,
    Star,
    Users,
    Volume2,
    Wifi,
    Zap,
} from 'lucide-react';
import { useState } from 'react';

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);
    const [activeFeature, setActiveFeature] = useState('control');

    const steps = [
        {
            id: 1,
            title: 'Choose Your Bulbs',
            description: 'Select from our range of smart LED bulbs designed for every room and need.',
            icon: Lightbulb,
            color: 'bg-yellow-500',
            details: [
                'Available in A19, BR30, and PAR38 sizes',
                '25,000+ hour lifespan',
                '16 million colors + tunable whites',
                'Dimmable from 1-100%',
            ],
        },
        {
            id: 2,
            title: 'Simple Installation',
            description: 'Screw in your SmartLight bulbs just like regular bulbs - no special wiring needed.',
            icon: Settings,
            color: 'bg-blue-500',
            details: ['Works with existing fixtures', 'No hub or bridge required', 'Direct Wi-Fi connection', 'Installation in under 2 minutes'],
        },
        {
            id: 3,
            title: 'Connect to Wi-Fi',
            description: 'Use our mobile app to connect your bulbs to your home Wi-Fi network.',
            icon: Wifi,
            color: 'bg-green-500',
            details: ['Works with 2.4GHz networks', 'WPA/WPA2 security supported', 'One-time setup per bulb', 'Automatic reconnection'],
        },
        {
            id: 4,
            title: 'Control Everything',
            description: 'Use your smartphone, voice commands, or automation to control your lights.',
            icon: Smartphone,
            color: 'bg-purple-500',
            details: ['iOS and Android apps', 'Voice control with Alexa, Google, Siri', 'Remote access from anywhere', 'Family sharing capabilities'],
        },
    ];

    const features = [
        {
            id: 'control',
            title: 'Smart Control',
            description: 'Control your lights from anywhere with our intuitive mobile app',
            icon: Smartphone,
            benefits: ['Turn lights on/off remotely', 'Adjust brightness and colors', 'Group lights by room or zone', 'Set custom lighting scenes'],
        },
        {
            id: 'voice',
            title: 'Voice Commands',
            description: 'Use natural voice commands with your favorite smart assistants',
            icon: Volume2,
            benefits: [
                '"Hey Google, dim the living room lights"',
                '"Alexa, turn on movie mode"',
                '"Hey Siri, set bedroom to 20%"',
                'Works with all major assistants',
            ],
        },
        {
            id: 'scheduling',
            title: 'Smart Scheduling',
            description: 'Automate your lighting with intelligent schedules and timers',
            icon: Calendar,
            benefits: [
                'Wake up with gradual sunrise lighting',
                'Automatic sunset/sunrise timing',
                'Vacation mode for security',
                'Custom daily/weekly schedules',
            ],
        },
        {
            id: 'scenes',
            title: 'Lighting Scenes',
            description: 'Create the perfect ambiance for any activity or mood',
            icon: Palette,
            benefits: ['Movie night: Dim warm lighting', 'Party mode: Dynamic colors', 'Focus time: Bright cool light', 'Bedtime: Soft, warm glow'],
        },
    ];

    const compatibilityLogos = [
        { name: 'Amazon Alexa', logo: '🔊' },
        { name: 'Google Assistant', logo: '🎯' },
        { name: 'Apple HomeKit', logo: '🏠' },
        { name: 'Samsung SmartThings', logo: '📱' },
        { name: 'IFTTT', logo: '🔗' },
        { name: 'Philips Hue Bridge', logo: '🌉' },
    ];

    return (
        <UserLayout>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-12 text-center">
                            <div className="mb-6 flex justify-center">
                                <div className="relative">
                                    <Lightbulb className="h-16 w-16 text-yellow-300" />
                                    <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-400">
                                        <Zap className="h-4 w-4 text-white" />
                                    </div>
                                </div>
                            </div>
                            <h1 className="mb-6 text-5xl font-bold md:text-6xl">How SmartLight Works</h1>
                            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-blue-100">
                                Transform your home with intelligent lighting in just 4 simple steps. No complicated setup, no additional hubs - just
                                smart lighting made simple.
                            </p>
                        </div>

                        {/* Quick Benefits */}
                        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div className="bg-opacity-10 rounded-xl bg-white p-6 text-center backdrop-blur-sm">
                                <Clock className="mx-auto mb-3 h-8 w-8 text-yellow-300" />
                                <h3 className="mb-2 font-semibold">2-Minute Setup</h3>
                                <p className="text-sm text-blue-100">Quick and easy installation</p>
                            </div>
                            <div className="bg-opacity-10 rounded-xl bg-white p-6 text-center backdrop-blur-sm">
                                <Shield className="mx-auto mb-3 h-8 w-8 text-green-300" />
                                <h3 className="mb-2 font-semibold">No Hub Required</h3>
                                <p className="text-sm text-blue-100">Direct Wi-Fi connection</p>
                            </div>
                            <div className="bg-opacity-10 rounded-xl bg-white p-6 text-center backdrop-blur-sm">
                                <Users className="mx-auto mb-3 h-8 w-8 text-purple-300" />
                                <h3 className="mb-2 font-semibold">Family Friendly</h3>
                                <p className="text-sm text-blue-100">Everyone can control the lights</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step-by-Step Process */}
                <div className="py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-4xl font-bold text-gray-900">Getting Started is Simple</h2>
                            <p className="mx-auto max-w-2xl text-xl text-gray-600">
                                Follow these four easy steps to bring smart lighting to your home
                            </p>
                        </div>

                        {/* Interactive Steps */}
                        <div className="relative">
                            {/* Progress Line */}
                            <div className="absolute top-24 left-1/2 hidden w-full max-w-4xl -translate-x-1/2 transform md:block">
                                <div className="relative h-1 bg-gray-200">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 ease-in-out"
                                        style={{ width: `${(activeStep + 1) * 25}%` }}
                                    />
                                </div>
                            </div>

                            <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-4">
                                {steps.map((step, index) => {
                                    const IconComponent = step.icon;
                                    const isActive = activeStep === index;

                                    return (
                                        <div
                                            key={step.id}
                                            className={`cursor-pointer transition-all duration-300 ${isActive ? '-translate-y-2 transform' : ''}`}
                                            onMouseEnter={() => setActiveStep(index)}
                                        >
                                            <div
                                                className={`rounded-2xl border-2 bg-white p-6 shadow-lg transition-all duration-300 ${
                                                    isActive ? 'border-blue-500 shadow-xl' : 'border-gray-100 hover:border-gray-200'
                                                }`}
                                            >
                                                <div
                                                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${
                                                        isActive ? step.color : 'bg-gray-100'
                                                    }`}
                                                >
                                                    <IconComponent className={`h-8 w-8 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                                                </div>
                                                <div className="text-center">
                                                    <div className={`mb-2 text-sm font-semibold ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                                                        STEP {step.id}
                                                    </div>
                                                    <h3 className="mb-3 text-xl font-bold text-gray-900">{step.title}</h3>
                                                    <p className="mb-4 text-gray-600">{step.description}</p>

                                                    {isActive && (
                                                        <div className="mt-4 space-y-2">
                                                            {step.details.map((detail, idx) => (
                                                                <div key={idx} className="flex items-center text-sm text-gray-700">
                                                                    <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                                                                    {detail}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Deep Dive */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-4xl font-bold text-gray-900">Powerful Features</h2>
                            <p className="mx-auto max-w-2xl text-xl text-gray-600">Discover all the ways SmartLight can enhance your daily life</p>
                        </div>

                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            {/* Feature Tabs */}
                            <div className="space-y-4">
                                {features.map((feature) => {
                                    const IconComponent = feature.icon;
                                    const isActive = activeFeature === feature.id;

                                    return (
                                        <div
                                            key={feature.id}
                                            className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                                                isActive ? 'bg-blue-600 text-white shadow-xl' : 'bg-white shadow-lg hover:bg-gray-50'
                                            }`}
                                            onClick={() => setActiveFeature(feature.id)}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${
                                                        isActive ? 'bg-opacity-20 bg-white' : 'bg-blue-100'
                                                    }`}
                                                >
                                                    <IconComponent className={`h-6 w-6 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                                                    <p className={`mb-4 ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>{feature.description}</p>
                                                    {isActive && (
                                                        <div className="space-y-2">
                                                            {feature.benefits.map((benefit, idx) => (
                                                                <div key={idx} className="flex items-center text-sm">
                                                                    <Star className="mr-2 h-4 w-4 flex-shrink-0 text-yellow-300" />
                                                                    {benefit}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                <ArrowRight
                                                    className={`h-5 w-5 transition-transform ${isActive ? 'rotate-90 text-white' : 'text-gray-400'}`}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Feature Visualization */}
                            <div className="rounded-3xl bg-white p-8 shadow-2xl">
                                <div className="text-center">
                                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600">
                                        <Home className="h-12 w-12 text-white" />
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Your Smart Home</h3>
                                    <p className="mb-8 text-gray-600">
                                        Experience the convenience of intelligent lighting that adapts to your lifestyle
                                    </p>

                                    {/* Mock App Interface */}
                                    <div className="rounded-2xl bg-gray-900 p-6 text-white">
                                        <div className="mb-4 flex items-center justify-between">
                                            <h4 className="font-semibold">Living Room</h4>
                                            <div className="relative h-6 w-12 rounded-full bg-green-500">
                                                <div className="absolute top-0.5 right-0.5 h-5 w-5 rounded-full bg-white"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">Brightness</span>
                                                <span className="text-sm">75%</span>
                                            </div>
                                            <div className="h-2 w-full rounded-full bg-gray-700">
                                                <div className="h-2 w-3/4 rounded-full bg-yellow-400"></div>
                                            </div>
                                            <div className="mt-4 flex gap-2">
                                                <div className="h-6 w-6 rounded-full bg-red-500"></div>
                                                <div className="h-6 w-6 rounded-full bg-green-500"></div>
                                                <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                                                <div className="h-6 w-6 rounded-full border-2 border-white bg-yellow-400"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Compatibility Section */}
                <div className="py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-4xl font-bold text-gray-900">Works With Everything</h2>
                            <p className="mx-auto max-w-2xl text-xl text-gray-600">
                                SmartLight integrates seamlessly with your existing smart home ecosystem
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
                            {compatibilityLogos.map((item, index) => (
                                <div key={index} className="rounded-2xl bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl">
                                    <div className="mb-3 text-4xl">{item.logo}</div>
                                    <h4 className="text-sm font-semibold text-gray-900">{item.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
                    <div className="mx-auto max-w-4xl px-6 text-center text-white">
                        <h2 className="mb-6 text-4xl font-bold">Ready to Get Started?</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
                            Join thousands of happy customers who have transformed their homes with SmartLight
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-600 transition-colors hover:bg-gray-100">
                                <Play className="h-5 w-5" />
                                Watch Demo
                            </button>
                            <button className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition-colors hover:bg-white hover:text-blue-600">
                                Shop Now
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 flex items-center justify-center gap-8 text-blue-200">
                            <div className="flex items-center gap-2">
                                <Shield className="h-5 w-5" />
                                <span className="text-sm">3-Year Warranty</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                <span className="text-sm">30-Day Returns</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="h-5 w-5" />
                                <span className="text-sm">4.8/5 Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

