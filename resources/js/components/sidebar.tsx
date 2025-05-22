import React from "react";
import { Settings, LogOut } from "lucide-react";
import { router } from '@inertiajs/react';

interface SidebarProps {
  activeComponent: string;
  setActiveComponent: (component: string) => void;
  isMobileMenuOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeComponent,
  setActiveComponent,
  isMobileMenuOpen,
}) => {
  const handleLogout = () => {
    router.post(route('logout'));
  };

  return (
    <div
      className={`bg-white w-64 border-r fixed h-full z-10 transition-all duration-300 ${
        isMobileMenuOpen ? "left-0" : "-left-64"
      } md:left-0`}
    >
      <div className="p-4 border-b">
        <div className="text-blue-600 font-bold text-xl">
          SMART<span className="text-gray-800">LIGHT</span>
        </div>
      </div>
      <nav className="p-4">
        <button
          onClick={() => setActiveComponent("dashboard")}
          className={`w-full flex items-center p-2 mb-2 rounded-md ${
            activeComponent === "dashboard"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <span>Dashboard</span>
        </button>
        <button
          onClick={() => setActiveComponent("settings")}
          className={`w-full flex items-center p-2 mb-2 rounded-md ${
            activeComponent === "settings"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <Settings size={18} className="mr-2" />
          <span>Settings</span>
        </button>
        <button
          onClick={() => setActiveComponent("users-management")}
          className={`w-full flex items-center p-2 mb-2 rounded-md ${
            activeComponent === "users-management"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <Settings size={18} className="mr-2" />
          <span>Users</span>
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center p-2 mb-2 rounded-md hover:bg-gray-100"
        >
          <LogOut size={18} className="mr-2" />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
