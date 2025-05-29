import { useAppearance } from '@/hooks/use-appearance';
import UserLayout from '@/layouts/UserLayout';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import { useState } from 'react';
import type { Category, FAQItem } from '@/types/faqTypes';
import { categories, faqData } from '@/data/faqData';

export default function FAQ() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

    const { appearance } = useAppearance();

    const toggleItem = (index: number) => {
        setOpenItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const filteredFAQs = faqData.filter((item) => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesSearch =
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) || item.answer.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <UserLayout>
            <div
                className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}
            >
                {/* Hero Section */}
                <div className={`bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white`}>
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <div className="mb-4 flex justify-center">
                            <HelpCircle className="h-12 w-12 text-yellow-300" />
                        </div>
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
                        <p className={appearance === 'dark' ? 'mx-auto max-w-2xl text-xl text-gray-300' : 'mx-auto max-w-2xl text-xl text-blue-100'}>
                            Find quick answers to common questions about SmartLight products and services
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-6xl px-6 py-12">
                    {/* Search Bar */}
                    <div className="mb-8">
                        <div className="relative mx-auto max-w-2xl">
                            <Search
                                className={
                                    appearance === 'dark'
                                        ? 'absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400'
                                        : 'absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400'
                                }
                            />
                            <input
                                type="text"
                                placeholder="Search for answers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={
                                    appearance === 'dark'
                                        ? 'w-full rounded-2xl border-2 border-gray-700 bg-gray-900 py-4 pr-4 pl-12 text-lg text-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                                        : 'w-full rounded-2xl border-2 border-gray-200 py-4 pr-4 pl-12 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                                }
                            />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-12">
                        <h3
                            className={
                                appearance === 'dark'
                                    ? 'mb-4 text-center text-lg font-semibold text-gray-300'
                                    : 'mb-4 text-center text-lg font-semibold text-gray-900'
                            }
                        >
                            Browse by Category
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category: Category) => {
                                const IconComponent = category.icon;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-all duration-200 ${
                                            selectedCategory === category.id
                                                ? `${category.color} scale-105 text-white shadow-md`
                                                : appearance === 'dark'
                                                  ? 'border border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800'
                                                  : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        <IconComponent className="h-5 w-5" />
                                        {category.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {filteredFAQs.length > 0 ? (
                            filteredFAQs.map((item: FAQItem, index: number) => (
                                <div
                                    key={index}
                                    className={`rounded-xl border ${
                                        appearance === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
                                    } p-4 shadow-sm`}
                                >
                                    <button onClick={() => toggleItem(index)} className="flex w-full items-center justify-between text-left">
                                        <span
                                            className={
                                                appearance === 'dark' ? 'text-lg font-semibold text-gray-200' : 'text-lg font-semibold text-gray-900'
                                            }
                                        >
                                            {item.question}
                                        </span>
                                        <span className="ml-2">
                                            {openItems[index] ? (
                                                <ChevronUp className="h-5 w-5 text-blue-500" />
                                            ) : (
                                                <ChevronDown className="h-5 w-5 text-gray-400" />
                                            )}
                                        </span>
                                    </button>
                                    {openItems[index] && <p className="mt-4 text-gray-700 dark:text-gray-300">{item.answer}</p>}
                                </div>
                            ))
                        ) : (
                            <p className={appearance === 'dark' ? 'text-center text-gray-400' : 'text-center text-gray-600'}>
                                No FAQs found matching your criteria.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
