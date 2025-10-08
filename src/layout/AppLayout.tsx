import React from "react";
import { AppHeader } from "./AppHeader";
import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC = () => {
  //   const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
      </div>
      <div
        // className={`flex-1 transition-all duration-300 ease-in-out ${
        //   isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        // } ${isMobileOpen ? "ml-0" : ""}`}
        className="flex-1 transition-all duration-300 ease-in-out lg:ml-[290px]"
      >
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
