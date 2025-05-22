import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const energyData = [
    { time: '00:00', value: 30 },
    { time: '02:00', value: 45 },
    { time: '04:00', value: 30 },
    { time: '06:00', value: 55 },
    { time: '08:00', value: 40 },
    { time: '10:00', value: 30 },
    { time: '12:00', value: 20 },
    { time: '14:00', value: 40 },
    { time: '16:00', value: 60 },
    { time: '18:00', value: 70 },
    { time: '20:00', value: 60 },
    { time: '22:00', value: 50 },
];

const EnergyChart: React.FC = () => {
    return (
        <div className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 text-white shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">Energy Consumption</h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={energyData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.3)" />
                        <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'white' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'white' }} domain={[0, 100]} />
                        <Tooltip contentStyle={{ backgroundColor: '#4F46E5', borderRadius: '8px', border: 'none' }} itemStyle={{ color: 'white' }} />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#E0E7FF"
                            strokeWidth={3}
                            dot={{ r: 5, fill: '#E0E7FF', stroke: 'white', strokeWidth: 2 }}
                            activeDot={{
                                r: 7,
                                fill: '#E0E7FF',
                                stroke: 'white',
                                strokeWidth: 2,
                            }}
                            isAnimationActive={true}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default EnergyChart;
