import React from 'react';

interface UserFormProps {
    user: {
        name: string;
        email: string;
        permission: string;
        password: string;
        password_confirmation: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubmit: () => void;
    onCancel: () => void;
    submitLabel: string;
}

export default function UserForm({ user, onChange, onSubmit, onCancel, submitLabel }: UserFormProps) {
    return (
        <div className="space-y-4">
            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={user.name}
                onChange={onChange}
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
            />
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={user.email}
                onChange={onChange}
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
            />
            <select
                name="permission"
                value={user.permission}
                onChange={onChange}
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
                value={user.password}
                onChange={onChange}
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
            />
            <input
                type="password"
                name="password_confirmation"
                placeholder="Confirm Password"
                value={user.password_confirmation}
                onChange={onChange}
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
            />
            <div className="mt-6 flex justify-end space-x-4">
                <button
                    onClick={onCancel}
                    className="rounded bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
                >
                    Cancel
                </button>
                <button
                    onClick={onSubmit}
                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    {submitLabel}
                </button>
            </div>
        </div>
    );
}
