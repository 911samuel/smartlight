import { Head, usePage } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserForm from '@/components/UserForm';
import UserTable from '@/components/UserTable';
import AppLayout from '@/layouts/app-layout';

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
    [key: string]: unknown;
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
            setUsers((prev) => prev.map((user) => (user.id === editingUser.id ? response.data.user : user)));
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

                <UserTable users={users} isAdmin={isAdmin} onEdit={openEditModal} onDelete={handleDeleteUser} />

                {/* Add User Modal */}
                {isAdmin && isModalOpen && (
                    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
                        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Add New User</h2>
                            <UserForm
                                user={formUser}
                                onChange={handleInputChange}
                                onSubmit={handleAddUser}
                                onCancel={closeAddModal}
                                submitLabel="Add User"
                            />
                        </div>
                    </div>
                )}

                {/* Edit User Modal */}
                {isAdmin && isEditModalOpen && editingUser && (
                    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
                        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Edit User</h2>
                            <UserForm
                                user={formUser}
                                onChange={handleInputChange}
                                onSubmit={handleUpdateUser}
                                onCancel={closeEditModal}
                                submitLabel="Update User"
                            />
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
