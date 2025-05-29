import React from "react";

export const features = [
  {
    id: 1,
    title: 'Energy Efficiency',
    description: '',
    icon: () => (
      React.createElement('svg', { className: "h-6 w-6 text-blue-600", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 },
        React.createElement('path', { d: "M13 10V3L4 14h7v7l9-11h-7z", strokeLinecap: "round", strokeLinejoin: "round" })
      )
    ),
  },
  {
    id: 2,
    title: 'Real-Time Monitoring',
    description: 'Monitor the operational status of individual lights effectively.',
    icon: () => (
      React.createElement('svg', { className: "h-6 w-6 text-blue-600", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 },
        React.createElement('path', { d: "M12 20V10M18 20V4M6 20v-6", strokeLinecap: "round", strokeLinejoin: "round" })
      )
    ),
  },
  {
    id: 3,
    title: 'Proactive Maintenance',
    description: 'Receive alerts for maintenance needs to ensure optimal performance.',
    icon: () => (
      React.createElement('svg', { className: "h-6 w-6 text-blue-600", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 },
        React.createElement('path', {
          d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      )
    ),
  },
];

export const howItWorksSteps = [
  {
    id: 1,
    title: 'Step 1: Data Collection',
    description: 'Ambient light and motion sensors collect data in real-time.',
  },
  {
    id: 2,
    title: 'Step 2: Data Transmission',
    description: 'Data is transmitted to the cloud for analysis.',
  },
  {
    id: 3,
    title: 'Step 3: Dynamic Adjustment',
    description: 'Light intensity is adjusted based on analyzed data.',
  },
];

export const testimonials = [
  {
    id: 1,
    testimonial: 'This system has transformed our street lighting and reduced our energy costs significantly.',
    author: 'John Doe',
  },
  {
    id: 2,
    testimonial: 'Proactive maintenance alerts have made our city safer and more efficient.',
    author: 'Jane Smith',
  },
  {
    id: 3,
    testimonial: 'Real-time monitoring gives us peace of mind that our lighting is always optimal.',
    author: 'Alex Johnson',
  },
];
