import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';
import AppLayout from '../layouts/app-layout';

declare global {
    interface Window {
        Pusher: typeof Pusher;
    }
}

window.Pusher = Pusher;
const echo = new Echo({
    broadcaster: 'pusher',
    key: 'your_key',
    cluster: 'mt1',
    forceTLS: true,
});

type Light = {
    id: string;
    unique_id: string;
    street_number: string;
    status: string;
};

const LightsManagement = () => {
    const [lights, setLights] = useState<Light[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [newLight, setNewLight] = useState({ unique_id: '', street_number: '' });
    const [controlMode, setControlMode] = useState<'manual' | 'automatic'>('manual');
    const [schedule, setSchedule] = useState({ onTime: '', offTime: '' });

    useEffect(() => {
        fetchLights();
        fetchSchedule();
        echo.channel('lights').listen('LightStatusUpdated', (e: { light: Light }) => {
            setLights((prev) => prev.map((light) => (light.id === e.light.id ? e.light : light)));
        });
    }, []);

    const fetchLights = async () => {
        const response = await axios.get('/lights');
        setLights(response.data);
    };

    const switchOnLight = async (id: string) => {
        try {
            await axios.post(`/lights/${id}/switch-on`);
            await fetchLights();
        } catch (error) {
            console.error('Failed to switch on light:', error);
        }
    };

    const switchAllLights = async (turnOn: boolean) => {
        try {
            await axios.post(`/lights/switch-all`, { turnOn });
            await fetchLights();
        } catch (error) {
            console.error('Failed to switch all lights:', error);
        }
    };

    const addNewLight = async () => {
        try {
            await axios.post('/lights', newLight);
            setShowModal(false);
            setNewLight({ unique_id: '', street_number: '' });
            await fetchLights();
        } catch (error) {
            console.error('Failed to add new light:', error);
        }
    };

    const fetchSchedule = async () => {
        try {
            const response = await axios.get('/lights/schedule');
            if (response.data) {
                setSchedule({
                    onTime: response.data.on_time || '',
                    offTime: response.data.off_time || '',
                });
            }
        } catch (error) {
            console.error('Failed to fetch schedule:', error);
        }
    };

    const saveSchedule = async () => {
        try {
            await axios.post('/lights/schedule', schedule, {
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
            });
            alert('Schedule saved successfully');
        } catch (error) {
            console.error('Failed to save schedule:', error);
            alert('Failed to save schedule');
        }
    };

    return (
        <AppLayout>
            <div className="mx-auto max-w-4xl p-4 dark:bg-gray-900 dark:text-gray-100">
                <h1 className="mb-4 text-3xl font-bold">Lights Management</h1>

                <div className="mb-4 flex items-center space-x-4">
                    <label className="font-semibold">Control Mode:</label>
                    <select
                        value={controlMode}
                        onChange={(e) => setControlMode(e.target.value as 'manual' | 'automatic')}
                        className="rounded border border-gray-300 px-2 py-1 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                    >
                        <option value="manual">Manual</option>
                        <option value="automatic">Automatic</option>
                    </select>
                </div>

                {controlMode === 'manual' && (
                    <div className="mb-4">
                        <button
                            onClick={() => switchAllLights(true)}
                            className="mr-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            Switch All On
                        </button>
                        <button
                            onClick={() => switchAllLights(false)}
                            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
                        >
                            Switch All Off
                        </button>
                    </div>
                )}

                <button
                    className="mb-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    onClick={() => setShowModal(true)}
                >
                    Add New Light
                </button>

                {showModal && (
                    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black dark:bg-gray-800">
                        <div className="w-96 rounded bg-white p-6 shadow-lg dark:bg-gray-900 dark:text-gray-100">
                            <h2 className="mb-4 text-xl font-semibold">Add New Light</h2>
                            <input
                                type="text"
                                name="unique_id"
                                placeholder="Unique ID"
                                value={newLight.unique_id}
                                onChange={(e) => setNewLight({ ...newLight, unique_id: e.target.value })}
                                className="mb-2 w-full rounded border px-2 py-1 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                            />
                            <input
                                type="text"
                                name="street_number"
                                placeholder="Street Number"
                                value={newLight.street_number}
                                onChange={(e) => setNewLight({ ...newLight, street_number: e.target.value })}
                                className="mb-2 w-full rounded border px-2 py-1 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                            />
                            <div className="mt-4 flex justify-end space-x-2">
                                <button
                                    onClick={addNewLight}
                                    className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                                >
                                    Add
                                </button>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="rounded bg-gray-300 px-4 py-2 dark:bg-gray-700 dark:text-gray-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <table className="mt-6 w-full border-collapse border border-gray-300 dark:border-gray-700">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                            <th className="border px-4 py-2 dark:border-gray-600">Unique ID</th>
                            <th className="border px-4 py-2 dark:border-gray-600">Street Number</th>
                            <th className="border px-4 py-2 dark:border-gray-600">Status</th>
                            <th className="border px-4 py-2 dark:border-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lights.map((light) => (
                            <tr key={light.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="border px-4 py-2 dark:border-gray-600">{light.unique_id}</td>
                                <td className="border px-4 py-2 dark:border-gray-600">{light.street_number}</td>
                                <td className="border px-4 py-2 dark:border-gray-600">{light.status}</td>
                                <td className="border px-4 py-2 dark:border-gray-600">
                                    {controlMode === 'manual' ? (
                                        light.status !== 'on' && (
                                            <button
                                                onClick={() => switchOnLight(light.id)}
                                                className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                                            >
                                                Switch On
                                            </button>
                                        )
                                    ) : (
                                        <div className="flex gap-2">
                                            <input
                                                type="time"
                                                value={schedule.onTime}
                                                onChange={(e) =>
                                                    setSchedule({
                                                        ...schedule,
                                                        onTime: e.target.value,
                                                    })
                                                }
                                                className="rounded border px-1 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                            />
                                            <input
                                                type="time"
                                                value={schedule.offTime}
                                                onChange={(e) =>
                                                    setSchedule({
                                                        ...schedule,
                                                        offTime: e.target.value,
                                                    })
                                                }
                                                className="rounded border px-1 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                            />
                                            <button
                                                onClick={saveSchedule}
                                                className="rounded bg-green-600 px-2 py-1 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
};

export default LightsManagement;
