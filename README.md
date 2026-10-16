# SmartLight — Street Lighting Management Dashboard

A full-stack web app for managing a network of smart street lights: register lights by street, switch them on/off individually or all at once, schedule automatic on/off times, and manage operators from an admin dashboard.

![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Inertia](https://img.shields.io/badge/Inertia.js-2-9553E9)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)

## Features

- **Light control.** Register lights (unique ID and street number), switch each one on/off, or switch all at once
- **Scheduling.** Set on/off times so lights run automatically
- **Admin dashboard.** Overview stats and recently changed lights, with Recharts charts
- **User management.** Create, update and remove operators, with permission levels
- **Real-time ready.** Laravel Echo and Pusher wired in for live status updates
- **Public pages.** Landing page, how it works, FAQ, and a contact form whose messages go to an admin inbox
- **Authentication.** Sign up, sign in, email verification and account settings

## Tech stack

| Layer | Technology |
|---|---|
| Backend | Laravel (PHP), Eloquent ORM |
| Frontend | React 19, TypeScript, Inertia.js, Tailwind CSS 4, Radix UI / shadcn |
| Real-time | Laravel Echo, Pusher |
| Quality | Pest, ESLint, Prettier, GitHub Actions (lint + tests) |
| Build | Vite |

## Architecture

```
React pages (resources/js) ──Inertia──► Laravel routes (routes/web.php)
                                           │
                                           ├─ LightController     → Light, Schedule models
                                           ├─ UserController      → User model
                                           ├─ DashboardController → aggregated stats
                                           └─ ContactController   → ContactMessage model
```

## Run locally

```bash
composer install
npm install
cp .env.example .env && php artisan key:generate
php artisan migrate
composer run dev          # or: php artisan serve  +  npm run dev
php artisan test          # run the test suite
```

## Roadmap

- Move the `/api/users` and `/api/dashboard` routes behind the auth middleware
- Feature tests for the light and scheduling endpoints
- Broadcast light status changes to all connected dashboards

## Author

**Samuel Abayizera** · [GitHub](https://github.com/911samuel)
