import React from 'react';

const RecentLights: React.FC = () => {
    const recentLights = [
        {
            id: 1,
            name: 'Entrance Light',
            status: 'Active',
            lastUpdated: '5 mins ago',
        },
        {
            id: 2,
            name: 'Kitchen Light',
            status: 'Inactive',
            lastUpdated: '10 mins ago',
        },
        {
            id: 3,
            name: 'Living Room Light',
            status: 'Active',
            lastUpdated: '15 mins ago',
        },
        {
            id: 4,
            name: 'Bedroom Light',
            status: 'Faulty',
            lastUpdated: '1 hour ago',
        },
        {
            id: 5,
            name: 'Bathroom Light',
            status: 'Active',
            lastUpdated: '2 hours ago',
        },
    ];

    return (
        <div className="p-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">Recent Lights</h2>
            <div className="rounded-lg bg-white shadow dark:bg-gray-800">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">Name</th>
                            <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">Status</th>
                            <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentLights.map((light) => (
                            <tr key={light.id} className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-3 text-gray-900 dark:text-gray-100">{light.name}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`rounded px-2 py-1 text-xs ${
                                            light.status === 'Active'
                                                ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200'
                                                : light.status === 'Faulty'
                                                  ? 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-200'
                                                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                                        }`}
                                    >
                                        {light.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{light.lastUpdated}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentLights;
