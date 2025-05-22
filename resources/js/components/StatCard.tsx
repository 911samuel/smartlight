import React from 'react';

interface StatCardProps {
    title: string;
    value: string;
    change: number;
    isUp: boolean;
    period: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isUp, period }) => {
    return (
        <div className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 text-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <p className="mb-1 text-sm opacity-80">{title}</p>
            <h3 className="mb-1 text-2xl font-extrabold">{value}</h3>
            <div className="flex items-center text-xs">
                <span className={`${isUp ? 'text-green-300' : 'text-red-300'} flex items-center`}>
                    {isUp ? '↑' : '↓'} {Math.abs(change)}%
                </span>
                <span className="ml-1 opacity-80">from {period}</span>
            </div>
        </div>
    );
};

export default StatCard;
