import * as React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}

export function InputField({ label, id, name, value, onChange, error, placeholder, type = "text" }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-lg border-2 px-4 py-3 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 ${
          error ? "border-red-500" : "border-gray-200 dark:border-gray-700"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}
