import { Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function SignUp() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        agreedToTerms: false as boolean | undefined,
    });

    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (data.password !== data.password_confirmation) {
            setPasswordMatchError(true);
            return;
        }
        setPasswordMatchError(false);
        post('/register');
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
            <div className="w-full max-w-md px-6">
                <div className="rounded-xl bg-white shadow-md dark:bg-gray-800">
                    <div className="p-8">
                        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Get Started Now</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full rounded-md border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    required
                                />
                                {errors.name && <div className="mt-1 text-sm text-red-600">{errors.name}</div>}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full rounded-md border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    required
                                />
                                {errors.email && <div className="mt-1 text-sm text-red-600">{errors.email}</div>}
                            </div>

                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="w-full rounded-md border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    required
                                />
                                {errors.password && <div className="mt-1 text-sm text-red-600">{errors.password}</div>}
                            </div>

                            <div>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    className="w-full rounded-md border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    required
                                />
                                {passwordMatchError && (
                                    <div className="mt-1 text-sm text-red-600">Password confirmation does not match.</div>
                                )}
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={data.agreedToTerms}
                                    onChange={(e) => setData('agreedToTerms', e.target.checked)}
                                    className="mr-2 rounded text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="terms" className="text-sm text-gray-900 dark:text-gray-300">
                                    I agree to the Terms & Policy
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={processing || !data.agreedToTerms}
                                className="w-full rounded-md bg-blue-500 py-2 text-white transition duration-300 hover:bg-blue-600"
                            >
                                Signup
                            </button>
                        </form>

                        <div className="mt-4 text-center">
                            <div className="my-4 flex items-center justify-center">
                                <div className="w-1/3 border-t"></div>
                                <span className="mx-4 text-gray-500 dark:text-gray-400">or</span>
                                <div className="w-1/3 border-t"></div>
                            </div>

                            <button className="flex w-full items-center justify-center rounded-md border py-2 text-gray-900 transition duration-300 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700">
                                Sign up with Google
                            </button>
                        </div>

                        <div className="mt-4 text-center text-sm text-gray-900 dark:text-gray-300">
                            Have an account?{' '}
                            <Link href="/signin" className="text-blue-500 hover:underline">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
