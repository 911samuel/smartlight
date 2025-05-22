import { ReactNode } from "react";
import { usePage } from "@inertiajs/react";
import { UserMenuContent } from "resources/js/components/user-menu-content";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const { url, auth } = usePage().props as { url: string; auth: { user: any } };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            {/* TODO: Implement Sidebar component or import correctly */}

            {/* Main content */}
            <div className="flex-1 md:ml-64 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow p-4 flex justify-end">
                    {auth?.user && <UserMenuContent user={auth.user} />}
                </header>

                {/* Content area */}
                <main className="p-4 flex-1 overflow-auto">{children}</main>
            </div>
        </div>
    );
}
