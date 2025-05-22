import { Head } from '@inertiajs/react';
import EnergyChart from '../components/EnergyChart';
import StatCard from '../components/StatCard';
import AppLayout from '../layouts/app-layout';
import RecentLightsPage from '../components/RecentLights';

export default function Dashboard() {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="p-6">
                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatCard title="Total Lights" value="40,889" change={8.5} isUp={true} period="yesterday" />
                    <StatCard title="Active" value="10293" change={1.2} isUp={true} period="past week" />
                    <StatCard title="Faulty" value="89,000" change={4.3} isUp={false} period="yesterday" />
                    <StatCard title="Energy Usage" value="2040" change={1.8} isUp={true} period="yesterday" />
                </div>
                <EnergyChart />
                <div className="mt-24">
                    <RecentLightsPage />
                </div>
            </div>
        </AppLayout>
    );
}
