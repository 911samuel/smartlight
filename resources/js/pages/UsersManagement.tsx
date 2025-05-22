import AppLayout from '../layouts/app-layout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function UsersManagement() {
    const breadcrumbs = [
        {
            title: 'User Management',
            href: '/users',
        },
    ];

    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Leslie Maya',
            email: 'leslie@gmail.com',
            location: 'Los Angeles, CA',
            joined: 'October 2, 2010',
            permissions: 'Admin',
        },
        {
            id: 2,
            name: 'Josie Deck',
            email: 'josie@gmail.com',
            location: 'Cheyenne, WY',
            joined: 'October 3, 2011',
            permissions: 'Admin',
        },
        {
            id: 3,
            name: 'Alex Pfeiffer',
            email: 'alex@gmail.com',
            location: 'Cheyenne, WY',
            joined: 'May 20, 2015',
            permissions: 'Admin',
        },
        {
            id: 4,
            name: 'Mike Dean',
            email: 'mike@gmail.com',
            location: 'Syracuse, NY',
            joined: 'July 14, 2015',
            permissions: 'Technician',
        },
        {
            id: 5,
            name: 'Mateus Cunha',
            email: 'cunha@gmail.com',
            location: 'Luanda, AN',
            joined: 'October, 2016',
            permissions: 'Technician',
        },
        {
            id: 6,
            name: 'Nzola Uemo',
            email: 'nzola@gmail.com',
            location: 'Lagos, NG',
            joined: 'June 5, 2016',
            permissions: 'Viewer',
        },
        {
            id: 7,
            name: 'Antony Mack',
            email: 'mack@gmail.com',
            location: 'London, ENG',
            joined: 'June 15, 2015',
            permissions: 'Technician',
        },
        {
            id: 8,
            name: 'André da Silva',
            email: 'andré@gmail.com',
            location: 'São Paulo, BR',
            joined: 'March 13, 2018',
            permissions: 'Technician',
        },
        {
            id: 9,
            name: 'Jorge Ferreira',
            email: 'jorge@gmail.com',
            location: 'Huambo, Angola',
            joined: 'March 14, 2018',
            permissions: 'Technician',
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        location: '',
        permissions: 'Viewer',
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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setNewUser({ name: '', email: '', location: '', permissions: 'Viewer' });
    };
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
                                    Location
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
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                            {users.map((user) => (
                                <tr key={user.id} className="transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <td className="flex items-center px-6 py-3 whitespace-nowrap">
                                        <span className="font-medium text-gray-900 dark:text-gray-100">{user.name}</span>
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap text-gray-700 dark:text-gray-300">{user.email}</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-gray-700 dark:text-gray-300">
                                        <div className="flex items-center">
                                            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-gray-800 dark:bg-gray-200"></span>
                                            {user.location}
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap text-gray-700 dark:text-gray-300">{user.joined}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        <span
                                            className={`${getPermissionColor(user.permissions)} rounded-full px-3 py-1 text-sm font-semibold text-white`}
                                        >
                                            {user.permissions}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
