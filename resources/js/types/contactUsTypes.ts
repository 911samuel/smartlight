export interface FormState {
    name: string;
    email: string;
    phone: string;
    subject: string;
    category: string;
    message: string;
}

export interface FormErrors {
    [key: string]: string;
}

export interface Category {
    value: string;
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
