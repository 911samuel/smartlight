// resources/js/types/index.d.ts

import { PageProps } from '@inertiajs/inertia';

declare global {
    type BreadcrumbItem = {
        title: string;
        href: string;
    };

    interface User {
        id: number;
        name: string;
        email: string;
        joined: string;
        permission: string;
        email_verified_at: string | null;
    }

    interface SharedData extends PageProps {
        auth: {
            user: User;
        };
        [key: string]: unknown;
    }
}

export {}; 
