import React from 'react';
import MaterialIcon from './MaterialIcon.tsx';

const Header: React.FC = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 bg-white dark:bg-gray-800 shrink-0">
      <h2 className="text-xl font-bold">Add Hazard Data</h2>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors">
          <MaterialIcon>notifications</MaterialIcon>
        </button>
        <img
          alt="User profile"
          className="h-10 w-10 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
        />
      </div>
    </header>
  );
};

export default Header;
