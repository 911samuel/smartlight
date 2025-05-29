import { Category } from '@/types/contactUsTypes';
import { AlertCircle, Lightbulb, Mail, MessageCircle } from 'lucide-react';

export const categories: Category[] = [
    { value: 'general', label: 'General Inquiry', icon: MessageCircle },
    { value: 'complaint', label: 'Complaint', icon: AlertCircle },
    { value: 'support', label: 'Technical Support', icon: Lightbulb },
    { value: 'billing', label: 'Billing Issue', icon: Mail },
];
