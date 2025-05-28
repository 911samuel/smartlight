import React, { useEffect, useState } from 'react';

interface Light {
    id: number;
    unique_id: string;
    status: string;
    updated_at: string;
}

const RecentLights: React.FC = () => {
    const [recentLights, setRecentLights] = useState<Light[]>([]);

    useEffect(() => {
        fetch('/lights/recent')
            .then((response) => response.json())
            .then((data: Light[]) => {
                setRecentLights(data);
            })
            .catch((error) => {
                console.error('Error fetching recent lights:', error);
            });
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    return (
        <div className="p-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">Recent Lights</h2>
            <div className="rounded-lg bg-white shadow dark:bg-gray-800">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">Light ID</th>
                            <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">Status</th>
                            <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentLights.map((light) => (
                            <tr key={light.id} className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-3 text-gray-900 dark:text-gray-100">{light.unique_id}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`rounded px-2 py-1 text-xs ${
                                            light.status === 'on'
                                                ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200'
                                                : light.status === 'off'
                                                  ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                                                  : 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-200'
                                        }`}
                                    >
                                        {light.status.charAt(0).toUpperCase() + light.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{formatDate(light.updated_at)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentLights;
