export interface Step {
    id: number;
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
    details: string[];
}

export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    benefits: string[];
}

export interface CompatibilityLogo {
    name: string;
    logo: string;
}
