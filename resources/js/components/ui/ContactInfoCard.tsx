import * as React from "react";

interface ContactInfoCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
}

export function ContactInfoCard({ icon: Icon, title, children }: ContactInfoCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-blue-50 p-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="font-semibold text-gray-900 dark:text-gray-100">{title}</p>
        <div>{children}</div>
      </div>
    </div>
  );
}
