import React, { type ReactNode } from "react";

interface LableProps {
  htmlFor?: string;
  className?: string;
  children: ReactNode;
}

export const Label = ({ htmlFor, className, children }: LableProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 ${className}`}
    >
      {children}
    </label>
  );
};
