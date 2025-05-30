import { Link, useForm } from "@inertiajs/react";
import { AtSign, Lock } from "lucide-react";

export default function SignIn() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
    remember: false as boolean | undefined,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post("/login");
  };

  return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
          <div className="w-full max-w-md px-6">
              <div className="rounded-xl bg-white shadow-md dark:bg-gray-800">
                  <div className="p-8">
                      <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Welcome back!</h2>
                      <p className="mb-6 text-gray-600 dark:text-gray-300">Enter your Credentials to access your account</p>

                      <form onSubmit={handleSubmit}>
                          <div className="mb-4">
                              <label htmlFor="email" className="sr-only">
                                  Email address
                              </label>
                              <div className="relative">
                                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                      <AtSign className="h-5 w-5 text-gray-400" />
                                  </div>
                                  <input
                                      type="email"
                                      id="email"
                                      value={data.email}
                                      onChange={(e) => setData('email', e.target.value)}
                                      placeholder="Email address"
                                      className="w-full rounded-lg border border-gray-300 py-2 pr-3 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                      required
                                  />
                              </div>
                              {errors.email && <div className="mt-1 text-sm text-red-600">{errors.email}</div>}
                          </div>

                          <div className="mb-4">
                              <label htmlFor="password" className="sr-only">
                                  Password
                              </label>
                              <div className="relative">
                                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                      <Lock className="h-5 w-5 text-gray-400" />
                                  </div>
                                  <input
                                      type="password"
                                      id="password"
                                      value={data.password}
                                      onChange={(e) => setData('password', e.target.value)}
                                      placeholder="Password"
                                      className="w-full rounded-lg border border-gray-300 py-2 pr-3 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                      required
                                  />
                              </div>
                              {errors.password && <div className="mt-1 text-sm text-red-600">{errors.password}</div>}
                              <Link href="/forgot-password" className="float-right mt-1 text-sm text-blue-600 hover:underline">
                                  Forgot password?
                              </Link>
                          </div>

                          <div className="mb-4 flex items-center">
                              <input
                                  type="checkbox"
                                  id="remember"
                                  checked={data.remember}
                                  onChange={(e) => setData('remember', e.target.checked)}
                                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <label htmlFor="remember" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                  Remember me for 30 days
                              </label>
                          </div>

                          <button
                              type="submit"
                              disabled={processing}
                              className="w-full rounded-lg bg-blue-500 py-2 text-white transition duration-300 hover:bg-blue-600"
                          >
                              Login
                          </button>
                      </form>

                      <div className="my-4 flex items-center">
                          <div className="h-px flex-grow bg-gray-300 dark:bg-gray-600"></div>
                          <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">or</span>
                          <div className="h-px flex-grow bg-gray-300 dark:bg-gray-600"></div>
                      </div>
                      <div className="mt-4 text-center text-sm text-gray-900 dark:text-gray-300">
                          Don't have an account?{' '}
                          <Link href="/signup" className="text-blue-600 hover:underline">
                              Sign Up
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
