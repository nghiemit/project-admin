import React from "react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative p-6 bg-white z-1 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row  sm:p-0">
        {children}
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 lg:grid" />
      </div>
    </div>
  );
};
