
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import EnergyChart from '@/components/EnergyChart';
import StatCard from '@/components/StatCard';
import AppLayout from '@/layouts/app-layout';
import RecentLightsPage from '@/components/RecentLights';

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

interface ContactMessage {
    id: number;
    name: string;
    email: string;
    message: string;
    created_at: string;
}

export default function Dashboard() {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loadingMessages, setLoadingMessages] = useState(true);

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

    useEffect(() => {
        fetch('/api/contact/messages')
            .then((response) => response.json())
            .then((data) => {
                setMessages(data.data || []);
                setLoadingMessages(false);
            })
            .catch((error) => {
                console.error('Error fetching contact messages:', error);
                setLoadingMessages(false);
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
                <div className="mt-24">
                    <h2 className="text-2xl font-semibold mb-4">Contact Messages</h2>
                    {loadingMessages ? (
                        <p>Loading contact messages...</p>
                    ) : messages.length === 0 ? (
                        <p>No contact messages found.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Message
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                    {messages.map((msg) => (
                                        <tr key={msg.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                                {msg.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                                {msg.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 max-w-xs truncate">
                                                {msg.message}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                                {new Date(msg.created_at).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
