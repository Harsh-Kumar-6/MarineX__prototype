import React from "react";
import { useNavigate } from "react-router-dom";

interface SidebarItem {
  icon: string;
  label: string;
  active: boolean;
  href: string;
}

interface MaterialIconProps {
  children: React.ReactNode;
  className?: string;
}
 const MaterialIcon: React.FC<MaterialIconProps> = ({ children, className = "" }) => (
      <span className={`material-symbols-outlined ${className}`}>{children}</span>
    );


const Sidebar: React.FC<{ sidebarItems: SidebarItem[] }> = ({ sidebarItems }) => {
  const navigate = useNavigate();

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col">
        <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');
        
        .font-display {
          font-family: 'Public Sans', sans-serif;
        }
      `}</style>
      <div className="flex items-center gap-2 h-16 px-6 border-b border-gray-200 dark:border-gray-700">
        <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L1 21h22L12 2zm0 3.84L19.53 19H4.47L12 5.84z"></path>
          <path d="M11 10h2v6h-2z"></path>
        </svg>
        <h1 className="text-lg font-bold">MarineX</h1>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.href)}
            className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg ${
              item.active
                ? "bg-blue-100 dark:bg-blue-00 text-blue-600 font-semibold"
                : "hover:bg-blue-50 dark:hover:bg-blue-700/50"
            }`}
          >
            <MaterialIcon>{item.icon}</MaterialIcon>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/50">
          <MaterialIcon>tune</MaterialIcon>
          <span>Threshold Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
