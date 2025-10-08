import React from "react";

interface InputProps {
  type?: "text" | "number" | "email" | "password" | string;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  hint?: string;
  success?: boolean;
  error?: boolean;
  disabled?:boolean;
}

export const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  hint,
  success,
  error,
  disabled,
  name,
  id
}: InputProps) => {
  let inputClasses = `h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 ${className}`;
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
        className={inputClasses}
        disabled={disabled}
        name={name}
        id={id}
      />
      {hint && (
        <p
          className={`mt-1.5 text-xs ${
            error
              ? "text-error-500"
              : success
              ? "text-success-500"
              : "text-gray-500"
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
};
