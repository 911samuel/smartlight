import AppLayout from '../layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    email: string;
    joined: string;
    permission: string;
}

interface PageProps {
    auth: {
        user: User | null;
    };
    [key: string]: unknown; // <- Add this line
}


export default function UsersManagement() {
    const { props } = usePage<PageProps>();
    const currentUser = props.auth.user;
    const isAdmin = currentUser?.permission === 'Admin';

    const breadcrumbs = [
        {
            title: 'User Management',
            href: '/users',
        },
    ];

    const [users, setUsers] = useState<User[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    const [formUser, setFormUser] = useState({
        name: '',
        email: '',
        permission: 'Viewer',
        password: '',
        password_confirmation: '',
    });

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

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    const openAddModal = () => {
        setFormUser({
            name: '',
            email: '',
            permission: 'Viewer',
            password: '',
            password_confirmation: '',
        });
        setIsModalOpen(true);
    };

    const closeAddModal = () => {
        setIsModalOpen(false);
    };

    const openEditModal = (user: User) => {
        setEditingUser(user);
        setFormUser({
            name: user.name,
            email: user.email,
            permission: user.permission,
            password: '',
            password_confirmation: '',
        });
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setEditingUser(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddUser = async () => {
        if (!formUser.name || !formUser.email || !formUser.permission || !formUser.password || !formUser.password_confirmation) {
            alert('Please fill in all fields.');
            return;
        }
        if (formUser.password !== formUser.password_confirmation) {
            alert('Passwords do not match.');
            return;
        }
        try {
            const response = await axios.post('/api/users', formUser);
            setUsers((prev) => [...prev, response.data.user]);
            closeAddModal();
        } catch (error) {
            console.error('Failed to add user:', error);
            alert('Failed to add user. Please check the input and try again.');
        }
    };

    const handleUpdateUser = async () => {
        if (!editingUser) return;
        if (!formUser.name || !formUser.email || !formUser.permission) {
            alert('Please fill in all required fields.');
            return;
        }
        if (formUser.password && formUser.password !== formUser.password_confirmation) {
            alert('Passwords do not match.');
            return;
        }
        try {
            const updateData = {
                name: formUser.name,
                email: formUser.email,
                permission: formUser.permission,
                ...(formUser.password ? { password: formUser.password, password_confirmation: formUser.password_confirmation } : {}),
            };
            const response = await axios.put(`/api/users/${editingUser.id}`, updateData);
            setUsers((prev) =>
                prev.map((user) => (user.id === editingUser.id ? response.data.user : user))
            );
            closeEditModal();
        } catch (error) {
            console.error('Failed to update user:', error);
            alert('Failed to update user. Please check the input and try again.');
        }
    };

    const handleDeleteUser = async (userId: number) => {
        if (!isAdmin) {
            alert('You do not have permission to delete users.');
            return;
        }
        if (!confirm('Are you sure you want to delete this user?')) {
            return;
        }
        try {
            await axios.delete(`/api/users/${userId}`);
            setUsers((prev) => prev.filter((user) => user.id !== userId));
        } catch (error) {
            console.error('Failed to delete user:', error);
            alert('Failed to delete user. Please try again.');
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Management" />
            <div className="p-6">
                {isAdmin && (
                    <div className="mb-6 flex items-center justify-end">
                        <button
                            onClick={openAddModal}
                            className="flex items-center rounded bg-blue-600 px-5 py-2 text-white transition-colors duration-200 hover:bg-blue-700"
                        >
                            <span className="mr-2 text-xl font-bold">+</span>
                            New User
                        </button>
                    </div>
                )}

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
                                                onClick={() => openEditModal(user)}
                                                className="rounded bg-yellow-400 px-3 py-1 text-sm font-semibold text-white hover:bg-yellow-500"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteUser(user.id)}
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

                {/* Add User Modal */}
                {isAdmin && isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md shadow-lg">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Add New User</h2>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formUser.name}
                                    onChange={handleInputChange}
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formUser.email}
                                    onChange={handleInputChange}
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
                                />
                                <select
                                    name="permission"
                                    value={formUser.permission}
                                    onChange={handleInputChange}
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="Technician">Technician</option>
                                    <option value="Viewer">Viewer</option>
                                </select>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formUser.password}
                                    onChange={handleInputChange}
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
                                />
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    placeholder="Confirm Password"
                                    value={formUser.password_confirmation}
                                    onChange={handleInputChange}
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
                                />
                            </div>
                            <div className="mt-6 flex justify-end space-x-4">
                                <button
                                    onClick={closeAddModal}
                                    className="rounded bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddUser}
                                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                >
                                    Add User
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Edit User Modal */}
                {isAdmin && isEditModalOpen && editingUser && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md shadow-lg">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Edit User</h2>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formUser.name}
                                    onChange={handleInputChange}
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formUser.email}
                                    onChange={handleInputChange}
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
                                />
                                <select
                                    name="permission"
                                    value={formUser.permission}
                                    onChange={handleInputChange}
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="Technician">Technician</option>
                                    <option value="Viewer">Viewer</option>
                                </select>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="New Password (leave blank to keep current)"
                                    value={formUser.password}
                                    onChange={handleInputChange}
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
                                />
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    placeholder="Confirm New Password"
                                    value={formUser.password_confirmation}
                                    onChange={handleInputChange}
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
                                />
                            </div>
                            <div className="mt-6 flex justify-end space-x-4">
                                <button
                                    onClick={closeEditModal}
                                    className="rounded bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleUpdateUser}
                                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                >
                                    Update User
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
