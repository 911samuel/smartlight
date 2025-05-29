import * as React from "react";

interface Category {
  value: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface CategoryRadioGroupProps {
  categories: Category[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export function CategoryRadioGroup({ categories, selectedValue, onChange }: CategoryRadioGroupProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map((category) => {
        const IconComponent = category.icon;
        const isSelected = selectedValue === category.value;
        return (
          <label
            key={category.value}
            className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 p-3 transition-all ${
              isSelected
                ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900'
                : 'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600'
            }`}
          >
            <input
              type="radio"
              name="category"
              value={category.value}
              checked={isSelected}
              onChange={() => onChange(category.value)}
              className="sr-only"
            />
            <IconComponent className="h-5 w-5" />
            <span className="text-sm font-medium">{category.label}</span>
          </label>
        );
      })}
    </div>
  );
}
