
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import EnergyChart from '../components/EnergyChart';
import StatCard from '../components/StatCard';
import AppLayout from '../layouts/app-layout';
import RecentLightsPage from '../components/RecentLights';

interface DashboardStats {
    total_lights: number;
    active: number;
    faulty: number;
    energy_usage: number;
    changes: {
        total_lights: number;
        active: number;
        faulty: number;
        energy_usage: number;
    };
    is_up: {
        total_lights: boolean;
        active: boolean;
        faulty: boolean;
        energy_usage: boolean;
    };
    periods: {
        total_lights: string;
        active: string;
        faulty: string;
        energy_usage: string;
    };
}

export default function Dashboard() {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/dashboard')
            .then((response) => response.json())
            .then((data: DashboardStats) => {
                setStats(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching dashboard data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <AppLayout>
                <Head title="Dashboard" />
                <div className="p-6">Loading dashboard data...</div>
            </AppLayout>
        );
    }

    if (!stats) {
        return (
            <AppLayout>
                <Head title="Dashboard" />
                <div className="p-6">Failed to load dashboard data.</div>
            </AppLayout>
        );
    }

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="p-6">
                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                        title="Total Lights"
                        value={stats.total_lights.toLocaleString()}
                        change={stats.changes.total_lights}
                        isUp={stats.is_up.total_lights}
                        period={stats.periods.total_lights}
                    />
                    <StatCard
                        title="Active"
                        value={stats.active.toLocaleString()}
                        change={stats.changes.active}
                        isUp={stats.is_up.active}
                        period={stats.periods.active}
                    />
                    <StatCard
                        title="Faulty"
                        value={stats.faulty.toLocaleString()}
                        change={Math.abs(stats.changes.faulty)}
                        isUp={stats.is_up.faulty}
                        period={stats.periods.faulty}
                    />
                    <StatCard
                        title="Energy Usage"
                        value={stats.energy_usage.toLocaleString()}
                        change={stats.changes.energy_usage}
                        isUp={stats.is_up.energy_usage}
                        period={stats.periods.energy_usage}
                    />
                </div>
                <EnergyChart />
                <div className="mt-24">
                    <RecentLightsPage />
                </div>
            </div>
        </AppLayout>
    );
}
