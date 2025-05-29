import * as React from "react";

interface TextAreaFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  rows?: number;
}

export function TextAreaField({ label, id, name, value, onChange, error, placeholder, rows = 4 }: TextAreaFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full resize-none rounded-lg border-2 px-4 py-3 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 ${
          error ? "border-red-500" : "border-gray-200 dark:border-gray-700"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}
