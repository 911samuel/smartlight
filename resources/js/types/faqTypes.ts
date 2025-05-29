export interface Category {
    id: string;
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
}

export interface FAQItem {
    category: string;
    question: string;
    answer: string;
}
