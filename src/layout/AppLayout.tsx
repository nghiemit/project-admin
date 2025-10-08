import React from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./AppHeader";
import { AppSidebar } from "./AppSidebar";

const LayoutContent = () => {
  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
      </div>
      <div className="flex-1 transition-all duration-300 ease-in-out lg:ml-[290px]">
        <AppHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export const AppLayout = () => {
  return <LayoutContent />;
};
