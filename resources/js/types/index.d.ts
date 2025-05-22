declare module 'types' {
    import React from 'react';
    export interface NavItem {
        title: string;
        href: string;
        icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }
}
