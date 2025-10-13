import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
  PlugInIcon,
  UserCircleIcon,
} from "../icons";

const navItems = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    subItems: [{ name: "Ecommerce", path: "/" }],
  },
  {
    icon: <ListIcon />,
    name: "Product Management",
    subItems: [
      { name: "List Product", path: "/list-product" },
      { name: "Product", path: "/product" },
      { name: "Category", path: "/category" },
    ],
  },
  {
    icon: <UserCircleIcon />,
    name: "User Profile",
    path: "/profile",
  },
  {
    icon: <PlugInIcon />,
    name: "Authentication",
    subItems: [
      { name: "Sign In", path: "/signin" },
      { name: "Sign Up", path: "/signup" },
    ],
  },
];

export const AppSidebar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    console.log(name,'name');
    
    setOpenMenu((prev) => (prev === name ? null : name));
  };
  console.log(openMenu,'openMenu');
  
  return (
    <aside className="sidebar-scroll fixed top-0 left-0 w-[290px] h-screen bg-white border-r border-gray-200 text-gray-900 overflow-y-auto z-50">
      {/* Logo */}
      <div className="py-8 flex justify-start px-5">
        <Link to="/">
          {/* <img
        src="/images/logo/logo.svg"
        alt="Logo"
        width={150}
        height={40}
      /> */}
          Logo
        </Link>
      </div>

      {/* Menu */}
      <div className="flex flex-col px-5">
        <nav className="mb-6">
          <div className="flex flex-col gap-6">
            {/* Main Menu */}
            <div>
              <h2 className="mb-3 text-xs uppercase text-gray-400 flex items-center gap-2">
                <HorizontaLDots className="w-4 h-4" />
                Menu
              </h2>
              <ul className="space-y-2">
                {navItems.map((nav) => (
                  <li key={nav.name}>
                    <div
                      onClick={() => nav.subItems && toggleMenu(nav.name)}
                      className="flex items-center gap-3 text-gray-700 hover:text-brand-500 cursor-pointer select-none"
                    >
                      <span className="w-5 h-5">{nav.icon}</span>
                      <span className="font-medium">{nav.name}</span>

                      {nav.subItems && (
                        <ChevronDownIcon
                          className={`w-4 h-4 ml-auto transition-transform duration-200 ${
                            openMenu === nav.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>

                    {nav.subItems && (
                      <ul
                        className={`ml-9 mt-2 space-y-1 overflow-hidden transition-all duration-300 ${
                          openMenu === nav.name
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {nav.subItems.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              to={sub.path}
                              className="text-sm text-gray-500 hover:text-brand-500 transition"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};
