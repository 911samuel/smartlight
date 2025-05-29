import * as React from "react";

interface FeaturesCardProps {
  icon: React.ElementType;
  title: string;
  description?: string;
}

export function FeaturesCard({ icon: Icon, title, description }: FeaturesCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-800">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{title}</h3>
      {description && <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>}
    </div>
  );
}
