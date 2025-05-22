import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    joined: string;
    permission: string;
}

interface UserTableProps {
    users: User[];
    isAdmin: boolean;
    onEdit: (user: User) => void;
    onDelete: (userId: number) => void;
}

export default function UserTable({ users, isAdmin, onEdit, onDelete }: UserTableProps) {
    const getPermissionColor = (permission: string) => {
        switch (permission) {
            case 'Admin':
                return 'bg-blue-600';
            case 'Technician':
                return 'bg-blue-500';
            case 'Viewer':
                return 'bg-blue-400';
            default:
                return 'bg-gray-200';
        }
    };

    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
                        >
                            Full Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
                        >
                            Email Address
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
                        >
                            Joined
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
                        >
                            Permissions
                        </th>
                        {isAdmin && (
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
                            >
                                Actions
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                    {users.map((user) => (
                        <tr key={user.id} className="transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <td className="flex items-center px-6 py-3 whitespace-nowrap">
                                <span className="font-medium text-gray-900 dark:text-gray-100">{user.name}</span>
                            </td>
                            <td className="px-6 py-3 whitespace-nowrap text-gray-700 dark:text-gray-300">{user.email}</td>
                            <td className="px-6 py-3 whitespace-nowrap text-gray-700 dark:text-gray-300">{user.joined}</td>
                            <td className="px-6 py-3 whitespace-nowrap">
                                <span
                                    className={`${getPermissionColor(user.permission)} rounded-full px-3 py-1 text-sm font-semibold text-white`}
                                >
                                    {user.permission}
                                </span>
                            </td>
                            {isAdmin && (
                                <td className="px-6 py-3 whitespace-nowrap space-x-2">
                                    <button
                                        onClick={() => onEdit(user)}
                                        className="rounded bg-yellow-400 px-3 py-1 text-sm font-semibold text-white hover:bg-yellow-500"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDelete(user.id)}
                                        className="rounded bg-red-600 px-3 py-1 text-sm font-semibold text-white hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
