import React, { useState } from "react";
import Sidebar from "../../components/sidebar";

interface AppSidebarLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: unknown;
}

const AppSidebarLayout: React.FC<AppSidebarLayoutProps> = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <div className="flex-1 md:ml-64 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <button
            className="md:hidden p-2 rounded-md bg-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Menu
          </button>
          {/* Additional header content can go here */}
        </header>

        {/* Content area */}
        <main className="p-4 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AppSidebarLayout;
