import React from "react";

const MaterialIcon = ({ children, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{children}</span>
);

const Header: React.FC = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 bg-white dark:bg-gray-800 shrink-0">
      <div className="flex-1">
        <div className="relative max-w-md">
          <MaterialIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"> </MaterialIcon>
          <input
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            type="search"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/50">
          <MaterialIcon>notifications</MaterialIcon>
        </button>
        <img
          alt="User profile"
          className="h-10 w-10 rounded-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4AF_L8cKrfwxHaul1yJs1E8dxRR1f4KSMkHQ0iufIzD-2lqbFdVI07bu03YFZWiOHxiU_X0TuXmP4M1kOhAY8JdKDbpayo4GXBjiuQqxRe3FU3Uwu8Nn6XaoChOgT7lCSKa76S2WhD9up_Sm22Dr3GDYdOpfFuEI2c6l4Kgu7eQHNtRsjId6tqF0Y9ky2tTL4C3qowjMQ-AAed41Wbz8LHENUcqTOhgcGXclEacOqPALBaBJGqDVEcf-SzS_kkOwnVIJJjMbe2Q"
        />
      </div>
    </header>
  );
};

export default Header;
