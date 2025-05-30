import UserLayout from '@/layouts/UserLayout';
import { useState } from 'react';

import { steps, features, compatibilityLogos } from '@/data/howItWorksData';

import {
    Lightbulb,
    Home,
    Zap,
    Clock,
    Shield,
    Users,
    Play,
    CheckCircle,
    ArrowRight,
    Star,
} from 'lucide-react';

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);
    const [activeFeature, setActiveFeature] = useState(features[0].id);

    return (
        <UserLayout>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <Lightbulb className="w-16 h-16 text-yellow-300" />
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                                        <Zap className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                How SmartLight Works
                            </h1>
                            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                Transform your home with intelligent lighting in just 4 simple steps.
                                No complicated setup, no additional hubs - just smart lighting made simple.
                            </p>
                        </div>

                        {/* Quick Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center backdrop-blur-sm">
                                <Clock className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                                <h3 className="font-semibold mb-2">2-Minute Setup</h3>
                                <p className="text-blue-100 text-sm">Quick and easy installation</p>
                            </div>
                            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center backdrop-blur-sm">
                                <Shield className="w-8 h-8 mx-auto mb-3 text-green-300" />
                                <h3 className="font-semibold mb-2">No Hub Required</h3>
                                <p className="text-blue-100 text-sm">Direct Wi-Fi connection</p>
                            </div>
                            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center backdrop-blur-sm">
                                <Users className="w-8 h-8 mx-auto mb-3 text-purple-300" />
                                <h3 className="font-semibold mb-2">Family Friendly</h3>
                                <p className="text-blue-100 text-sm">Everyone can control the lights</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step-by-Step Process */}
                <div className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Getting Started is Simple</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Follow these four easy steps to bring smart lighting to your home
                            </p>
                        </div>

                        {/* Interactive Steps */}
                        <div className="relative">
                            {/* Progress Line */}
                            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
                                <div className="h-1 bg-gray-200 dark:bg-gray-700 relative">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 ease-in-out"
                                        style={{ width: `${(activeStep + 1) * 25}%` }}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                                {steps.map((step, index) => {
                                    const IconComponent = step.icon;
                                    const isActive = activeStep === index;

                                    return (
                                        <div
                                            key={step.id}
                                            className={`cursor-pointer transition-all duration-300 ${
                                                isActive ? 'transform -translate-y-2' : ''
                                            }`}
                                            onMouseEnter={() => setActiveStep(index)}
                                        >
                                            <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                                                isActive ? 'border-blue-500 shadow-xl' : 'border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-600'
                                            }`}>
                                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                                                    isActive ? step.color : 'bg-gray-100 dark:bg-gray-800'
                                                }`}>
                                                    <IconComponent className={`w-8 h-8 ${
                                                        isActive ? 'text-white' : 'text-gray-400 dark:text-gray-500'
                                                    }`} />
                                                </div>
                                                <div className="text-center">
                                                    <div className={`text-sm font-semibold mb-2 ${
                                                        isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                                                    }`}>
                                                        STEP {step.id}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-950 mb-3">{step.title}</h3>
                                                    <p className="text-gray-600 dark:text-gray-700 mb-4">{step.description}</p>

                                                    {isActive && (
                                                        <div className="mt-4 space-y-2">
                                                            {step.details.map((detail, idx) => (
                                                                <div key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-500">
                                                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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
                <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Powerful Features</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Discover all the ways SmartLight can enhance your daily life
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Feature Tabs */}
                            <div className="space-y-4">
                                {features.map((feature) => {
                                    const IconComponent = feature.icon;
                                    const isActive = activeFeature === feature.id;

                                    return (
                                        <div
                                            key={feature.id}
                                            className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-blue-600 text-white shadow-xl'
                                                    : 'bg-white hover:bg-gray-50 shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700'
                                            }`}
                                            onClick={() => setActiveFeature(feature.id)}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                                    isActive ? 'bg-white bg-opacity-20' : 'bg-blue-100 dark:bg-gray-700'
                                                }`}>
                                                    <IconComponent className={`w-6 h-6 ${
                                                        isActive ? 'text-white' : 'text-blue-600 dark:text-blue-400'
                                                    }`} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold mb-2 dark:text-gray-100">{feature.title}</h3>
                                                    <p className={`mb-4 ${
                                                        isActive ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
                                                    }`}>
                                                        {feature.description}
                                                    </p>
                                                    {isActive && (
                                                        <div className="space-y-2">
                                                            {feature.benefits.map((benefit, idx) => (
                                                                <div key={idx} className="flex items-center text-sm">
                                                                    <Star className="w-4 h-4 text-yellow-300 mr-2 flex-shrink-0" />
                                                                    {benefit}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                <ArrowRight className={`w-5 h-5 transition-transform ${
                                                    isActive ? 'rotate-90 text-white' : 'text-gray-400 dark:text-gray-500'
                                                }`} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Feature Visualization */}
                            <div className="bg-white rounded-3xl p-8 shadow-2xl dark:bg-gray-800">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                        <Home className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Your Smart Home</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                                        Experience the convenience of intelligent lighting that adapts to your lifestyle
                                    </p>

                                    {/* Mock App Interface */}
                                    <div className="bg-gray-900 rounded-2xl p-6 text-white">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="font-semibold">Living Room</h4>
                                            <div className="w-12 h-6 bg-green-500 rounded-full relative">
                                                <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm">Brightness</span>
                                                <span className="text-sm">75%</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2">
                                                <div className="bg-yellow-400 h-2 rounded-full w-3/4"></div>
                                            </div>
                                            <div className="flex gap-2 mt-4">
                                                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                                                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                                                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                                                <div className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></div>
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
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Works With Everything</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                SmartLight integrates seamlessly with your existing smart home ecosystem
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {compatibilityLogos.map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center dark:bg-gray-800 dark:hover:shadow-2xl">
                                    <div className="text-4xl mb-3">{item.logo}</div>
                                    <h4 className="font-semibold text-gray-900 text-sm dark:text-gray-100">{item.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
                    <div className="max-w-4xl mx-auto px-6 text-center text-white">
                        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of happy customers who have transformed their homes with SmartLight
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                <Play className="w-5 h-5" />
                                Watch Demo
                            </button>
                            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-colors">
                                Shop Now
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex justify-center items-center gap-8 mt-12 text-blue-200">
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                <span className="text-sm">3-Year Warranty</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                <span className="text-sm">30-Day Returns</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5" />
                                <span className="text-sm">4.8/5 Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
