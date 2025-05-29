import {
    Lightbulb,
    Settings,
    Wifi,
    Smartphone,
    Volume2,
    Calendar,
    Palette,
} from 'lucide-react';
import type { Step, Feature, CompatibilityLogo } from '@/types/howItWorksTypes';

export const steps: Step[] = [
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

export const features: Feature[] = [
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

export const compatibilityLogos: CompatibilityLogo[] = [
    { name: 'Amazon Alexa', logo: '🔊' },
    { name: 'Google Assistant', logo: '🎯' },
    { name: 'Apple HomeKit', logo: '🏠' },
    { name: 'Samsung SmartThings', logo: '📱' },
    { name: 'IFTTT', logo: '🔗' },
    { name: 'Philips Hue Bridge', logo: '🌉' },
];
